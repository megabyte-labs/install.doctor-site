import { Fragment, h } from '@stencil/core';
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds';
export const SolutionUbuntu = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Provision Ubuntu.
            </Heading>
            <Paragraph>
              Interactively provision Ubuntu with a feature-packed terminal, slick theme, and a configurable list of software (some of which comes pre-configured to save time micro-optimizing) from the terminal.
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
bash <(curl -sSL https://install.doctor)
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Launch web services.</Heading>
            <Paragraph>
              After the provisioning is complete, launch a suite of web services via Docker Swarm and KubeSphere. This will host a configurable suite of web services that you can access across other devices you provision (via Tailscale) or even over the internet (hosted behind SSO-authenticated CloudFlare Teams endpoints).
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
run local:web-services
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Take it a step further and launch VMs that can be provisioned in the same way.
            </Heading>
            <div class="platforms">
              <img
                loading="lazy"
                src="/assets/img/landing/apple.png"
                alt="Apple"
                class="apple"
                width="22"
                height="26"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/android.png"
                alt="Android"
                class="android"
                width="27"
                height="23"
              />
            </div>
            <Paragraph>
              Capacitor's native projects exist in their own top-level folders
              and should be considered part of your app (check them into source
              control).
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
npm i @capacitor/ios @capacitor/android
npx cap add android
npx cap add ios
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">04</sup>
          <div class="heading-group">
            <Heading level={3}>Adding calls to Native APIs</Heading>
            <Paragraph>
              With Capacitor installed, adding calls to native device features
              is as straight forward as calling other JavaScript methods
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="typescript"
              code={`
import { Component } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
@Component({
  selector: 'app-geo-page',
  templateUrl: 'geo.page.html',
  styleUrls: ['geo.page.scss'],
})
export class GeolocationPage {
  loc: GeolocationPosition;
  constructor() {}
  async getCurrentPosition() {
    this.loc = await Geolocation.getCurrentPosition();
  }
}
`}
            />
          </div>
        </article>
      </ResponsiveContainer>
      <section id="continue">
        <ResponsiveContainer>
          <Heading level={3}>Continue your Capacitor Journey.</Heading>
          <Paragraph>
            This is only the beginning. Learn more about the Install Doctor{' '}
            <a href="/docs/basics/workflow" target="_blank">
              development workflow
            </a>{' '}
            or using more{' '}
            <a href="/docs/apis" target="_blank">
              {' '}
              native APIs
            </a>{' '}
            .
          </Paragraph>
        </ResponsiveContainer>
      </section>
    </Fragment>
  );
};
