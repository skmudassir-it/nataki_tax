import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 glass shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <Landmark className="h-8 w-8 text-accent" />
                            <span className="font-bold text-2xl tracking-tighter text-primary">Nataki Tax Consultancy</span>
                        </NavLink>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-primary/70'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" className="btn btn-primary text-sm py-2 px-5">
                            Book a Consultation
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-accent p-2"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-4 text-base font-medium transition-colors ${isActive ? 'text-accent bg-slate-50' : 'text-primary/70 hover:text-accent hover:bg-slate-50'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-4">
                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary w-full text-center"
                            >
                                Book a Consultation
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
