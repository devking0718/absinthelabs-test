'use client'

import { client } from "@/app/lib/apollo-client-creator";
import { ApolloProvider } from "@apollo/client";

export default function ApolloContextProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}