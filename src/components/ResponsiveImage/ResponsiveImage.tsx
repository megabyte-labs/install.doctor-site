import { h } from '@stencil/core'
import { JSXBase } from '@stencil/core/internal'

interface ResponsiveImgProps
  extends JSXBase.ImgHTMLAttributes<HTMLImageElement> {
  path: string

  name: string

  type?: string

  dimensions: string

  fallback?: boolean
}

function supportWebp() {
  var elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }
  else {
    // very old browser like IE 8, canvas not supported
    return false
  }
}

const supportsWebp = supportWebp()

const ResponsiveImage = ({
  path,
  name,
  type = 'png',
  alt,
  dimensions,
  fallback = false,
  ...props
}: ResponsiveImgProps) => {
  !props.loading ? (props.loading = 'lazy') : ''

  if (supportsWebp) {
    type = 'webp'
  }

  if (fallback) {
    return (
      <picture>
        <source src={`${path}${name}@2x.${type} 2x`} />
        <source src={`${path}${name}.${type} 1x`} />
        <img
          {...props}
          src={`${path}${name}.${type}`}
          width={dimensions.split('x')[0]}
          height={dimensions.split('x')[1]}
        />
      </picture>
    )
  } else {
    return (
      <img
        {...props}
        src={`${path}${name}@2x.${type}`}
        srcset={`${path}${name}.${type} 1x,
                ${path}${name}@2x.${type} 2x`}
        width={dimensions.split('x')[0]}
        height={dimensions.split('x')[1]}
      />
    )
  }
}

export default ResponsiveImage
