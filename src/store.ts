import { createStore } from '@stencil/store';

export interface State {
  pageTheme: 'light' | 'dark';
}

const { state } = createStore<State>({
  pageTheme: 'light',
});

export const defaults = {
  blogRssTitle: 'Install Doctor: The Multi-OS Provisioning Community Blog',
  share: {
    twitter: {
      defaultTweet: 'Cool open-source stuff:',
      username: 'InstallDoc',
      hashtags: 'opensource,GitHub,GitLab',
    },
    linkedin: {
      summary: 'Cool open-source stuff:',
      source: 'pwa',
    },
  },
  disqusSiteId: 'install-doctor',
  facebookAppId: '669135071652897',
  pageTitle: 'Install Doctor: Provision fully-configured desktops automatically',
  brandName: 'Install Doctor',
  authorTwitter: '@InstallDoc',
  ogType: 'website',
  documentationFooterLinks: [
    {
      title: 'Getting Started',
      href: '/docs/getting-started',
    },
    {
      title: 'Features',
      href: '/docs/features',
    },
    {
      title: 'Customization',
      href: '/docs/customization',
    },
    {
      title: 'Contributing',
      href: '/docs/contributing',
    },
  ],
  landingPage: {
    meta: {
      pageTitle: 'Provision fully configured desktops automatically',
      description:
        'Setup your workstation automatically with the best, free open-source software using Install Doctor, an open-source, multi-OS provisioning system.',
    },
    parallax: {
      reveal1: 'Open',
      reveal2: 'Source',
      reveal3: 'Wizardry',
      text: 'Join us in our quest to build the ultimate device deployment tools, scripts, and software or follow us to reap the benefits of expert-configured, open-source software built with paranoid-level security practices.',
      newsletterButtonText: 'Get Beta Access',
      newsletterButtonSecondaryText: 'Join Community',
      newsletterButtonSecondaryLink: '/community',
      secondButtonHref: 'https://gitlab.com/megabyte-labs',
      secondButtonText: 'Browse Code',
    },
    topSection: {
      leftButtonHref: '/docs/getting-started',
      rightButtonHref: '/docs/features',
      smallTextHref: '/docs/customization',
    },
    featureGridTopLinkHref: '/docs/features',
    ctaLink: '/enterprise',
    getStartedLeftButtonHref: '/docs/getting-started',
    getStartedRightButtonHref: '/docs/features',
  },
  brandEmail: 'help@install.doctor',
  emailForm: {
    url: 'https://email.manhattan.workers.dev',
  },
  enterprisePage: {
    meta: {
      pageTitle: 'Open-Source Enterprise Provisioning Solutions',
      description:
        'Learn about the enterprise-grade support and exclusive features offered to our clientel. Find out how to amplify your business with Install Doctor.',
    },
    inquiryParagraph1:
      'Install Doctor is a well-known and respected provider of technical support services. By engaging with the support team, you can tap into expertise and knowledge to help solve any problems or issues you may be experiencing with your product or business. This can save you valuable time and resources that would otherwise be spent trying to figure things out on your own.',
    inquiryParagraph2:
      "Secondly, you can gain insights into best practices and industry trends that can help you improve your product or business by leveraging our support's expertise. Our support team may have worked with other companies in your industry and can share their experiences and recommendations with you. We also have access to data and analytics that can help you make better-informed decisions about your product or business strategy. Overall, engaging with Install Doctor's support can help you stay ahead of the curve and position your product or business for success.",
    topCTA2: {
      text: 'Enterprise Docs',
      href: '/docs/enterprise',
    },
    bottomCTA2: {
      text: 'Enterprise Docs',
      href: '/docs/enterprise',
    },
  },
  eBookSiteModal: {
    title: 'Free Install Doctor eBook',
    eBookTitle: 'Open-Source, Cross-OS Workstations with Install Doctor',
  },
  communityPage: {
    meta: {
      pageTitle: 'Community Hub',
      description:
        'Get connected and get help from the Install Doctor community. Find out how you can join our thriving community.',
    },
    whyJoin: {
      title: 'Why join the Install Doctor community?',
      paragraph1:
        "Joining Install Doctor's community pages can be incredibly useful and important for the project's growth. These platforms provide an avenue for the project's developers and contributors to communicate, collaborate, and share their ideas, issues, and solutions. By joining these platforms, users can stay up-to-date with the latest project developments, contribute to ongoing discussions, and offer feedback on the project's progress.",
      paragraph2:
        "For developers and contributors, joining these community pages can be an excellent opportunity to learn and grow their skills. By interacting with other developers and contributors, they can gain insight into best practices, troubleshoot problems, and receive guidance on how to improve their code. Furthermore, these platforms also provide a space for users to contribute to the project's documentation, which can be a valuable asset for other users and new contributors.",
      paragraph3:
        "Finally, joining Install Doctor's community pages can also help to promote the project and increase its visibility. By engaging with users on social media platforms like Twitter, the project can reach a wider audience and attract new contributors. Moreover, by participating in discussions and sharing their experiences, users can help to build a sense of community around the project, which can be a significant factor in the project's long-term success. In summary, joining Install Doctor's community pages can be a mutually beneficial experience for both users and the project.",
    },
  },
  blogPage: {
    meta: {
      pageTitle: 'The Blog: Articles by the team and community',
      description:
        'Read about all things related to Install Doctor. Find information about Kubernetes, Docker, virtualization, CLIs, and other tools included in the Install Doctor stack.',
    },
    title: 'Install Doctor Blog',
    subheader: 'Articles by the Install Doctor team and community',
  },
  solutionPage: {
    meta: {
      pageTitle: (solutionName) => 'Provision ' + solutionName + ' using a powerful, customizable one-liner',
      description: (solutionName) =>
        'Headlessly deploy a fully configured workstation on ' +
        solutionName +
        ' using Install Doctor, an intuitive, well-designed provisioning system compatible with most operating systems.',
    },
    enterpriseSupport: {
      title: 'Install Doctor Enterprise Support',
      paragraph1:
        'Guaranteed response SLAs to support your business needs. Our professional support team is on-hand to help you troubleshoot and address issues.',
      paragraph2:
        'Our team of experts will work with your teams to provide open-source based recommendations, strategies, and custom solutions that fits your unique goals and challenges. We are here to help ensure your success.',
    },
    subHeader: {
      text1: 'Get more out of',
      text2: 'by provisioning it with Install Doctor',
    },
    solutions: [
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
    ],
  },
  description:
    'Setup your workstation automatically with the best, free open-source software using Install Doctor, an open-source, multi-OS provisioning system.',
  image: 'https://install.doctor/assets/img/og.png',
  companyLegalName: 'Megabyte LLC',
  companyAlias: 'Megabyte Labs',
  companyUrl: 'https://megabyte.space',
  homepage: 'https://install.doctor',
  companyFooterBrandName: 'Megabyte Labs Open Source',
  sendGridListId: '94a28ff4-6712-4f62-8d9b-5036de3c5ea9',
  sendGridEnterpriseListId: '7bd2df72-96e9-417c-adb9-f91501affebb',
  license: 'MIT',
  companyEmail: 'help@megabyte.space',
  companyAddress: {
    line1: '63 James Street',
    line2: 'Morristown, New Jersey 07960',
    line3: 'United States of America',
  },
  header: {
    customLinks: [
      {
        title: 'Features',
        href: '/docs/features',
        templateId: 'cli',
      },
      {
        title: 'Docs',
        href: '/docs',
        templateId: 'docs',
      },
    ],
    actionButton: {
      title: 'Fork',
      href: 'https://github.com/megabyte-labs/install.doctor/fork',
      svgId: 'fork',
    },
  },
  prefooter: {
    left: {
      title: 'Installation Guide',
      text: 'Provision your operating system, learn how to customize it, and unlock integrations with free cloud services.',
      href: '/docs/getting-started',
    },
    right: {
      title: 'Explore Features',
      text: 'Explore the features and apps that are included with Install Doctor.',
      href: '/docs/features',
    },
  },
  hubspot: {
    emailForm: {
      id: '24052635',
      key: 'eb0d85ad-67a2-41fe-bebe-ca909073f286',
    },
    fullForm: {
      id: '24052635',
    },
    eBookForm: {
      formId: 'df7c28cd-d123-4ea2-aa2c-d7cb304fd398',
    },
    enterpriseContactForm: {
      formId: 'b74a09f0-f963-47d2-b7d0-43d74dae366f',
    },
  },
  algolia: {
    appId: 'KFVMJ7I0DW',
    apiKey: '15f17ad0bf94da92836732a7ceda2ec4',
    indexName: 'installtor',
  },
  social: {
    discord: 'https://discord.com/channels/1077138419953713222/1077138479928049734',
    facebook: 'https://www.facebook.com/InstallDoctor',
    github: 'https://github.com/megabyte-labs/install.doctor',
    githubDiscussions: 'https://github.com/megabyte-labs/install.doctor/discussions',
    gitlab: 'https://gitlab.com/megabyte-labs/install.doctor',
    linkedin: 'https://linkedin.com/company/megabyte-labs',
    slack: 'https://app.slack.com/client/T01ABCG4NK1/C04TDHV564E',
    twitter: 'https://twitter.com/InstallDoc',
    youtube: 'https://www.youtube.com/@InstallDoctor',
  },
};

