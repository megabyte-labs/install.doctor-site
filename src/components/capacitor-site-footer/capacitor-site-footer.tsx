import { Component, Host, State, h, Fragment, Prop } from '@stencil/core';
import { href } from '@stencil/router';
import { defaults } from '../../store';
import { ResponsiveContainer, Grid, Col, Heading, Paragraph } from 'ionic-ds-no-fonts';

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: ({}) => any;
      };
    };
  }
}

@Component({
  tag: 'capacitor-site-footer',
  styleUrl: 'capacitor-site-footer.scss',
})
export class CapacitorSiteFooter {
  @Prop() defaults: typeof defaults;
  @State() email: string = '';
  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() isValid: boolean = true;
  @State() inlineMessage: string = '';

  componentWillLoad() {}

  handleNewsletterSubmit(e: Event) {
    e.preventDefault();

    this.isLoading = true;

    const xhr = new XMLHttpRequest();
    const url = this.defaults.emailForm.url;

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = () => {
      console.log(xhr)
      if (xhr.readyState === 4) {
        this.isLoading = false
      }
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.inlineMessage = 'Successfully added ' + this.email;
        this.hasSubmitted = true;
        this.isValid = true;
      } else if (xhr.readyState == 4 && xhr.status === 400) {
        console.error(`Failed to add ${this.email}`, xhr)
        const json = JSON.parse(xhr.responseText)
        this.inlineMessage = json.error;
        this.isValid = false;
        this.hasSubmitted = false;
      } else if (xhr.readyState == 4) {
        const json = JSON.parse(xhr.responseText);
        this.inlineMessage = json.error;
        this.isValid = false;
        this.hasSubmitted = false;
      }
    };
    const customFields: any = {}
    let slug = url => new URL(url).pathname.match(/[^\/]+/g)
    const slugs = slug(window.location.href)
    customFields.join_href = window.location.href;
    if (slugs) {
      customFields.join_slug = slugs.pop()
    }
    customFields.join_type = 'footer'
    xhr.send(
      JSON.stringify({
        list_ids: [this.defaults.sendGridListId],
        contacts: [
          {
            email: this.email,
            custom_fields: customFields
          }
        ]
      })
    );
  }

  handleEmailChange(ev: any) {
    this.email = ev.target.value;
    this.isValid = true;
  }

  companyLink() {
    if (this.defaults.companyUrl !== this.defaults.homepage) {
      return (
        <Fragment>
          <a class="underline-hover link" href={this.defaults.companyUrl} target="_blank" rel="noopener">
            {this.defaults.companyFooterBrandName}
          </a>{' '}
          | Released under <span id="mit">{this.defaults.license} License</span>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <a class="underline-hover link" {...href('/')}>{this.defaults.companyFooterBrandName}</a> | Released under{' '}
          <span id="mit">{this.defaults.license} License</span>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <Host>
        <footer>
          <ResponsiveContainer>
            <div class="newsletter">
              <div>
                <Heading level={4}>Join our Newsletter</Heading>
                <Paragraph level={4} class="join-our-newsletter">
                  Keep up to date with all the latest {this.defaults.brandName} news and updates. Be the first to know about popular, trending open-source productivity tools that we integrate into our stack.
                </Paragraph>
              </div>
              <div class="form-group">
                {this.hasSubmitted ? (
                  <div class="form-message">
                    <ion-icon name="checkmark-circle" class="success-color"></ion-icon>
                    <Paragraph>{this.inlineMessage}</Paragraph>
                  </div>
                ) : (
                  <form class="hs-form" onSubmit={(e) => this.handleNewsletterSubmit(e)}>
                    <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
                      <div class="input">
                        <input
                          name="email"
                          type="email"
                          autocomplete="email"
                          inputmode="email"
                          value={this.email}
                          onInput={() => this.handleEmailChange(event)}
                          disabled={this.isLoading}
                          placeholder="E-mail"
                          class={{ error: this.isValid, 'ui-paragraph-4': true }}
                          aria-label="Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="hs_submit hs-submit">
                      <div class="actions">
                        <input type="submit" class="hs-button primary large" value="Subscribe" />
                      </div>
                    </div>
                    {!this.isValid && (
                      <Paragraph level={5} class="error-message">
                        {this.inlineMessage}
                      </Paragraph>
                    )}
                  </form>
                )}
              </div>
            </div>
            <Grid>
              <Col md={6} sm={4} xs={12} cols={12} class="copyright">
                <webp-image
                  src="/assets/img/logo-white.png"
                  alt={this.defaults.brandName + ' logo'}
                  class="logo"
                  loading="lazy"
                />
                <div class="footer-social-wrapper">
                  <a class="footer-social github hint--top hint--rounded" href={this.defaults.social.github} target="_blank" rel="noopener" aria-label="GitHub">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a class="footer-social gitlab hint--top hint--rounded" href={this.defaults.social.gitlab} target="_blank" rel="noopener" aria-label="GitLab">
                    <ion-icon name="logo-gitlab"></ion-icon>
                  </a>
                  <a class="footer-social slack hint--top hint--rounded" href={this.defaults.social.slack} target="_blank" rel="noopener" aria-label="Slack">
                    <ion-icon name="logo-slack"></ion-icon>
                  </a>
                  <a class="footer-social discord hint--top hint--rounded" href={this.defaults.social.discord} target="_blank" rel="noopener" aria-label="Discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                  <a class="footer-social facebook hint--top hint--rounded" href={this.defaults.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a class="footer-social twitter hint--top hint--rounded" href={this.defaults.social.twitter} target="_blank" rel="noopener" aria-label="Twitter (X)">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a class="footer-social linkedin hint--top hint--rounded" href={this.defaults.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a class="footer-social youtube hint--top hint--rounded" href={this.defaults.social.youtube} target="_blank" rel="noopener" aria-label="YouTube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                  <a class="footer-social telegram hint--top hint--rounded" href={this.defaults.social.telegram} target="_blank" rel="noopener" aria-label="Telegram">
                    <ion-icon name="send"></ion-icon>
                  </a>
                  <a class="footer-social matrix hint--top hint--rounded" href={this.defaults.social.matrix} target="_blank" rel="noopener" aria-label="Element Matrix chat">
                    <ion-icon name="chatbubbles-sharp"></ion-icon>
                  </a>
                </div>
                <p>
                  © {new Date().getFullYear()} {this.defaults.companyLegalName}
                </p>
                <p>{this.companyLink()}</p>
                <p>
                  <a class="underline-hover link" {...href('/privacy')}>Privacy Policy</a> | <a class="underline-hover link" {...href('/terms')}>Terms of Service</a>
                </p>
              </Col>
              <Col md={6} sm={8} xs={12} cols={12}>
                <div class="routes-group">
                  <div>
                    <Heading level={5}>Documentation</Heading>
                    <ul class="routes">
                      {this.defaults.documentationFooterLinks.map(({ title, href }) => (
                        <li>
                          <a class="ui-paragraph-4 underline-hover link" href={href}>
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Resources</Heading>
                    <ul class="routes">
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" {...href('/community')}>
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4 underline-hover link"
                          href={this.defaults.social.githubDiscussions}
                          target="_blank"
                          rel="noopener"
                        >
                          Discussions
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" {...href('/enterprise')}>
                          Enterprise
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Connect</Heading>
                    <ul class="routes">
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" href={this.defaults.social.github} target="_blank" rel="noopener">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" href={this.defaults.social.gitlab} target="_blank" rel="noopener">
                          GitLab
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" href={this.defaults.social.facebook} target="_blank" rel="noopener">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4 underline-hover link" href={this.defaults.social.twitter} target="_blank" rel="noopener">
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Grid>
          </ResponsiveContainer>
        </footer>
      </Host>
    );
  }
}
