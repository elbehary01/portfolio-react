import React from 'react';
import { assets } from '../assets/assets';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollTo';

const Footer = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${assets.personalProfile}`;
    link.download = 'Ahmed-Personal-Profile.pdf';
    link.click();
  };

  return (
    <footer id="footer" className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4">
        <div className="flex-1">
          <img src={assets.logo} className="mb-4 w-12" alt="Logo" />
          <p className="text-gray-600 dark:text-gray-300">
            Empowering creativity and innovation. Let’s build something
            extraordinary together.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: 'Top', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <li key={label}>
                <button
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  onClick={() => scrollToSection(id)}
                >
                  <span>•</span> {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Download Personal Profile
          </h3>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-500 text-white py-2 px-4 rounded shadow animate-blink hover:bg-blue-600 active:scale-95 transition-transform duration-200 hover:animation-none"
          >
            Download PDF
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Connect with Me
          </h3>
          <ul className="space-y-2">
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/elbehary01',
                icon: <FaGithub />,
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/your-username',
                icon: <FaLinkedin />,
              },
              {
                label: 'Email',
                href: 'mailto:ahmedelbehary0@gmail.com',
                icon: <FaEnvelope />,
              },
              {
                label: 'Phone',
                href: 'tel:+4915566461430',
                icon: <FaPhone />,
              },
            ].map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label={label}
                >
                  {icon} {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 dark:border-gray-700">
        <p className="text-center py-4 text-sm text-gray-600 dark:text-gray-400">
          © 2024 AHMED ELBEHARY - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
