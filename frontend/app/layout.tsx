"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>
          <NavBar />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}