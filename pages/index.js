/* eslint-disable react/jsx-key */
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <ArticleList articles={articles}/>
      {/* {articles.map((article) => (
        <h3>{article.title}</h3>
      ))} */}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}