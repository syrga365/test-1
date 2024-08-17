import React from 'react';

const BookList = ({ books, onDelete }) => {
    return (
        <div>
            <h2>Список книг</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        {book.title}
                        <button onClick={() => onDelete(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
