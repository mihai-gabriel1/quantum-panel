import React, { useState } from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import dashHome from "../assets/dashhome.png";
import dashMetrics from "../assets/metrics.png";
import dashEvents from "../assets/events.png";

const ShowcaseCard = ({ item, isHovered, onHover }) => {
    const content = {
        1: {
            title: "Analytics Command Center",
            description: "Transform your data into actionable insights with interactive charts, real-time KPIs, and customizable dashboards that adapt to your needs.",
            features: ["Interactive Data Visualization", "Custom KPI Tracking", "Multi-device Support"],
            imageSrc: dashHome
        },
        2: {
            title: "Real-time System Monitor",
            description: "Keep your finger on the pulse with live monitoring dashboards, instant alerts, and comprehensive system health tracking.",
            features: ["Live Performance Metrics", "Automated Alerts", "System Health Dashboard"],
            imageSrc: dashMetrics
        },
        3: {
            title: "Smart Reporting Hub",
            description: "Generate comprehensive reports powered by AI insights, with automated scheduling and smart data analysis.",
            features: ["AI-Powered Insights", "Custom Report Builder", "Automated Scheduling"],
            imageSrc: dashEvents
        },
    };

    const getLink = () => {
        switch (item) {
            case 1:
                return "/dashboard";
            case 2:
                return "/analytics";
            case 3:
                return "/system-events";
            default:
                return "/";
        }
    };

    return (
        <div
            className="group relative flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-indigo-500/30"
            onMouseEnter={() => onHover(item)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-50 group-hover:opacity-30 transition-opacity z-10" />

                {/* Image */}
                <img
                    src={content[item].imageSrc}
                    alt={content[item].title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 min-h-[286px]"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 relative flex flex-col justify-between h-full">
                {/* Title */}
                <div className="wrapper flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    {content[item].title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">
                    {content[item].description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                    {content[item].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                            {feature}
                        </div>
                    ))}
                </div>
                </div>

                {/* Call to Action */}
                <Link to={getLink()} className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group">
                    <span>Explore Feature</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-2xl transition-colors pointer-events-none" />
        </div>
    );
};

const ShowcaseSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div id="showcase" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0, transparent_100%)]" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        <span>Dashboard Features</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Powerful Tools at Your Fingertips
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Experience a new level of data visualization and analysis with our comprehensive dashboard solutions
                    </p>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <ShowcaseCard
                            key={item}
                            item={item}
                            isHovered={hoveredCard === item}
                            onHover={setHoveredCard}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowcaseSection;