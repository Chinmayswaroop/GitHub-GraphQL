import { Component, OnInit } from '@angular/core';
import { DataNode } from '../Constants/type';
import {CHECK, CHECK1, GETPUBLICREPOS} from '../Constants/queries';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
import { execute } from 'graphql';
import { Router } from '@angular/router';
@Component({
  selector: 'app-git-card-view',
  templateUrl: './git-card-view.component.html',
  styleUrls: ['./git-card-view.component.css']
})
export class GitCardViewComponent implements OnInit {

  repositories: DataNode[] = [];
  result: any;
  client : any;
  totalRepoOnGit : any;
  throbber : boolean=true;
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    /* making a connection to the github/graphql */
    this.client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: operation => {
      operation.setContext({
      headers: {
        /* keep this in .env file hidden in the prod/git also */
        authorization: `Bearer ADD_YOUR_TOKEN_HERE`,
          },
        });
      },
    });

    this.executeQuery();
  }

  executeQuery(){

    this.client.query({
      query: GETPUBLICREPOS
      }).then((val: any) => {
          this.result = val.data.search.edges;
          this.totalRepoOnGit = val.data.search.repositoryCount;
          this.repositories = this.result;
          this.throbber = false;
      });
  }

  /* called when More details button is called */
  buttonClick(name:any){
    this.router.navigate(['', 'detail', name]);
  }
  
}