# Debounce
Demo of using useDebounce custome hook [DEMO](https://ordamari.github.io/useDebounce/)

## useDebounce
In many projects we need to run function on change in listening to other elemnt change, but we dont run the function many times in a second, for do that we need useDebounce, this costume hook get the callback function that need to run on change, the variable that we listen to his change and option to change the debounce effect delay and return flag variable if the delay load.



simply use:

```
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
```
