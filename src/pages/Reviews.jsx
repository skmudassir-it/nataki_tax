import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Star, Quote, ChevronRight, MessageSquare } from 'lucide-react';

const Reviews = () => {
    const [filter, setFilter] = useState('all');

    const reviews = [
        {
            name: 'Sarah Jenkins',
            company: 'Bloom & Co.',
            role: 'Founder',
            text: 'TaxPro transformed our business compliance. Their team is knowledgeable, responsive, and truly cares about our success. The transition from our previous accountant was seamless.',
            rating: 5,
            type: 'business',
            date: 'Jan 2026'
        },
        {
            name: 'Michael Chen',
            company: 'Private Client',
            role: 'Individual Investor',
            text: "The best tax decision I've made. They saved me thousands in potential penalties and optimized my personal returns perfectly. Highly recommended for complex individual needs.",
            rating: 5,
            type: 'personal',
            date: 'Dec 2025'
        },
        {
            name: 'Emma Rodriguez',
            company: 'Solo Creative',
            role: 'Freelance Designer',
            text: 'As a freelancer, tax season used to be a nightmare. TaxPro made it stress-free and helped me understand exactly what I can deduct.',
            rating: 4.8,
            type: 'personal',
            date: 'Nov 2025'
        },
        {
            name: 'David Thompson',
            company: 'TechFlow Solutions',
            role: 'Operations Director',
            text: "Professional, efficient, and proactive. They don't just file taxes; they provide strategic advice that helps us grow.",
            rating: 5,
            type: 'business',
            date: 'Oct 2025'
        },
        {
            name: 'Lisa Wang',
            company: 'Global Logistics',
            role: 'CFO',
            text: 'Their expertise in international VAT was crucial for our expansion. A truly world-class tax consultancy firm.',
            rating: 5,
            type: 'business',
            date: 'Sept 2025'
        },
        {
            name: 'James Wilson',
            company: 'Wilson Properties',
            role: 'Real Estate Developer',
            text: 'Incredible attention to detail. They identified several optimization opportunities our previous firm had missed.',
            rating: 5,
            type: 'business',
            date: 'Aug 2025'
        }
    ];

    const filteredReviews = filter === 'all' ? reviews : reviews.filter(r => r.type === filter);

    return (
        <div className="bg-white min-h-screen">
            <SEO title="Reviews" description="Read what our clients say about our tax consultancy and advisory services." />
            {/* Header */}
            <section className="bg-slate-50 py-24 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6"
                    >
                        <Star className="h-4 w-4 fill-current" />
                        <span>4.9/5 Average Rating</span>
                    </motion.div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6">Client Success Stories</h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        We take pride in delivering exceptional value to our clients. Here's what they have to say about working with TaxPro.
                    </p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0">
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                        {['all', 'business', 'personal'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${filter === type ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-medium text-slate-500">
                        <span>Powered by</span>
                        <span className="text-primary font-bold">Google Reviews</span>
                        <span className="h-4 w-px bg-slate-300"></span>
                        <span className="text-primary font-bold">Trustpilot</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredReviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-50" />
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-slate-200'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">"{review.text}"</p>
                            <div className="flex items-center space-x-4 mt-auto">
                                <div className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-primary">{review.name}</div>
                                    <div className="text-xs text-slate-500">{review.role}, {review.company}</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{review.date}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">{review.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Leave a Review CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-accent rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-accent/20">
                        <div className="text-center lg:text-left mb-8 lg:mb-0">
                            <h2 className="text-3xl font-extrabold mb-4">Been one of our valued clients?</h2>
                            <p className="text-white/80 font-medium">Your feedback helps us continuously improve our services.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                            <button className="btn bg-white text-accent hover:bg-slate-50 px-8 py-4 flex items-center justify-center">
                                <MessageSquare className="mr-2 h-5 w-5" /> Leave a Review
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