export const LandingPageData = {
  defaults,
  top: [
    {
      type: 'heading1',
      spans: [],
      text: 'Multi-OS provisioning made easy.',
    },
    {
      type: 'paragraph',
      spans: [],
      text: 'Install Doctor is a free provisioning tool compatible with most operating systems that lets you define the state of your operating system. With it, you can re-format often and provision your devices rapidly. Without any customization, it provisions an expertly configured eco-system of popular, free, open-source GitHub projects. It also provides a framework for defining your ideal configurations with as little work as possible.',
    },
  ],
  top__ctas: [
    {
      primary: 'Get Started',
      secondary: 'Explore Features',
    },
  ],
  top__link: 'Customize your build',
  top__hero: {
    dimensions: {},
    alt: 'Install Doctor connected to Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, Qubes, and Windows as a mind map',
    copyright: null,
    url: 'https://install.doctor/assets/img/enterprise/os-wheel.png',
    '2x': {},
  },
  top__icons: {
    dimensions: {},
    alt: 'Archlinux, CentOS, Debian, Fedora, macOS, Qubes, Ubuntu, and Windows icons',
    copyright: null,
    url: 'https://install.doctor/assets/img/landing/supported-os-icon.png',
    '2x': {},
  },
  announcement: {
    tag_text: 'Blog',
    desktop_text: 'The Switch from Gas Station to Install Doctor',
    mobile_text: 'From Gas Station to Install Doctor',
    link: {
      url: '/blog/gas-station-predecessor',
      target: null,
    },
  },
  started: [
    {
      type: 'heading2',
      spans: [
        {
          start: 12,
          end: 19,
          type: 'em',
        },
      ],
      text: 'Get started easily.',
    },
  ],
  started__list: [
    {
      number: '01',
      title: 'Get started with a one-liner and guided prompts.',
      text: 'It is incredibly easy to get started with Install Doctor. Run the one-liner and you will be guided through interactive prompts where you can input any missing information.',
    },
    {
      number: '02',
      title: 'Customize the script with your own fork.',
      text: 'Fork the Install Doctor project on GitHub and use the same convienient script to provision your devices by defining an environment variable with your username/project-name.',
    },
    {
      number: '03',
      title: 'Test it out in a VM with Vagrant.',
      text: 'Test out Install Doctor before provisioning your main workstations with a one-liner. The script will install Vagrant, ensure a suitable virtualization platform is installed, and then provision a VM.',
    },
    {
      number: '04',
      title: 'Automate everything.',
      text: 'Pass in your sensitive data as environment variables or include them as encrypted secrets stored in your fork for a completely automated one-line installation.',
    },
    {
      number: '05',
      title: 'Manage software across operating systems.',
      text: 'Leverage our custom installer and define package requirements in a cross-OS way by defining the OS-specific package names software a YAML file.',
    },
    {
      number: '06',
      title: 'Pin all your plugins, packages, and extensions.',
      text: 'Configure Install Doctor to install your favorite packages while provisioning your device by defining them in YAML.',
    },
  ],
  ebook: [
    {
      text: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 45,
              type: 'em',
            },
          ],
          text: 'Provision your computing environments faster. Our free guide details the benefits of leveraging Install Doctor to define the state of your PCs.',
        },
      ],
      cta1: 'Read the free eBook',
      background: {
        dimensions: {},
        alt: 'See-through tiles',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/see-thru-tiles.png',
        '2x': {},
      },
      book: {
        dimensions: {},
        alt: 'Book cover with title reading "Provisioning Operating Systems with Install Doctor"',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/ebook-text-box.png',
        '2x': {},
      },
    },
  ],
  native: [
    {
      type: 'heading2',
      spans: [
        {
          start: 14,
          end: 42,
          type: 'em',
        },
      ],
      text: 'Automatically provision your devices.',
    },
  ],
  native__list: [
    {
      icon: {
        dimensions: {},
        alt: 'Triple phone icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/triple-phone-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'OS-independent',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Bring your devices to roughly equivalent states, regardless of the operating system you choose.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Cube with sphere inside icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/cube-sphere-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Security-focused',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Provision your devices with clever security measures that will mitigate security risks and give hackers a PITA.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Tripe stack layered icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/triple-stack-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Virtualization-friendly',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Use Install Doctor to provision VMs, leverage pre-configured Docker sandboxing, and even provision a fully configured Qubes environment.',
        },
      ],
    },
  ],
  features: [
    {
      type: 'heading2',
      spans: [
        {
          start: 21,
          end: 44,
          type: 'em',
        },
      ],
      text: 'Consistent features, any operating system.',
    },
  ],
  features__list: [
    {
      icon: {
        dimensions: {},
        alt: 'Camera icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/camera-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Stunning UI',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Both KDE and GNOME Linux systems are configured to use our stunning Sweet-based theme and boot screens are sleek, without useless log messages.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'File system icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/file-system-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'File System',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Read-only network file sharing folder, back-ups to S3 buckets, and integrations with OS-specific technologies like BTRFS.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Antenna icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/pin-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Pin Everything',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Our system allows you to pin everything into your configuration. Keep track of your favorite addons / tools / extensions by pinning software packages, Chrome extensions, VSCode extensions, and more.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Spherical rings icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/sphere-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Developer-First',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'The default configuration is designed to accomodate the needs of developers by including development software and power-user tools like fully-enhanced terminal settings.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Bell icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/notifications-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Notifications',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Monitor your devices via a personal web dashboard and receive notifications when something goes awry.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Person with circle around icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/network-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Network',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Connect to your devices / services anywhere with a VPN-based LAN and SSO-protected web services.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Three encompassing circles icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/three-circles-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Multi-Layer Security',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Utilize multiple layers of pre-configured security features like app-specific firewalls, sandboxing, and honeypots.',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Slider adjustment icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/configure-icon-1x.png',
      },
      item: [
        {
          type: 'heading4',
          spans: [],
          text: 'Configurable',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Easily customize your own version of Install Doctor and host it, optionally bundled with your encrypted secrets, on GitHub.',
        },
      ],
    },
  ],
  features__link: 'Explore Features',
  framework: [
    {
      type: 'heading2',
      spans: [
        {
          start: 15,
          end: 34,
          type: 'em',
        },
      ],
      text: 'Bring your own operating system.',
    },
    {
      type: 'paragraph',
      spans: [
        {
          start: 126,
          end: 136,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/archlinux',
          },
        },
        {
          start: 137,
          end: 144,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/centos',
          },
        },
        {
          start: 145,
          end: 152,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/debian',
          },
        },
        {
          start: 153,
          end: 160,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/fedora'
          },
        },
        {
          start: 161,
          end: 167,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/macos',
          },
        },
        {
          start: 168,
          end: 174,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/qubes',
          },
        },
        {
          start: 175,
          end: 182,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/ubuntu',
          },
        },
        {
          start: 187,
          end: 194,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://install.doctor/solution/windows',
          },
        },
      ],
      text: 'Use Install Doctor to provision a wide range of operating systems and virtualization platforms. The latest x86-64 releases of Archlinux, CentOS, Debian, Fedora, macOS, Qubes, Ubuntu, and Windows are officially supported. Support for other operating systems is also possible.',
    },
  ],
  framework__list: [
    {
      logo: {
        dimensions: {},
        alt: 'Archlinux logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/archlinux-box.png',
        '2x': {},
      },
      link: '/solution/archlinux',
    },
    {
      logo: {
        dimensions: {},
        alt: 'CentOS logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/centos-box.png',
        '2x': {},
      },
      link: '/solution/centos',
    },
    {
      logo: {
        dimensions: {},
        alt: 'Debian logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/debian-box.png',
        '2x': {},
      },
      link: '/solution/debian',
    },
    {
      logo: {
        dimensions: {},
        alt: 'Fedora logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/fedora-box.png',
        '2x': {},
      },
      link: '/solution/fedora',
    },
    {
      logo: {
        dimensions: {},
        alt: 'macOS logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/macos-box.png',
        '2x': {},
      },
      link: '/solution/macos',
    },
    {
      logo: {
        dimensions: {},
        alt: 'Qubes logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/qubes-box.png',
        '2x': {},
      },
      link: '/solution/qubes',
    },
    {
      logo: {
        dimensions: {},
        alt: 'Ubuntu logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/ubuntu-box.png',
        '2x': {},
      },
      link: '/solution/ubuntu',
    },
    {
      logo: {
        dimensions: {},
        alt: 'Windows logo tile',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/windows-box.png',
        '2x': {},
      },
      link: '/solution/windows',
    },
  ],
  tweets: [
    {
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 23,
              end: 46,
              type: 'em',
            },
          ],
          text: 'What people are saying about Install Doctor.',
        },
      ],
    },
  ],
  tweets__list: [
    {
      name: 'Brian Zalewski',
      handle: '@HillBillyHack3r',
      text: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 29,
              end: 40,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://twitter.com/InstallDoc',
              },
            },
          ],
          text: 'The default configuration of @InstallDoc is an educational tool that helps me learn about emerging open-source technologies.. Hopefully people find it as useful as I do',
        },
      ],
      image: {
        dimensions: {},
        alt: 'Brian Zalewski Twitter profile picture',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/twitter-brian-zalewski.png',
        '2x': {},
      },
      verified: false,
    },
  ],
  tweets__bottom: [
    {
      emoji: '',
      text: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 40,
              end: 79,
              type: 'em',
            },
          ],
          text: 'The Install Doctor Community is growing. Connect with us, your opinion matters.',
        },
      ],
    },
  ],
  tweets__bottom__list: [
    {
      icon: {
        dimensions: {},
        alt: 'Twitter icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/twitter-icon-1x.png',
      },
      text: 'Follow us on Twitter',
      link: {
        url: 'https://twitter.com/InstallDoc',
        target: '_blank',
      },
    },
    {
      icon: {
        dimensions: {},
        alt: 'Github icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/github-icon-1x.png',
      },
      text: 'Star us on GitHub',
      link: {
        url: 'https://github.com/megabyte-labs/install.doctor',
        target: '_blank',
      },
    },
    {
      icon: {
        dimensions: {},
        alt: 'Chat bubble icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/chat-icon-1x.png',
      },
      text: 'Connect on Slack',
      link: {
        url: 'https://app.slack.com/client/T01ABCG4NK1/C01AKCQS2RL',
        target: '_blank',
      },
    },
  ],
  cta: [
    {
      image: {
        dimensions: {},
        alt: 'Raised platforms with app icons',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/cap-enterprise-cta.png',
        '2x': {},
      },
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 25,
              end: 59,
              type: 'em',
            },
          ],
          text: 'Supercharge your workflow with enterprise-grade solutions.',
        },
      ],
      text: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 21,
              type: 'em',
            },
          ],
          text: 'Ready for enterprise. With Install Doctor Enterprise, access advanced security features, integrate SSO, and utilize a proprietary hardware-based, read-only file system.',
        },
      ],
      cta1: 'Learn more',
    },
  ],
  get_started2: [
    {
      title: 'Ready to get started?',
      text: 'Dive in and start provisioning your devices with Install Doctor',
    },
  ],
  get_started__ctas: [
    {
      primary: 'Get Started',
      secondary: 'Explore Features',
    },
  ],
};

