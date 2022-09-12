import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" >
      <p>I'm making this with gatsby!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/placekitten.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default IndexPage;