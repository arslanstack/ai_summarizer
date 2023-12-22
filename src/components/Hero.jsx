
import {logo} from '../assets'
import React from 'react'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="Arslanstack logo" className='w-40 object-contain' />
        <button
          type='button'
          onClick={() => window.open('http://arslanstack.me/', '_blank')}
          className='black_btn'
        >
          Portfolio
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with our open source OpenAI powered text summarizer that transforms lengthy articles and papers into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero