/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation />

      <Header siteTitle="Earnings Calculator" />

      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          minHeight: "100%",
          bottom: "0",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: "center",
            height: "100v",
          }}
        >
          <hr style={{ padding: "1.5px" }} />
          <a
            href="https://github.com/ibrahim0814/turo-calculator"
            target="_blank"
          >
            Built with ❤️ in San Diego, California
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
