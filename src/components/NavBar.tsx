
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, CodeIcon, MailIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/cosmic-piyush', ariaLabel: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/cosmic-piyush', ariaLabel: 'LinkedIn' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'light'
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
            : 'bg-space-dark/90 backdrop-blur-md shadow-md py-3'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className={`font-display text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            <span className="text-cosmic-blue">&lt;</span>
            Piyush
            <span className="text-cosmic-blue">/&gt;</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href}
                  className={`transition-colors ${
                    theme === 'light' 
                      ? 'text-gray-600 hover:text-cosmic-blue' 
                      : 'text-gray-300 hover:text-cosmic-blue'
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex gap-3 ml-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'light'
                  ? 'bg-blue-50 hover:bg-blue-100'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </motion.button>
            
            {socialLinks.map((link) => (
              <motion.a
                key={link.ariaLabel}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} hover:text-cosmic-blue transition-colors`}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              size="sm"
              className={`${
                theme === 'light'
                  ? 'bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white'
                  : 'bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white'
              }`}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MailIcon size={16} className="mr-2" /> Let's Connect
            </Button>
          </motion.div>
        </div>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className={theme === 'light' ? 'text-gray-800' : 'text-white'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${theme === 'light' ? 'bg-white/95' : 'bg-space-dark/95'} backdrop-blur-md shadow-lg`}
        >
          <div className="container mx-auto px-4 py-5">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} hover:text-cosmic-blue transition-colors block py-2`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} hover:text-cosmic-blue transition-colors`}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
