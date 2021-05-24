import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'
import {useState} from 'react'

// VIMP NOTE 
            // getStaticPaths ROUTING 
// If this js file was not present in the pages folder ,
// then the last link in the index would've routed to a 404 page
// as there is no id called "first-post"
// Currently the first post is served from here and NOT from the id component.

export default function FirstPost() {
  const [x,setX]=useState('sdsds')
  return (
    <Layout>  
        <Head>
        <title>{x}</title>
        <link rel="icon" href="/images/avatar.jpg" /> 
          <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
         <meta charset="UTF-8"></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Twitter Card Check Youtube Vid */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Facebook and others  */}
        <meta property="og:url" 
         content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
        <meta property="og:type"
         content="article" />
        <meta property="og:title" 
        content="When Great Minds Don’t Think Alike" />
        <meta property="og:description"  
        content="How much does culture influence creative thinking?" />
        <meta property="og:image"  
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
      </Head>
      <p>First Post</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
      priority
    src="/images/avatar.jpg" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Your Name"
  />
      <Image  
    src="/images/img-3.png" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Your Name"
  />
  <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>  <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>  <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>  <h1>adhasjkdhaskjhdkjasd</h1>
  <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
   <h1>adhasjkdhaskjhdkjasd</h1>
        <Image
    src="/images/profile.jpg" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Your Name"
  />
    </Layout>
  )
}