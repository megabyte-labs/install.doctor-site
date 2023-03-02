import { Component, State, h } from '@stencil/core'
import { ResponsiveContainer, Button } from '@ionic-internal/ionic-ds'

// import { Background } from '../assets/bg-3-only.svg';
// import { Background } from '../assets/bg-boxes.svg';

import { importResource } from '../../../utils/common'

@Component({
  tag: 'top-parallax',
  styleUrl: 'top-parallax.scss',
  scoped: true,
})
export class LandingPage {
  $shapes!: HTMLDivElement
  libID = 'parallax-lib';

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
            <span class="reveal">Open</span>
            <span class="reveal">Source</span>
            <span class="reveal">Wizardry</span>
          </h1>
          <p class="reveal">
            Join us in our quest to build the ultimate device deployment tools, scripts, and software
            or follow us to reap the benefits of expert-configured, open-source software
            built with paranoid-level security practices.
          </p>
          <div class="btns">
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              variation="light"
              href={this.showCommunity ? '/community' : ''}
              onClick={(e) => this.showEmail(e)}
              anchor={true}
            >
              {this.showCommunity ? 'Join Community' : 'Get Beta Access'}  <span>{'->'}</span>
            </Button>
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              href="https://gitlab.com/megabyte-labs"
              target="_blank"
              rel="noopener"
              anchor={true}
            >
              Browse Code <span>{'->'}</span>
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
