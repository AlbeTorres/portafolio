import React from 'react'
import Container from './Container'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section>
        <Container>
            <h2 className='text-center text-5xl my-16  font-bold'>Personal Proyects</h2>
            <div className='grid md:grid-cols-3 md:grid-rows-3 md:gap-x-8 gap-y-2  '>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
           

            </div>
   
        </Container>
    </section>
  )
}

export default Projects