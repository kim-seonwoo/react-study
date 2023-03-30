import styled from 'styled-components';
import NewsItem from './newsItem';
import axios from '../node_modules/axios/index';
import { useState, useEffect } from 'react';
import usePromise from './lib/usePromise';
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width:769px;
    margin 0 auto;
    margin top: 2rem;
    @media screen and (max-width:768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=656c40f76d88411da483c3fd1ac7954d`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>...대기중</NewsListBlock>;
  }
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

//sampleArticle을 article에 전달함.
export default NewsList;
