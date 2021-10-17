import React from "react"
import { Alert } from "react-bootstrap"
import BackToCalculator from "../../components/back-to-calculator"
import SecondBanner from "../../components/second-banner"
import GatsbyLinkStyled from "../../components/shared/gatsby-router-link-styled"
import Layout from "../../components/shared/layout"
import { IAlertWithLinkBootstrap } from "../../interfaces/interfaces"

interface Blogpost {
  pageLink: string
  title: string
}

const allBlogPostsMetaData: Blogpost[] = [
  {
    pageLink: "/blog/micro-renting",
    title: "What is micro-renting?",
  },
  // add more blog posts here!
  // {
  //  pageLink:"/blog/your-post",
  //  title:"Your Title",
  // }
]

const BlogEntryPage = () => {
  return (
    <Layout>
      <h3 style={{ textAlign: "center" }}>
        <Alert variant="secondary">Blog Posts</Alert>{" "}
      </h3>

      <ol style={{ padding: "1rem" }}>
        {allBlogPostsMetaData.map((blog: Blogpost) => {
          return (
            <li>
              <GatsbyLinkStyled
                page={blog.pageLink}
                text={blog.title}
                color="gray"
              />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogEntryPage
