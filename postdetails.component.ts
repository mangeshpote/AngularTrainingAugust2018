import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import { Posts } from "./posts.model";

@Component({
    selector:'postdetails',
    template:`
    <h2>Post Details for {{postId}}</h2>
    <p>Title : {{currFetchedPost.title}}</p>   
    <p>UserId : {{currFetchedPost.userId}}</p>
    <p>Body : {{currFetchedPost.body}}</p>
    `
})

export class PostDetailsComponent implements OnInit {
    
    postId:number;

    currFetchedPost:Posts;

    //to get the details of current routed path use ActivatedRouter module and fetch the params from the same.
    constructor(public currRoute:ActivatedRoute){

    }

    //Lifecycle method : Instead of doing things in constructor use ngOnInit (implement OnInit interface to eliminate any typo error with this method name)
    //this.currRoute.params will fetch the parameters in the current routed path.. here we have only id
    //fetch the param value by passing the param name in square brackets
    ngOnInit(){
        this.currRoute.params.subscribe(
            p => { this.postId = p["id"]
            
            let fetchedPosts = JSON.parse(localStorage["posts"]);
            this.currFetchedPost = fetchedPosts.find(
                (fp:Posts) => {
                    return fp.id == this.postId;
                }
            )
        }
        )
    }

}