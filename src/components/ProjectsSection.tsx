
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product listings, user auth, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-blue/20 to-cosmic-purple/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A space-themed portfolio with interactive 3D elements and smooth animations.",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-purple/20 to-cosmic-pink/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative tool for teams to manage projects and tasks with real-time updates.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Authentication"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-orange/20 to-cosmic-yellow/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An intuitive interface for checking weather forecasts with interactive visualizations.",
      technologies: ["React", "D3.js", "Weather API", "Geolocation"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-blue/20 to-cosmic-yellow/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "frontend"
    },
    {
      id: 5,
      title: "API Gateway Service",
      description: "A microservice that handles API routing, authentication, and rate limiting.",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "backend"
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "A mobile app for ordering food with real-time delivery tracking.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      image: "gradient-bg bg-gradient-to-br from-cosmic-pink/20 to-cosmic-orange/20",
      githubUrl: "#",
      liveUrl: "#",
      category: "mobile"
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile Apps' },
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
    <section id="projects" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="text-cosmic-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my most notable projects. Each one demonstrates 
            different skills and technologies in my development stack.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              className={filter === category.value 
                ? "bg-cosmic-blue hover:bg-cosmic-blue/80 text-white" 
                : "text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-space-light border border-gray-700 hover:border-cosmic-blue/50 transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:shadow-cosmic-blue/20">
                <div className={`h-40 ${project.image} flex items-center justify-center`}>
                  {/* Project preview image */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-space-darker px-2 py-1 rounded-md text-cosmic-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
