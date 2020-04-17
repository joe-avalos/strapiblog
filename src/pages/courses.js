import React from "react"

import Layout from "../components/layout"
import Courses from '../components/Courses/Courses'

const courses = () => {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          marginTop: "4rem",
        }}
      >
        <Courses />
      </h1>
    </Layout>
  )
}

export default courses
