import { FaGraduationCap } from "react-icons/fa"
import { SiBookstack } from "react-icons/si"
import { MdOutlineDateRange } from "react-icons/md"

const degrees = [
  {
    title: 'Master of Science',
    date: 'Expected 2026',
    university: 'Western Governors University',
    degree: 'Computer Science',
    specialization: 'Specilization in Computer Systems',
    keyCourses: ['Computer Architecture and Systems', 'Software Architecture and Design', 'Applied Algorithms and Reasoning', 'AI and Machine Learning Foundations', 'Network Architecure and Cloud Computing'],
    icon: SiBookstack
  },
  {
    title: 'Bachelor of Science',
    date: '2024',
    university: 'Western Governors University',
    degree: 'Software Engineering',
    keyCourses: ['Computer Architecture and Systems', 'Software Architecture and Design', 'Applied Algorithms and Reasoning', 'AI and Machine Learning Foundations', 'Network Architecure and Cloud Computing'],
    icon: FaGraduationCap
  }
]

const Education = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Lorem ipsum dolor sit amet.</h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tempore illum, quibusdam excepturi perspiciatis, quas quasi error natus! 
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {degrees.map((degree, index) => {
            const Icon = degree.icon
            return (
            <div key={index} className="glass rounded-2xl">
              <div className="flex items-center gap-4">
                <Icon />
                <h2>{degree.title}</h2>
              </div>
              <p>{degree.university}</p>
              <p>{degree.degree}</p>
              <div className="flex gap-2 items-center">
                <MdOutlineDateRange />
                <span>{degree.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                  {degree.keyCourses.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface/15 text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Education