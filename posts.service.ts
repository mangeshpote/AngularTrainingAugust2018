import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise'; //to use toPromise(), import this method specifically from rxjs
import 'rxjs/add/operator/map'; //to use map()
import {Observable} from 'rxjs';
import {Posts} from './posts.model'

@Injectable() //To allow service to call another service. Required for another service to be injected in this service - HTTP here
export class PostsService{

    constructor(private httpObj:Http){
    }

    //here we are subscribing to this link to get the data and working on the respinse received.
    //Just logging the response in text format
    // getPosts(){
    //     this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .subscribe(function(response){
    //         console.log((response.text()));
           
    //     });

    // getPosts(callbackFunc:any){
    //     this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .subscribe(function(response){
    //         callbackFunc(response.json())           
    //     });
    // }

    //promises
    // getPosts(){
    //     return this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .toPromise(); //toPromise is a method provided by rxjs : additonal methods for better handling 
    // }


    //return Observable collection
    //this is to achieve continuously follow the changes happening in response. GUI will be updated as per the changes
    //.json() is a method here which will return the array of objects which is be mapped to Post
    //'res' - response here is a http response so in order to get only the relevant data we are calling json() on response
    getPosts():Observable<Posts[]>{
        return this.httpObj.get("https://jsonplaceholder.typicode.com/posts").map(res => res.json())
    }
}