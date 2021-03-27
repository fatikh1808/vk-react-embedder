import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";
const UrlFormmater = require("./UrlFormatter");

const Article = ({ url }) => {
  const vk = useContext(VKContext);


  const params = UrlFormmater({
    url: url,
  })


  useEffect(() => {
    vk.Widgets.Article(params[0], params[1]);
  }, []);

  return <div id={elementId} />;
};

Article.propTypes = {
  url: PropTypes.string,
};

Article.defaultProps = {
  url: "url"
};

export default Article;
