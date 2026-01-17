/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Server-side environment variables
  serverExternalPackages: ["mongoose", "bcryptjs", "nodemailer"],

  // Image domains for Cloudinary
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.dndesigns.co.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "powerfilldrinks.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.powerfilldrinks.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
    ],
  },

  // Disable body parser for file uploads (handled by formData)
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },





   async redirects() {
    return [
      {
        //1
        source: "/brand-logo-design",
        destination: "/logo-designing",
        permanent: true, // 301
      },
      {
        //2
        source: "/food-packaging-design-agency-in-noida",
        destination: "/",
        permanent: true, // 301
      },
      {
        //3
        source: "/catalogue-design-agency-in-noida",
        destination: "/catalogue-designing",
        permanent: true, // 301
      },

     {
        //4
        source: "/catalogue-design-agency-in-panipat",
        destination: "/catalogue-designing",
        permanent: true, // 301
      },
      {
        //5
        source: "/catalogue-design-agency-in-chandigarh",
        destination: "/catalogue-designing",
        permanent: true, // 301
      },
      {
        //6
        source: "/catalogue-design-agency-in-faridabad",
        destination: "/catalogue-designing",
        permanent: true, // 301
      },
      {
        //7
        source: "/food-packaging-design-agency-in-noida",
        destination: "/",
        permanent: true, // 301
      },
      {
        //8
        source: "/web-designing-agency-in-noida",
        destination: "/web-designing-services-in-india",
        permanent: true, // 301
      },
       {
        //9
        source: "/website-designing-agency-in-panipat",
        destination: "/web-designing-services-in-india",
        permanent: true, // 301
      },
       {
        //10
        source: "/creative-branding-agency-in-noida",
        destination: "/branding",
        permanent: true, // 301
      },
      {
        //11
        source: "/creative-branding-agency-in-sonipat",
        destination: "/branding",
        permanent: true, // 301
      },
      {
        //12
        source: "/creative-branding-agency-in-panipat",
        destination: "/branding",
        permanent: true, // 301
      },
      {
        //13
        source: "/creative-designing-agency-in-ghaziabad/",
        destination: "/",
        permanent: true, // 301
      },
      {
        //14
        source: "/catalogue-design-agency-in-sonipat",
        destination: "/catalogue-designing",
        permanent: true, // 301
      },
      {
        //15
        source: "/finding-the-right-packaging-design-agency-in-gujarat",
        destination: "/blog/finding-the-right-packaging-design-agency-in-gujarat",
        permanent: true, // 301
      },
      {
        //16
        source: "/whats-in-store-while-working-together-with-a-creative-design-agency-in-noida/",
        destination: "/blog/creative-design-agency-in-noida",
        permanent: true, // 301
      },
      {
        //17
        source: "/how-a-company-used-video-to-increase-brand-awareness-by-20",
        destination: "/blog/how-a-company-used-video-to-increase-brand-awareness-by-20",
        permanent: true, // 301
      },
      {
        //18
        source: "/finding-the-right-packaging-design-agency-in-gujarat",
        destination: "/blog/packaging-design-agency-gujarat",
        permanent: true, // 301
      },
      {
        //19
        source: "/how-a-company-used-creative-design-to-rebrand-itself",
        destination: "/blog/how-a-company-used-creative-design-to-rebrand-itself",
        permanent: true, // 301
      },
      {
        //20
        source: "/how-a-food-labels-design-helped-a-company-build-brand-loyalty",
        destination: "/blog/food-label-design-brand-loyalty",
        permanent: true, // 301
      },
      {
        //21
        source: "/the-role-of-catalogues-in-e-commerce-success-insights-from-design-experts",
        destination: "/blog/catalogues-ecommerce-success-design-insights",
        permanent: true, // 301
      },
      {
        //22
        source: "/high-resolution-photography-in-advertising-making-your-brand-stand-out",
        destination: "/blog/high-resolution-photography-in-advertising-making-your-brand-stand-out",
        permanent: true, // 301
      },
      {
        //23
        source: "/how-to-choose-the-right-packet-design-company",
        destination: "/blog/how-to-choose-the-right-packet-design-company",
        permanent: true, // 301
      },
      {
        //24
        source: "/how-to-use-fluent-packaging-design-to-launch-a-new-product",
        destination: "/blog/how-to-use-fluent-packaging-design-to-launch-a-new-product",
        permanent: true, // 301
      },
      {
        //25
        source: "/the-impact-of-social-media-integration-on-website-engagement",
        destination: "/blog/the-impact-of-social-media-integration-on-website-engagement",
        permanent: true, // 301
      },
      {
        //26
        source: "/web-development-for-startups-building-a-strong-online-presence",
        destination: "/blog/web-development-for-startups-building-a-strong-online-presence",
        permanent: true, // 301
      },
      {
        //27
        source: "/e-commerce-website-development-key-features-for-online-retail-success",
        destination: "/blog/e-commerce-website-development-key-features-for-online-retail-success",
        permanent: true, // 301
      },
      {
        //28
        source: "/guide-for-startups-how-to-choose-the-best-web-designing-company",
        destination: "/blog/guide-for-startups-how-to-choose-the-best-web-designing-company",
        permanent: true, // 301
      },
      {
        //29
        source: "/improve-load-speed-seo-agency-in-delhi-ncrs-guide",
        destination: "/blog/improve-load-speed-seo-agency-in-delhi-ncrs-guide",
        permanent: true, // 301
      },
      {
        //30
        source: "/nurturing-new-ideas-and-concepts-for-product-designing-agency",
        destination: "/blog/nurturing-new-ideas-and-concepts-for-product-designing-agency",
        permanent: true, // 301
      },
      {
        //31
        source: "/packaging-power-guide-consumer-behavior-through-design",
        destination: "/blog/packaging-power-guide-consumer-behavior-through-design",
        permanent: true, // 301
      },
      {
        //32
        source: "/the-role-of-packaging-designing-agency-in-healthcare-branding",
        destination: "/blog/the-role-of-packaging-designing-agency-in-healthcare-branding",
        permanent: true, // 301
      },
      {
        //33
        source: "/techniques-for-stunning-product-photography-a-how-to-guide",
        destination: "/blog/techniques-for-stunning-product-photography-a-how-to-guide",
        permanent: true, // 301
      },
      {
        //34
        source: "/packaging-design-exciting-tech-eco-friendly-future",
        destination: "/blog/packaging-design-exciting-tech-eco-friendly-future",
        permanent: true, // 301
      },
      {
        //35
        source: "/designing-with-visual-impact-the-art-of-visual-communication",
        destination: "/blog/designing-with-visual-impact-the-art-of-visual-communication",
        permanent: true, // 301
      },
      {
        //36
        source: "/creative-designing-agency-transforming-ideas-into-reality",
        destination: "/blog/creative-designing-agency-transforming-ideas-into-reality",
        permanent: true, // 301
      },
      {
        //37
        source: "/high-quality-photography",
        destination: "/blog/high-quality-photography",
        permanent: true, // 301
      },
      {
        //38
        source: "/what-is-seo-guide-for-beginners",
        destination: "/blog/what-is-seo-guide-for-beginners",
        permanent: true, // 301
      },
      {
        //39
        source: "/what-is-product-photography",
        destination: "/blog/what-is-product-photography",
        permanent: true, // 301
      },
      {
        //40
        source: "/strategies-for-growth-and-expansion-in-digital-marketing-industry",
        destination: "/blog/strategies-for-growth-and-expansion-in-digital-marketing-industry",
        permanent: true, // 301
      },
      {
        //41
        source: "/key-factors-to-consider-when-choosing-a-web-design-agency",
        destination: "/blog/key-factors-to-consider-when-choosing-a-web-design-agency",
        permanent: true, // 301
      },
      {
        //42
        source: "/sweet-box-design-trends-to-watch-out-for-in-2023",
        destination: "/blog/sweet-box-design-trends",
        permanent: true, // 301
      },
      {
        //43
        source: "/the-role-of-visual-communication-design-in-building-strong-brand",
        destination: "/blog/the-role-of-visual-communication-design-in-building-strong-brand",
        permanent: true, // 301
      },
      {
        //44
        source: "/packaging-design-for-luxury-brands-creating-a-premium-and-exquisite-look",
        destination: "/blog/luxury-packaging-design",
        permanent: true, // 301
      },
      {
        //45
        source: "/why-a-rebranding-is-important-for-our-business-rebranding-definition",
        destination: "/blog/why-a-rebranding-is-important-for-our-business-rebranding-definition",
        permanent: true, // 301
      },
      {
        //46
        source: "/food-package-design-companies-for-e-commerce-food",
        destination: "/blog/food-package-design-companies-for-e-commerce-food",
        permanent: true, // 301
      },
      {
        //47
        source: "/collaborating-with-a-design-agency-in-noida-what-to-expect",
        destination: "/blog/collaborating-with-a-design-agency-in-noida-what-to-expect",
        permanent: true, // 301
      },
      {
        //48
        source: "/branding-agencies-in-ncr",
        destination: "/blog/branding-agencies-in-ncr",
        permanent: true, // 301
      },
      {
        //49
        source: "/category/social-media",
        destination: "/blog/category/social-media",
        permanent: true, // 301
      },
      {
        //50
        source: "/category/branding-agency/",
        destination: "/blog/category/branding-agency/",
        permanent: true, // 301
      },
      




      // {
      //   source: "/temp-page",
      //   destination: "/",
      //   permanent: false, // 302
      // },
    ];
  },


};

export default nextConfig;
