import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";
const UrlFormmater = require("./UrlFormatter");


const Post = ({ url, options }) => {
  const vk = useContext(VKContext);

  const params = UrlFormmater({
    url: url,
  })

  useEffect(() => {
    vk.Widgets.Post(
      params[0],
      params[1],
      params[2],
      params[3],
      options
    );
  }, []);

  return <div id={params[0]} />;
};

Post.propTypes = {
  url: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.number
  })
};

Post.defaultProps = {
  url: "",
  options: {}
};

export default Post;
