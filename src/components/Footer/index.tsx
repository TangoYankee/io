import * as React from 'react'
import './index.css'

import { FooterLink, FooterLinkProps } from './FooterLink'


const footerLinks: FooterLinkProps[] = [
  {
    class: "linked-in-link",
    title: "linkedin.com/in/timothy-m-miller/",
    href: "https://www.linkedin.com/in/timothy-m-miller/",
    span: "linkedin at timothy-m-miller"
  },
  {
    class: "github-link",
    title: "github.com/tangoyankee",
    href: "https://github.com/tangoyankee",
    span: "github at tangoyankeer",
  },
  {
    class: "email-link",
    title: "mailto:miller.tim108@gmail.com",
    href: "mailto:miller.tim108@gmail.com",
    span: "miller.tim108@gmail.com",
  },
]

export function Footer() {
  const footerItems = footerLinks.map((footerItem) =>
    <FooterLink
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
