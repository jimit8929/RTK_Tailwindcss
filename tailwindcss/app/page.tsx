
import { Container } from "@/components/Container"
import Hero from "@/components/hero"
import { Navbar } from "@/components/navbar"
import React from 'react'

const page = () => {
  return (
    <div className="layout">
      <Container>
        <div className="left-line" />
        <div className="right-line" />
        <Navbar />
        <Hero />
      </Container>
    </div>
  )
}

export default page