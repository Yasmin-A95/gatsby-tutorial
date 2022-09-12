import * as React from 'react'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" >
      <p>I'm making this with gatsby!</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default IndexPage;