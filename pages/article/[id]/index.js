/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import React from 'react';
// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';

const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
    // return (
    //     <div>This is {article.id} article.</div>
    // );
    return <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href='/'>Go back</Link>
    </>
};

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
           article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: {id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

// index.propTypes = {};

export default article;
