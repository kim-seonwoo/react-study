import NewsList from './newsList';
import Categories from './Categories';
import { useState, useCallback } from 'react';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;

//656c40f76d88411da483c3fd1ac7954d
