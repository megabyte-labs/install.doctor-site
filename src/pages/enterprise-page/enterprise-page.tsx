import { Component, h, Host, Prop } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Button,
  PrismicRichText,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { State } from '@stencil/core/internal'

@Component({
  tag: 'enterprise-page',
  styleUrl: 'enterprise-page.scss',
  scoped: true
})
export class EnterprisePage {
  @Prop() data?: any = {
    "top": [
      {
        "title": "Secure, reliable multi-OS provisioning for enterprise teams",
        "text": "Increase your team's capacity by provisioning their devices with Install Doctor on any OS or virtualization platform.",
        "cta_1": "Talk to sales",
        "background": {
          "dimensions": {},
          "alt": "Raised platforms with app and company icons",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/platform-elevated-graphic.png",
          "2x": {}
        }
      }
    ],
    "native": [
      {
        "supertext": "SUPERCHARGED EFFICIENCY",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 24,
                "end": 44,
                "type": "em"
              }
            ],
            "text": "Unlock enterprise-grade security and support"
          }
        ],
        "subtext": "Improve the efficiency of your team by providing them with the right enterprise-grade tools and services."
      }
    ],
    "native__list": [
      {
        "title": "Build with confidence",
        "text": "Enjoy peace of mind knowing your team has all the best open-source productivity tools available, pre-installed, pre-configured, and backed by mission-critical support."
      },
      {
        "title": "Protect your users & data",
        "text": "Ensure all security features are pre-configured on your team's devices. Everything sandboxed, everything firewalled."
      },
      {
        "title": "Accelerate your projects",
        "text": "Get to market faster by providing tools and services that will improve the efficiency and capabilities of your team."
      }
    ],
    "ebook": [
      {
        "text": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 0,
                "end": 45,
                "type": "em"
              }
            ],
            "text": "Provision your computing environments faster. Our free guide details the benefits of leveraging Install Doctor to define the state of your PCs."
          }
        ],
        "cta": "Read the free eBook",
        "background": {
          "dimensions": {},
          "alt": "See-through tiles",
          "copyright": null,
          "url": "https://install.doctor/assets/img/landing/see-thru-tiles.png",
          "2x": {}
        },
        "book": {
          "dimensions": {},
          "alt": "Book cover with title reading \"Provisioning Operating Systems with Install Doctor\"",
          "copyright": null,
          "url": "https://install.doctor/assets/img/landing/ebook-text-box.png",
          "2x": {}
        }
      }
    ],
    "micro_frontends": [
      {
        "supertext": "SPEED UP DEVELOPMENT",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 17,
                "end": 41,
                "type": "em"
              }
            ],
            "text": "Development-ready VMs for large-scale dev"
          }
        ],
        "subtext": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 215,
                "end": 235,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/self-service-portal"
                }
              }
            ],
            "text": "To give your developers access to the best set of tools, full device access is not necessarily required. With our Enterprise subscription, your developers can request pre-built, pre-configured, temporary VMs from a self-service portal. This model improves their time-to-code, saves on software licensing costs, and allows you to control the development machines from a single source."
          }
        ],
        "image": {
          "dimensions": {},
          "alt": "Graphic depicting system connections",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/development-graphic.png"
        }
      }
    ],
    "plugins": [
      {
        "supertext": "OS-Independent",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 14,
                "end": 39,
                "type": "em"
              }
            ],
            "text": "Avoid lock-in, use any operating system"
          }
        ],
        "subtext": "Different operating systems are sometimes required for different jobs. But, your team should feel comfortable on any platform. That is why Install Doctor gives you the freedom to apply your system configuration on any operating system or virtualization platform from a single configuration.",
        "image": {
          "dimensions": {},
          "alt": "Wheel of operating system icons around Install Doctor icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/os-wheel.png",
          "2x": {}
        }
      }
    ],
    "security": [
      {
        "supertext": "Enterprise-Grade Protection",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 11,
                "end": 42,
                "type": "em"
              }
            ],
            "text": "Zero-Trust, hardware-backed authentication"
          }
        ],
        "subtext": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 118,
                "end": 139,
                "type": "hyperlink",
                "data": {
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/single-sign-on"
                }
              }
            ],
            "text": "Utilize the best possible security practices by protecting all your web services with our Zero-Trust, hardware-backed authentication system. Authorize everything and require Multi-Factor Authentication (MFA) with support for hardware-based methods such as FIDO2."
          }
        ],
        "image": {
          "dimensions": {},
          "alt": "Security icons around Install Doctor icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/security-wheel.png",
          "2x": {}
        }
      }
    ],
    "delivery": [
      {
        "supertext": "ULTRA SECURE",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 16,
                "end": 32,
                "type": "em"
              }
            ],
            "text": "Reboot to reset, read-only disks"
          }
        ],
        "subtext": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 148,
                "end": 170,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/immutable-golden-image"
                }
              }
            ],
            "text": "Most of the files on your system never change but, with traditional systems, those files still remain part of attack surface. With Install Doctor's Immutable Golden Image (IGI) feature, you can leverage a USB-C hard-drive with special firmware to store the majority of your system immutably while still leveraging traditional disks via a union file system. This gives you the capability of rebooting to clear ransomware while retaining stateful data on hard-disks, S3 buckets, and the like."
          }
        ],
        "image": {
          "dimensions": {},
          "alt": "Tablet connected to USB hard disk",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/usb-drive-graphic.png",
          "2x": {}
        }
      }
    ],
    "support_guidance": [
      {
        "image": {
          "dimensions": {},
          "alt": "Message popup with timer",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/support-icon.png",
          "2x": {}
        },
        "title": "Mission-Critical Support",
        "text": "Guaranteed response SLAs throughout the provisioning process. Our professional support team is on-hand to help you troubleshoot and address issues."
      },
      {
        "image": {
          "dimensions": {},
          "alt": "Three person icons with sliders",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/guidance-icon.png",
          "2x": {}
        },
        "title": "Expert Guidance",
        "text": "Our team of experienced provisioning experts will work with your teams to provide architecture recommendations and a strategy that fits your unique goals and challenges. We are here to help ensure your success."
      }
    ],
    "features": [
      {
        "supertext": "Enterprise Key Features",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 21,
                "end": 62,
                "type": "em"
              }
            ],
            "text": "Everything you need. Exclusive features and SME-level support."
          }
        ],
        "subtext": [
          {
            "type": "paragraph",
            "spans": [],
            "text": "Install Doctor bundles free, open-source, power-user tools and services that can improve your team's efficiency. There are so many open-source projects integrated into Install Doctor's stack. It might be confusing to determine where to start."
          },
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 204,
                "end": 230,
                "type": "hyperlink",
                "data": {
                  "target": "_self",
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/single-sign-on"
                }
              },
              {
                "start": 234,
                "end": 253,
                "type": "hyperlink",
                "data": {
                  "target": "_self",
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/self-service-portal"
                }
              },
              {
                "start": 278,
                "end": 305,
                "type": "hyperlink",
                "data": {
                  "target": "_self",
                  "link_type": "Web",
                  "url": "https://install.doctor/blog/immutable-golden-image"
                }
              }
            ],
            "text": "With an Enterprise agreement, you connect directly with a subject matter expert (SME) who works with you to satisfy your needs using free, open-source projects. Exclusive Enterprise-only features include single sign-on integration, a self-service portal, and a hardware-backed, write-protected file-system implementation."
          }
        ]
      }
    ],
    "features__list": [
      {
        "icon": {
          "dimensions": {},
          "alt": "Open source sphere in cube icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/open-source-icon.png",
          "2x": {}
        },
        "title": "Enterprise + Open-Source Features",
        "text": "With the addition to Enterprise-exclusive features, Install Doctor is a unique, robust offering. It is 1 OAK - 1 Of A Kind."
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Paper icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/paper-icon.png",
          "2x": {}
        },
        "title": "Guaranteed SLA",
        "text": "Timely support and troubleshooting when you need it most. Get expert help directly from the Install Doctor team with guaranteed response times."
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Calendar icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/calendar-icon.png",
          "2x": {}
        },
        "title": "Regular Release Cycles",
        "text": "A release timeline you can count on, as opposed to a community maintainers schedule. Think days instead of months or years."
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Shield icon with checkmark",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/shield-icon.png",
          "2x": {}
        },
        "title": "Critical Security Updates & Fixes",
        "text": "Keep your users protected with ongoing security notifications and fixes that keep pace with OS releases, patches, and known vulnerabilities."
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Head icon with light bulb",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/head-icon.png",
          "2x": {}
        },
        "title": "Guidance & Expertise",
        "text": "Our team is here to ensure you are using the best, open-source tools and provisioning practices, helping you to meet your deadlines while avoiding costly tech debt."
      }
    ],
    "editions": [
      {
        "supertext": "READY FOR ENTERPRISE",
        "title": [
          {
            "type": "heading2",
            "spans": [
              {
                "start": 20,
                "end": 39,
                "type": "em"
              }
            ],
            "text": "Slay requirements, leverage open-source"
          }
        ],
        "paragraph_1": [
          {
            "type": "paragraph",
            "spans": [],
            "text": "Many challenges can be solved via low-code or even no-code open-source based solutions."
          }
        ],
        "paragraph_2": [
          {
            "type": "paragraph",
            "spans": [],
            "text": "See how Install Doctor is using the power of freely available, open-source software to slash requirements and deliver secure, enterprise-grade solutions in less time."
          }
        ],
        "cta_1": "Talk to sales",
        "image": {
          "dimensions": {},
          "alt": "Open source icon graphic",
          "copyright": null,
          "url": "https://install.doctor/assets/img/enterprise/open-source-icon-graphic.png",
          "2x": {}
        }
      }
    ],
    "demo": [
      {
        "supertext": "Talk to Sales",
        "title": "Install Doctor for Enterprise"
      }
    ]
  }
  @State() ebookModalOpen = false;

  render() {
    const {
      Top,
      Native,
      Ebook,
      MicroFrontends,
      Plugins,
      Security,
      Delivery,
      SupportGuidance,
      Features,
      Demo,
      Editions,
    } = this

    return (
      <Host>
        <meta-tags
          pageTitle={`Open-Source Enterprise Provisioning Solutions`}
          description={'Learn about the enterprise-grade support and exclusive features offered to our clientel. Find out how to amplify your business with Install Doctor.'}
        />
        <site-header class="heading-container" sticky={true} />
        <enterprise-subnav />
        <Top />
        <Native />
        <Ebook />
        {/* <Approach /> */}
        <MicroFrontends />
        <Plugins />
        <Security />
        <Delivery />
        <SupportGuidance />
        <Features />
        <Editions />
        <Demo />
        <pre-footer />
        <capacitor-site-footer />
        <site-modal
          open={this.ebookModalOpen}
          onModalClose={() => (this.ebookModalOpen = false)}
        >
          <Heading level={2}>
            Free Install Doctor eBook
          </Heading>
          <Paragraph>
            Fill out and submit the form below to get your free copy of <strong>Open-Source, Cross-OS Workstations with Install Doctor</strong> sent to your e-mail.
          </Paragraph>
          <capacitor-hubspot-form formId="df7c28cd-d123-4ea2-aa2c-d7cb304fd398" />
        </site-modal>
      </Host>
    )
  }

  Top = () => {
    const { top } = this.data
    const { title, text, cta_1, background } = top[0]

    return (
      <section id="top">
        <prismic-image image={background} class="background" loading="eager" />
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading level={1}>{title}</Heading>
            <Paragraph level={2}>{text}</Paragraph>
            <div class="cta-row">
              <Button anchor href="#demo" kind="round">
                {cta_1}
                <span class="arrow"> -&gt;</span>
              </Button>
              {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                {cta_2}
                <span class="arrow"> -&gt;</span>
              </a> */}
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Native = () => {
    const { native, native__list } = this.data
    const { supertext, title, subtext } = native[0]

    const icons = [
      ['Three blocks with up arrow', '64x64'],
      ['Clock icon with up arrow', '64x64'],
      ['Fingerprint icon with lock symbol', '64x64'],
    ]

    return (
      <ResponsiveContainer id="native" as="section">
        <div class="heading-group">
          <p class="ui-heading-6">
            <sup>{supertext}</sup>
          </p>
          <PrismicRichText richText={title} />
          <Paragraph level={2}>{subtext}</Paragraph>
        </div>
        <ul class="list">
          {native__list.map(({ title, text }, i) => (
            <li key={icons[i][0]}>
              <webp-image
                width={icons[i][1].split('x')[0]}
                height={icons[i][1].split('x')[1]}
                src={`/assets/img/enterprise/enterprise-overview-${i}.png`}
                loading="lazy"
              />
              <Heading level={4} as="h3">
                {title}
              </Heading>
              <Paragraph leading="prose">{text}</Paragraph>
            </li>
          ))}
        </ul>
      </ResponsiveContainer>
    )
  };

  Ebook = () => {
    const { ebook } = this.data
    const { text, cta, background, book } = ebook[0]
    return (
      <section id="ebook">
        <ResponsiveContainer>
          <div class="wrapper">
            <prismic-image image={background} class="background" />
            <div class="content">
              <div class="image-wrapper">
                <prismic-image image={book} />
              </div>
              <div class="heading-group">
                <PrismicRichText paragraphLevel={1} richText={text} />
                <Button
                  kind="round"
                  size="md"
                  onClick={() => (this.ebookModalOpen = true)}
                >
                  {cta} <span class="arrow"> -&gt;</span>
                </Button>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  // Approach = () => {
  //   const {
  //     approach,
  //     approach_traditional,
  //     approach_traditional__list,
  //     approach_web,
  //     approach_web__list,
  //   } = this.data;
  //   const { supertext, title } = approach[0];

  //   return (
  //     <section id="approach">
  //       <ResponsiveContainer>
  //         <div class="heading-group">
  //           <p class="ui-heading-6">
  //             <sup>{supertext}</sup>
  //           </p>
  //           <PrismicRichText richText={title} />
  //         </div>
  //         <div class="split">
  //           <article class="traditional column">
  //             <Heading>{approach_traditional[0]['title']}</Heading>
  //             <Paragraph>{approach_traditional[0]['text']}</Paragraph>
  //             <PrismicResponsiveImage
  //               image={approach_traditional[0]['image']}
  //             />
  //             <div class="list">
  //               <Heading level={4}>
  //                 {approach_traditional[0]['subtitle']}
  //               </Heading>
  //               <ul>
  //                 {approach_traditional__list.map(({ text, icon }) => (
  //                   <li>
  //                     <PrismicResponsiveImage image={icon} />
  //                     <Paragraph>{text}</Paragraph>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </article>
  //           <article class="web column">
  //             <Heading>{approach_web[0]['title']}</Heading>
  //             <Paragraph>{approach_web[0]['text']}</Paragraph>
  //             <PrismicResponsiveImage image={approach_web[0]['image']} />
  //             <div class="list">
  //               <Heading level={4}>{approach_web[0]['subtitle']}</Heading>
  //               <ul>
  //                 {approach_web__list.map(({ text, icon }) => (
  //                   <li>
  //                     <PrismicResponsiveImage image={icon} />
  //                     <Paragraph>{text}</Paragraph>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </article>
  //         </div>
  //       </ResponsiveContainer>
  //     </section>
  //   );
  // };

  MicroFrontends = () => {
    const { micro_frontends } = this.data
    const { supertext, title, subtext, image } = micro_frontends[0]

    return (
      <section id="micro-frontends">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Plugins = () => {
    const { plugins } = this.data
    const { supertext, title, subtext, image } = plugins[0]

    return (
      <section id="plugins">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <Paragraph level={2}>{subtext}</Paragraph>
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Security = () => {
    const { security } = this.data
    const { supertext, title, subtext, image } = security[0]

    return (
      <section id="security">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Delivery = () => {
    const { delivery } = this.data
    const { supertext, title, subtext, image } = delivery[0]

    return (
      <section id="delivery">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  SupportGuidance = () => {
    const { support_guidance } = this.data

    return (
      <section id="support-guidance">
        <ResponsiveContainer>
          <div class="wrapper">
            {support_guidance.map(({ image, title, text }) => (
              <article>
                <prismic-image image={image} />
                <Heading level={3}>{title}</Heading>
                <Paragraph level={2}>{text}</Paragraph>
              </article>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Features = () => {
    const { features, features__list } = this.data
    const { supertext, title, subtext } = features[0]

    return (
      <section id="features">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <ul>
              {features__list.map(({ icon, title, text }) => (
                <li>
                  <div class="image-wrapper">
                    <prismic-image image={icon} />
                  </div>
                  <div>
                    <Heading level={4} as="h3">
                      {title}
                    </Heading>
                    <Paragraph>{text}</Paragraph>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Editions = () => {
    const { editions } = this.data
    const { supertext, title, paragraph_1, paragraph_2, cta_1, image } = editions[0]

    return (
      <section id="editions">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={paragraph_1} paragraphLevel={2} />
              <PrismicRichText richText={paragraph_2} paragraphLevel={2} />
              <div class="cta-row">
                <Button href="#demo" anchor kind="round">
                  {cta_1}
                  <span class="arrow"> -&gt;</span>
                </Button>
                {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                  {cta_2}
                  <span class="arrow"> -&gt;</span>
                </a> */}
              </div>
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Demo = () => {
    const { demo } = this.data
    const { supertext, title } = demo[0]

    return (
      <section id="demo">
        <ResponsiveContainer>
          <div class="heading-group">
            <p class="ui-heading-6">
              <sup>{supertext}</sup>
            </p>
            <Heading level={2}>{title}</Heading>
            <Paragraph>
              Install Doctor is a well-known and respected provider of technical support services. By engaging with the support team, you can tap into expertise and knowledge to help solve any problems or issues you may be experiencing with your product or business. This can save you valuable time and resources that would otherwise be spent trying to figure things out on your own.
            </Paragraph>
            <Paragraph>
              Secondly, you can gain insights into best practices and industry trends that can help you improve your product or business by leveraging our support's expertise. Our support team may have worked with other companies in your industry and can share their experiences and recommendations with you. We also have access to data and analytics that can help you make better-informed decisions about your product or business strategy. Overall, engaging with Install Doctor's support can help you stay ahead of the curve and position your product or business for success.
            </Paragraph>
            <Paragraph>
              <b>Submit your inquiry below and we will respond to you in a timely fashion.</b>
            </Paragraph>
          </div>
          <capacitor-hubspot-form formId="b74a09f0-f963-47d2-b7d0-43d74dae366f" />
        </ResponsiveContainer>
      </section>
    )
  };
}
