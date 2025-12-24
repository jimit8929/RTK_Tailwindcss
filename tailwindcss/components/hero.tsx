import React from 'react'

const Hero = () => {
  return (
    <div className='hero-root'>
      <div className="badge">
        <span>What are form 1099 filing requirements?</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <h1 className='hero-title'>Magnically simplify accounting and taxes</h1>

      <p className="hero-subtitle">
        Automated bookkeeping, effortless tax filing, real-time insights. Set up in 10 mins. Back to building by 4.28pm.
      </p>

      <div className="hero-cta">
        <button className="btn">Start Free Trial</button>
        <button className="btn btn-secondary"><span>Pricing {"→"}</span>
        </button>
      </div>
    </div>
  )
}

export default Hero