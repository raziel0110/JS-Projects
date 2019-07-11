import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers = [
    {
      id: 1,
      avatar_url: "https://image.flaticon.com/icons/svg/1177/1177568.svg",
      login: "Stormwind",
      html_url: "https://itstillworks.com/make-own-avatar-url-7763334.html"
    },
    {
      id: 2,
      avatar_url: "https://image.flaticon.com/icons/svg/236/236832.svg",
      login: "Raziel",
      html_url: "https://facebook.com"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
