import profile from '@/assets/profile.png'

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='relative container mx-auto px-6 z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-100 text-secondary-foreground'>
              Building the future,
              <span className='font-normal text-white'> one component at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis neque iusto animi. Necessitatibus fugit quidem, enim natus odit voluptatem sunt qui voluptatum, illum aliquam nihil impedit ab amet consequatur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quod? Autem, vitae officiis! Praesentium velit sit error voluptas reprehenderit nemo ea sint accusamus, dolorem sunt amet ullam illo porro aut.</p>
            </div>
            <div className="glass glow-border rounded-2xl p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nihil molestias, blanditiis soluta fuga alias.</p>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass-strong rounded-3xl p-2 glow-border">
                <img 
                  src={profile} 
                alt="Ruben Aguilar" 
                className="w-full aspect-4/5 object-cover rounded-2xl" 
              />
              <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>Available for work</span>
                </div>
              </div>
              <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                <div className='text-xl font-bold text-primary'>MS</div>
                <div className='text-xs text-muted-foreground'>Computer Science</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About