export const EnterprisePageData = {
  defaults,
  top: [
    {
      title: 'Secure, reliable multi-OS provisioning for enterprise teams',
      text: "Increase your team's capacity by provisioning their devices with Install Doctor on any OS or virtualization platform.",
      cta_1: 'Talk to sales',
      background: {
        dimensions: {},
        alt: 'Raised platforms with app and company icons',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/platform-elevated-graphic.png',
        '2x': {},
      },
    },
  ],
  native: [
    {
      supertext: 'SUPERCHARGED EFFICIENCY',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 24,
              end: 44,
              type: 'em',
            },
          ],
          text: 'Unlock enterprise-grade security and support',
        },
      ],
      subtext:
        'Improve the efficiency of your team by providing them with the right enterprise-grade tools and services.',
    },
  ],
  native__list: [
    {
      title: 'Build with confidence',
      text: 'Enjoy peace of mind knowing your team has all the best open-source productivity tools available, pre-installed, pre-configured, and backed by mission-critical support.',
    },
    {
      title: 'Protect your users & data',
      text: "Ensure all security features are pre-configured on your team's devices. Everything sandboxed, everything firewalled.",
    },
    {
      title: 'Accelerate your projects',
      text: 'Get to market faster by providing tools and services that will improve the efficiency and capabilities of your team.',
    },
  ],
  ebook: [
    {
      text: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 45,
              type: 'em',
            },
          ],
          text: 'Provision your computing environments faster. Our free guide details the benefits of leveraging Install Doctor to define the state of your PCs.',
        },
      ],
      cta: 'Read the free eBook',
      background: {
        dimensions: {},
        alt: 'See-through tiles',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/see-thru-tiles.png',
        '2x': {},
      },
      book: {
        dimensions: {},
        alt: 'Book cover with title reading "Provisioning Operating Systems with Install Doctor"',
        copyright: null,
        url: 'https://install.doctor/assets/img/landing/ebook-text-box.png',
        '2x': {},
      },
    },
  ],
  micro_frontends: [
    {
      supertext: 'SPEED UP DEVELOPMENT',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 17,
              end: 41,
              type: 'em',
            },
          ],
          text: 'Development-ready VMs for large-scale dev',
        },
      ],
      subtext: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 215,
              end: 235,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://install.doctor/blog/self-service-portal',
              },
            },
          ],
          text: 'To give your developers access to the best set of tools, full device access is not necessarily required. With our Enterprise subscription, your developers can request pre-built, pre-configured, temporary VMs from a self-service portal. This model improves their time-to-code, saves on software licensing costs, and allows you to control the development machines from a single source.',
        },
      ],
      image: {
        dimensions: {},
        alt: 'Graphic depicting system connections',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/development-graphic.png',
      },
    },
  ],
  plugins: [
    {
      supertext: 'OS-Independent',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 14,
              end: 39,
              type: 'em',
            },
          ],
          text: 'Avoid lock-in, use any operating system',
        },
      ],
      subtext:
        'Different operating systems are sometimes required for different jobs. But, your team should feel comfortable on any platform. That is why Install Doctor gives you the freedom to apply your system configuration on any operating system or virtualization platform from a single configuration.',
      image: {
        dimensions: {},
        alt: 'Wheel of operating system icons around Install Doctor icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/os-wheel.png',
        '2x': {},
      },
    },
  ],
  security: [
    {
      supertext: 'Enterprise-Grade Protection',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 11,
              end: 42,
              type: 'em',
            },
          ],
          text: 'Zero-Trust, hardware-backed authentication',
        },
      ],
      subtext: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 118,
              end: 139,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://install.doctor/blog/single-sign-on',
              },
            },
          ],
          text: 'Utilize the best possible security practices by protecting all your web services with our Zero-Trust, hardware-backed authentication system. Authorize everything and require Multi-Factor Authentication (MFA) with support for hardware-based methods such as FIDO2.',
        },
      ],
      image: {
        dimensions: {},
        alt: 'Security icons around Install Doctor icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/security-wheel.png',
        '2x': {},
      },
    },
  ],
  delivery: [
    {
      supertext: 'ULTRA SECURE',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 16,
              end: 32,
              type: 'em',
            },
          ],
          text: 'Reboot to reset, read-only disks',
        },
      ],
      subtext: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 148,
              end: 170,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://install.doctor/blog/immutable-golden-image',
              },
            },
          ],
          text: "Most of the files on your system never change but, with traditional systems, those files still remain part of attack surface. With Install Doctor's Immutable Golden Image (IGI) feature, you can leverage a USB-C hard-drive with special firmware to store the majority of your system immutably while still leveraging traditional disks via a union file system. This gives you the capability of rebooting to clear ransomware while retaining stateful data on hard-disks, S3 buckets, and the like.",
        },
      ],
      image: {
        dimensions: {},
        alt: 'Tablet connected to USB hard disk',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/usb-drive-graphic.png',
        '2x': {},
      },
    },
  ],
  support_guidance: [
    {
      image: {
        dimensions: {},
        alt: 'Message popup with timer',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/support-icon.png',
        '2x': {},
      },
      title: 'Mission-Critical Support',
      text: 'Guaranteed response SLAs throughout the provisioning process. Our professional support team is on-hand to help you troubleshoot and address issues.',
    },
    {
      image: {
        dimensions: {},
        alt: 'Three person icons with sliders',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/guidance-icon.png',
        '2x': {},
      },
      title: 'Expert Guidance',
      text: 'Our team of experienced provisioning experts will work with your teams to provide architecture recommendations and a strategy that fits your unique goals and challenges. We are here to help ensure your success.',
    },
  ],
  features: [
    {
      supertext: 'Enterprise Key Features',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 21,
              end: 62,
              type: 'em',
            },
          ],
          text: 'Everything you need. Exclusive features and SME-level support.',
        },
      ],
      subtext: [
        {
          type: 'paragraph',
          spans: [],
          text: "Install Doctor bundles free, open-source, power-user tools and services that can improve your team's efficiency. There are so many open-source projects integrated into Install Doctor's stack. It might be confusing to determine where to start.",
        },
        {
          type: 'paragraph',
          spans: [
            {
              start: 204,
              end: 230,
              type: 'hyperlink',
              data: {
                target: '_self',
                link_type: 'Web',
                url: 'https://install.doctor/blog/single-sign-on',
              },
            },
            {
              start: 234,
              end: 253,
              type: 'hyperlink',
              data: {
                target: '_self',
                link_type: 'Web',
                url: 'https://install.doctor/blog/self-service-portal',
              },
            },
            {
              start: 278,
              end: 305,
              type: 'hyperlink',
              data: {
                target: '_self',
                link_type: 'Web',
                url: 'https://install.doctor/blog/immutable-golden-image',
              },
            },
          ],
          text: 'With an Enterprise agreement, you connect directly with a subject matter expert (SME) who works with you to satisfy your needs using free, open-source projects. Exclusive Enterprise-only features include single sign-on integration, a self-service portal, and a hardware-backed, write-protected file-system implementation.',
        },
      ],
    },
  ],
  features__list: [
    {
      icon: {
        dimensions: {},
        alt: 'Open source sphere in cube icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/open-source-icon.png',
        '2x': {},
      },
      title: 'Enterprise + Open-Source Features',
      text: 'With the addition to Enterprise-exclusive features, Install Doctor is a unique, robust offering. It is 1 OAK - 1 Of A Kind.',
    },
    {
      icon: {
        dimensions: {},
        alt: 'Paper icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/paper-icon.png',
        '2x': {},
      },
      title: 'Guaranteed SLA',
      text: 'Timely support and troubleshooting when you need it most. Get expert help directly from the Install Doctor team with guaranteed response times.',
    },
    {
      icon: {
        dimensions: {},
        alt: 'Calendar icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/calendar-icon.png',
        '2x': {},
      },
      title: 'Regular Release Cycles',
      text: 'A release timeline you can count on, as opposed to a community maintainers schedule. Think days instead of months or years.',
    },
    {
      icon: {
        dimensions: {},
        alt: 'Shield icon with checkmark',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/shield-icon.png',
        '2x': {},
      },
      title: 'Critical Security Updates & Fixes',
      text: 'Keep your users protected with ongoing security notifications and fixes that keep pace with OS releases, patches, and known vulnerabilities.',
    },
    {
      icon: {
        dimensions: {},
        alt: 'Head icon with light bulb',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/head-icon.png',
        '2x': {},
      },
      title: 'Guidance & Expertise',
      text: 'Our team is here to ensure you are using the best, open-source tools and provisioning practices, helping you to meet your deadlines while avoiding costly tech debt.',
    },
  ],
  editions: [
    {
      supertext: 'READY FOR ENTERPRISE',
      title: [
        {
          type: 'heading2',
          spans: [
            {
              start: 20,
              end: 39,
              type: 'em',
            },
          ],
          text: 'Slay requirements, leverage open-source',
        },
      ],
      paragraph_1: [
        {
          type: 'paragraph',
          spans: [],
          text: 'Many challenges can be solved via low-code or even no-code open-source based solutions.',
        },
      ],
      paragraph_2: [
        {
          type: 'paragraph',
          spans: [],
          text: 'See how Install Doctor is using the power of freely available, open-source software to slash requirements and deliver secure, enterprise-grade solutions in less time.',
        },
      ],
      cta_1: 'Talk to sales',
      image: {
        dimensions: {},
        alt: 'Open source icon graphic',
        copyright: null,
        url: 'https://install.doctor/assets/img/enterprise/open-source-icon-graphic.png',
        '2x': {},
      },
    },
  ],
  demo: [
    {
      supertext: 'Talk to Sales',
      title: 'Install Doctor for Enterprise',
    },
  ],
};

