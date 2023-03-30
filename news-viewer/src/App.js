import NewsList from './newsList';
import Categories from './Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './NewPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;

//656c40f76d88411da483c3fd1ac7954d
