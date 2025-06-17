import { MetadataRoute } from "next";

/**
 * This function generates a robots.txt file for the Next.js application.
 * It defines rules for different user agents, allowing or disallowing access
 * to specific paths based on the user agent.
 *
 * @returns {MetadataRoute.Robots} The robots.txt configuration.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
        {
            userAgent: "Googlebot",
            // Allow Googlebot to access everything
            allow: "/",
            disallow: ["/private"],
        },
        {
            userAgent: "Bingbot",
            // Allow Bingbot to access everything except /private
            allow: "/",
            disallow: ["/private", "/subpage1"],
        },
        {
            userAgent: "*",
            // Allow all other user agents to access everything
            allow: "/",
            disallow: ["/private", "/temp"],
        },
        {
            userAgent: "BadBot",
            // Disallow BadBot from accessing the site
            disallow: ["/"],
        },
    ],
        sitemap: "https://example.com/sitemap.xml",
    };
}