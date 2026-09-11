"use client";

import { useEffect, useRef } from "react";

const LazyVideo = ({
  src,
  media = null,
  eager = false,
  rootMargin = "800px",
  autoPlay = false,
  ...props
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !src) return;

    const mediaQuery = media ? window.matchMedia(media) : null;

    let loadObserver = null;
    let playObserver = null;
    let cancelled = false;
    let loaded = false;

    const matchesMedia = () => {
      return !mediaQuery || mediaQuery.matches;
    };

    /*
     * -----------------------------------------
     * LOAD VIDEO
     * -----------------------------------------
     */

    const loadVideo = () => {
      if (
        cancelled ||
        loaded ||
        !videoRef.current ||
        !matchesMedia()
      ) {
        return;
      }

      loaded = true;

      videoRef.current.load();
    };

    /*
     * -----------------------------------------
     * PLAY VIDEO
     * -----------------------------------------
     */

    const playVideo = async () => {
      if (
        cancelled ||
        !videoRef.current ||
        !matchesMedia()
      ) {
        return;
      }

      const currentVideo = videoRef.current;

      try {
        /*
         * If video hasn't loaded yet,
         * start loading first.
         */
        if (!loaded) {
          loadVideo();
        }

        /*
         * Wait until browser has enough data
         * to begin playback.
         */
        if (currentVideo.readyState < 3) {
          await new Promise((resolve) => {
            const handleCanPlay = () => {
              currentVideo.removeEventListener(
                "canplay",
                handleCanPlay
              );

              resolve();
            };

            currentVideo.addEventListener(
              "canplay",
              handleCanPlay,
              { once: true }
            );
          });
        }

        if (cancelled || !matchesMedia()) return;

        const playPromise = currentVideo.play();

        if (playPromise?.catch) {
          await playPromise.catch(() => {});
        }
      } catch (error) {
        /*
         * Ignore autoplay/interruption errors.
         * The observer can try again when needed.
         */
      }
    };

    /*
     * -----------------------------------------
     * EAGER VIDEO
     * -----------------------------------------
     *
     * Used for hero / above-the-fold videos.
     */

    if (eager && matchesMedia()) {
      loadVideo();

      if (autoPlay) {
        playVideo();
      }
    }

    /*
     * -----------------------------------------
     * LAZY LOADING
     * -----------------------------------------
     *
     * Start downloading BEFORE the video
     * enters the viewport.
     */

    if (!eager && matchesMedia()) {
      loadObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry?.isIntersecting) return;

          loadVideo();

          loadObserver?.disconnect();
          loadObserver = null;
        },
        {
          rootMargin,
          threshold: 0,
        }
      );

      loadObserver.observe(video);
    }

    /*
     * -----------------------------------------
     * PLAY WHEN ACTUALLY VISIBLE
     * -----------------------------------------
     */

    if (autoPlay && matchesMedia()) {
      playObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry) return;

          if (entry.isIntersecting) {
            playVideo();
          } else {
            /*
             * Pause when video leaves viewport.
             * This saves CPU/battery on mobile.
             */
            video.pause();
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.05,
        }
      );

      playObserver.observe(video);
    }

    /*
     * -----------------------------------------
     * DESKTOP / MOBILE SWITCH
     * -----------------------------------------
     */

    const handleMediaChange = (event) => {
      if (event.matches) {
        /*
         * Matching device became active.
         */

        loaded = false;

        if (eager) {
          loadVideo();

          if (autoPlay) {
            playVideo();
          }
        } else {
          /*
           * Recreate lazy loader.
           */

          if (!loadObserver) {
            loadObserver = new IntersectionObserver(
              (entries) => {
                const entry = entries[0];

                if (!entry?.isIntersecting) return;

                loadVideo();

                loadObserver?.disconnect();
                loadObserver = null;
              },
              {
                rootMargin,
                threshold: 0,
              }
            );

            loadObserver.observe(video);
          }
        }
      } else {
        /*
         * Device no longer matches.
         */

        video.pause();

        if (loadObserver) {
          loadObserver.disconnect();
          loadObserver = null;
        }

        if (playObserver) {
          playObserver.disconnect();
          playObserver = null;
        }
      }
    };

    mediaQuery?.addEventListener?.(
      "change",
      handleMediaChange
    );

    /*
     * -----------------------------------------
     * CLEANUP
     * -----------------------------------------
     */

    return () => {
      cancelled = true;

      loadObserver?.disconnect();
      playObserver?.disconnect();

      mediaQuery?.removeEventListener?.(
        "change",
        handleMediaChange
      );

      video.pause();
    };
  }, [
    src,
    media,
    eager,
    rootMargin,
    autoPlay,
  ]);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="none"
      autoPlay={false}
      {...props}
    />
  );
};

export default LazyVideo;