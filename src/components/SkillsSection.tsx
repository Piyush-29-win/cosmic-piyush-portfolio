
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", proficiency: 95 },
        { name: "Next.js", icon: "▲", proficiency: 90 },
        { name: "TypeScript", icon: "TS", proficiency: 85 },
        { name: "CSS/Tailwind", icon: "🎨", proficiency: 90 },
        { name: "Three.js", icon: "🔺", proficiency: 75 },
        { name: "Framer Motion", icon: "🔄", proficiency: 80 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", proficiency: 90 },
        { name: "Express", icon: "🚂", proficiency: 85 },
        { name: "MongoDB", icon: "🍃", proficiency: 80 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 75 },
        { name: "GraphQL", icon: "◯", proficiency: 70 },
        { name: "Firebase", icon: "🔥", proficiency: 85 },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: "🔄", proficiency: 90 },
        { name: "Docker", icon: "🐳", proficiency: 75 },
        { name: "AWS", icon: "☁️", proficiency: 70 },
        { name: "Figma", icon: "🎭", proficiency: 85 },
        { name: "Jest", icon: "🧪", proficiency: 80 },
        { name: "CI/CD", icon: "🔄", proficiency: 75 },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-space-darker">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-space-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
      
      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-cosmic-blue">Tech</span> Skills
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing digital experiences.
            My skill set is constantly evolving as I love exploring new technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex flex-col"
            >
              <h3 className="text-xl font-display font-bold mb-6 text-center text-cosmic-blue">
                {category.name}
              </h3>

              <Card className="bg-space-light border-cosmic-blue/20 flex-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-xl w-6 h-6 flex items-center justify-center">
                              {skill.icon}
                            </span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
