import { Component, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'prismic-image',
  styleUrl: 'prismic-image.scss'
})
export class PrismicImage {
  @Prop() image
  @Prop() params
  @Prop() height: number | string
  @Prop() width: number | string
  @Prop() loading: 'eager' | 'lazy' = 'lazy'
  @Prop() alt: string
  @Prop() class: string
  __rest

  @Element() el

  render() {
    // This was copied from @ionic-internal/ionic-ds after it was compiled which is not available on GitHub. Not sure
    // how they are getting the data but this code seems to work. Wasn't sure what to make of it.
    const __rest = (this && this.__rest) || function (s, e) {
      var t = {}
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        // @ts-ignore
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]]
        }
      return t
    }
    // @ts-ignore
    var { image, params } = this.image, props = __rest(this.image, ["image", "params"])
    const strippedUrl = props.url.replace(/https:\/\/megabyte.space/gi, '')
    const webpSrc = strippedUrl.replace(/.png/gi, '.webp')
    const webpSrc2x = strippedUrl.replace(/.png/gi, '-2x.webp')
    const pngSrc2x = strippedUrl.replace(/.png/gi, '-2x.png')
    const imgSrcSet = strippedUrl + ' 1x, ' + pngSrc2x + ' 2x'
    return (
      <picture>
        <source type="image/webp" src={webpSrc + ' 1x'} />
        <source type="image/webp" src={webpSrc2x + ' 2x'} />
        <source type="image/png" src={props.url + ' 1x'} />
        <source type="image/png" src={pngSrc2x + ' 2x'} />
        <img src={strippedUrl} alt={props.alt} width={this.width} height={this.height} class={this.class} loading={this.loading} srcset={imgSrcSet} />
      </picture>
    )
  }
}
