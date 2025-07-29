import { useState } from 'react';

const defaultBook = {
  title: '',
  author: ''
};

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState(defaultBook);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedBook = { ...newBook, [name]: value };
    setNewBook(updatedBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook(defaultBook);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label>author</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
