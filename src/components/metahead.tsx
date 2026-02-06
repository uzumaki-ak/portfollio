import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  description: string
  url: string
  keywords: string[]
}

export default function Metahead({ title, description, url, keywords }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@UzumakiAk77285" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@UzumakiAk77285" />
    </Head>
  )
}