import React from "react"

import Layout from "../components/layout"
import Courses from '../components/Home/LatestCourses'
import HomeBanner from "../components/Home/HomeBanner"

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Courses/>
  </Layout>
)

export default IndexPage
