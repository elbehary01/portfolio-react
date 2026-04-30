import { useState } from 'react';
import { sendContactForm } from '../api/client';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    try {
      await sendContactForm(formData);
      setStatus('Message sent successfully I will get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_1s_ease-out]">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full uppercase tracking-widest border border-purple-200 dark:border-purple-700">
              Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Hire Me
          </h2>
          <div className="flex gap-2 justify-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you! Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8 border border-gray-100 dark:border-gray-700 animate-[fadeInUp_1s_ease-out] hover:shadow-3xl dark:hover:shadow-purple-500/10 transition-all duration-300"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 outline-none resize-none"
              placeholder="Your message..."
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden text-sm sm:text-base\"
            disabled={loading}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              {!loading && (
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </span>
            {loading && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center">
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>

          {status && (
            <div
              className={`mt-6 p-4 rounded-xl text-center font-semibold animate-[fadeInUp_0.5s_ease-out] ${
                status.includes('success')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-500'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-2 border-red-500'
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
