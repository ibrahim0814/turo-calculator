import React from "react"
import GatsbyLinkStyled from "./shared/gatsby-router-link-styled"

interface IBlogFooter {}

const BlogFooter = (props: IBlogFooter) => {
  return <GatsbyLinkStyled text="All Blogs" color="gray" page="/blog" />
}

export default BlogFooter
