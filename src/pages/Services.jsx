import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
    User,
    Briefcase,
    Building2,
    Receipt,
    Clock8,
    Lightbulb,
    ShieldAlert,
    Globe
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Personal Tax Returns',
            slug: 'personal-tax-returns',
            icon: <User className="h-6 w-6" />,
            desc: 'Expert preparation and optimization for individuals. We ensure all deductions and credits are captured.',
            features: ['Deduction Maximization', 'Electronic Filing', 'Year-round Support']
        },
        {
            title: 'Small Business Compliance',
            slug: 'small-business-compliance',
            icon: <Briefcase className="h-6 w-6" />,
            desc: 'Tailored tax services for sole proprietors and partnerships to keep your business records audit-ready.',
            features: ['Sole Proprietor Returns', 'Partnership Tax', 'Estimated Payments']
        },
        {
            title: 'Corporate Advisory',
            slug: 'corporate-advisory',
            icon: <Building2 className="h-6 w-6" />,
            desc: 'Sophisticated tax planning and compliance for LLCs and Corporations (Inc, Ltd).',
            features: ['Entity Choice Advisory', 'Board Compliance', 'Corporate Filings']
        },
        {
            title: 'VAT & Sales Tax',
            slug: 'vat-sales-tax',
            icon: <Receipt className="h-6 w-6" />,
            desc: 'Manage multi-state or international consumption taxes without the headache.',
            features: ['NEXUS Determination', 'Monthly Filing', 'Audit Defense']
        },
        {
            title: 'Payroll Tax Support',
            slug: 'payroll-tax-support',
            icon: <Clock8 className="h-6 w-6" />,
            desc: 'Ensuring your employees are paid correctly and all statutory tax obligations are met.',
            features: ['Statutory Reporting', 'W-2/1099 Issuance', 'State/Local Tax']
        },
        {
            title: 'Tax Planning',
            slug: 'tax-planning',
            icon: <Lightbulb className="h-6 w-6" />,
            desc: 'Proactive year-round strategies to reduce your future tax burden.',
            features: ['Projection Services', 'Retirement Planning', 'Investment Tax Advice']
        },
        {
            title: 'Audit Representation',
            slug: 'audit-representation',
            icon: <ShieldAlert className="h-6 w-6" />,
            desc: 'We stand by you during tax audits, handling all communications with tax authorities.',
            features: ['Audit Correspondence', 'In-person Representation', 'Appeal Support']
        },
        {
            title: 'International Tax',
            slug: 'international-tax',
            icon: <Globe className="h-6 w-6" />,
            desc: 'Specialized advice for cross-border income, foreign assets, and expatriate taxation.',
            features: ['FBAR/FATCA Filing', 'Foreign Tax Credits', 'Expat Planning']
        }
    ];

    return (
        <div className="bg-white">
            <SEO title="Our Services" description="Explore our tax services including personal tax, business compliance, VAT/GST, and corporate advisory." />
            {/* Intro Header */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-extrabold mb-6"
                    >
                        Specialized Tax Expertise <br />
                        <span className="text-accent underline decoration-white/20 underline-offset-8">For Every Need.</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        From individual tax optimization to complex corporate advisory, our team provides the clarity and expertise you need to navigate the tax landscape with confidence.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-slate-600 text-sm mb-6 flex-grow">{service.desc}</p>

                            <ul className="mb-8 space-y-2">
                                {service.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs font-semibold text-primary/70 flex items-center">
                                        <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={`/services/${service.slug}`}
                                className="btn btn-secondary w-full text-xs uppercase tracking-widest font-bold py-3 hover:bg-primary hover:text-white border-slate-200 text-center"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Not sure what you need?</h2>
                    <p className="text-slate-600 mb-10">Our advisors are ready to help you identify the best approach for your specific financial situation.</p>
                    <button className="btn btn-primary text-base px-10">Book a 15-Min Discovery Call</button>
                </div>
            </section>
        </div>
    );
};

export default Services;
