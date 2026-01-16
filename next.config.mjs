/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Server-side environment variables
  serverExternalPackages: ["mongoose", "bcryptjs", "nodemailer"],

  // Image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "powerfilldrinks.com",
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




  // -------

  //  async redirects() {
  //   return [
  //     {
  //       source: "/about-us",
  //       destination: "/branding",
  //       permanent: true, // 301
  //     },
  //     {
  //       source: "/temp-page",
  //       destination: "/",
  //       permanent: false, // 302
  //     },
  //   ];
  // },


  // ------
};

export default nextConfig;
