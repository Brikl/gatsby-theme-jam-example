const env = require("dotenv").config()
const fs = require("fs")
const { buildSchema } = require("graphql")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Brikl",
        fieldName: "brikl",
        // Url to query from
        url: process.env.GATSBY_BRIKL_API_URI,
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `${process.env.GATSBY_BRIKL_USER_ID}`,
          "x-brikl-shop-id": process.env.GATSBY_BRIKL_SHOP_ID,
          "x-brikl-client-id": process.env.GATSBY_BRIKL_CLIENT_ID,
        },
        createSchema: async () => {
          const sdl = fs
            .readFileSync(`${__dirname}/brikl-schema.gql`)
            .toString()
          return buildSchema(sdl)
        },
        // Additional options to pass to node-fetch
        // fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data",
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      typeName: "Shop",
    },
    {
      resolve: "gatsby-plugin-material-ui",
    },
    {
      resolve: "gatsby-plugin-typescript",
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
  ],
}
