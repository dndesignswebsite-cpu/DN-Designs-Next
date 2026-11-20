"use client";

import React, { useState } from "react";
import "./SwotTabSectionBrandAudit.css";

const SwotTabSectionBrandAudit = ({tabs}) => {
    const [activeTab, setActiveTab] = useState("first_tab");

    // const tabs = [
    //     {
    //         id: "Strength",
    //         title: "Strengths",
    //         // watermark: "S",
    //         heading: "Strengths",
    //         points: [
    //             "Handcrafted positioning is genuinely hard to copy. It’s not just a marketing line. Every pair is hand-lasted, which most mass sneaker brands simply can't claim.",

    //             "Cultural storytelling is built into the product itself (Phulkari-inspired patterns, a Victory Blue tribute to India's 1948 Olympic gold, a Royal Enfield collab) rather than bolted on later as a campaign.",

    //             "Strong credibility loop between founders, Shark Tank exposure, and investors who've already built other successful Indian D2C brands (Bounce, Yogabar, Jar, Renee Cosmetics).",
    //         ],
    //     },

    //     {
    //         id: "Weaknesses",
    //         title: "Weaknesses",
    //         // watermark: "W",
    //         heading: "Weaknesses",
    //         points: [
    //             "The retail footprint is still thin. Five physical stores nationally isn't enough to build the try-before-you-buy trust sneakers usually need.",

    //             "Premium handcrafted pricing puts the brand above where most of India's sneaker-buying demographic actually spends.",

    //             "Hand-lasted production and multi-week dispatch windows on some drops cap how fast they can scale without diluting the handmade promise.",
    //         ],
    //     },

    //     {
    //         id: "Opportunities",
    //         title: "Opportunities",
    //         // watermark: "O",
    //         heading: "Opportunities",
    //         points: [
    //             "Global appetite for 'Made in India' storytelling is genuinely rising, and international expansion (US, UK) is already on their radar.",

    //             "The collab model (Royal Enfield, independent designers like Lead-A) is a proven lever they can keep pulling with other culturally resonant Indian names.",

    //             "The category still has room for a brand that owns 'premium Indian sneaker' the way Neeman's owns 'sustainable everyday shoe'.",
    //         ],
    //     },

    //     {
    //         id: "Threads",
    //         title: "Threats",
    //         // watermark: "T",
    //         heading: "Threats",
    //         points: [
    //             "Neeman's and other funded D2C sneaker brands are chasing the same wallet, with more retail scale already in place.",

    //             "Status buying in Indian sneaker culture still skews toward Nike, Adidas, and New Balance. Cultural storytelling has to work against that gravity, not just alongside it.",

    //             "Scaling handcrafted production without a factory-line model is a real operational ceiling, not just a brand narrative to manage.",
    //         ],
    //     },
    // ];

    const activeTabData = tabs.find((tab) => tab.id === activeTab);

    return (
        <section className="swot-tab-section">
            <div className="swot-tab-wrapper">

                {/* Tabs */}
                <div className="swot-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`swot-tab-button ${
                                activeTab === tab.id ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="swot-tab-content">
                    <div className="swot-tab-panel active">

                        {/* Watermark Letter */}
                        {/* <div className="swot-tab-watermark">
                            {activeTabData.watermark}
                        </div> */}

                        <div className="swot-tab-panel-inner">
                            <h3 className="swot-tab-content-head">
                                {activeTabData.heading}
                            </h3>

                            <ul className="swot-tab-content-list">
                                {activeTabData.points.map((point, index) => (
                                    <li key={index}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SwotTabSectionBrandAudit;