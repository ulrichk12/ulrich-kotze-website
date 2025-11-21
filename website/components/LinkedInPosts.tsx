import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

// To get embed URLs for your LinkedIn posts:
// 1. Go to your LinkedIn profile: https://www.linkedin.com/in/ulrich-kotze/
// 2. Find a post you want to embed
// 3. Click the three dots (...) in the top right of the post
// 4. Select "Embed this post"
// 5. Copy the URL from the embed code (it will look like: https://www.linkedin.com/embed/feed/update/urn:li:share:...)
// 6. Add it to the LINKEDIN_POST_EMBEDS array below

const LINKEDIN_POST_EMBEDS = [
    // Add your LinkedIn post embed URLs here
    // Example: 'https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890',
    // For now, we'll use placeholder text until you add your actual post URLs
];

export const LinkedInPosts: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPost = () => {
        setCurrentIndex((prev) => (prev + 1) % LINKEDIN_POST_EMBEDS.length);
    };

    const prevPost = () => {
        setCurrentIndex((prev) => (prev - 1 + LINKEDIN_POST_EMBEDS.length) % LINKEDIN_POST_EMBEDS.length);
    };

    // If no posts are configured, show a placeholder
    if (LINKEDIN_POST_EMBEDS.length === 0) {
        return (
            <section id="linkedin-posts" className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
                                Latest Updates
                            </h2>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">LinkedIn Posts</h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Follow my journey and insights on LinkedIn
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-12 border border-slate-100">
                            <div className="text-center space-y-4">
                                <Linkedin className="w-16 h-16 text-indigo-600 mx-auto" />
                                <p className="text-slate-600">
                                    LinkedIn posts will appear here once configured.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/ulrich-kotze/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Linkedin size={20} />
                                    Visit LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        );
    }

    return (
        <section id="linkedin-posts" className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
                            Latest Updates
                        </h2>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">LinkedIn Posts</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Follow my journey and insights on LinkedIn
                        </p>
                    </div>

                    <div className="relative">
                        {/* Carousel Container */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                            <div className="relative" style={{ minHeight: '600px' }}>
                                {/* LinkedIn Embed */}
                                <iframe
                                    src={LINKEDIN_POST_EMBEDS[currentIndex]}
                                    className="w-full h-full min-h-[600px]"
                                    frameBorder="0"
                                    allowFullScreen
                                    title={`LinkedIn Post ${currentIndex + 1}`}
                                />
                            </div>

                            {/* Navigation Controls */}
                            {LINKEDIN_POST_EMBEDS.length > 1 && (
                                <>
                                    <button
                                        onClick={prevPost}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 border border-slate-200"
                                        aria-label="Previous post"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                                    </button>
                                    <button
                                        onClick={nextPost}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 border border-slate-200"
                                        aria-label="Next post"
                                    >
                                        <ChevronRight className="w-6 h-6 text-slate-700" />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {LINKEDIN_POST_EMBEDS.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                                        ? 'bg-indigo-600 w-8'
                                                        : 'bg-slate-300 hover:bg-slate-400'
                                                    }`}
                                                aria-label={`Go to post ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* View Profile Link */}
                        <div className="text-center mt-8">
                            <a
                                href="https://www.linkedin.com/in/ulrich-kotze/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                            >
                                <Linkedin size={20} />
                                View all posts on LinkedIn
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
