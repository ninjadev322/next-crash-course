import React from 'react';
// import PropTypes from 'prop-types';
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    console.log(article.id)
    return (
        <Link href={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    );
};

// ArticleItem.propTypes = {};

export default ArticleItem;

