import { Build, Component, Element, Host, Prop, h } from '@stencil/core'
import Helmet from '@stencil/helmet'

@Component({
  tag: 'meta-tags',
})
export class MetaTags {
  site = 'https://install.doctor';
  @Prop() pageTitle =
    'Install Doctor: Provision fully-configured desktops automatically';
  @Prop() description =
    'Setup your workstation automatically with the best, free open-source software using Install Doctor, an open-source, multi-OS provisioning system.';
  @Prop() image = 'https://install.doctor/assets/img/og.png';
  @Prop() authorTwitter = '@InstallDoc';
  @Prop() ogType = 'website';
  @Prop() canonicalUrl = `${this.site}${location.pathname}`;

  @Element() el

  render() {
    const prettyTitle =
      this.pageTitle ===
        'Install Doctor: Provision fully-configured desktops automatically'
        ? this.pageTitle
        : `${this.pageTitle} | Install Doctor`

    //if (!this.el.isConnected || Build.isServer) {
    //  return <Host></Host>
    //}

    return (
      <Helmet>
        <title>{prettyTitle}</title>
        <meta name="description" content={this.description} />
        <meta itemprop="image" content={this.image}></meta>
        <meta property="al:web:url" content={this.canonicalUrl}></meta>
        <meta property="og:type" content={this.ogType} />
        <meta property="og:title" content={prettyTitle} />
        <meta property="og:description" content={this.description} />
        <meta property="og:image" content={this.image} />
        {/* Fixed domain and strip out hashtags and query strings */}
        <meta property="og:url" content={`${this.site}${location.pathname}`} />
        <meta name="twitter:title" content={prettyTitle} />
        <meta name="twitter:description" content={this.description} />
        <meta name="twitter:image" content={this.image} />
        <meta name="twitter:creator" content={this.authorTwitter} />
        <link rel="canonical" href={this.canonicalUrl} />
      </Helmet>
    )
  }
}
