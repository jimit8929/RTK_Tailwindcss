
import { Container } from "@/components/Container"
import Hero from "@/components/hero"
import { Navbar } from "@/components/navbar"
import React from 'react'

const page = () => {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>
      <Container>

        <Navbar />
        <Hero />
      </Container>

      <div className="hero-image-container">
        <div className="horizontal-line"></div>
        <img src="./hero-ui-v6.webp" alt="" className="hero-image" />
      </div>
    </div>
  )
}

export default page