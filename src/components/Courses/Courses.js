import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Course from './Course'
import Title from '../Title'
import styles from '../../css/courses.module.css'

const getCourses = graphql`
  {
    allStrapiCourse(sort: {fields: published, order: DESC}) {
      nodes {
        title
        url
        size
        published
        image {
          childImageSharp {
            fluid(maxWidth:600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
`

const Courses = () => {
  const {allStrapiCourse: {nodes: courses}} = useStaticQuery(getCourses)
  return <section className={styles.courses}>
    <Title title="all" subtitle="courses"/>
    <div className={styles.center}>
      {courses.map(item => <Course key={item.id} {...item} />)}
    </div>
  </section>
}

export default Courses