export const CommunityPageData = {
  defaults,
  top: [
    {
      type: 'heading1',
      spans: [],
      text: 'Community Hub',
    },
    {
      type: 'paragraph',
      spans: [],
      text: 'Install Doctor is a large and growing project with a passionate community. Engage with the Install Doctor team and other helpful community members through Discord, GitHub Discussions, Twitter, and more.',
    },
  ],
  top__list: [
    {
      image: {
        dimensions: {},
        alt: 'Card with Discord icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/discord-graphic.png',
        '2x': {},
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'Join the Discord',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Join the community in Discord for discussing new features, asking questions, and helping others get started.',
        },
      ],
      link: {
        target: '_blank',
        url: 'https://discord.com/channels/1077138419953713222/1077138479928049734',
      },
    },
    {
      image: {
        dimensions: {},
        alt: 'GitHub discussions forum on card',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/support-community.png',
        '2x': {},
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'GitHub Discussions',
        },
        {
          type: 'paragraph',
          spans: [],
          text: "Peruse through our official GitHub Discussions forum to find announcements, ideas, polls, questions, answers, and examples of other user's implementation of Install Doctor.",
        },
      ],
      link: {
        target: '_blank',
        url: 'https://github.com/megabyte-labs/install.doctor/discussions',
      },
    },
    {
      image: {
        dimensions: {},
        alt: 'Message icons with world map behind',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/community-graphic.png',
        '2x': {},
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'Install Doctor Matrix',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Join the Install Doctor matrix chat room (i.e. gitter.im). Ask questions to the community or help other users with their questions.',
        },
      ],
      link: {
        target: '_blank',
        url: 'https://app.gitter.im/#/room/#install.doctor:gitter.im',
      },
    },
  ],
  websites__list: [
    {
      icon: {
        dimensions: {},
        alt: 'Twitter icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/twitter-icon-1x.png',
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: '@InstallDoc',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Follow Install Doctor on Twitter for the latest releases, features, and events.',
        },
      ],
      link: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 10,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://twitter.com/InstallDoc',
              },
            },
          ],
          text: 'Tweet',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Reddit icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/reddit-icon-1x.png',
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'r/InstallDoctor',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Join the community on Reddit start discussing how you are using Install Doctor.',
        },
      ],
      link: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 10,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://www.reddit.com/r/InstallDoctor/',
              },
            },
          ],
          text: 'Post',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'Slack icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/slack-icon-1x.png',
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'Slack',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Connect with us on Slack to join the discussion, get help, or just hang out.',
        },
      ],
      link: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 10,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://app.slack.com/client/T01ABCG4NK1/C04TDHV564E',
              },
            },
          ],
          text: 'Chat',
        },
      ],
    },
    {
      icon: {
        dimensions: {},
        alt: 'GitHub icon',
        copyright: null,
        url: 'https://install.doctor/assets/img/community/github-icon-1x.png',
      },
      text: [
        {
          type: 'heading4',
          spans: [],
          text: 'GitHub',
        },
        {
          type: 'paragraph',
          spans: [],
          text: 'Find a potential bug? Let us know on GitHub and consider opening a pull request.',
        },
      ],
      link: [
        {
          type: 'paragraph',
          spans: [
            {
              start: 0,
              end: 10,
              type: 'hyperlink',
              data: {
                target: '_blank',
                link_type: 'Web',
                url: 'https://github.com/megabyte-labs/install.doctor',
              },
            },
          ],
          text: 'Fork',
        },
      ],
    },
  ],
};

export default state;
