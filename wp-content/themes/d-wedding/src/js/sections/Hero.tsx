import * as React from 'react'

type PropsT = { title: string; image: string }

const Hero = ({ title }: PropsT) => {
  return (
    <section className="hero">
      <div>{title}</div>
    </section>
  )
}

export default Hero
