import * as React from 'react'

type PropsT = { title: string }

const SingleImage = ({ title }: PropsT) => {
  return (
    <section className="single-image">
      <div>{title}</div>
    </section>
  )
}

export default SingleImage
