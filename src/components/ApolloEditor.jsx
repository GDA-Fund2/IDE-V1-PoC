import React from 'react'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

export default function ApolloEditor() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://localhost:4000/graphql"
    });

    return (
        <ApolloProvider client={client} />
    )
}
