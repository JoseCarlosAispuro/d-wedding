import React from 'react'

type PropsT = { title: string; image: string }

const Banner = ({ title, image }: PropsT) => {
  return (
    <section className="banner">
      <div>{title}</div>
      <div>{image}</div>
    </section>
  )
}

export default Banner
