import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Books} from "./Books";
import {FullBooks} from "./FullBooks";

const client = new ApolloClient({
    uri: 'http://localhost:4001',
    cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Books/>,
    },
    {
        path: "/books",
        element: <FullBooks/>,
    },
]);

root.render(
    <ApolloProvider client={client}>
        <RouterProvider router={router} />
    </ApolloProvider>,
);