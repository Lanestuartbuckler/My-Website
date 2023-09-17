import React from "react"
import {Helmet} from "react-helmet"

export const SEO = () => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Lane Buckler</title>
        <meta name="description" content="Basic example" />
      </Helmet>
    </div>
  );
}
}