import { Component, State, h, Prop } from '@stencil/core'
import { href } from '@stencil/router'
import { ResponsiveContainer, Button } from 'ionic-ds-no-fonts'
import { defaults } from 'src/store'

import { importResource } from '../../../utils/common'

@Component({
  tag: 'top-parallax',
  styleUrl: 'top-parallax.scss',
  scoped: true,
})
export class LandingPage {
  @Prop() defaults: typeof defaults;
  $shapes!: HTMLDivElement

  @State() showEmailInput: boolean = false;
  @State() showCommunity: boolean = false;

  disconnectedCallback() {
    // this.parallaxInstance.distroy()
  }



  componentDidLoad() {
    importResource({ propertyName: 'particles', link: '/assets/js/particles.js' }, () => { })
  }

  showEmail(e) {
    if (!this.showCommunity) {
      e.preventDefault()
      this.showEmailInput = true
      setTimeout(() => {
        this.showCommunity = true
      }, 1000)
    }
  }

  render() {
    return (
      <section id="top">
        <div id="homing-particles" class="section-overlay"></div>
        <ResponsiveContainer>
          <h1>
            <span class="reveal">{this.defaults.landingPage.parallax.reveal1}</span>
            <span class="reveal">{this.defaults.landingPage.parallax.reveal2}</span>
            <span class="reveal">{this.defaults.landingPage.parallax.reveal3}</span>
          </h1>
          <p class="reveal">
            {this.defaults.landingPage.parallax.text}
          </p>
          <div class="btns">
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              variation="light"
              {...href(this.showCommunity ? this.defaults.landingPage.parallax.newsletterButtonSecondaryLink : '')}
              onClick={(e) => this.showEmail(e)}
              anchor={true}
            >
              {this.showCommunity ? this.defaults.landingPage.parallax.newsletterButtonSecondaryText : this.defaults.landingPage.parallax.newsletterButtonText}  <span>{'->'}</span>
            </Button>
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              href={this.defaults.landingPage.parallax.secondButtonHref}
              target="_blank"
              rel="noopener"
              anchor={true}
            >
              {this.defaults.landingPage.parallax.secondButtonText} <span>{'->'}</span>
            </Button>
            <newsletter-signup-parallax class={{
              open: this.showEmailInput
            }} />
          </div>
        </ResponsiveContainer>
      </section>
    )
  }
}
