import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from 'ionic-ds-no-fonts'
export const SolutionArchlinux = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Heading class="quote-summary" level={2}>
            What is Archlinux and why should you provision it with Install Doctor?
          </Heading>
          <Paragraph class="quote-summary">
            Arch Linux is a lightweight and flexible Linux distribution that is known for its simplicity, elegance, and user-friendliness. It is designed to be fast, stable, and customizable, making it an ideal choice for users who want a minimalist and customizable Linux distribution. Arch Linux is a rolling-release distribution, which means that it is constantly updated with the latest software packages.
          </Paragraph>
          <Paragraph class="quote-summary">
            If you are provisioning Arch Linux, you would want to do it properly with an installation framework like Install Doctor. This is because the installation process for any operating system can be time-consuming and complex, especially if you are provisioning multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient.
          </Paragraph>
          <Paragraph class="quote-summary">
            Install Doctor is regularly tested on Arch Linux, which means that it is designed to work seamlessly with the operating system. It also handles many of the Arch Linux specific issues that people face while provisioning Arch Linux, such as package dependencies and kernel modules. This means that you can be confident that the installation process will be smooth and reliable, without any compatibility issues or other problems.
          </Paragraph>
          <Paragraph class="quote-summary">
            Moreover, with Install Doctor, you can keep your configurations in YAML format saved to a git repository. This allows you to version control your configurations and easily track changes over time. It also makes it easier to share configurations between systems or with other users. This feature can save you time and effort by making it easier to maintain and manage your Arch Linux installations.
          </Paragraph>
          <Paragraph class="quote-summary">
            In conclusion, Arch Linux is a lightweight and customizable Linux distribution that is known for its simplicity and elegance. If you are provisioning Arch Linux, you would want to do it properly with an installation framework like Install Doctor. Install Doctor is regularly tested on Arch Linux and handles many of the Arch Linux specific issues that people face while provisioning Arch Linux. Additionally, with Install Doctor, you can keep your configurations in YAML format saved to a git repository, which makes it easier to maintain and manage your installations.
          </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Provision Archlinux.
            </Heading>
            <Paragraph>
              Interactively provision Archlinux with a feature-packed terminal, slick theme, and a configurable list of software.
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
bash <(curl -sSL https://install.doctor/start)
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
              Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).
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

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Launch and provision VMs.
            </Heading>
            <div class="platforms">
              <img
                loading="lazy"
                src="/assets/img/landing/hyperv.png"
                alt="Hyper-V"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/parallels.png"
                alt="Parallels"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/qemu.png"
                alt="QEMU"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/virtualbox.png"
                alt="VirtualBox"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/vmware.png"
                alt="VMWare"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
run setup:vms
`}
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
