import React from 'react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface ProjectPageProps {
    title: string;
    year: string;
    tags: string[];
    overview: string;
    challenge: {
        title: string;
        content: string[];
    };
    solution: {
        title: string;
        content: string[];
    };
    impact: {
        title: string;
        content: string[];
    };
    technologies?: string[];
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
    title,
    year,
    tags,
    overview,
    challenge,
    solution,
    impact,
    technologies,
}) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="bg-slate-900 text-white py-4 sticky top-0 z-50 border-b border-slate-700">
                <div className="max-w-4xl mx-auto px-6">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600">
                            <Calendar size={14} />
                            {year}
                        </span>
                        <span className="text-sm font-bold text-blue-400 bg-blue-400/10 border border-blue-400/30 px-3 py-1.5 rounded-full">
                            Project Story
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">{overview}</p>

                    <div className="flex flex-wrap gap-2 mt-8">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600"
                            >
                                <Tag size={14} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
                {/* Challenge Section */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{challenge.title}</h2>
                    <div className="prose prose-lg max-w-none">
                        {challenge.content.map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Solution Section */}
                <section className="bg-slate-50 -mx-6 px-6 py-12 md:px-12 md:py-16 rounded-2xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{solution.title}</h2>
                    <div className="prose prose-lg max-w-none">
                        {solution.content.map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{impact.title}</h2>
                    <div className="prose prose-lg max-w-none">
                        {impact.content.map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Technologies Section */}
                {technologies && technologies.length > 0 && (
                    <section className="border-t border-slate-200 pt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Technologies & Tools</h2>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg border border-indigo-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Footer CTA */}
            <div className="bg-slate-900 text-white py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors"
                    >
                        <ArrowLeft size={20} />
                        View More Projects
                    </a>
                </div>
            </div>
        </div>
    );
};
