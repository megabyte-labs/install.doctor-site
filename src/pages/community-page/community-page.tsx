import { Component, Host, h, Prop } from '@stencil/core'
import {
  ResponsiveContainer,
  PrismicRichText,
  Paragraph,
  Heading,
  Grid,
  Col,
} from '@ionic-internal/ionic-ds'

@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss',
  scoped: true,
})
export class CommunityPage {
  @Prop() data?: any = {
    "top": [
      {
        "type": "heading1",
        "spans": [],
        "text": "Community Hub"
      },
      {
        "type": "paragraph",
        "spans": [],
        "text": "Install Doctor is a large and growing project with a passionate community. Engage with the Install Doctor team and other helpful community members through Discord, GitHub Discussions, Twitter, and more."
      }
    ],
    "top__list": [
      {
        "image": {
          "dimensions": {},
          "alt": "Card with Discord icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/discord-graphic.png",
          "2x": {}
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "Join the Discord"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Join the community in Discord for discussing new features, asking questions, and helping others get started."
          }
        ],
        "link": {
          "target": "_blank",
          "url": "https://discord.com/channels/1077138419953713222/1077138479928049734"
        }
      },
      {
        "image": {
          "dimensions": {},
          "alt": "GitHub discussions forum on card",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/support-community.png",
          "2x": {}
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "GitHub Discussions"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Peruse through our official GitHub Discussions forum to find announcements, ideas, polls, questions, answers, and examples of other user's implementation of Install Doctor."
          }
        ],
        "link": {
          "target": "_blank",
          "url": "https://github.com/megabyte-labs/install.doctor/discussions"
        }
      },
      {
        "image": {
          "dimensions": {},
          "alt": "Message icons with world map behind",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/community-graphic.png",
          "2x": {}
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "Install Doctor Matrix"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Join the Install Doctor matrix chat room (i.e. gitter.im). Ask questions to the community or help other users with their questions."
          }
        ],
        "link": {
          "target": "_blank",
          "url": "https://app.gitter.im/#/room/#install.doctor:gitter.im"
        }
      }
    ],
    "websites__list": [
      {
        "icon": {
          "dimensions": {},
          "alt": "Twitter icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/twitter-icon-1x.png"
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "@InstallDoc"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Follow Install Doctor on Twitter for the latest releases, features, and events."
          }
        ],
        "link": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 0,
                "end": 10,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://twitter.com/InstallDoc"
                }
              }
            ],
            "text": "Tweet"
          }
        ]
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Reddit icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/reddit-icon-1x.png"
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "r/InstallDoctor"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Join the community on Reddit with discussions around Install Doctor."
          }
        ],
        "link": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 0,
                "end": 10,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://www.reddit.com/r/InstallDoctor/"
                }
              }
            ],
            "text": "Post"
          }
        ]
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "Slack icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/slack-icon-1x.png"
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "Slack"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Connect with us on Slack to join the discussion, get help, or just hang out."
          }
        ],
        "link": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 0,
                "end": 10,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://app.slack.com/client/T01ABCG4NK1/C04TDHV564E"
                }
              }
            ],
            "text": "Chat"
          }
        ]
      },
      {
        "icon": {
          "dimensions": {},
          "alt": "GitHub icon",
          "copyright": null,
          "url": "https://install.doctor/assets/img/community/github-icon-1x.png"
        },
        "text": [
          {
            "type": "heading4",
            "spans": [],
            "text": "GitHub"
          },
          {
            "type": "paragraph",
            "spans": [],
            "text": "Find a potential bug? Let us know on GitHub and consider opening a pull request."
          }
        ],
        "link": [
          {
            "type": "paragraph",
            "spans": [
              {
                "start": 0,
                "end": 10,
                "type": "hyperlink",
                "data": {
                  "target": "_blank",
                  "link_type": "Web",
                  "url": "https://github.com/megabyte-labs/install.doctor"
                }
              }
            ],
            "text": "Fork"
          }
        ]
      }
    ]
  }

  render() {
    const { Top, Websites, WhyJoin } = this

    return (
      <Host>
        <meta-tags
          pageTitle="Community Hub"
          description={
            'Get connected and get help from the Install Doctor community. Find out how you can join our thriving community.'
          }
        />
        <site-header class="heading-container" sticky={true} />
        <Top />
        <Websites />
        <WhyJoin />
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { top, top__list } = this.data

    return (
      <ResponsiveContainer id="top" as="section">
        <div class="heading-group">
          <PrismicRichText richText={top} paragraphLevel={2} />
        </div>
        <div class="cards">
          {top__list.map(({ image, text, link: { target, url } }) => (
            <a target={target} href={url} class="card">
              <div class="image-wrapper">
                <prismic-image image={image} loading="eager" />
              </div>
              <PrismicRichText richText={text} />
            </a>
          ))}
        </div>
      </ResponsiveContainer>
    )
  };

  Websites = () => {
    const { websites__list } = this.data

    const dimensions = ['48x48', '48x48', '48x48', '48x48']

    return (
      <ResponsiveContainer id="websites" as="section">
        <Grid>
          {websites__list.map(({ icon, text, link }, i) => {
            const [width, height] = dimensions[i].split('x')
            return (
              <Col cols={12} xs={6} md={3}>
                <div class="image-wrapper">
                  <prismic-image
                    width={width}
                    height={height}
                    image={icon}
                  />
                </div>
                <PrismicRichText richText={text} />
                <PrismicRichText class="link" richText={link} />
              </Col>
            )
          })}
        </Grid>
      </ResponsiveContainer>
    )
  };

  WhyJoin = () => {
    return (
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Heading class="quote-summary" level={2}>
            <b>Why join the Install Doctor community?</b>
          </Heading>
          <Paragraph class="quote-summary">
            Joining Install Doctor's community pages can be incredibly useful and important for the project's growth. These platforms provide an avenue for the project's developers and contributors to communicate, collaborate, and share their ideas, issues, and solutions. By joining these platforms, users can stay up-to-date with the latest project developments, contribute to ongoing discussions, and offer feedback on the project's progress.
          </Paragraph>
          <Paragraph class="quote-summary">
            For developers and contributors, joining these community pages can be an excellent opportunity to learn and grow their skills. By interacting with other developers and contributors, they can gain insight into best practices, troubleshoot problems, and receive guidance on how to improve their code. Furthermore, these platforms also provide a space for users to contribute to the project's documentation, which can be a valuable asset for other users and new contributors.
          </Paragraph>
          <Paragraph class="quote-summary">
            Finally, joining Install Doctor's community pages can also help to promote the project and increase its visibility. By engaging with users on social media platforms like Twitter, the project can reach a wider audience and attract new contributors. Moreover, by participating in discussions and sharing their experiences, users can help to build a sense of community around the project, which can be a significant factor in the project's long-term success. In summary, joining Install Doctor's community pages can be a mutually beneficial experience for both users and the project.
          </Paragraph>
        </div>
      </ResponsiveContainer>
    )
  }
}
