import { gql } from 'apollo-boost';

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