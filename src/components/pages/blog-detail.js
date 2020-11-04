import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import BlogFeaturedImage from "../blog/blog-featured-image";

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
    };
  }

  getBlogItem() {
    axios
      .get(
        `https://zinvergocode.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((response) => {
        console.log("response", response);
        this.setState({
          blogItem: response.data.portfolio_blog,
        });
      })
      .catch((error) => {
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }
  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;
    return (
      <div className="blog-container">
        <div className="content-container">
          <h1>{title}</h1>
          <BlogFeaturedImage img={featured_image_url} />
          <div className="text-content">{ReactHtmlParser(content)}</div>
        </div>
      </div>
    );
  }
}

export default BlogDetail;
