import React from 'react';
import {gql, useQuery} from "@apollo/client";
import { Link } from 'react-router-dom';

export const Books = () => {
const GET_BOOKS = gql`
  query GetBooks ($count: String!) {
    books(count: $count) {
        id
        title
        author
    }
  }
`;

    const { loading, error, data } = useQuery(GET_BOOKS, {variables: {
        count: '2'
        }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return <div>
        {data.books.map(({ id, title, author }) => (
            <div key={id}>
                <div>ID: {id}</div>
                <div>Tittle: {title}</div>
                <div>Author: {author}</div>
                <br/>
            </div>
        ))}

        <Link to={'/books'}>Показать все</Link>
    </div>;
}
