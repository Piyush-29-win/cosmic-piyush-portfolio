
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RocketIcon, BrainIcon, LaptopIcon, Coffee, Code, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: RocketIcon,
      title: 'Fast Learner',
      description: 'Quickly adapts to new technologies and methodologies.'
    },
    {
      icon: BrainIcon,
      title: 'Problem Solver',
      description: 'Thrives on tackling complex challenges with creative solutions.'
    },
    {
      icon: Code,
      title: 'Clean Coder',
      description: 'Writes maintainable, scalable, and efficient code.'
    },
    {
      icon: Sparkles,
      title: 'Creative Thinker',
      description: 'Brings innovative ideas and approaches to every project.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            About <span className="text-cosmic-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-cosmic-blue/30 animate-pulse-glow">
                {/* Placeholder for profile image - replace with your actual image */}
                <div className="bg-space-light h-96 rounded-2xl flex items-center justify-center">
                  <LaptopIcon size={64} className="text-cosmic-blue opacity-50" />
                  <Coffee size={32} className="text-cosmic-orange ml-4 opacity-50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple opacity-70 blur-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold">Full Stack Developer & UI/UX Enthusiast</h3>
            
            <p className="text-gray-300">
              Hi! I'm Piyush, a passionate full-stack developer with a love for creating 
              elegant solutions in the least amount of time. With expertise in both front-end and 
              back-end technologies, I build complete web applications that deliver exceptional 
              user experiences.
            </p>
            
            <p className="text-gray-300">
              My journey in tech started with a curiosity about how websites work, which 
              evolved into a professional career building complex applications. I'm constantly 
              exploring new technologies and methodologies to stay at the forefront of web development.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-display font-medium mb-4">What I bring to the table:</h4>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {qualities.map((quality, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-colors">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <quality.icon className="text-cosmic-blue mb-2" size={24} />
                        <h5 className="font-medium mb-1">{quality.title}</h5>
                        <p className="text-gray-400 text-sm">{quality.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
