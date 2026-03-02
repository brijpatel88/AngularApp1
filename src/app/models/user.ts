// src/app/models/user.ts
// user interface: defines the structure of user profile data used accross components

export interface User {
 name: string;          // User's full name
 age: number;           // User's age 
 photoUrl: string;      //Profile picture URL
 bio: string;           // Short biography or description of the user
 isOnline: boolean;     // Online status of the user
 location: string;      // User's location (e.g., city, country)
 interests: string[];   // List of user's interests or hobbies
}