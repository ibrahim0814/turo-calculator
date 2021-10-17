import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
      textAlign: "center",
      borderRadius: ".3rem",
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={"turo-logo.png"}
        style={{ width: "140px", paddingTop: "1.15rem" }}
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
