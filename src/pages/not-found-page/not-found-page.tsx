import { Component, Host, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { href } from '@stencil/router'

@Component({
  tag: 'not-found-page',
  styleUrl: 'not-found-page.scss',
  scoped: true,
})
export class NotFoundPage {

  render() {
    const { NotFound } = this

    return (
      <Host>
        <meta-tags
          pageTitle="Not Found: 404 Error"
          description={'This is a link to a page that does not exist. You should still visit this page to see how awesome our 404 page is though.'}
        />
        <site-header class="heading-container" sticky={true} />
        <NotFound />
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }

  NotFound = () => (
    <ResponsiveContainer id="not-found" as="section">
      <Heading class="top-text" level={1}>404: Not Found</Heading>
      <Paragraph class="top-text">This page does not exist! The <a {...href('/')}>home page</a> might be a good place to start.</Paragraph>
      <webp-image alt="404 not found graphic" src="/assets/img/404.png" loading="eager"></webp-image>
    </ResponsiveContainer>
  );
}
