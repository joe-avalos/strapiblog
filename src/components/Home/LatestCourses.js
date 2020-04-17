import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

import Course from '../Courses/Course'
import Title from '../Title'
import styles from '../../css/courses.module.css'

const getCourses = graphql`
  {
    allStrapiCourse(sort: {fields: published, order: DESC}, limit: 3) {
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
  const {allStrapiCourse:{nodes:courses}} = useStaticQuery(getCourses)
  return <section className={styles.courses}>
        <Title title="all" subtitle="courses" />
        <div className={styles.center}>
          {courses.map(item => <Course key={item.id} {...item} />)}
        </div>
      <Link to="/courses" className="btn-primary">all courses</Link>
      </section>
}

export default Courses
