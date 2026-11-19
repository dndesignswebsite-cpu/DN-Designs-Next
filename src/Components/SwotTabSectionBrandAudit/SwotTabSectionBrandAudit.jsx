"use client";

import React, { useState } from "react";
import "./SwotTabSectionBrandAudit.css";

const SwotTabSectionBrandAudit = () => {
    const [activeTab, setActiveTab] = useState("Strength");

    const tabs = [
        {
            id: "Strength",
            title: "Strengths (S)",
            heading: "London",
            content: "London is the capital city of England.",
        },
        {
            id: "Weaknesses",
            title: "Weaknesses (W)",
            heading: "Paris",
            content: "Paris is the capital of France.",
        },
        {
            id: "Opportunities",
            title: "Opportunities (O)",
            heading: "Tokyo",
            content: "Tokyo is the capital of Japan.",
        },
        {
            id: "Threads",
            title: "Threads (T)",
            heading: "Tokyo",
            content: "Tokyo is the capital of Japan.",
        },
    ];

    return (
        <section className="swot-tab-section">
            <div className="swot-tab-wrapper">

                {/* Tabs */}
                <div className="swot-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`swot-tab-button ${
                                activeTab === tab.id ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="swot-tab-content">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`swot-tab-panel ${
                                activeTab === tab.id ? "active" : ""
                            }`}
                        >
                            <h3 className="swot-tab-content-head">{tab.heading}</h3>
                            <p>{tab.content}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SwotTabSectionBrandAudit;