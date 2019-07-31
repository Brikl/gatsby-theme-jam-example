# Gatsby Theme for BrikL Storefronts

A Gatsby theme for building eCommerce storefronts powered by [BrikL](https://www.brikl.io "BrikL")
A live demo can be found [here](https://gatsby-theme-brikl-demo.netlify.com "demo")

It includes:

- the theme itself (located in `theme/`)
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously
- a bunch of generated eCommerce pages to get you started
- multi language support

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    yarn add @brikl/gatsby-theme-brikl-store
    ```

    ```sh
    npm install --save @brikl/gatsby-theme-brikl-store
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: [
        {
          resolve: `@brikl/gatsby-theme-brikl-store`,
          options: {
            apiUri: process.env.GATSBY_BRIKL_API_URI,
            clientId: process.env.GATSBY_BRIKL_CLIENT_ID,
            shopId: process.env.GATSBY_BRIKL_SHOP_ID,
            userId: process.env.GATSBY_BRIKL_USER_ID
          }
        }
      ]
    };
    ```

3.  Create a `.env` file in the `theme` or `demo` folder or pass environment variables to the build like below:

    ```sh
    GATSBY_BRIKL_API_URI=https://api.mybrikl.com/graphql
    GATSBY_BRIKL_SHOP_ID=gatsby-theme-contest
    GATSBY_BRIKL_CLIENT_ID=ASK-US-FOR-A-CLIENT-ID
    GATSBY_BRIKL_USER_ID=ASK-US-FOR-YOUR-USER-ID
    ```

4.  Start developing your site or editing the theme

    ```sh
    gatsby develop
    ```

    The demo will start at http://localhost:8000
