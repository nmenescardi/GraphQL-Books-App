import React, { Component } from 'react';

export class BookList extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <ul id="book-lis">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
