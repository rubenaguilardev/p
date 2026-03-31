

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects