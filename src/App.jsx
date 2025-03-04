import { useState } from 'react';

function App() {
  const books = [
    {
      id: 1,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
      name: 'The Great Adventure',
      genre: 'Fiction',
      author: 'Jane Doe',
    },
    {
      id: 2,
      image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
      name: 'Mysteries of the Universe',
      genre: 'Science',
      author: 'John Smith',
    },
    {
      id: 3,
      image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
      name: 'History Revisited',
      genre: 'Non-Fiction',
      author: 'Emily Johnson',
    },
    {
      id: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
      name: 'Culinary Delights',
      genre: 'Cooking',
      author: 'Michael Brown',
    },
  ];
 const App = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        <div className="grid grid-cols-3 gap-4">
          {books.map((books) => (
            <BookCard key={books.id} books={books} />
          ))}
        </div>
      </div>
    );
  };
}

export default App;
