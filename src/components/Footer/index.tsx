import * as React from 'react'
import 'components/Footer/index.css'

import { FooterLink, footerLinks } from './FooterLink'

export function Footer () {
  const footerItems = footerLinks.map((footerItem) =>
    <FooterLink key={footerItem.title}
      class={footerItem.class}
      title={footerItem.title}
      href={footerItem.href}
      span={footerItem.span}
    />
  )
  return (
    <footer>
      <div className="link-container">
        {footerItems}
      </div>
    </footer>
  )
}
