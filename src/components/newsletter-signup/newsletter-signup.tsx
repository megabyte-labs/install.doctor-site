import { Component, Host, h } from '@stencil/core';
import { Heading, Paragraph } from '@ionic-internal/ionic-ds';
import { importResource } from '../../utils/common';

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
  tag: 'newsletter-signup',
  styleUrl: 'newsletter-signup.scss',
})
export class NewsletterSignup {
  private uniqueFormId = `id-${Math.random().toString().replace('.', '')}`;
  private hubspotCdn = '//js.hsforms.net/forms/v2.js';

  componentWillLoad() {
    importResource(
      { propertyName: 'hbspt', link: this.hubspotCdn },
      this.createForm,
    );
  }

  disconnectedCallback() {
    const scripts = document.head.querySelectorAll('script');
    scripts.forEach(script => {
      if ((script.src = this.hubspotCdn)) script.remove();
    });
  }

  createForm = () => {
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '24052635',
      formId: '9657ca9c-eb86-41f9-8a96-895eee92942f',
      cssClass: '',
      target: `#${this.uniqueFormId}`,
    });
  };

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="heading-group">
            <Heading>The latest updates. Delivered monthly.</Heading>
            <Paragraph>
              Install Doctor is getting better every day. Sign up for a monthly email
              on the latest updates, releases, articles, news, and exclusive beta features!
            </Paragraph>
          </div>
          <div class="form-group" id={this.uniqueFormId}></div>
        </div>
      </Host>
    );
  }
}
