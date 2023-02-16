import { Component, Host, h } from '@stencil/core';
import {
  ResponsiveContainer,
  Grid,
  Col,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds';
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
  tag: 'capacitor-site-footer',
  styleUrl: 'capacitor-site-footer.scss',
})
export class CapacitorSiteFooter {
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
      portalId: '24052635',
      formId: '9657ca9c-eb86-41f9-8a96-895eee92942f',
      cssClass: '',
      target: `#${this.uniqueFormId}`,
    });
  };

  render() {
    return (
      <Host>
        <footer>
          <ResponsiveContainer>
            <div class="newsletter">
              <div>
                <Heading level={4}>Join our Newsletter</Heading>
                <Paragraph level={4}>
                  Keep up to date with all the latest Install Doctor news and updates
                </Paragraph>
              </div>
              <div class="form-group" id={this.uniqueFormId}></div>
            </div>
            <Grid>
              <Col md={6} sm={4} xs={12} cols={12} class="copyright">
                <img
                  src="/assets/img/logo-white2.png"
                  alt="Megabyte Labs Logo"
                  class="logo"
                  width="240"
                  height="49"
                  loading="lazy"
                />
                <p>© {new Date().getFullYear()} Megabyte LLC</p>
                <p>
                  <a href="https://megabyte.space">Megabyte Labs Open Source</a> | Released
                  under <span id="mit">MIT License</span>
                </p>
              </Col>
              <Col md={6} sm={8} xs={12} cols={12}>
                <div class="routes-group">
                  <div>
                    <Heading level={5}>Documentation</Heading>
                    <ul class="routes">
                      <li>
                        <a class="ui-paragraph-4" href="/docs/getting-started">
                          Getting Started
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href="/docs/customization">
                          Customization
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href="/docs/software">
                          Software
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Resources</Heading>
                    <ul class="routes">
                      <li>
                        <a class="ui-paragraph-4" href="/community">
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://install.doctor/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://github.com/megabyte-labs/install.doctor/discussions"
                        >
                          Discussions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Connect</Heading>
                    <ul class="routes">
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://github.com/megabyte-labs/install.doctor"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://twitter.com/installdoc"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href="https://megabyte.space">
                          Megabyte Labs
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
