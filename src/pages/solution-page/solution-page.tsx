import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'

import { SolutionUbuntu } from './solution-ubuntu'
import { SolutionFedora } from './solution-fedora'
import { SolutionCentOS } from './solution-centos'
import { SolutionDebian } from './solution-debian'
import { SolutionMacOS } from './solution-macos'
import { SolutionArchlinux } from './solution-archlinux'
import { SolutionQubes } from './solution-qubes'
import { SolutionWindows } from './solution-windows'

@Component({
  tag: 'solution-page',
  styleUrl: 'solution-page.scss',
  scoped: true,
})
export class SolutionPage implements ComponentInterface {
  @Prop() solutionId: string

  framework: {
    id: string
    name: string
    theme: string
    logo: string
    dimensions: string
  }
  componentWillLoad() {
    this.framework = solutions.find(entry => entry.id === this.solutionId)
  }
  getComponent() {
    switch (this.solutionId) {
      case 'archlinux':
        return <SolutionArchlinux />
      case 'centos':
        return <SolutionCentOS />
      case 'debian':
        return <SolutionDebian />
      case 'fedora':
        return <SolutionFedora />
      case 'macos':
        return <SolutionMacOS />
      case 'qubes':
        return <SolutionQubes />
      case 'ubuntu':
        return <SolutionUbuntu />
      case 'windows':
        return <SolutionWindows />
    }
  }

  Demo = () => {
    return (
      <section id="demo">
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading id="demo-heading" level={2}>Install Doctor Enterprise Support</Heading>
            <Paragraph>Get it done the easy way by leveraging our team of <b>{this.framework.name} experts</b>.</Paragraph>
            <Paragraph>Guaranteed response SLAs to support your business needs. Our professional support team is on-hand to help you troubleshoot and address issues.</Paragraph>
            <Paragraph>Our team of experts will work with your teams to provide open-source based recommendations, strategies, and custom solutions that fits your unique goals and challenges. We are here to help ensure your success.</Paragraph>
            <Paragraph>Use the form below to send us a message or ask questions about how Install Doctor can help you with your specific needs.</Paragraph>
          </div>
          <capacitor-hubspot-form formId="b74a09f0-f963-47d2-b7d0-43d74dae366f" />
        </ResponsiveContainer>
      </section>
    )
  };

  render() {
    return (
      <Host>
        <meta-tags
          page-title={'Provision ' + this.framework.name + ' using a powerful, customizable one-liner'}
          description={
            'Headlessly deploy a fully configured workstation on ' +
            this.framework.name + ' using Install Doctor, an intuitive, well-designed provisioning system compatible with most operating systems.'
          }
        />
        <site-header class="heading-container" sticky={true} />
        <ResponsiveContainer id="top" as="section">
          <div class="heading-group">
            <webp-image
              width="301"
              height="167"
              loading="eager"
              src={this.framework.logo}
              alt={this.framework.name}
              class="react"
            />
            <Heading level={2} as="h1">
              {this.framework.name} &amp; Install Doctor
            </Heading>
            <Paragraph level={2}>
              Get more out of{' '}
              {this.framework.name}
              {' '}
              by provisioning it with Install Doctor
            </Paragraph>
            {/* <Button
              anchor
              href="#install"
              id="get-started"
              style={{ '--button-background': this.framework.theme }}
            >
              Get Started
            </Button> */}
          </div>
        </ResponsiveContainer>
        {this.getComponent()}
        <section id="continue">
          <ResponsiveContainer>
            <Heading level={3}>Continue your Install Doctor journey.</Heading>
            <Paragraph>
              This is only the beginning. Browse through the Install Doctor{' '}
              <a href="https://github.com/megabyte-labs/install.doctor" target="_blank" rel="noopener">
                GitHub repository
              </a>{' '}
              or get started with your own configuration by checking out the{' '}
              <a href="/docs">
                documentation
              </a>{' '}
              .
            </Paragraph>
          </ResponsiveContainer>
        </section>
        {this.Demo()}
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }
}

const solutions = [
  {
    id: 'archlinux',
    name: 'Archlinux',
    theme: '#1793d1',
    logo: '/assets/img/solutions/archlinux.png',
    dimensions: '252x224',
  },
  {
    id: 'centos',
    name: 'CentOS',
    theme: '#212078',
    logo: '/assets/img/solutions/centos.png',
    dimensions: '252x224',
  },
  {
    id: 'debian',
    name: 'Debian',
    theme: '#d70a53',
    logo: '/assets/img/solutions/debian.png',
    dimensions: '252x224',
  },
  {
    id: 'fedora',
    name: 'Fedora',
    theme: '#0B57A4',
    logo: '/assets/img/solutions/fedora.png',
    dimensions: '252x224',
  },
  {
    id: 'macos',
    name: 'macOS',
    theme: '#000000',
    logo: '/assets/img/solutions/macos.png',
    dimensions: '252x224',
  },
  {
    id: 'qubes',
    name: 'Qubes',
    theme: '#3874d8',
    logo: '/assets/img/solutions/qubes.png',
    dimensions: '252x224',
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    theme: '#dd4814',
    logo: '/assets/img/solutions/ubuntu.png',
    dimensions: '252x224',
  },
  {
    id: 'windows',
    name: 'Windows',
    theme: '#00a1f1',
    logo: '/assets/img/solutions/windows.png',
    dimensions: '252x224',
  },
]
