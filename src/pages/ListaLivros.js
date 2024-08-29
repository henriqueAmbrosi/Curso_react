import React from 'react'

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
