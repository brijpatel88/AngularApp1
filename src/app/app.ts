import { Component } from "@angular/core";
import { User } from "./models/user";

//Import child components 
import { UserCard } from "./components/user-card/user-card";
import { UserStatus } from "./components/user-status/user-status";
import { UserBio } from "./components/user-bio/user-bio"; 

@Component({
  selector: "app-root",

  //Statndalone means this component does NOT use app.module.ts.
  standalone: true,

  // We must import child components here so they can be used
  //inside app.html
  imports: [UserCard, UserStatus, UserBio],

  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {

  // ===============================================
  // Main User Object (Single Source of Truth)
  // This data is shared with child components
  // using @Input and updated using @Output.
  // ===============================================
  user: User = {
    name: "Mickey Mouse",
    age: 25,
    photoUrl: "assets/images/profile.jpg",
    bio: "Web and Mobile App developer with a passion for travel and cooking.",
    isOnline: true,
    location: "Toronto, CA",
    interests: ["Coding", "Traveling", "Cooking", "Photography"],
  };

  // ===============================================
  // Called when UserStatus component emits
  // a new online/offline value
  // ===============================================
  onStatusChanged(newStatus: boolean) {
    this.user.isOnline = newStatus;
  }

  // ===============================================
  // Called when UserBio component emits
  // updated bio text
  // ===============================================
  onBioChanged(newBio: string) {
    this.user.bio = newBio;
  }

} 