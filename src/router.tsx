import { Fragment, h } from '@stencil/core'
import {
  Route,
  createRouter,
  staticState,
  match
} from '@stencil/router'
import { getPage } from './data.server/prismic'
import { getBlogData, getAllBlogData } from './data.server/blog'

export const Router = createRouter()

export default Router

export const Routes = () => (
  <Router.Switch>
    <Route
      path="/"
      mapParams={staticState(getPage)}
      render={(_, _data) => (
        <Fragment>
          <landing-page />
        </Fragment>
      )}
    />

    <Route
      path="/blog"
      mapParams={staticState(getAllBlogData)}
      render={(_, data) => (
        <Fragment>
          <blog-page data={data instanceof Map ? Object.values(Object.fromEntries(data))[0] : data} />
        </Fragment>
      )}
    ></Route>

    <Route
      path={match('/blog/:slug*')}
      mapParams={staticState(getBlogData)}
      render={(_, data) => (
        <Fragment>
          <blog-post data={data instanceof Map ? Object.values(Object.fromEntries(data))[0] : data} />
        </Fragment>
      )}
    />

    <Route
      path="/community"
      mapParams={staticState(getPage)}
      render={(_, _data) => {
        return (
          <Fragment>
            <community-page />
          </Fragment>
        )
      }}
    />

    <Route
      path="/terms"
      mapParams={staticState(getPage)}
      render={(_, _data) => (
        <Fragment>
          <terms-service-page />
        </Fragment>
      )}
    />

    <Route
      path="/privacy"
      mapParams={staticState(getPage)}
      render={(_, _data) => (
        <Fragment>
          <privacy-policy-page />
        </Fragment>
      )}
    />

    <Route
      path="/enterprise"
      mapParams={staticState(getPage)}
      render={(_, _data) => (
        <Fragment>
          <enterprise-page />
        </Fragment>
      )}
    />

    <Route
      path={match('/solution/:solutionId*')}
      mapParams={staticState(getPage)}
      render={(params) => (
        <Fragment>
          <solution-page solutionId={params.solutionId} />
        </Fragment>
      )}
    />

    <Route
      path={match('/:nada')}
      render={() => (
        <Fragment>
          <not-found-page />
        </Fragment>
      )}
    />
  </Router.Switch>
)

Router.on('change', (newUrl, oldUrl) => {
  requestAnimationFrame(() => window.scrollTo(0, 0))
  if (newUrl.hash) {
    const id = newUrl.hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView && el.scrollIntoView()
      }
    }, 50)
  }
})

const docsPath = '/docs'
const versionedDocsPath = '/docs/v2'

export const docsVersionHref = (path: string) => {
  if (
    Router.path.startsWith(versionedDocsPath) &&
    !path.startsWith(versionedDocsPath)
  ) {
    return path.replace(docsPath, versionedDocsPath)
  }
  return path
}
