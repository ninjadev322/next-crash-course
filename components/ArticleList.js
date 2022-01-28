/* eslint-disable react/jsx-key */
import React from 'react';
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export default ArticleList
