import React from 'react';
import {gql, useQuery} from "@apollo/client";
import { useNavigate } from 'react-router-dom';

export const FullBooks = () => {
    const GET_BOOKS_FULL = gql`
      query GetBooks ($count: String!) {
        books(count: $count) {
          id
          title
          author
          createdAt
        }
      }
    `;
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(GET_BOOKS_FULL, {variables: {
            count: '3'
        }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const goBackCallback = () => {
        navigate('/')
    }

    return <div>
        {data.books.map(({ id, title, author, createdAt }) => (
            <div key={id}>
                <div>ID: {id}</div>
                <div>Tittle: {title}</div>
                <div>Author: {author}</div>
                <div>CreatedAt: {createdAt}</div>
                <br/>
            </div>
        ))}

        <button onClick={goBackCallback}>Назад</button>
    </div>;
}
