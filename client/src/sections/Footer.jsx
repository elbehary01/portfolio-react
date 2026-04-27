import { FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaPhone } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { scrollToSection } from '../utils/scrollTo';

const Footer = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${assets.personalProfile}`;
    link.download = 'Ahmed-Personal-Profile.pdf';
    link.click();
  };

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-5 dark:opacity-10 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-5 dark:opacity-10 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={assets.logo} className="w-16 h-16 dark:invert" alt="Logo" />
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              Empowering creativity and innovation. Let's build something
              extraordinary together.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/elbehary01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-elbehary-4b9421247/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ahmedelbehary0@gmail.com" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-pink-600 dark:hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={label}>
                  <button
                    className="group flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => scrollToSection(id)}
                  >
                    <span className="w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
                <a href="mailto:ahmedelbehary0@gmail.com" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  ahmedelbehary0@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <a href="tel:+4915566461430" className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +49 155 6646 1430
                </a>
              </li>
            </ul>
          </div>

          {/* Download Profile */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">CV for more info</h3>
            <button
              onClick={handleDownloadPDF}
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              ©{new Date().getFullYear()}  Ahmed Elbehary. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-500 flex items-center space-x-2">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Ahmed Elbehary</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
