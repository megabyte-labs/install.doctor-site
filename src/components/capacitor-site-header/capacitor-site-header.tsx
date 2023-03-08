import {
  Element,
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core'
import { href } from '@stencil/router'
import Router from '../../router'
import { Button } from '@ionic-internal/ionic-ds'
import { JSXBase } from '@stencil/core/internal'
import { DocsTemplate } from 'src/data.server/models'
//import { Translation } from '../../icons';

@Component({
  tag: 'site-header',
  styleUrl: 'capacitor-site-header.scss',
  scoped: true,
})
export class SiteHeader implements ComponentInterface {
  @Element() elm: HTMLElement
  @Prop() template: DocsTemplate
  @Prop() includeLogo = true;
  @Prop() includeBurger = false;
  @Prop() theme: 'light' | 'dark' = 'light';
  @Prop() sticky = true;

  @State() collapsed = false;
  @State() expanded = false;
  @State() scrolled = false;

  private routeListener = Symbol();
  private links: { [key: string]: HTMLElement } = {};
  // Could be an announcement banner or platform bar
  private heightAboveBar = 72;

  componentWillLoad() {
    this.createHeaderObserver()
    this.createRouteListener()
  }

  createHeaderObserver() {
    const opts = {
      root: document.body,
      rootMargin: `-${this.heightAboveBar + 1}px 0px 0px 0px`,
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(entries => {
      this.scrolled = !(entries[0].intersectionRatio < 1)
    }, opts)

    observer.observe(this.elm)
  }

  createRouteListener() {
    if (window.hasOwnProperty(this.routeListener)) return

    window[this.routeListener] = true
    Router.on('change', this.handleActive)
  }

  handleActive = (url: URL) => {
    const activeRoute = url.pathname.split('/')[1]

    for (const [key, value] of Object.entries(this.links)) {
      if (key === activeRoute) {
        value.classList.add('active')
      } else {
        value.classList.remove('active')
      }
    }
  };

  isActive(path: string): boolean {
    const prefix = new RegExp('^' + path, 'gm')
    const regexRes = prefix.test(Router.path)

    return regexRes
  }

  toggleExpanded = () => (this.expanded = !this.expanded);

  render() {
    const { expanded, template, includeLogo, includeBurger } = this

    return (
      <Host
        class={{
          scrolled: this.scrolled,
          [`theme--${this.theme}`]: true,
          sticky: this.sticky,
        }}
      >
        <site-backdrop
          visible={expanded}
          onClick={() => this.toggleExpanded()}
          mobileOnly
        />

        <header>
          {includeBurger ? <app-menu-toggle /> : null}

          {includeLogo ? (
            <a {...href('/')} aria-label="homepage link">
              {capacitorLogo()}
            </a>
          ) : null}

          {/* <div class="jobs-wrapper">
            <a
              class="jobs"
              href="https://ionic.io/about/jobs#positions"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sparkle"
              >
                <g clip-path="url(#clip0)" fill="#D0FDFF">
                  <path d="M4.4 2.9a.65.65 0 011.22 0l.8 2.25c.07.18.22.33.4.4l2.25.8a.65.65 0 010 1.22l-2.25.8a.65.65 0 00-.4.4l-.8 2.25a.65.65 0 01-1.22 0l-.8-2.25a.65.65 0 00-.4-.4l-2.25-.8a.65.65 0 010-1.22l2.25-.8c.18-.07.33-.22.4-.4l.8-2.25zM9.04 1.2c.15-.4.72-.4.87 0l.29.81c.04.13.14.23.27.28l.8.29c.41.14.41.72 0 .87l-.8.28a.46.46 0 00-.27.28l-.3.8c-.14.41-.71.41-.86 0l-.29-.8a.46.46 0 00-.28-.28l-.8-.28a.46.46 0 010-.87l.8-.3a.46.46 0 00.28-.27l.29-.8zM1.5.48c.1-.3.5-.3.6 0l.24.65c.03.1.1.16.2.2l.65.23c.29.1.29.5 0 .61l-.65.24c-.1.03-.17.1-.2.2l-.23.65c-.1.28-.51.28-.62 0l-.23-.66a.32.32 0 00-.2-.2l-.65-.23a.32.32 0 010-.6l.65-.24c.1-.04.17-.1.2-.2l.23-.65z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h12v12H0z" />
                  </clipPath>
                </defs>
              </svg>
              We're hiring
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon arrow"
                width="14"
                height="12"
                viewBox="0 0 512 512"
              >
                <title>Arrow Forward</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M268 112l144 144-144 144M392 256H100"
                />
              </svg>
            </a>
          </div> */}

          <div class="docs-search-wrapper desktop-only">
            <docs-search theme={this.theme} />
          </div>
          <a
            href='/docs/features'
            class={{
              'ui-paragraph-4': true,
              'active': template === 'cli',
            }}
          >
            Features
          </a>
          <a
            href='/docs'
            class={{
              'ui-paragraph-4': true,
              'active': template === 'docs',
            }}
          >
            Docs
          </a>

          <div class="separator desktop-only"></div>

          <nav
            class={{
              routes: true,
              expanded: this.expanded,
            }}
          >
            <div class="routes__header">
              <a aria-label="homepage link" class="logo-wrapper" {...href('/')}>
                {capacitorLogo()}
              </a>
              <button class="close" aria-label="close">
                <svg
                  onClick={this.toggleExpanded}
                  width="10"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9L1 1M9 1L1 9"
                    stroke="#B2BECD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="docs-search-wrapper mobile-only">
              <docs-search />
            </div>
            <a
              href='/blog'
              class="ui-paragraph-4"
              ref={el => (this.links.blog = el)}
            >
              Blog
            </a>
            <a
              {...href('/community')}
              class="ui-paragraph-4"
              ref={el => (this.links.community = el)}
            >
              Community
            </a>
            <a
              {...href('/enterprise')}
              class="ui-paragraph-4"
              ref={el => (this.links.enterprise = el)}
            >
              Enterprise
            </a>
          </nav>

          <div class="separator desktop-only"></div>

          <more-button onClick={() => this.toggleExpanded()} />

          <div class="ctas">
            <a
              href="https://github.com/megabyte-labs/install.doctor"
              target="_blank"
              title="Install Doctor's repository on GitHub"
              rel="noopener"
            >
              <svg
                class="social"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0a8.1 8.1 0 0 0-8 8.2c0 3.63 2.3 6.7 5.47 7.79l.14.01c.3 0 .4-.22.4-.4v-1.4c-.3.06-.57.1-.81.1-1.54 0-1.89-1.2-1.89-1.2-.36-.95-.89-1.2-.89-1.2-.7-.5 0-.5.05-.5.8.06 1.23.84 1.23.84.4.7.94.9 1.41.9.38 0 .72-.12.92-.21.07-.53.28-.9.5-1.1-1.77-.2-3.64-.91-3.64-4.05 0-.9.31-1.63.82-2.2-.08-.21-.35-1.05.08-2.18l.18-.01c.3 0 .94.1 2.02.86a7.5 7.5 0 0 1 4.01 0c1.08-.75 1.73-.86 2.02-.86l.18.01c.44 1.13.16 1.97.08 2.18.5.57.82 1.3.82 2.2 0 3.15-1.87 3.84-3.65 4.04.28.25.54.75.54 1.52l-.01 2.25c0 .2.1.41.4.41l.15-.01A8.19 8.19 0 0 0 16 8.2 8.1 8.1 0 0 0 8 0Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <a
              href="https://discord.com/channels/1077138419953713222/1077138479928049734"
              target="_blank"
              rel="noopener"
              title="Discord link"
            >
              <svg
                class="social"
                width="20"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.93 1.33A15.93 15.93 0 0 0 12.86 0c-.03 0-.05 0-.07.03-.17.33-.37.76-.5 1.1a14.52 14.52 0 0 0-4.57 0A11.3 11.3 0 0 0 7.2.03.06.06 0 0 0 7.14 0a15.89 15.89 0 0 0-4.1 1.35 18.4 18.4 0 0 0-2.93 12 16.3 16.3 0 0 0 5 2.65c.02 0 .05 0 .06-.03.39-.55.73-1.13 1.02-1.74a.07.07 0 0 0-.03-.1 10.7 10.7 0 0 1-1.56-.77.07.07 0 0 1 0-.12l.3-.25a.06.06 0 0 1 .07-.01 11.32 11.32 0 0 0 10.05 0h.06c.1.1.21.18.32.26.03.03.03.1-.01.12-.5.3-1.02.56-1.56.78a.07.07 0 0 0-.04.09c.3.6.65 1.2 1.03 1.74.01.03.04.04.07.03a16.24 16.24 0 0 0 5.02-2.7 18.26 18.26 0 0 0-2.98-11.97ZM6.68 10.9c-.98 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12 1.01 0 1.82.96 1.8 2.12 0 1.16-.8 2.11-1.8 2.11Zm6.65 0c-.99 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12s1.81.96 1.8 2.12c0 1.16-.8 2.11-1.8 2.11Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/InstallDoc"
              target="_blank"
              title="Twitter link"
              rel="noopener"
            >
              <svg
                class="social"
                width="18"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1.9c-.66.32-1.37.53-2.12.63A4 4 0 0 0 17.5.3c-.7.46-1.5.8-2.34.98A3.55 3.55 0 0 0 12.46 0c-2.04 0-3.7 1.8-3.7 4.04 0 .31.04.62.1.92A10.2 10.2 0 0 1 1.26.74 4.33 4.33 0 0 0 2.4 6.13a3.38 3.38 0 0 1-1.68-.5v.04a3.97 3.97 0 0 0 2.96 3.96 3.42 3.42 0 0 1-1.66.07 3.76 3.76 0 0 0 3.45 2.8A7.02 7.02 0 0 1 0 14.18 9.7 9.7 0 0 0 5.65 16c6.8 0 10.52-6.15 10.52-11.5L16.16 4A7.94 7.94 0 0 0 18 1.89Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <Button
              class="primary | ui-paragraph-4"
              anchor
              href='/docs/getting-started'
              kind="regular"
              color="cyan"
              size="md"
            >
              <svg
                width="10"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 520.31"
              >
                <path
                  fill="#fff"
                  d="M179.5 167.9l-.2 167.9-57.76-55.44-57.76-55.43-1.72 1.8L48.1 241.3c-6.73 7.03-12.13 13.03-12 13.34.41 1 163.29 157.08 163.92 157.08.62 0 163.46-156.09 163.88-157.09.13-.3-5.27-6.3-12-13.33l-13.96-14.58-1.72-1.8-57.76 55.44-57.76 55.44-.2-167.9L220.3 0h-40.6l-.2 167.9M0 479.69V500h400v-40.62H0v20.3"
                  fill-rule="evenodd"
                ></path>
              </svg>
              Start
            </Button>
          </div>
        </header>
      </Host>
    )
  }
}

const capacitorLogo = (props?: JSXBase.SVGAttributes) => (
  <svg
    viewBox="149 350 1200 1"
    class="capacitor-logo"
    fill="#000"
    height="24"
    version="1.1"
    width="180"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    y="0px"
    {...props}
  >
    <g>
      <g>
        <path d="M399.1,401.77V295.65h19.86v106.12H399.1z" />
        <path d="M491.42,401.77v-39.11c0-11.37-6.21-20.01-18.04-20.01c-11.37,0-19.1,9.55-19.1,20.92v38.2h-18.34v-74.89h16.52
			l1.21,10.16c7.58-7.43,15.16-11.22,24.56-11.22c17.58,0,31.68,13.19,31.68,36.69v39.26H491.42z"/>
        <path d="M574.64,346.89c-5.31-5-11.37-6.67-18.5-6.67c-8.79,0-13.64,2.73-13.64,7.43c0,4.85,4.4,7.58,13.95,8.19
			c14.1,0.91,31.99,4.09,31.99,23.95c0,13.19-10.76,24.56-32.14,24.56c-11.82,0-23.65-1.97-34.56-13.34l9.1-13.19
			c5.31,5.91,17.43,10.31,25.77,10.46c6.97,0.15,13.49-3.49,13.49-8.94c0-5.15-4.24-7.28-14.86-7.88
			c-14.1-1.06-30.93-6.22-30.93-23.19c0-17.28,17.89-23.35,31.53-23.35c11.67,0,20.46,2.27,29.11,9.85L574.64,346.89z"/>
        <path d="M626.33,305.96v21.22h20.62v15.92h-20.77v32.29c0,7.13,3.94,10.61,9.7,10.61c2.88,0,6.22-0.91,8.94-2.27l5.15,15.77
			c-5.31,2.12-9.7,3.03-15.31,3.18c-16.22,0.61-26.83-8.64-26.83-27.29V343.1h-13.95v-15.92h13.95v-19.25L626.33,305.96z"/>
        <path d="M720.02,327.03h17.74v74.74h-17.43l-0.91-10.91c-4.24,8.79-15.92,13.04-24.26,13.19c-22.13,0.15-38.51-13.49-38.51-39.72
			c0-25.77,17.13-39.26,38.96-39.11c10.01,0,19.56,4.7,23.8,12.13L720.02,327.03z M675.14,364.33c0,14.25,9.85,22.74,22.13,22.74
			c29.11,0,29.11-45.33,0-45.33C685,341.74,675.14,350.08,675.14,364.33z"/>
        <path d="M771.71,295.8v105.97h-18.34V295.8H771.71z" />
        <path d="M806.27,295.8v105.97h-18.34V295.8H806.27z" />
        <path d="M945.74,347.5c0.61,26.98-16.68,54.27-53.82,54.27c-11.98,0-23.95,0-35.93,0V295.65c11.98,0,23.95,0,35.93,0
			C927.85,295.65,945.13,321.42,945.74,347.5z M864.18,303.38v90.5h27.74c31.53,0,46.08-23.65,45.63-46.39
			c-0.45-22.13-15.01-44.12-45.63-44.12H864.18z"/>
        <path d="M960.89,364.48c0-23.8,16.98-38.96,38.05-38.96c21.07,0,38.05,15.16,38.05,38.96c0,23.8-16.98,38.35-38.05,38.35
			C977.87,402.83,960.89,388.28,960.89,364.48z M1029.72,364.48c0-19.4-13.79-31.99-30.77-31.99s-30.77,12.58-30.77,31.99
			s13.8,31.08,30.77,31.08S1029.72,383.88,1029.72,364.48z"/>
        <path d="M1115.52,391.31c-7.58,7.58-17.43,11.22-27.29,11.22c-21.07,0-38.5-14.55-38.5-38.2c0-23.65,16.83-38.2,38.5-38.2
			c9.85,0,19.71,3.79,27.29,11.22l-4.85,4.7c-6.06-6.06-14.4-8.94-22.44-8.94c-16.98,0-31.23,11.07-31.23,31.23
			c0,20.16,14.25,31.23,31.23,31.23c8.04,0,16.22-3.18,22.29-9.25L1115.52,391.31z"/>
        <path d="M1147.8,304.29v22.59h25.47v6.22h-25.47v45.63c0,10.16,2.12,17.28,13.8,17.28c3.64,0,7.73-1.21,11.52-3.03l2.58,6.06
			c-4.7,2.27-9.4,3.79-14.1,3.79c-15.92,0-21.07-9.4-21.07-24.1V333.1h-15.92v-6.22h15.92v-21.83L1147.8,304.29z"/>
        <path d="M1186.92,364.48c0-23.8,16.98-38.96,38.05-38.96c21.07,0,38.05,15.16,38.05,38.96c0,23.8-16.98,38.35-38.05,38.35
			C1203.89,402.83,1186.92,388.28,1186.92,364.48z M1255.74,364.48c0-19.4-13.79-31.99-30.77-31.99s-30.77,12.58-30.77,31.99
			s13.8,31.08,30.77,31.08S1255.74,383.88,1255.74,364.48z"/>
        <path d="M1287.12,326.88l0.3,13.34c4.7-10.16,15.31-14.1,24.86-14.1c5.61-0.15,11.07,1.36,16.07,4.4l-3.33,6.06
			c-3.94-2.43-8.34-3.49-12.73-3.49c-13.95,0.15-24.71,11.37-24.71,25.01v43.66h-7.43v-74.89H1287.12z"/>
      </g>
      <g>
        <path d="M336.36,290.63v118.75c0,12.69-10.29,22.98-22.98,22.98H194.63c-12.69,0-22.98-10.29-22.98-22.98v-13.73h141.5
			c4.75,0,8.6-3.85,8.6-8.6s-3.85-8.6-8.6-8.6h-141.5V358.6h115.7c4.75,0,8.6-3.85,8.6-8.6c0-4.75-3.85-8.6-8.6-8.6h-115.7v-19.85
			h93.21c4.75,0,8.6-3.85,8.6-8.6s-3.85-8.6-8.6-8.6h-93.21v-13.73c0-12.69,10.29-22.98,22.98-22.98h118.75
			C326.06,267.65,336.36,277.93,336.36,290.63z"/>
      </g>
    </g>
  </svg>
)
