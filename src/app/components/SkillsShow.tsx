"use client";

import React from "react";
import { Badge } from "@/components/ui/badge"; // If using ShadCN Badge
import { motion } from "framer-motion"; // optional for micro animation

// Skill groups
const skills = {
    Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    Backend: ["Node.js", "Express.js", "MongoDB"],
    Tools: ["Git", "VS Code", "Postman"],
};

const SkillsShow: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
                    Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {Object.entries(skills).map(([group, list]) => (
                        <div key={group} className="space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                {group}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {list.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="cursor-default px-3 py-1 hover:shadow-md transition"
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsShow;