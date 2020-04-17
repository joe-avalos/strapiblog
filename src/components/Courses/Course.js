import React from 'react'
import Img from 'gatsby-image'

import logo from '../../images/addict-logo.svg'
import styles from '../../css/single-course.module.css'

const Course = ({title,url,size,image}) => {
  const img = image.childImageSharp.fluid
  return <article className={styles.course}>
    <div className={styles.imgContainer}>
      <Img fluid={img} alt="title" />
    </div>
    <a href={url} className={styles.link} target="_blank" rel="noreferrer noopener">
      enroll
    </a>
    <div className={styles.footer}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{size} hours</p>
      </div>
      <img src={logo} alt="Logo"/>
    </div>
  </article>
}

export default Course;
