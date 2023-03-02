import { Component, Host, h, Prop } from '@stencil/core'

import {
  Heading,
  Paragraph,
  ResponsiveContainer,
} from '@ionic-internal/ionic-ds'
import { BlogData } from 'src/data.server/blog'

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss',
  scoped: true,
})
export class BlogPage {
  @Prop() data: BlogData[]

  render() {
    if (!this.data) console.error('No blog posts received')

    return (
      <Host>
        {/* <blog-subnav breadcrumbs={[['Blog', '/blog']]} /> */}
        <meta-tags
          page-title="The Blog: Articles by the team and community"
          description="Read about all things related to Install Doctor. Find information about Kubernetes, Docker, virtualization, CLIs, and other tools included in the Install Doctor stack."
        />
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading level={2} as="h1">
              Install Doctor Blog
            </Heading>
            <Paragraph level={2}>
              Articles by the Install Doctor team and community
            </Paragraph>
          </div>
          <div class="content">
            {this.data?.map((d, i) => (
              <article key={i}>
                <blog-post data={d} preview={true} />
              </article>
            ))}
            {/* <blog-pagination rssIcon /> */}
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer class="blog-info-wrapper">
          <div class="blog-info">
            <h4>About the Install Doctor Blog</h4>
            <p>Our articles are written by the Install Doctor team and community. If you would like to post on our blog, you can do so by opening up a pull request on <a href="https://github.com/megabyte-labs/install.doctor-site/tree/master/pages/blog" target="_blank" rel="noopener">our website's repository on GitHub</a>. There, you can also browse through our site's source code which is a modified version of the <a href="https://github.com/ionic-team/capacitor-site" target="_blank" rel="noopener">Capacitor's open-source website project</a>. If you would like to base your next website off of this modified version of the Capacitor website that removes the Prismic dependency (among a few other features), then please <a href="/community">join our community</a> and ask for help.</p>
          </div>
        </ResponsiveContainer>
        <capacitor-site-footer />
      </Host>
    )
  }
}
