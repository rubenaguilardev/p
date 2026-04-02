import AnimatedBorderButton from "@/components/ui/AnimatedBorderButton"
import { FiArrowUpRight, FiGithub } from "react-icons/fi"

const projects = [
  {
    title: "Project",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ratione temporibus nulla dolor vel quisquam, perspiciatis.',
    image: '',
    tags: ["react", 'typescript', 'react', 'typescript'],
    link: '#',
    github: '#'
  },
  {
    title: "Project",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ratione temporibus nulla dolor vel quisquam, perspiciatis.',
    image: '',
    tags: ["react", 'typescript', 'react', 'typescript'],
    link: '#',
    github: '#'
  },
  {
    title: "Project",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ratione temporibus nulla dolor vel quisquam, perspiciatis.',
    image: '',
    tags: ["react", 'typescript', 'react', 'typescript'],
    link: '#',
    github: '#'
  },
  {
    title: "Project",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ratione temporibus nulla dolor vel quisquam, perspiciatis.',
    image: '',
    tags: ["react", 'typescript', 'react', 'typescript'],
    link: '#',
    github: '#'
  },
]

const Projects = () => {
  return (
    <section id='projects' className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Projects that make an impact.</h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tempore illum, quibusdam excepturi perspiciatis, quas quasi error natus! 
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) =>(
            <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-trasnform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FiArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <FiArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface/15 text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View all projects
            <FiArrowUpRight />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects