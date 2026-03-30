import Figma from '@/components/ui/icons/Figma'
import { Nextjs } from '@/components/ui/icons/Nextjs'
import React from '@/components/ui/icons/React'
import TailwindCSS from '@/components/ui/icons/Tailwind'
import TypeScript from '@/components/ui/icons/Typescript'
import Node from '@/components/ui/icons/Node'
import Express from '@/components/ui/icons/Express'
import Postgres from '@/components/ui/icons/Postgress'

const Skills = () => {

  // const skills = [
  //   { label: 'React', icon: '' },
  //   { label: 'Next.js', icon: '' },
  //   { label: 'Typescript', icon: '' },
  //   { label: 'Tailwind CSS', icon: '' },
  //   { label: 'Node.js', icon: '' },
  //   { label: 'Express.js', icon: '' },
  //   { label: 'PostgresSQL', icon: '' },
  //   { label: 'MongoDB', icon: '' },
  //   { label: 'AWS', icon: '' },
  //   { label: 'Figma', icon: '' },
  //   { label: 'Git', icon: '' },
  //   { label: 'Linux', icon: '' },
    
  // ]
  return (
    <section className='relative overflow-hidden py-32'>
      <div className='flex justify-center items-center gap-4'>
        <TypeScript className='w-15'/>
        <React className='w-20'/>
        <TailwindCSS className='w-15'/>
        <Nextjs className='w-20'/>
        <Figma className='h-15 w-15'/>
        <Node className='h-18' />
        <Express className='w-20' />
        <Postgres className='w-15 h-15' />
      </div>
    
    </section>
    
  )
}

export default Skills