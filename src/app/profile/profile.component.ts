import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userProfile: {
    name: string,
    state: string,
    city: string,
    country: string,
    occupation: string
    lookingFor: string[],
    description: string,
    studied: string,
    score: string,
    certificates: string[],
    activities: string,
    coverImage: string,
    profileImage: string
  }
  constructor() {
    this.userProfile = {
      name: "Mary Watson",
      state: "Arizona",
      city: "Phoenix",
      country: "USA",
      occupation: "Student",
      lookingFor: ['Admission', 'Job', 'Scholarships'],
      description: 'Social media scholar. Lifelong beer lover. Reader. Total writer. Twitter guru Social media'
        + ' scholar.'
        + 'Lifelong beer lover.Reader.Total writer.Twitter guru Social media scholar.Lifelong beer'
        + 'lover.'
        + 'Reader.Total writer.Twitter guru',
      studied: 'The Australian National University',
      score: '3.50 CGPA',
      certificates: ['6.5 IELTS', 'A+ A-Levels'],
      activities: 'Marques at University of Arizona',
      coverImage: "https://tuk-cdn.s3.amazonaws.com/can-uploader/profil33.png",
      profileImage: "https://tuk-cdn.s3.amazonaws.com/can-uploader/pr0fil3_circle.png"
    }
  }
  addToProfile() {
    console.log('addToProfile');
  }
  editProfile() {
    console.log('editProfile');
  }
}
