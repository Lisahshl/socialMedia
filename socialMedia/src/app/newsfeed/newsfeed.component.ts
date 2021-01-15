import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  @Input()
  posts: Object[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        author: 'Musa Cakmak',
        img: '/assets/richard-brutyo-Sg3XwuEpybU-unsplash.jpg'
      },{
        author: 'Ali Isik',
        img: '/assets/artem-militonian-UYW6FZLlnL8-unsplash.jpg'
      },{
        author: 'Lisa Klein',
        img: '/assets/allison-christine-RY9w18Eq-OM-unsplash.jpg'
      }
    ];
    console.log(this.posts);
  }

}
