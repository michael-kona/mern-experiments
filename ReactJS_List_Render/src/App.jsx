import { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {bookid:1,bookname:'Another Daniel',price:120},
    {bookid:2,bookname:'Get Set Go',price:100},
    {bookid:3,bookname:'Building Homes',price:60},
    {bookid:4,bookname:'Dentist Story',price:50}
  ]);
  const removebook= (bookid)=>{
    setBooks(books.filter((book)=>bookid!=book.bookid));
  }
  if(books.length==0){
    return(
      <h1>No Books Available</h1>
    );
  }

  return (
    <div>
      <h1 className="a">ReactJS App for rendering Lists</h1>
      <table border="1">
        <tr>
          <td className='a'>Book ID</td>
          <td className='b'>Book Title</td>
          <td className='a'>Book Price</td>
          <td>Action</td>
        </tr>
        {books.map((book)=>(
            <tr>
              <td className='a'>{book.bookid}</td>
              <td className='b'>{book.bookname}</td>
              <td className='a'>{book.price}</td>
              <td>
                <button onClick={()=>removebook(book.bookid)}>Remove Book</button>
              </td>
            </tr>
      
        ))}
        </table>
    </div>
  )
}

export default App
