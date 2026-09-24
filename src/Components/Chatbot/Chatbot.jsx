"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import "./Chatbot.css";

const CONVERSATION_KEY =
  "dn_chat_conversation_id";

const VISITOR_KEY =
  "dn_chat_visitor_id";

const TAB_KEY =
  "dn_chat_tab_id";

const CHANNEL_NAME =
  "dn_chatbot_channel";

const DEFAULT_MESSAGE = {
  role: "assistant",
  content:
    "Hello 👋, I’m Saloni Sardana from DN Designs. How can I help you today?",
};

export default function Chatbot() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [historyLoading, setHistoryLoading] =
    useState(true);

  const [conversationId, setConversationId] =
    useState(null);

  const [visitorId, setVisitorId] =
    useState(null);

  const [messages, setMessages] =
    useState([DEFAULT_MESSAGE]);

  const messagesContainerRef =
    useRef(null);

  const inputRef =
    useRef(null);

  const channelRef =
    useRef(null);

  // ==========================================
  // TRACK PAGE VISIT
  // ==========================================

  const trackPageVisit = async (
    currentPath
  ) => {
    if (
      !conversationId ||
      !visitorId ||
      !currentPath
    ) {
      return;
    }

    try {
      await fetch(
        "/api/chatbot/track",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            conversationId,
            visitorId,

            path: currentPath,

            title:
              document.title || "",
          }),

          keepalive: true,
        }
      );
    } catch (error) {
      // Tracking failure should never
      // affect the chatbot experience.
      console.error(
        "Page tracking error:",
        error
      );
    }
  };

  // ==========================================
  // INITIALIZE SESSION + LOAD CHAT HISTORY
  // ==========================================

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

    const initializeChat =
      async () => {
        try {
          setHistoryLoading(true);

          // ======================================
          // CREATE / GET TAB ID
          // ======================================

          let storedTabId =
            sessionStorage.getItem(
              TAB_KEY
            );

          if (!storedTabId) {
            storedTabId =
              `tab_${crypto.randomUUID()}`;

            sessionStorage.setItem(
              TAB_KEY,
              storedTabId
            );
          }

          // ======================================
          // CREATE BROADCAST CHANNEL
          // ======================================

          let channel = null;

          if (
            "BroadcastChannel" in
            window
          ) {
            channel =
              new BroadcastChannel(
                CHANNEL_NAME
              );

            channelRef.current =
              channel;
          }

          // ======================================
          // GET EXISTING SESSION IDs
          // ======================================

          let storedConversationId =
            sessionStorage.getItem(
              CONVERSATION_KEY
            );

          let storedVisitorId =
            sessionStorage.getItem(
              VISITOR_KEY
            );

          // ======================================
          // CHECK DUPLICATE TAB
          // ======================================

          let duplicateDetected =
            false;

          if (
            channel &&
            storedConversationId
          ) {
            duplicateDetected =
              await new Promise(
                (resolve) => {
                  let resolved =
                    false;

                  const timeout =
                    setTimeout(
                      () => {
                        if (
                          !resolved
                        ) {
                          resolved =
                            true;

                          resolve(
                            false
                          );
                        }
                      },
                      300
                    );

                  const handleResponse =
                    (event) => {
                      const data =
                        event.data;

                      if (
                        data?.type ===
                          "DN_CHAT_ACTIVE_RESPONSE" &&
                        data?.conversationId ===
                          storedConversationId &&
                        data?.tabId !==
                          storedTabId
                      ) {
                        clearTimeout(
                          timeout
                        );

                        if (
                          !resolved
                        ) {
                          resolved =
                            true;

                          resolve(
                            true
                          );
                        }
                      }
                    };

                  channel.addEventListener(
                    "message",
                    handleResponse
                  );

                  channel.postMessage({
                    type:
                      "DN_CHAT_CHECK_ACTIVE",

                    conversationId:
                      storedConversationId,

                    tabId:
                      storedTabId,
                  });

                  setTimeout(
                    () => {
                      channel.removeEventListener(
                        "message",
                        handleResponse
                      );
                    },
                    350
                  );
                }
              );
          }

          // ======================================
          // DUPLICATE TAB
          // ======================================

          if (
            duplicateDetected
          ) {
            storedConversationId =
              `chat_${crypto.randomUUID()}`;

            storedVisitorId =
              `visitor_${crypto.randomUUID()}`;

            sessionStorage.setItem(
              CONVERSATION_KEY,
              storedConversationId
            );

            sessionStorage.setItem(
              VISITOR_KEY,
              storedVisitorId
            );
          }

          // ======================================
          // CREATE VISITOR ID
          // ======================================

          if (!storedVisitorId) {
            storedVisitorId =
              `visitor_${crypto.randomUUID()}`;

            sessionStorage.setItem(
              VISITOR_KEY,
              storedVisitorId
            );
          }

          // ======================================
          // CREATE CONVERSATION ID
          // ======================================

          if (
            !storedConversationId
          ) {
            storedConversationId =
              `chat_${crypto.randomUUID()}`;

            sessionStorage.setItem(
              CONVERSATION_KEY,
              storedConversationId
            );
          }

          // ======================================
          // ANNOUNCE ACTIVE TAB
          // ======================================

          if (channel) {
            channel.postMessage({
              type:
                "DN_CHAT_ACTIVE",

              conversationId:
                storedConversationId,

              tabId:
                storedTabId,
            });
          }

          // ======================================
          // LISTEN FOR OTHER TABS
          // ======================================

          if (channel) {
            channel.onmessage =
              (event) => {
                const data =
                  event.data;

                if (
                  data?.type ===
                    "DN_CHAT_CHECK_ACTIVE" &&
                  data?.conversationId ===
                    storedConversationId &&
                  data?.tabId !==
                    storedTabId
                ) {
                  channel.postMessage({
                    type:
                      "DN_CHAT_ACTIVE_RESPONSE",

                    conversationId:
                      storedConversationId,

                    tabId:
                      storedTabId,
                  });
                }
              };
          }

          // ======================================
          // SET STATE
          // ======================================

          setVisitorId(
            storedVisitorId
          );

          setConversationId(
            storedConversationId
          );

          // ======================================
          // LOAD EXISTING CONVERSATION
          // ======================================

          const response =
            await fetch(
              `/api/chatbot?conversationId=${encodeURIComponent(
                storedConversationId
              )}`,
              {
                method: "GET",
                cache: "no-store",
              }
            );

          const data =
            await response.json();

          if (
            response.ok &&
            data.success &&
            data.exists &&
            data.data?.messages
              ?.length
          ) {
            const restoredMessages =
              data.data.messages.map(
                (message) => ({
                  role:
                    message.role,

                  content:
                    message.content,
                })
              );

            setMessages(
              restoredMessages
            );
          } else {
            setMessages([
              DEFAULT_MESSAGE,
            ]);
          }
        } catch (error) {
          console.error(
            "Load Chat History Error:",
            error
          );

          setMessages([
            DEFAULT_MESSAGE,
          ]);
        } finally {
          setHistoryLoading(false);
        }
      };

    initializeChat();

    // ======================================
    // CLEANUP
    // ======================================

    return () => {
      if (
        channelRef.current
      ) {
        channelRef.current.close();

        channelRef.current =
          null;
      }
    };
  }, []);

  // ==========================================
  // TRACK CURRENT PAGE AFTER CHAT EXISTS
  // ==========================================

  useEffect(() => {
    /*
     * We only track after a real conversation
     * has started.
     *
     * DEFAULT_MESSAGE alone does not count.
     */
    const conversationStarted =
      messages.some(
        (message) =>
          message.role === "user"
      );

    if (
      historyLoading ||
      !conversationId ||
      !visitorId ||
      !pathname ||
      !conversationStarted
    ) {
      return;
    }

    trackPageVisit(
      pathname
    );
  }, [
    pathname,
    conversationId,
    visitorId,
    historyLoading,
    messages,
  ]);

  // ==========================================
  // AUTO SCROLL
  // ==========================================

  useEffect(() => {
    const container =
      messagesContainerRef.current;

    if (!container) {
      return;
    }

    requestAnimationFrame(() => {
      container.scrollTop =
        container.scrollHeight;
    });
  }, [
    messages,
    loading,
    historyLoading,
  ]);

  // ==========================================
  // INPUT FOCUS WHEN OPEN
  // ==========================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer =
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);

    return () =>
      clearTimeout(timer);
  }, [isOpen]);

  // ==========================================
  // MOUSE WHEEL + TOUCH SCROLL
  // ==========================================

  useEffect(() => {
    const container =
      messagesContainerRef.current;

    if (!container) {
      return;
    }

    const handleWheel = (
      event
    ) => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = container;

      const delta =
        event.deltaY;

      const atTop =
        scrollTop <= 0;

      const atBottom =
        scrollTop +
          clientHeight >=
        scrollHeight - 1;

      if (
        (delta > 0 &&
          !atBottom) ||
        (delta < 0 &&
          !atTop)
      ) {
        event.preventDefault();

        event.stopPropagation();

        container.scrollTop +=
          delta;
      }
    };

    let touchStartY = 0;

    const handleTouchStart =
      (event) => {
        touchStartY =
          event.touches[0]
            .clientY;
      };

    const handleTouchMove =
      (event) => {
        const currentY =
          event.touches[0]
            .clientY;

        const delta =
          touchStartY -
          currentY;

        const {
          scrollTop,
          scrollHeight,
          clientHeight,
        } = container;

        const atTop =
          scrollTop <= 0;

        const atBottom =
          scrollTop +
            clientHeight >=
          scrollHeight - 1;

        if (
          (delta > 0 &&
            !atBottom) ||
          (delta < 0 &&
            !atTop)
        ) {
          event.preventDefault();

          event.stopPropagation();

          container.scrollTop +=
            delta;

          touchStartY =
            currentY;
        }
      };

    container.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    container.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: false,
      }
    );

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel
      );

      container.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      container.removeEventListener(
        "touchmove",
        handleTouchMove
      );
    };
  }, [isOpen]);

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  const sendMessage =
    async () => {
      const userMessage =
        input.trim();

      if (
        !userMessage ||
        loading ||
        historyLoading
      ) {
        return;
      }

      if (
        !conversationId ||
        !visitorId
      ) {
        console.error(
          "Chat session IDs are not ready yet."
        );

        return;
      }

      const newUserMessage =
        {
          role: "user",

          content:
            userMessage,

          createdAt:
            new Date().toISOString(),
        };

      const updatedMessages =
        [
          ...messages,
          newUserMessage,
        ];

      setMessages(
        updatedMessages
      );

      setInput("");

      setLoading(true);

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      try {
        const response =
          await fetch(
            "/api/chatbot",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                messages:
                  updatedMessages,

                conversationId,

                visitorId,
              }),
            }
          );

        const data =
          await response.json();

        // ======================================
        // RATE LIMIT
        // ======================================

        if (
          response.status === 429
        ) {
          throw new Error(
            data.error ||
              "The chatbot is temporarily busy. Please try again in a little while."
          );
        }

        // ======================================
        // OTHER ERRORS
        // ======================================

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.error ||
              "Something went wrong while contacting the AI."
          );
        }

        // ======================================
        // ADD AI RESPONSE
        // ======================================

        setMessages((prev) => [
          ...prev,

          {
            role:
              "assistant",

            content:
              data.message,

            createdAt:
              new Date().toISOString(),
          },
        ]);

        /*
         * IMPORTANT:
         *
         * After the first successful chatbot
         * response, track the page where the
         * conversation started.
         *
         * This is needed because before the first
         * message there is no MongoDB conversation.
         */

        await trackPageVisit(
          pathname
        );
      } catch (error) {
        console.error(
          "Chatbot Error:",
          error
        );

        setMessages((prev) => [
          ...prev,

          {
            role:
              "assistant",

            content:
              error?.message ||
              "Sorry, something went wrong. Please try again.",
          },
        ]);
      } finally {
        setLoading(false);

        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    };

  // ==========================================
  // ENTER KEY
  // ==========================================

  const handleKeyDown =
    (event) => {
      if (
        event.key === "Enter" &&
        !event.shiftKey
      ) {
        event.preventDefault();

        sendMessage();
      }
    };

  // ==========================================
  // RENDER MESSAGE CONTENT
  // ==========================================

  const renderMessageContent = (content) => {
    if (typeof content !== "string") {
      return null;
    }

    /*
     * Supports:
     * 1. Markdown links:
     *    [Contact Us](https://dndesigns.co.in/contact-us)
     *
     * 2. Normal URLs:
     *    https://dndesigns.co.in/contact-us
     *
     * 3. www URLs:
     *    www.dndesigns.co.in
     *
     * Everything else remains normal text.
     */

    const linkPattern =
      /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s<]+)|(www\.[^\s<]+)|(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)|(\+?\d[\d\s().-]{7,}\d)/gi;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          value: content.slice(lastIndex, match.index),
        });
      }

      // Markdown link
      if (match[1]) {
        parts.push({
          type: "link",
          value: match[2],
          href: match[3],
        });
      }
      // Normal https/http URL
      else if (match[4]) {
        let url = match[4];

        // Remove punctuation that commonly appears immediately after a URL.
        let trailing = "";

        while (/[.,!?;:)\]}>'"]$/.test(url)) {
          trailing = url.slice(-1) + trailing;
          url = url.slice(0, -1);
        }

        parts.push({
          type: "link",
          value: url,
          href: url,
        });

        if (trailing) {
          parts.push({
            type: "text",
            value: trailing,
          });
        }
      }
      // www URL
      else if (match[5]) {
        let url = match[5];
        let trailing = "";

        while (/[.,!?;:)\]}>'"]$/.test(url)) {
          trailing = url.slice(-1) + trailing;
          url = url.slice(0, -1);
        }

        parts.push({
          type: "link",
          value: url,
          href: `https://${url}`,
        });

        if (trailing) {
          parts.push({
            type: "text",
            value: trailing,
          });
        }
      }
      // Email address
      else if (match[6]) {
        parts.push({
          type: "link",
          value: match[6],
          href: `mailto:${match[6]}`,
          linkType: "email",
        });
      }
      // Phone number
      else if (match[7]) {
        const phoneDisplay = match[7].trim();
        const phoneHref = phoneDisplay.replace(/[^\d+]/g, "");

        parts.push({
          type: "link",
          value: phoneDisplay,
          href: `tel:${phoneHref}`,
          linkType: "phone",
        });
      }

      lastIndex = linkPattern.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push({
        type: "text",
        value: content.slice(lastIndex),
      });
    }

    if (parts.length === 0) {
      parts.push({
        type: "text",
        value: content,
      });
    }

    return parts.map((part, index) => {
      if (part.type === "link") {
        return (
          <a
            key={`message-link-${index}`}
            href={part.href}
            target="_self"
            rel="noopener noreferrer"
            className={`chatbot-message-link ${
              part.linkType === "email"
                ? "chatbot-email-link"
                : ""
            } ${
              part.linkType === "phone"
                ? "chatbot-phone-link"
                : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {part.value}
          </a>
        );
      }

      /*
       * Preserve line breaks from Gemini responses.
       * Splitting here keeps the original message text safe and avoids
       * injecting HTML into the chatbot.
       */
      const textParts = part.value.split("\n");

      return textParts.map((textPart, lineIndex) => (
        <span key={`message-text-${index}-${lineIndex}`}>
          {textPart}
          {lineIndex < textParts.length - 1 && <br />}
        </span>
      ));
    });
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <>
      {/* ====================================
          FLOATING BUTTON
      ==================================== */}

      {!isOpen && (
        
       <img src="https://dndesigns.co.in/uploads/avatars/1b8d1136-c722-4d06-8fbe-3659ce5fd563.png" className="img-fluid chatbot-button"
          onClick={() =>
            setIsOpen(true)
          }
          aria-label="Open chatbot"></img>
      
      )}

      {/* ====================================
          CHAT WINDOW
      ==================================== */}

      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}

          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-title">
                DN Designs
              </div>

              <div className="chatbot-status">
                <span className="status-dot"></span>
                Online
              </div>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}

          <div
            ref={
              messagesContainerRef
            }
            className="chatbot-messages"
          >
            {historyLoading ? (
              <div className="chat-message assistant-message">
                Loading previous chat...
              </div>
            ) : (
              <>
                {messages.map(
                  (
                    message,
                    index
                  ) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`chat-message ${
                        message.role ===
                        "user"
                          ? "user-message"
                          : "assistant-message"
                      }`}
                    >
                      {renderMessageContent(
                        message.content
                      )}
                    </div>
                  )
                )}

                {loading && (
                  <div className="chat-message assistant-message typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input */}

          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              placeholder={
                historyLoading
                  ? "Loading chat..."
                  : loading
                  ? "typing..."
                  : "Type your message..."
              }
              value={input}
              onChange={(event) =>
                setInput(
                  event.target.value
                )
              }
              onKeyDown={
                handleKeyDown
              }
              autoComplete="off"
              disabled={
                historyLoading
              }
            />

            <button
              type="button"
              className="chatbot-send"
              onClick={
                sendMessage
              }
              disabled={
                !input.trim() ||
                loading ||
                historyLoading
              }
              aria-label="Send message"
              title="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}