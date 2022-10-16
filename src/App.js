import { useEffect, useState } from 'react';
import './App.css';
import { useDebounce } from './hooks/useDebounce';
import { bookService } from './services/bookService';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    if (!query) {
      setBooks([]);
      return;
    }
    const books = await bookService.load(query);
    setBooks(books.docs)
  }
  const isLoad = useDebounce(loadBooks, query, 500);

  return (
    <div className="App">
      <input
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        placeholder="Search books..."
      />
      {
        isLoad ? (
          <p>loading...</p>
        ) : (
          books.map(book => (
            <p>{book.title}</p>
          ))
        )
      }
    </div>
  );
}

export default App;
