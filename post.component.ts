import {Component} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
    selector:'post',
    template:`
    <h2>Posts</h2>
    <!--{{allPosts | json}}-->
    <p><b>Titles for all posts below:</b></p>
    <ul>
        <li *ngFor="let post of allPosts">
            <a routerLink="/post/{{post.id}}">
                {{post.title}}
            </a>
        </li>
    </ul>
    `,
    providers:[PostsService] //Provider for the defined service is required to consume it in component
})

export class PostComponent{

    allPosts:any=[];
    
    //callBack Way
    // constructor(private servObj:PostsService)
    // {
    //     this.servObj.getPosts((responseFromService:any)=>{
    //         this.allPosts = responseFromService;
    //     });
    // }
    //allPosts here is an array of Json objects
    //Displaying the titles from these objects can be done directly by referring to title property of each item in allPosts

    //Promise way
    // constructor(private servObj:PostsService)
    // {
    //     let aPromise = this.servObj.getPosts();
    //     aPromise.then(
    //         (responseFromService)=>{
    //             this.allPosts = responseFromService.json();
    //         },
    //         (err)=>{
    //                 console.log("Error : " + err);
    //         }
            
    //     );
    // }

    //Subscribing to observable collection of Posts
    constructor(private servObj:PostsService)
    {
        this.servObj.getPosts().subscribe(
            (responseFromservice)=>{
                this.allPosts = responseFromservice;
                localStorage["posts"] = JSON.stringify(responseFromservice);
            },
            (err)=>
            {
                console.log('ERROR : '+ err);
            }
        );
             
    
    }
    

}

