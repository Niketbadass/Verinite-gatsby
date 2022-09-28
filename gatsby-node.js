const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
            title
            template
            id
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      //const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        if (page.template === 'about-us.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/aboutUs.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-peoplebyte.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/peopleBytes.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-kartavya.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(
              `./src/templates/kartavya-csr-initiative.js`
            ),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-benefits.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/benefits.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'brand.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/Brand.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-news.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/news-event.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-home.php') {
          createPage({
            path: `/`,
            component: path.resolve(`./src/templates/home.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-contact.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/contact.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-service.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/serviceListing.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-partnership.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/partnership.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-industry.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/industry.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'mission.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/missionPage.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'domain.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/domainPage.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'life-verinite.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/life-at-verinite.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'card-conclave.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/card-conclaves.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'tech-integration.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/tech-integration.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'goselfie.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/selfie.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-currentopening.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/currentOpenings.js`),
            context: {
              id: page.id,
            },
          })
        } else if (page.template === 'page-resources.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/resource-listing.js`),
            context: {
              id: page.id,
            },
          })
        } 
        else if (page.template === 'policy.php') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/policy.js`),
            context: {
              id: page.id,
            },
          })
        }else {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/pages.js`),
            context: {
              id: page.id,
            },
          })
        }
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                categories {
                  id
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.js`)
      const postSidebarTemplate = path.resolve(`./src/templates/postSidebar.js`)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressPost.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        if (post.template === 'single-sidebar.php') {
          createPage({
            path: `/${post.slug}/`,
            component: postSidebarTemplate,
            context: {
              id: post.id,
              cat: post.categories[0].id,
            },
          })
        } else {
          createPage({
            path: `/${post.slug}/`,
            component: postTemplate,
            context: {
              id: post.id,
            },
          })
        }
      })

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/test` : `/page`),
        component: blogTemplate,
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpNewsAndEvents {
            edges {
              node {
                id
                slug
                status
                template
                categories {
                  id
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/newsEventLanding.js`)
      const postSidebarTemplate = path.resolve(`./src/templates/newseventSideLanding.js`)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressWpNewsAndEvents.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        if (post.template === 'single-sidebar.php') {
          createPage({
            path: `/${post.slug}/`,
            component: postSidebarTemplate,
            context: {
              id: post.id,
              cat: post.categories[0].id,
            },
          })
        } else {
          createPage({
            path: `/${post.slug}/`,
            component: postTemplate,
            context: {
              id: post.id,
            },
          })
        }
      })

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/test` : `/page`),
        component: blogTemplate,
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressCategory(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const categoriesTemplate = path.resolve(`./src/templates/category.js`)

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: categoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressTag(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `)
    })

    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const tagsTemplate = path.resolve(`./src/templates/tag.js`)

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
        createPage({
          path: `/tags/${tag.slug}/`,
          component: tagsTemplate,
          context: {
            name: tag.name,
            slug: tag.slug,
          },
        })
      })
    })
    // .then(() => {
    //   return graphql(`
    //     {
    //       allWordpressWpUsers {
    //         edges {
    //           node {
    //             id
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   `)
    // })
    // .then(result => {
    //   if (result.errors) {
    //     result.errors.forEach(e => console.error(e.toString()))
    //     return Promise.reject(result.errors)
    //   }

    //   const authorTemplate = path.resolve(`./src/templates/author.js`)

    //   _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
    //     createPage({
    //       path: `/author/${author.slug}`,
    //       component: authorTemplate,
    //       context: {
    //         id: author.id,
    //       },
    //     })
    //   })
    // })
    .then(() => {
      return graphql(`
        {
          allWordpressWpService {
            edges {
              node {
                title
                slug
                id
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const servicel = path.resolve(`./src/templates/service-landing.js`)

      const allTestiData = result.data.allWordpressWpService.edges

      const testi =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allTestiData)
          : allTestiData

      _.each(result.data.allWordpressWpService.edges, ({ node: testi }) => {
        createPage({
          path: `/service/${testi.slug}`,
          component: servicel,
          context: {
            id: testi.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpServiceProducts {
            edges {
              node {
                title
                slug
                id
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const servicel = path.resolve(
        `./src/templates/service-product-management.js`
      )

      const allTestiData = result.data.allWordpressWpServiceProducts.edges

      const testi =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allTestiData)
          : allTestiData

      _.each(allTestiData, ({ node: testi }) => {
        createPage({
          path: `/products/${testi.slug}`,
          component: servicel,
          context: {
            id: testi.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpApplicationStack {
            edges {
              node {
                title
                slug
                id
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const servicel = path.resolve(`./src/templates/tech-vision.js`)

      const allTestiData = result.data.allWordpressWpApplicationStack.edges

      _.each(allTestiData, ({ node: testi }) => {
        createPage({
          path: `/tech/${testi.slug}`,
          component: servicel,
          context: {
            id: testi.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpJobs {
            edges {
              node {
                title
                slug
                id
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const jobTemplate = path.resolve(`./src/templates/job.js`)

      const allTestiData = result.data.allWordpressWpJobs.edges

      const testi =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allTestiData)
          : allTestiData

      _.each(allTestiData, ({ node: testi }) => {
        createPage({
          path: `/jobs/${testi.slug}`,
          component: jobTemplate,
          context: {
            id: testi.id,
          },
        })
      })
    })

    // .then(() => {
    //   return graphql(`
    //     {
    //       allWordpressWpTestimonials {
    //         edges {
    //           node {
    //             title
    //             slug
    //             id
    //           }
    //         }
    //       }
    //     }
    //   `).then(result => {
    //     if (result.errors) {
    //       result.errors.forEach(e => console.error(e.toString()))
    //       return Promise.reject(result.errors)
    //     }

    //     const testimonialTemplate = path.resolve(
    //       `./src/templates/testimonial.js`
    //     )

    //     const allTestiData = result.data.allWordpressWpTestimonials.edges

    //     const testi =
    //       process.env.NODE_ENV === 'production'
    //         ? getOnlyPublished(allTestiData)
    //         : allTestiData

    //     _.each(allTestiData, ({ node: testi }) => {
    //       createPage({
    //         path: `/${testi.slug}`,
    //         component: testimonialTemplate,
    //         context: {
    //           id: testi.id,
    //         },
    //       })
    //     })
    //   })
    // })
    .then(() => {
      return graphql(`
        {
          allWordpressWpLeaders {
            edges {
              node {
                title
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()))
          return Promise.reject(result.errors)
        }

        const jobTemplate = path.resolve(`./src/templates/leader.js`)

        const allTestiData = result.data.allWordpressWpLeaders.edges

        const testi =
          process.env.NODE_ENV === 'production'
            ? getOnlyPublished(allTestiData)
            : allTestiData

        _.each(allTestiData, ({ node: testi }) => {
          createPage({
            path: `${testi.slug}`,
            component: jobTemplate,
            context: {
              id: testi.id,
            },
          })
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
