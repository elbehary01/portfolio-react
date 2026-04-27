import { assets } from '../assets/assets';
import Service from '../components/Service';

const Services = () => {
  const serviceInfo = [
    {
      icon: `${assets.responsive}`,
      title: 'Responsive',
      text1: 'Design that adapts to any screen size, ensuring a seamless experience.',
      text2: 'Mobile-First Design',
    },
    {
      icon: `${assets.fast}`,
      title: 'Fast',
      text1: 'Optimized code and performance for lightning-fast load times.',
      text2: 'Optimized Performance',
    },
    {
      icon: `${assets.dynamic}`,
      title: 'Dynamic',
      text1: "Engaging and interactive web applications that captivate users.",
      text2: 'Interactive Experiences',
    },
    {
      icon: `${assets.social}`,
      title: 'Social',
      text1: 'Integrating social media platforms for seamless sharing and connectivity.',
      text2: 'Social Media Integration',
    },
  ];
  return (
    <section
      id="services"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>

      <div className="container relative mx-auto z-10">
        <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out]">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Offer a range of web development services to bring your ideas to life. From responsive design to dynamic interactions, I create engaging and performant web applications that connect with users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceInfo.map((info, index) => (
            <div key={index} className="animate-[fadeInUp_1s_ease-out]" style={{ animationDelay: `${index * 0.1}s` }}>
              <Service
                image={info.icon}
                title={info.title}
                text1={info.text1}
                text2={info.text2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
