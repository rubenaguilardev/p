import AnimatedBorderButton from '@/components/ui/AnimatedBorderButton'
import Button from '@/components/ui/Button'
import { FaLongArrowAltRight, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaBluesky, href: '#' }
]


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full-stack Developer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Lorem <span className="text-primary glow-text">ipsum</span>
                <br />
                <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  consectet
                </span>
              </h1>
              <p className="text-lg font-medium text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-white">Ruben Aguilar</span> - a <span className="text-primary">software developer</span> sit amet consectetur adipisicing elit. Repellat earum hic enim eos fugiat omnis. Officia.
              </p>
            </div>
            <div className='flex gap-4'>
              {socialLinks.map(({icon: Icon, href}) => (
                <div key={href} className='px-3 py-2.5 glass rounded-lg cursor-pointer hover:bg-surface/15'>
                  {<Icon className='h-7 w-7 transition-transform duration-300 hover:scale-115' />}
                </div>
              ))}
            </div>
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-400'>
              <Button className='' size='lg'>Contact me <FaLongArrowAltRight className='w-5 h-5' /></Button>
              <AnimatedBorderButton>View Projects</AnimatedBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero