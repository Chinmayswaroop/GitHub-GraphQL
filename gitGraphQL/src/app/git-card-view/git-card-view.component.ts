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
        authorization: `Bearer a4cd3ccb7bd7e3652f4d7973239b791fd7700384`,
          },
        });
      },
    });

    this.executeQuery();
  }

  executeQuery(){
    // this.client.query({
    //   query: CHECK,
    //   variables: {
    //   "number_of_repos": 10
    //   }
    //   }).then((val: any) => {
    //       this.result = val.data.viewer;
    //       console.log(this.result);
    //       this.repositories = this.result.repositories.nodes;
    //       console.log(this.repositories);
    //   });

    this.client.query({
      query: GETPUBLICREPOS
      }).then((val: any) => {
          console.log("VAL::",val);
          this.result = val.data.search.edges;
          this.totalRepoOnGit = val.data.search.repositoryCount;
          // console.log("CHECK:::"+this.totalRepoOnGit);
          // console.log(this.result);
          this.repositories = this.result;
          console.log(this.repositories);
      });
  }

  /* called when More details button is called */
  buttonClick(name:any){
    this.router.navigate(['', 'detail', name]);
  }
  
}