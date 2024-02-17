import { Component, Host, State, h, Prop } from '@stencil/core';
import { Paragraph } from 'ionic-ds-no-fonts';
import { defaults } from 'src/store';

@Component({
  tag: 'newsletter-signup-parallax',
  styleUrl: 'newsletter-signup-parallax.scss',
})
export class NewsletterSignupParallax {
  @Prop() defaults: typeof defaults;
  @State() email: string = '';
  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() isValid: boolean = true;
  @State() inlineMessage: string = '';

  componentWillLoad() {}

  handleNewsletterSubmit(e: Event) {
    e.preventDefault()

    this.isLoading = true

    const xhr = new XMLHttpRequest()
    const url = this.defaults.emailForm.url

    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
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
    // Custom fields are optional
    const customFields: any = {}
    let slug = url => new URL(url).pathname.match(/[^\/]+/g)
    const slugs = slug(window.location.href)
    customFields.join_href = window.location.href;
    if (slugs) {
      customFields.join_slug = slugs.pop()
    }
    customFields.join_type = 'parallax'
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
    )
  }

  handleEmailChange(ev: any) {
    this.email = ev.target.value;
    this.isValid = true;
  }

  handleInlineMessage(returnMessage: string) {
    const messageMatch = returnMessage.match && returnMessage.match(/<p>(.*?)<\/p>/);
    return messageMatch ? messageMatch[1] : undefined;
  }

  render() {
    return (
      <Host
        class={{
          nopointer: this.hasSubmitted,
          loading: this.isLoading,
        }}
      >
        <div class="wrapper">
          {this.hasSubmitted ? (
            <div class="form-message">
              <Paragraph>{this.handleInlineMessage(this.inlineMessage)}</Paragraph>
            </div>
          ) : (
            <div class="form-group">
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
    );
  }
}
