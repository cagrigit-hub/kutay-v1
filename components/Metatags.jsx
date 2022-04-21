import Head  from 'next/head'
import React from 'react'

function Metatags() {
  return (
    <Head>
        <title>Kutay</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Kutay's Portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Çağrı Kutay Ok" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rock+Salt&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </Head>
  )
}

export default Metatags