import { gql } from 'apollo-boost';
/* @Decription
The file contains all the queries that need to be fired to get only the desired data from the
github graphql API.
*/

export const CHECK = gql`
  query($number_of_repos:Int!) {
    viewer {
     name
     repositories(last: $number_of_repos) {
      nodes {
        name
        url
        description
            }
        }
      }
    } 
  `;

  export const CHECK1 = gql`
  {
    search(query: "is:public", type: REPOSITORY, first: 100) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
          }
        }
      }
    }
  }
  `;

  export const GETPUBLICREPOS = gql`
  {
    search(query: "is:public", type: REPOSITORY, first:15) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            description
            url
          }
        }
      }
    }
  }  
  `;


