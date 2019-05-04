import React, { Component } from 'react';
//import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export class BookList extends Component {
  displayBooks() {
    const { loading, books } = this.props.data;
    if (loading) {
      return <div>Loading Books...</div>;
    } else {
      return books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <ul id="book-lis">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
