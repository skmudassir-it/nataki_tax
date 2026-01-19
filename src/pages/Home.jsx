import { ShieldCheck, Scale, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const benefits = [
        { icon: <ShieldCheck className="h-6 w-6" />, title: 'Accurate Filings', desc: 'Guaranteed precision in every tax document we prepare.' },
        { icon: <TrendingUp className="h-6 w-6" />, title: 'Tax Planning', desc: 'Strategic advice to minimize your liability and maximize savings.' },
        { icon: <Scale className="h-6 w-6" />, title: 'Audit Support', desc: 'Expert representation and guidance through tax audits.' },
        { icon: <Clock className="h-6 w-6" />, title: 'Timely Delivery', desc: 'Never miss a deadline with our proactive compliance tracking.' },
    ];

    const steps = [
        { number: '01', title: 'Book a Consult', desc: 'Schedule a free 15-minute call to discuss your needs.' },
        { number: '02', title: 'Share Documents', desc: 'Securely upload your files via our encrypted portal.' },
        { number: '03', title: 'We File', desc: 'Our experts prepare, review, and file your taxes.' },
    ];

    return (
        <div className="overflow-hidden">
            <SEO title="Home" description="Expert tax planning and compliance services designed for ambitious individuals and growing businesses." />
            {/* Hero Section */}
            <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                <span>Trusted by 500+ Small Businesses</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6">
                                Maximize Your Savings, <span className="text-accent">Minimize Your Stress.</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                                Expert tax planning and compliance services designed for ambitious individuals and growing businesses. Let us handle the complexity while you focus on what matters.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/contact" className="btn btn-primary text-base px-8 py-4 text-center">Book a Free Consultation</Link>
                                <Link to="/services" className="btn btn-secondary text-base px-8 py-4 text-center">Explore Our Services</Link>
                            </div>

                            <div className="mt-12 flex items-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                                {/* Placeholder logos */}
                                <div className="font-bold text-xl text-primary tracking-tighter italic">CERTIFIED</div>
                                <div className="font-bold text-xl text-primary tracking-tighter italic">ADVISORS</div>
                                <div className="font-bold text-xl text-primary tracking-tighter italic">PARTNERS</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-accent/5 rounded-3xl -rotate-2"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                                <img
                                    src="/src/assets/images/hero_tax_consultancy.png"
                                    alt="Tax Expert at work"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Trust Badge Floating */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow">
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-white">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-medium">Satisfaction Rate</div>
                                        <div className="text-lg font-bold text-primary">99.8% Client Success</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Why Choose TaxPro?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We combine technical expertise with personal service to deliver results that impact your bottom line.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                            >
                                <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <div className="relative z-10 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Your Path to Problem-Free Taxes.</h2>
                                <p className="text-slate-400 text-lg mb-8">Our streamlined process takes the weight off your shoulders. We make tax compliance as easy as 1-2-3.</p>
                                <Link to="/contact" className="btn btn-primary bg-white text-primary hover:bg-slate-100 px-8 py-4 inline-block">Start Your Journey</Link>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="flex items-start space-x-6">
                                        <div className="text-4xl font-black text-white/10 select-none leading-none pt-1">{step.number}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-slate-400 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Services Teaser */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Comprehensive Tax Expertise</h2>
                            <p className="text-slate-600">Tailored solutions for every financial scenario.</p>
                        </div>
                        <Link to="/services" className="btn btn-secondary mt-6 md:mt-0">View All Services</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Personal Tax Returns', slug: 'personal-tax-returns' },
                            { name: 'Corporate Advisory', slug: 'corporate-advisory' },
                            { name: 'VAT & Sales Tax', slug: 'vat-sales-tax' }
                        ].map((service, idx) => (
                            <Link
                                key={idx}
                                to={`/services/${service.slug}`}
                                className="group p-8 rounded-2xl border border-slate-100 hover:border-accent/30 hover:bg-slate-50 transition-all cursor-pointer block"
                            >
                                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.name}</h4>
                                <p className="text-slate-600 text-sm mb-6">Expert guidance to ensure compliance and maximize your tax efficiency.</p>
                                <span className="text-accent font-bold text-sm inline-flex items-center">
                                    Learn More <span className="ml-2">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Teaser */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <p className="text-slate-300 italic mb-8">"TaxPro transformed our business compliance. Their team is knowledgeable, responsive, and truly cares about our success."</p>
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 bg-accent rounded-full"></div>
                                <div>
                                    <div className="font-bold">Sarah Jenkins</div>
                                    <div className="text-xs text-slate-500">Founder, Bloom & Co.</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <p className="text-slate-300 italic mb-8">"The best tax decision I've made. They saved me thousands in potential penalties and optimized my personal returns perfectly."</p>
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 bg-accent rounded-full"></div>
                                <div>
                                    <div className="font-bold">Michael Chen</div>
                                    <div className="text-xs text-slate-500">Private Client</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
