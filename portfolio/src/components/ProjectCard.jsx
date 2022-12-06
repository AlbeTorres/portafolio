import React from 'react'
import project from '../assets/img/project-img1.png'
import '../index.css'

const ProjectCard = () => {
  return (
    <article  className='relative rounded-md overflow-hidden mb-6 proj-imgbx '>
        <img src={project} alt="" />
    <div className='absolute center proj-txtx px-3 w-full '>
        <h4 className='w-full'>Tittle</h4>
        <span className='w-full block' >Descripcions del proyecto blabla bla blavabjav sigqaidg
         ajpihfjai</span>
    </div>
    </article>
  )
}

export default ProjectCard