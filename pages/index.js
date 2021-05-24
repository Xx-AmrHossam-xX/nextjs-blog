import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useState} from 'react'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  const [x,setX]=useState('#AFD085')
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}   id="xyz">
      <button    type="button" onClick={()=>setX('white')}>
          Change Background color to white
        </button>
        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
     <li className={utilStyles.listItem} key={id}>
     <Link href={`/posts/${id}`}>
       <a>{title}</a>
     </Link>
     <br />
     <small className={utilStyles.lightText}>
       <Date dateString={date} />
     </small>
   </li>
          ))}
        </ul>
        <Link href={`/posts/first-post`}  >
          <a>My customized post</a>
        </Link>
        <br/>   <br/>
        <Link href={`/testingError`}  >
          <a>Testing default error pages</a>
        </Link>
        <br/>   <br/>
        <Link href={"/backgroundImgExample"}  >
          <a>backgroundImgExample</a>
        </Link>
      </section>
      <style jsx>{`
      #xyz{
        background:${x};
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
          </Layout>
  )
}
