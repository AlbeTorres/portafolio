import React from 'react'
import '../index.css'
import Container from './Container'
import contactimg from '../assets/img/contact-img.svg'

const Contact = () => {
  return (
    <section className='contact mt-8'>
    <Container>

    <div className='md:grid md:grid-cols-2 mt-5'>

    <figure className='w-11/12 '>
      <img src={contactimg} alt="" className='h-full w-full' />
    </figure>
    <form action="w-full">
    <h1 className='font-bold my-7 text-4xl text-center  '>Get in Touch</h1>
     
        <div>
          <input type="text" placeholder='first Name' className='rounded-md ' />
          <textarea placeholder='A amazing work offert?' className='rounded-md h-44   '></textarea>
        </div>

        <button className='rounded-md  w-full '>
          Send
        </button>
    </form>
    </div>
    </Container>

    </section>
  )
}

export default Contact