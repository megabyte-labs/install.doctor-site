import { Component, h, Prop } from '@stencil/core'
import { defaults } from 'src/store'

import { importResource } from '../../../utils/common'

declare let window: any
declare let jQuery: any
declare let RS_MODULES: any
declare let revapi2: any
declare let revslider_showDoubleJqueryError: any

@Component({
  tag: 'top-parallax',
  styleUrl: 'top-parallax.scss',
  scoped: true,
})
export class LandingPage {
  @Prop() defaults: typeof defaults
  @Prop() scriptsLoaded: number = 0;

  disconnectedCallback() {
    // this.parallaxInstance.distroy()
  }

  onScriptLoaded() {
    this.scriptsLoaded++
    if (this.scriptsLoaded === 3) {
      if (window.RS_MODULES === undefined) window.RS_MODULES = {}
      if (RS_MODULES.modules === undefined) RS_MODULES.modules = {}
      RS_MODULES.modules["aiidslider"] = {
        once: RS_MODULES.modules["aiidslider"] !== undefined ? RS_MODULES.modules["aiidslider"].once : undefined, init: function () {
          window.revapi2 = window.revapi2 === undefined || window.revapi2 === null || window.revapi2.length === 0 ? document.getElementById("ai-id-slider") : window.revapi2
          if (window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length == 0) { window.revapi2initTry = window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1; if (window.revapi2initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["aiidslider"].init() }); return }
          window.revapi2 = jQuery(window.revapi2)
          if (window.revapi2.revolution == undefined) { revslider_showDoubleJqueryError("ai-id-slider"); return }
          revapi2.revolutionInit({
            revapi: "revapi2",
            DPR: "ax4",
            sliderLayout: "fullscreen",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "900,768,960,720",
            minHeight: "400px",
            perspective: 600,
            perspectiveType: "isometric",
            keepBPHeight: true,
            observeWrap: true,
            editorheight: "900,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            ignoreHeightChange: false,
            fullScreenOffsetContainer: "site-header",
            fullScreenOffset: "64px",
            stopAtSlide: 1,
            stopAfterLoops: 0,
            stopLoop: true,
            progressBar: {
              size: "4px",
              reset: "animate"
            },
            navigation: {
              keyboardNavigation: true,
              wheelCallDelay: 1000,
              onHoverStop: false,
              touch: {
                touchenabled: true,
                touchOnDesktop: true
              },
              arrows: {
                enable: true,
                style: "clean_arrows",
                left: {
                  h_offset: 0
                },
                right: {
                  h_offset: 10
                }
              }
            },
            parallax: {
              levels: [7, -7, 3, -3, 10, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
              type: "mousescroll",
              origo: "slidercenter",
              speed: "2000ms",
              disable_onmobile: true
            },
            scrolleffect: {
              set: true,
              fade: true,
              blur: true,
              multiplicator: 1.24,
              multiplicator_layers: 1.24
            },
            viewPort: {
              global: false,
              globalDist: "-200px",
              enable: false
            },
            fallbacks: {
              allowHTML5AutoPlayOnAndroid: true
            },
          })

          if (revapi2 !== undefined) jQuery.fn.revolution.theClusterInit(revapi2[0].id, { url: "https://wordpress.megabyte.space/wp-content/plugins/revslider-thecluster-addon/" })

        }
      } // End of RevInitScript
      if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal() };
    }
  }

  componentDidLoad() {
    importResource({ propertyName: 'three', link: '/assets/js/three.min.js' }, () => {
      this.onScriptLoaded();
    })
    importResource({ propertyName: 'rs6', link: '/assets/js/rs6.min.js' }, () => {
      this.onScriptLoaded();
    })
    importResource({ propertyName: 'rbtools', link: '/assets/js/rbtools.min.js' }, () => {
      this.onScriptLoaded();
    })
  }

  render() {
    return (
      <div innerHTML={`
      <rs-module-wrap id="ai-id-slider_wrapper" data-alias="ai-particles-id" data-source="gallery" style="visibility:hidden;background:transparent;padding:0;">
				<rs-module id="ai-id-slider" class="rs-respect-topbar" style="" data-version="6.6.20">
					<rs-slides style="overflow: hidden; position: absolute;">
						<rs-slide style="position: absolute;" data-key="rs-4" data-title="Slide"data-sba="f:true;b:true;" data-anim="adpr:false;" data-in="o:0;col:400;" data-out="a:false;" id="ai-particles">
							<img src="/assets/img/transparent.png" alt="Slide" title="..." class="rev-slidebg tp-rs-img" data-bg="c:linear-gradient(130deg, rgba(29,130,183,1) 0%, rgba(5,61,122,1) 30%, rgba(12,28,59,1) 65%, rgba(1,10,38,1) 100%);" data-parallax="1" data-no-retina>
<!--
							--><rs-group
								id="slider-2-slide-4-layer-0"
								data-type="group"
								data-rsp_ch="on"
								data-xy="xo:69px,56px,42px,0;y:m,m,m,t;yo:-35px,-28px,-21px,143px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;a:left,left,left,center;"
								data-dim="w:65%,65%,65%,100%;"
								data-frame_0="o:1;"
								data-frame_999="o:0;st:w;sR:8700;sA:9000;"
								style="z-index:11;"
							><!--
								--><rs-layer
									id="slider-2-slide-4-layer-18"
									class="rs-pxl-3"
									data-type="shape"
									data-rsp_ch="on"
									data-xy="x:l,l,l,c;xo:111px,91px,69px,0;yo:275px,227px,172px,106px;"
									data-pos="a"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:545px,450px,341px,210px;h:10px,8px,6px,3px;"
									data-vbility="t,t,t,f"
									data-clip="u:true;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="e:power4.inOut;st:300;sp:1000;sR:300;"
									data-frame_999="o:0;st:w;sR:7700;"
									style="z-index:8;background:linear-gradient(90deg, rgba(252,180,120,1) 0%, rgba(255,124,143,1) 100%);"
								>
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-4-layer-5"
									data-type="text"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:140,115,87,53;f:left,none,none,none;c:both,none,none,none;l:140,115,87,53;fw:500;a:center,left,left,center;"
									data-flcr="f:left,none,none,none;c:both,none,none,none;"
									data-padding="b:20,17,13,8;"
									data-frame_0="o:1;"
									data-frame_0_lines="d:5;x:cyc(-20|20);o:0;"
									data-frame_1="e:power4.out;sp:1000;"
									data-frame_1_lines="d:10;"
									data-frame_999="o:0;st:w;sR:7700;"
									style="z-index:7;font-family:'Inter';"
								>The Age Of<br />
Artificial<br />
Intelligence
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-4-layer-1"
									data-type="text"
									data-color="rgba(255, 255, 255, 0.7)"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:25,20,15,20;l:35,28,21,25;fw:700;a:left,left,left,center;"
									data-margin="t:40,33,25,20;b:75,62,47,30;"
									data-padding="r:200,165,125,30;l:0,0,0,30;"
									data-frame_1="st:500;sp:1000;sR:500;"
									data-frame_999="o:0;st:w;sR:7500;"
									style="z-index:6;font-family:'Roboto Mono';"
								>Seamlessly integrate the best AI tools into your desktop experience with our vibrant community! Explore GitHub's hottest tools and engage with like-minded innovators pushing the boundaries of artificial intelligence.<br />

								</rs-layer><!--
							--></rs-group><!--

							--><rs-layer
								id="slider-2-slide-4-layer-2"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:r,r,r,c;xo:-200px,-165px,-125px,-59px;y:m,m,m,t;yo:0,0,0,-80px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:1000px,825px,626px,500px;h:1000px,825px,626px,500px;"
								data-frame_0="sX:0;sY:0;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:10%;mi:12;mp:24;ma:2000;sf:random3D;mc:direction;mn:1;mf:109;mm:1;mm2:1;mm3:1;g1X:-20;g2X:0;g3X:20;gl:1;gv:11;t1:1;t2:;t3:1;sIX:0;sIY:0;sVX:0;sVY:4;pc:radial-gradient(ellipse at center, rgba(5,61,122,1) 0%, rgba(5,61,122,1) 50%, rgba(29,130,183,1) 75%, rgba(255,124,143,1) 90%, rgba(224,170,97,1) 100%);cim:1%;as:loop;aniY:6;mps:lifetime;ld:20;mg:1;msp:;msv:6;ifm:indivRota;ifr:100;'
								style="z-index:12;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-3"
								class="rs-pxl-1"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:r;xo:-850px,-701px,-532px,-328px;y:m;yo:-50px,-41px,-31px,-19px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:1500px,1238px,940px,579px;h:1500px,1238px,940px,579px;"
								data-basealign="slide"
								data-frame_0="x:100px,82px,62px,38px;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style="z-index:9;background:radial-gradient(ellipse at center, rgba(252,180,120,1) 0%, rgba(252,180,120,0.99) 4.67%, rgba(251,180,119,0.96) 9.34%, rgba(250,179,118,0.9) 14.01%, rgba(248,178,117,0.83) 18.68%, rgba(246,178,115,0.75) 23.35%, rgba(244,177,113,0.65) 28.02%, rgba(241,176,111,0.55) 32.69%, rgba(239,175,109,0.45) 37.36%, rgba(236,174,107,0.35) 42.03%, rgba(234,173,105,0.25) 46.70%, rgba(232,173,103,0.17) 51.37%, rgba(230,172,102,0.1) 56.04%, rgba(229,171,101,0.04) 60.71%, rgba(228,171,100,0.01) 65.38%, rgba(228,171,100,0) 70%, rgba(228,171,100,0) 70.67%, rgba(228,171,100,0) 71.34%, rgba(228,171,100,0) 72.01%, rgba(227,171,99,0) 72.68%, rgba(227,171,99,0) 73.35%, rgba(227,171,99,0) 74.02%, rgba(226,171,99,0) 74.69%, rgba(226,170,98,0) 75.36%, rgba(225,170,98,0) 76.03%, rgba(225,170,98,0) 76.70%, rgba(225,170,98,0) 77.37%, rgba(224,170,97,0) 78.04%, rgba(224,170,97,0) 78.71%, rgba(224,170,97,0) 79.38%, rgba(224,170,97,0) 80%);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-4"
								class="rs-pxl-2"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;y:m;yo:500px,412px,313px,193px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:1200px,990px,752px,463px;h:1200px,990px,752px,463px;"
								data-frame_0="y:100px,82px,62px,38px;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style="z-index:8;background:radial-gradient(ellipse at center, rgba(247,86,24,1) 0%, rgba(247,86,25,0.99) 4.67%, rgba(247,87,28,0.96) 9.34%, rgba(248,90,35,0.9) 14.01%, rgba(248,92,43,0.83) 18.68%, rgba(249,95,52,0.75) 23.35%, rgba(249,98,63,0.65) 28.02%, rgba(250,102,74,0.55) 32.69%, rgba(251,105,85,0.45) 37.36%, rgba(252,109,96,0.35) 42.03%, rgba(252,112,107,0.25) 46.70%, rgba(253,115,116,0.17) 51.37%, rgba(253,118,124,0.1) 56.04%, rgba(254,120,131,0.04) 60.71%, rgba(254,121,134,0.01) 65.38%, rgba(254,121,135,0) 70%, rgba(254,121,135,0) 70.33%, rgba(254,121,135,0) 70.66%, rgba(254,121,136,0) 70.99%, rgba(254,122,136,0) 71.32%, rgba(254,122,137,0) 71.65%, rgba(254,122,138,0) 71.98%, rgba(254,122,139,0) 72.31%, rgba(255,123,139,0) 72.64%, rgba(255,123,140,0) 72.97%, rgba(255,123,141,0) 73.30%, rgba(255,123,142,0) 73.63%, rgba(255,124,142,0) 73.96%, rgba(255,124,143,0) 74.29%, rgba(255,124,143,0) 74.62%, rgba(255,124,143,0) 75%);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-16"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;y:m;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:100%;h:100%;"
								data-basealign="slide"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style="z-index:10;background:linear-gradient(330deg, rgba(12,28,59,1) 0%, rgba(14,29,60,0.99) 3.33%, rgba(21,31,62,0.96) 6.66%, rgba(34,37,67,0.9) 9.99%, rgba(50,43,72,0.83) 13.32%, rgba(67,50,78,0.75) 16.65%, rgba(89,58,86,0.65) 19.98%, rgba(111,67,93,0.55) 23.31%, rgba(134,76,101,0.45) 26.64%, rgba(156,85,108,0.35) 29.97%, rgba(178,93,116,0.25) 33.30%, rgba(195,100,122,0.17) 36.63%, rgba(211,106,127,0.1) 39.96%, rgba(224,112,132,0.04) 43.29%, rgba(231,114,134,0.01) 46.62%, rgba(233,115,135,0) 50%, rgba(233,115,135,0) 50.33%, rgba(234,115,135,0) 50.66%, rgba(235,116,136,0) 50.99%, rgba(237,117,136,0) 51.32%, rgba(239,117,137,0) 51.65%, rgba(241,118,138,0) 51.98%, rgba(243,119,139,0) 52.31%, rgba(245,120,139,0) 52.64%, rgba(247,121,140,0) 52.97%, rgba(250,122,141,0) 53.30%, rgba(251,122,142,0) 53.63%, rgba(253,123,142,0) 53.96%, rgba(254,124,143,0) 54.29%, rgba(255,124,143,0) 54.62%, rgba(255,124,143,0) 55%);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-17"
								class="rev-btn"
								data-type="button"
								data-rsp_ch="on"
								data-xy="x:l,l,l,c;xo:800px,660px,501px,0;y:m,m,m,t;yo:200px,165px,125px,620px;"
								data-text="w:normal;s:35,28,21,25;l:60,49,37,35;fw:700;"
								data-dim="minh:0px,none,none,none;"
								data-actions='o:click;a:scrollbelow;sp:1000ms;e:power1.inOut;'
								data-border="bos:solid;boc:rgba(255, 255, 255, 0.25);bow:0,0,2px,0;"
								data-frame_0="sX:2;sY:2;"
								data-frame_1="st:1500;sp:1000;sR:1500;"
								data-frame_999="o:0;st:w;sR:6500;"
								data-frame_hover="sX:1.1;sY:1.1;c:#fff;boc:#fff;bor:0px,0px,0px,0px;bos:solid;bow:0,0,2px,0;e:power1.inOut;"
								style="z-index:13;font-family:'Inter';"
							>Start Your AI Journey
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-19"
								class="rs-pxl-5"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="xo:-650px,-536px,-407px,-251px;yo:-650px,-536px,-407px,-251px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:1200px,990px,752px,463px;h:1200px,990px,752px,463px;"
								data-frame_0="y:100px,82px,62px,38px;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style="z-index:7;background:radial-gradient(ellipse at center, rgba(29,130,183,1) 0%, rgba(29,130,183,0.99) 4.67%, rgba(29,130,183,0.96) 9.34%, rgba(29,130,183,0.9) 14.01%, rgba(29,130,183,0.83) 18.68%, rgba(29,130,183,0.75) 23.35%, rgba(29,130,183,0.65) 28.02%, rgba(29,130,183,0.55) 32.69%, rgba(29,130,183,0.45) 37.36%, rgba(29,130,183,0.35) 42.03%, rgba(29,130,183,0.25) 46.70%, rgba(29,130,183,0.17) 51.37%, rgba(29,130,183,0.1) 56.04%, rgba(29,130,183,0.04) 60.71%, rgba(29,130,183,0.01) 65.38%, rgba(29,130,183,0) 70%, rgba(29,130,183,0) 70.33%, rgba(29,130,183,0) 70.66%, rgba(29,130,183,0) 70.99%, rgba(29,130,183,0) 71.32%, rgba(29,130,183,0) 71.65%, rgba(29,130,183,0) 71.98%, rgba(29,130,183,0) 72.31%, rgba(29,130,183,0) 72.64%, rgba(29,130,183,0) 72.97%, rgba(29,130,183,0) 73.30%, rgba(29,130,183,0) 73.63%, rgba(29,130,183,0) 73.96%, rgba(29,130,183,0) 74.29%, rgba(29,130,183,0) 74.62%, rgba(29,130,183,0) 75%);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-4-layer-20"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:r,r,r,c;xo:-200px,-165px,-125px,0;y:m,m,m,t;yo:0,0,0,-200px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:1000px,825px,626px,500px;h:1000px,825px,626px,500px;"
								data-vbility="t,t,f,f"
								data-frame_0="sX:0;sY:0;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:5%;mi:10;mp:24;ma:500;sf:random3D;mc:direction;mn:1;mf:109;mm:1;mm2:1;mm3:1;g1X:-20;g2X:0;g3X:20;gl:1;gv:11;t1:1;t2:;t3:1;sIX:0;sIY:0;sVX:0;sVY:4;pc:radial-gradient(ellipse at center, rgba(5,61,122,1) 0%, rgba(5,61,122,1) 50%, rgba(29,130,183,1) 75%, rgba(255,124,143,1) 90%, rgba(224,170,97,1) 100%);pax:300%;cim:1%;as:loop;aniY:6;mps:lifetime;ld:20;mg:1;msp:;msv:6;ifm:indivRota;ifr:50;vfx:bokeh;vmi:10;vma:30;'
								style="z-index:6;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--
-->						</rs-slide>
						<rs-slide style="position: absolute;" data-key="rs-5" data-title="Slide" data-anim="ms:300ms;" data-in="o:0;" data-out="a:false;">
							<img src="/assets/img/transparent.png" alt="Slide" title="..." class="rev-slidebg tp-rs-img" data-bg="c:#ffffff;" data-parallax="off" data-no-retina>
<!--
							--><rs-group
								id="slider-2-slide-5-layer-0"
								data-type="group"
								data-rsp_ch="on"
								data-xy="x:c;y:m;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;a:center;"
								data-dim="w:100%;"
								data-frame_0="o:1;"
								data-frame_999="o:0;st:w;sR:8700;sA:9000;"
								style="z-index:8;"
							><!--
								--><rs-layer
									id="slider-2-slide-5-layer-18"
									class="rs-pxl-4"
									data-type="shape"
									data-rsp_ch="on"
									data-xy="x:c;xo:310px,256px,194px,119px;yo:250px,206px,156px,96px;"
									data-pos="a"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:560px,462px,351px,216px;h:10px,8px,6px,3px;"
									data-clip="u:true;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="e:power4.inOut;st:300;sp:1000;sR:300;"
									data-frame_999="o:0;st:w;sR:7700;"
									style="z-index:13;background:linear-gradient(90deg, rgba(252,65,162,1) 0%, rgba(28,144,216,1) 100%);"
								>
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-5-layer-5"
									class="rs-pxl-3 rs-pxmask"
									data-type="text"
									data-color="#000000"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:140,115,87,53;l:124,102,77,47;fw:500;a:center;"
									data-padding="b:20,17,13,8;"
									data-frame_0="o:1;"
									data-frame_0_words="d:5;x:cyc(-20|20);o:0;"
									data-frame_1="e:power4.out;sp:1000;"
									data-frame_1_words="d:5;"
									data-frame_999="o:0;st:w;sR:7750;"
									style="z-index:12;font-family:'Inter';"
								>AI Driven Desktop-as-Code
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-5-layer-1"
									data-type="text"
									data-color="#000000"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:25,20,15,20;l:35,28,21,25;fw:700;a:center;"
									data-margin="t:40,33,25,20;b:75,62,47,30;"
									data-padding="r:20,17,13,50;l:20,17,13,50;"
									data-frame_1="st:500;sp:1000;sR:500;"
									data-frame_999="o:0;st:w;sR:7500;"
									style="z-index:11;font-family:'Roboto Mono';"
								>Connect the dots of innovation, empowerment, and transformation by engaging with our community and desktop provisioning model.
								</rs-layer><!--

								--><rs-group
									id="slider-2-slide-5-layer-10"
									data-type="group"
									data-rsp_ch="on"
									data-xy="xo:256px,211px,160px,98px;yo:457px,377px,286px,176px;"
									data-pos="r"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:300px,247px,187px,100%;"
									data-disp="inline-block"
									data-border="bos:solid,solid,solid,none;boc:#fc41a2;bow:0,2px,0,0px;"
									data-clip="u:true;o:t;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="st:750;sp:1000;sR:750;"
									data-frame_999="o:0;st:w;sR:7250;sA:9000;"
									style="z-index:10;display:inline-block;"
								><!--
									--><rs-layer
										id="slider-2-slide-5-layer-11"
										data-type="text"
										data-color="#000000"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:24,19,14,25;l:24,19,14,30;fw:700;a:center;"
										data-padding="t:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:7;font-family:'Inter';"
									>Innovate
									</rs-layer><!--

									--><rs-layer
										id="slider-2-slide-5-layer-12"
										data-type="text"
										data-color="rgba(0, 0, 0, 0.5)"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:20,16,12,17;l:20,16,12,15;fw:700;a:center;"
										data-margin="t:5,4,3,2;"
										data-padding="r:10,8,6,4;b:10,8,6,4;l:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:6;font-family:'Roboto Mono';"
									>Foster creative breakthroughs
									</rs-layer><!--
								--></rs-group><!--

								--><rs-group
									id="slider-2-slide-5-layer-9"
									data-type="group"
									data-rsp_ch="on"
									data-xy="xo:256px,211px,160px,98px;yo:457px,377px,286px,176px;"
									data-pos="r"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:300px,247px,187px,100%;"
									data-disp="inline-block"
									data-border="bos:solid,solid,solid,none;boc:#fc41a2;bow:0,2px,0,0px;"
									data-clip="u:true;o:t;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="st:850;sp:1000;sR:850;"
									data-frame_999="o:0;st:w;sR:7150;sA:9000;"
									style="z-index:9;display:inline-block;"
								><!--
									--><rs-layer
										id="slider-2-slide-5-layer-6"
										data-type="text"
										data-color="#000000"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:24,19,14,25;l:24,19,14,30;fw:700;a:center;"
										data-margin="t:0,0,0,10;"
										data-padding="t:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:7;font-family:'Inter';"
									>Empower
									</rs-layer><!--

									--><rs-layer
										id="slider-2-slide-5-layer-8"
										data-type="text"
										data-color="rgba(0, 0, 0, 0.5)"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:20,16,12,17;l:20,16,12,15;fw:700;a:center;"
										data-margin="t:5,4,3,2;"
										data-padding="r:10,8,6,4;b:10,8,6,4;l:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:6;font-family:'Roboto Mono';"
									>Unlock your maximum potential
									</rs-layer><!--
								--></rs-group><!--

								--><rs-group
									id="slider-2-slide-5-layer-13"
									data-type="group"
									data-rsp_ch="on"
									data-xy="xo:256px,211px,160px,98px;yo:457px,377px,286px,176px;"
									data-pos="r"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:300px,247px,187px,100%;"
									data-disp="inline-block"
									data-clip="u:true;o:t;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="st:950;sp:1000;sR:950;"
									data-frame_999="o:0;st:w;sR:7050;sA:9000;"
									style="z-index:8;display:inline-block;"
								><!--
									--><rs-layer
										id="slider-2-slide-5-layer-14"
										data-type="text"
										data-color="#000000"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:24,19,14,25;l:24,19,14,30;fw:700;a:center;"
										data-margin="t:0,0,0,10;"
										data-padding="t:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:7;font-family:'Inter';"
									>Transform
									</rs-layer><!--

									--><rs-layer
										id="slider-2-slide-5-layer-15"
										data-type="text"
										data-color="rgba(0, 0, 0, 0.5)"
										data-rsp_ch="on"
										data-xy="xo:218px,180px,136px,83px;yo:602px,497px,377px,232px;"
										data-pos="r"
										data-text="w:normal;s:20,16,12,17;l:20,16,12,15;fw:700;a:center;"
										data-margin="t:5,4,3,2;"
										data-padding="r:10,8,6,4;b:10,8,6,4;l:10,8,6,4;"
										data-frame_999="o:0;st:w;sR:8700;"
										style="z-index:6;font-family:'Roboto Mono';"
									>Revolutionize your world
									</rs-layer><!--
								--></rs-group><!--

								--><rs-layer
									id="slider-2-slide-5-layer-7"
									data-type="shape"
									data-rsp_ch="on"
									data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
									data-pos="r"
									data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
									data-flcr="c:both;"
									data-dim="w:100%;h:70px,57px,43px,40px;"
									data-frame_999="o:0;st:w;sR:8700;"
									style="z-index:7;"
								>
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-5-layer-17"
									class="rev-btn"
									data-type="button"
									data-color="#000000"
									data-rsp_ch="on"
									data-xy="xo:913px,753px,572px,352px;yo:446px,368px,279px,172px;"
									data-pos="r"
									data-text="w:normal;s:35,28,21,25;l:60,49,37,35;fw:700;"
									data-dim="minh:0px,none,none,none;"
									data-actions='o:click;a:scrollbelow;sp:1000ms;e:power1.inOut;'
									data-disp="inline-block"
									data-border="bos:solid;boc:#fc41a2;bow:0,0,2px,0;"
									data-frame_0="sX:2;sY:2;"
									data-frame_1="st:1500;sp:1000;sR:1500;"
									data-frame_999="o:0;st:w;sR:6500;"
									data-frame_hover="sX:1.1;sY:1.1;c:#000;boc:#1c90d8;bor:0px,0px,0px,0px;bos:solid;bow:0,0,2px,0;e:power1.inOut;"
									style="z-index:6;font-family:'Inter';display:inline-block;"
								>Start Your AI Journey
								</rs-layer><!--
							--></rs-group><!--

							--><rs-layer
								id="slider-2-slide-5-layer-2"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:100%;h:100%;"
								data-basealign="slide"
								data-frame_0="sX:0;sY:0;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:15%;mi:12;mp:50;ma:2000;mc:normalCW;sz:-9;mm2:10;g2X:0;g3X:5;gl:1;gv:7;pc:radial-gradient(ellipse at center, rgba(255,236,33,1) 0%, rgba(28,144,216,1) 25%, rgba(252,65,162,1) 50%, rgba(252,65,162,1) 100%);po:;cim:1%;mps:lifetime;ld:20;msp:;msv:1;vma:20;'
								style="z-index:7;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-5-layer-21"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:100%;h:100%;"
								data-vbility="t,t,f,f"
								data-basealign="slide"
								data-frame_0="sX:0;sY:0;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:10%;mi:10;mp:50;ma:1000;mc:normalCW;sz:-9;mm2:10;g2X:0;g3X:5;pc:radial-gradient(ellipse at center, rgba(255,236,33,1) 0%, rgba(28,144,216,1) 25%, rgba(252,65,162,1) 50%, rgba(252,65,162,1) 100%);po:;cim:1%;mps:lifetime;ld:20;mg:1;msp:;msv:1;ifm:;vfx:bokeh;vbr:;'
								style="z-index:6;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--
-->						</rs-slide>
						<rs-slide style="position: absolute;" data-key="rs-6" data-title="Slide" data-anim="ms:300ms;" data-in="o:0;" data-out="a:false;">
							<img src="/assets/img/transparent.png" alt="Slide" title="..." class="rev-slidebg tp-rs-img" data-bg="c:linear-gradient(300deg, rgba(116,0,184,1) 0%, rgba(105,48,195,1) 30%, rgba(94,96,206,1) 60%, rgba(100,223,223,1) 100%);" data-parallax="off" data-no-retina>
<!--
							--><rs-group
								id="slider-2-slide-6-layer-0"
								data-type="group"
								data-rsp_ch="on"
								data-xy="x:c;y:m,m,m,t;yo:0,0,0,260px;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;a:left,left,left,center;"
								data-dim="w:85%,85%,85%,100%;"
								data-frame_0="o:1;"
								data-frame_999="o:0;st:w;sR:8700;sA:9000;"
								style="z-index:8;"
							><!--
								--><rs-layer
									id="slider-2-slide-6-layer-18"
									class="rs-pxl-4"
									data-type="shape"
									data-rsp_ch="on"
									data-xy="x:c;yo:140px,115px,87px,53px;"
									data-pos="a"
									data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
									data-dim="w:524px,432px,328px,202px;h:10px,8px,6px,3px;"
									data-clip="u:true;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="e:power4.inOut;st:300;sp:1000;sR:300;"
									data-frame_999="o:0;st:w;sR:7700;"
									style="z-index:13;background:linear-gradient(90deg, rgba(128,255,219,1) 0%, rgba(78,168,222,1) 100%);"
								>
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-6-layer-5"
									class="rs-pxl-3"
									data-type="text"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:140,115,87,53;l:140,115,87,53;fw:500;a:center;"
									data-padding="b:20,17,13,8;"
									data-frame_0="o:1;"
									data-frame_0_lines="d:5;x:cyc(20|-20);o:0;"
									data-frame_1="e:power4.out;sp:1000;"
									data-frame_1_lines="d:10;"
									data-frame_999="o:0;st:w;sR:7700;"
									style="z-index:12;font-family:'Inter';"
								>Unleash<br />
The Power Of<br />
AI Integration
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-6-layer-1"
									data-type="text"
									data-color="rgba(255, 255, 255, 0.7)"
									data-rsp_ch="on"
									data-xy="y:m;"
									data-pos="r"
									data-text="w:normal;s:25,20,15,20;l:35,28,21,25;fw:700;a:center;"
									data-margin="t:40,33,25,20;b:75,62,47,30;"
									data-padding="r:0,0,0,30;l:0,0,0,30;"
									data-frame_1="st:500;sp:1000;sR:500;"
									data-frame_999="o:0;st:w;sR:7500;"
									style="z-index:11;font-family:'Roboto Mono';"
								>Harness AI's potential. Seamlessly integrate intelligence into your desktop experience for unparalleled efficiency and innovation.
								</rs-layer><!--

								--><rs-layer
									id="slider-2-slide-6-layer-17"
									class="rev-btn"
									data-type="button"
									data-color="#7400b8"
									data-rsp_ch="on"
									data-xy="x:c;y:b;yo:-120px,-99px,-75px,-50px;"
									data-pos="a"
									data-text="w:normal;s:20,16,12,15;l:69,56,42,40;ls:2px,1px,0px,0px;fw:700;a:center;"
									data-dim="minh:0px,none,none,none;"
									data-actions='o:click;a:scrollbelow;sp:1000ms;e:power1.inOut;'
									data-disp="inline-block"
									data-padding="r:40,33,25,20;l:40,33,25,20;"
									data-clip="u:true;"
									data-frame_0="x:0%;o:1;cp:0%;"
									data-frame_1="e:power4.out;st:1500;sp:1000;"
									data-frame_999="o:0;st:w;sR:6500;"
									data-frame_hover="c:#6930c3;bgc:linear-gradient(90deg, rgba(128,255,219,1) 0%, rgba(78,168,222,1) 100%);bor:0px,0px,0px,0px;e:power1.inOut;"
									style="z-index:6;background:linear-gradient(90deg, rgba(78,168,222,1) 0%, rgba(128,255,219,1) 100%);font-family:'Roboto Mono';text-transform:uppercase;display:inline-block;"
								>Start Your AI Journey
								</rs-layer><!--
							--></rs-group><!--

							--><rs-layer
								id="slider-2-slide-6-layer-2"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;y:m;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:100%;h:100%;"
								data-basealign="slide"
								data-frame_0="sX:1.5;sY:1.5;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:4%;mi:10;ma:300;mc:random;mn:1;mf:282;sz:7;mm:100;mm2:100;mm3:100;g1X:-10;g2X:0;g3X:10;gv:11;sIX:3;sIY:3;sIZ:3;sVX:10;sVY:-6;sM:4;pc:linear-gradient(170deg, rgba(100,223,223,1) 0%, rgba(128,255,219,1) 100%);po:;cim:1;aniY:20;mps:lifetime;ld:2;mp1:xy;mp2:xy;mp3:xy;msp:;msv:1;ifm:indivRota;ifr:10;vbr:;vma:20;'
								style="z-index:7;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--

							--><rs-layer
								id="slider-2-slide-6-layer-22"
								class="tp-shape tp-shapewrapper tp-thecluster"
								data-type="shape"
								data-rsp_ch="on"
								data-xy="x:c;y:m;"
								data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
								data-dim="w:100%;h:100%;"
								data-vbility="t,t,f,f"
								data-basealign="slide"
								data-frame_0="sX:1.5;sY:1.5;"
								data-frame_1="e:power4.out;sp:1500;"
								data-frame_999="o:0;st:w;sR:7500;"
								 data-clusterdata='ms:3%;mi:25;ma:200;mc:random;mn:1;mf:282;sz:7;mm:100;mm2:100;mm3:100;g1X:-10;g2X:0;g3X:10;gv:11;sIX:3;sIY:3;sIZ:3;sVX:10;sVY:-6;sM:4;pc:linear-gradient(170deg, rgba(100,223,223,1) 0%, rgba(128,255,219,1) 100%);po:;cim:1;aniY:20;mps:lifetime;ld:10;mg:1;mp1:xy;mp2:xy;mp3:xy;msp:;msv:1;ifm:indivRota;ifr:5;vfx:bokeh;vbr:;vma:20;'
								style="z-index:6;background-color:rgba(0,0,0,0.0);"
							>
							</rs-layer><!--
-->						</rs-slide>
					</rs-slides>
				</rs-module>
      </rs-module-wrap>
  `}></div>)
  }
}
