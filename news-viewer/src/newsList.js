import styled from 'styled-components';
import NewsItem from './newsItem';
import axios from '../node_modules/axios/index';
import { useState, useEffect } from 'react';

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
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category};`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=656c40f76d88411da483c3fd1ac7954d`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchDate();
  }, [category]);

  if (loading) {
    return <NewsListBlock>...대기중</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {console.log(articles)}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

//sampleArticle을 article에 전달함.
export default NewsList;
