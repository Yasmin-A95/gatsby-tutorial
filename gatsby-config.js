module.exports = {
  siteMetadata: {
    title: `gatsby-intro`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "q"
    }
  }]
};