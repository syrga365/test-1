import React, { useState } from 'react';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input"; // Импортируйте ваш компонент Input
import BookList from "../../components/bookList/BookList"; // Импортируйте ваш компонент BookList

const MainPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [books, setBooks] = useState([
        { title: 'Книга 1' },
        { title: 'Книга 2' },
        { title: 'Книга 3' },
    ]);

    const handleClick = () => {
        alert('Кнопка нажата!');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleDelete = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Пример кнопки</h1>
            <Button label="Нажми меня" onClick={handleClick} />

            <h1>Пример компонента Input</h1>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите текст..."
            />
            <p>Текущее значение: {inputValue}</p>

            <h1>Моя библиотека</h1>
            <BookList books={books} onDelete={handleDelete} />
        </div>
    );
};

export default MainPage;
