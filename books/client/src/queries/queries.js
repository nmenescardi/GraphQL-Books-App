import gql from 'graphql-tag';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      id
      name
      authorId
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
