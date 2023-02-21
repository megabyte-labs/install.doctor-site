import { Fragment, h } from '@stencil/core';
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds';
export const SolutionQubes = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Provision Qubes.
            </Heading>
            <Paragraph>
              Interactively provision Qubes with feature-packed terminals, a slick theme, and a configurable lists of software for each Qubes VM. This one-liner will start the provisioning process when run from Qubes dom0.
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
qvm-run --pass-io sys-firewall "curl -sSL https://install.doctor/qubes" > ~/setup.sh && bash ~/setup.sh
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Launch web services.</Heading>
            <div class="platforms">
              <img
                loading="lazy"
                src="/assets/img/landing/docker-swarm.png"
                alt="Docker Swarm"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/kubesphere.png"
                alt="KubeSphere"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/tailscale.png"
                alt="Tailscale"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/cloudflare.png"
                alt="CloudFlare"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Launch a suite of web services via Docker Swarm and KubeSphere to a network-enabled VM. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
run setup:webapps
`}
            />
          </div>
        </article>

      </ResponsiveContainer>
      <section id="continue">
        <ResponsiveContainer>
          <Heading level={3}>Continue your Install Doctor Journey.</Heading>
          <Paragraph>
            This is only the beginning. Learn more about the Install Doctor{' '}
            <a href="/docs/customization">
              development workflow
            </a>{' '}
            or leveraging the{' '}
            <a href="/docs/features">
              amazing features
            </a>{' '}
            . Install Doctor includes quite a bit of Qubes-specific features. These features are detailed in the{' '}
            <a href="/docs/qubes">
              Qubes documentation
            </a>{' '}
            section.
          </Paragraph>
        </ResponsiveContainer>
      </section>
    </Fragment>
  );
};
