import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
      textAlign: "center",
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StaticImage
        src="../images/turo-logo.png"
        width={140}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Turo Logo"
      />
      <h1 style={{ paddingLeft: "1rem", paddingTop: "1.1rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
