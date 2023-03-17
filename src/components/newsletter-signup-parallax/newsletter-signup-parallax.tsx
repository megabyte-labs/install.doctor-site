import { Component, Host, State, h } from '@stencil/core'
import { Paragraph } from 'ionic-ds-no-fonts'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: ({ }) => any
      }
    }
  }
}

@Component({
  tag: 'newsletter-signup-parallax',
  styleUrl: 'newsletter-signup-parallax.scss',
})
export class NewsletterSignupParallax {
  @State() email: string = '';
  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() isValid: boolean = true;
  @State() inlineMessage: string = '';

  componentWillLoad() { }

  handleNewsletterSubmit(e: Event) {
    e.preventDefault()

    this.isLoading = true

    const xhr = new XMLHttpRequest()
    const url = [
      'https://api.hsforms.com/submissions/v3/integration/submit',
      '24052635',
      '8801fbf5-204e-450a-87f4-f252a994c945',
    ].join('/')
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const json = JSON.parse(xhr.responseText)
        this.inlineMessage = json.inlineMessage
        this.isLoading = false
        this.hasSubmitted = true
        this.isValid = true
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        this.inlineMessage = 'Please enter a valid e-mail address.'
        this.isLoading = false
        this.isValid = false
      }
    }

    const hutkMatch =
      document.cookie.match && document.cookie.match(/hubspotutk=(.*?);/)
    const hutk = hutkMatch ? hutkMatch[1] : undefined

    xhr.send(
      JSON.stringify({
        submittedAt: new Date().getTime(),
        fields: [
          {
            name: 'email',
            value: this.email,
          },
          {
            name: 'first_campaign_conversion',
            value: 'Megabyte Labs Newsletter',
          },
        ],
        context: {
          hutk,
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    )
  }

  handleEmailChange(ev: any) {
    this.email = ev.target.value
    this.isValid = true
  }

  handleInlineMessage(returnMessage: string) {
    const messageMatch =
      returnMessage.match && returnMessage.match(/<p>(.*?)<\/p>/)
    return messageMatch ? messageMatch[1] : undefined
  }

  render() {
    return (
      <Host class={{
        nopointer: this.hasSubmitted,
        loading: this.isLoading
      }}>
        <div class="wrapper">

          {this.hasSubmitted ? (
            <div class="form-message">
              <Paragraph>
                {this.handleInlineMessage(this.inlineMessage)}
              </Paragraph>
            </div>
          ) : (
              <div class="form-group">
                <form class="hs-form" onSubmit={e => this.handleNewsletterSubmit(e)}>
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
                        class={{ 'error': this.isValid, 'ui-paragraph-4': true }}
                        aria-label="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="hs_submit hs-submit">
                    <div class="actions">
                      <input type="submit" class="hs-button ui-button primary large" value=" ->" />
                    </div>
                  </div>
                </form>

              </div>
            )}
        </div>
        {!this.isValid && (
          <Paragraph level={5} class="error-message">
            {this.inlineMessage}
          </Paragraph>
        )}
      </Host>
    )
  }
}
