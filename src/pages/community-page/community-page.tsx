import { Component, Host, h, Prop } from '@stencil/core'
import {
  ResponsiveContainer,
  PrismicRichText,
  Paragraph,
  Heading,
  Grid,
  Col,
} from 'ionic-ds-no-fonts'
import { CommunityPageData } from 'src/store'

@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss',
  scoped: true,
})
export class CommunityPage {
  @Prop() data: typeof CommunityPageData

  render() {
    const { Top, Websites, WhyJoin } = this

    return (
      <Host>
        <meta-tags
          defaults={this.data.defaults}
          pageTitle={this.data.defaults.communityPage.meta.pageTitle}
          description={this.data.defaults.communityPage.meta.description}
        />
        <site-header defaults={this.data.defaults} class="heading-container" sticky={true} />
        <Top />
        <Websites />
        <WhyJoin />
        <pre-footer defaults={this.data.defaults} />
        <capacitor-site-footer defaults={this.data.defaults} />
      </Host>
    )
  }

  Top = () => {
    const { top, top__list } = this.data

    return (
      <ResponsiveContainer id="top" as="section">
        <div class="heading-group">
          <PrismicRichText richText={top} paragraphLevel={2} />
        </div>
        <div class="cards">
          {top__list.map(({ image, text, link: { target, url } }) => (
            <a target={target} href={url} class="card">
              <div class="image-wrapper">
                <prismic-image defaults={this.data.defaults} image={image} loading="eager" />
              </div>
              <PrismicRichText richText={text} />
            </a>
          ))}
        </div>
      </ResponsiveContainer>
    )
  };

  Websites = () => {
    const { websites__list } = this.data

    const dimensions = ['48x48', '48x48', '48x48', '48x48']

    return (
      <ResponsiveContainer id="websites" as="section">
        <Grid>
          {websites__list.map(({ icon, text, link }, i) => {
            const [width, height] = dimensions[i].split('x')
            return (
              <Col cols={12} xs={6} md={3}>
                <div class="image-wrapper">
                  <prismic-image
                    defaults={this.data.defaults}
                    width={width}
                    height={height}
                    image={icon}
                  />
                </div>
                <PrismicRichText richText={text} />
                <PrismicRichText class="link" richText={link} />
              </Col>
            )
          })}
        </Grid>
      </ResponsiveContainer>
    )
  };

  WhyJoin = () => {
    return (
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Heading class="quote-summary" level={2}>
            <b>{this.data.defaults.communityPage.whyJoin.title}</b>
          </Heading>
          <Paragraph class="quote-summary">
            {this.data.defaults.communityPage.whyJoin.paragraph1}
          </Paragraph>
          <Paragraph class="quote-summary">
            {this.data.defaults.communityPage.whyJoin.paragraph2}
          </Paragraph>
          <Paragraph class="quote-summary">
            {this.data.defaults.communityPage.whyJoin.paragraph3}
          </Paragraph>
        </div>
      </ResponsiveContainer>
    )
  }
}
