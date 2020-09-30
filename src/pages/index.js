import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Web Development" />
      <div className="wrapper">
        <section id="intro" className="panel">
          <h1>{siteTitle}</h1>
          <h3>doo·plank</h3>
          <h2>{siteDescription}</h2>
          <p>
            React Applications, Website Development, Headless eCommerce,
            Shopify, Custom Dashboards, API Development, Technical Consulting,
            Project Scoping, UX Design
          </p>
          <a href="mailto:andrew@duplank.com?subject=Hello!">
            Let's get started →
          </a>
        </section>
        <section id="description" className="panel">
          <p>
            duplank is a (currently) one-man web development studio and
            technology consultancy based in London.{" "}
          </p>
          <p>
            We specialise in working with developing brands to produce
            functional websites of the highest modern calibre.
          </p>
          <p>
            dunplank really shines at custom implementations of forums,
            eCommerce stores and dashboards, and knows the most up-to-date
            development practices and technologies so that you don't have to.{" "}
          </p>
          <p>
            Have a great idea? Need a new ___?{" "}
            <a className="underline" href="mailto:andrew@duplank.com">
              Get in touch!
            </a>
          </p>
        </section>
        <section id="sos" className="panel case-study">
          <h4>
            Case study:{" "}
            <a className="underline" href="https://20sos.co.uk">
              20sos
            </a>
          </h4>
          <div className="top-row">
            <Image fluid={data.sos.childImageSharp.fluid} alt="20sos" />
            <div className="features">
              <ul>
                <li>Custom Backend</li>
                <li>Custom API</li>
                <li>Web Design</li>
                <li>Blog + Forum</li>
                <li>Brand Consultation</li>
                <li>Responsive Charting</li>
              </ul>
              <p>(React, NextJS, Strapi, Netlify)</p>
            </div>
          </div>
          <div className="testimony">
            <p>
              "I solicited Andrews services to help build my website and am
              delighted with the results. He communicated his vision clearly
              throughout the process and combined my preferences with his
              experience to craft a clean, attractive, and most importantly,
              functional product. He showed real interest in my project
              throughout and delivered what was expected and much more. Highly
              recommended." -{" "}
              <span style={{ fontWeight: "200" }}>Ross, 20sos</span>
            </p>
          </div>
        </section>
        <section id="ttf" className="panel case-study">
          <h4>
            Case study:{" "}
            <a className="underline" href="https://trustthisfeast.com">
              Trust This Feast
            </a>
          </h4>
          <div className="top-row">
            <Image
              fluid={data.ttf.childImageSharp.fluid}
              alt="Trust This Feast"
            />
            <div className="features">
              <ul>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Blog</li>
              </ul>
              <p>(React, Gatsby, NetlifyCMS)</p>
            </div>
          </div>
          <div className="testimony">
            <p>
              "I reached out to Andrew on a recommendation and couldn't be
              happier with the service he provided. Not only did he give us a
              brilliant site, but was always able to pitch in on areas which I
              had no knowledge of. He made excellent judgement on the design of
              our site, and the site itself performs beautifully (so fast!).
              Will 100% be using duplank in the future." -{" "}
              <span style={{ fontWeight: "200" }}>Jaina, Trust This Feast</span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    sos: file(absolutePath: { regex: "/20sos-splash.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ttf: file(absolutePath: { regex: "/ttf-splash.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
