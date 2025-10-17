import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton, MatFabButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatIconModule,
    MatIconButton,
    MatFabButton,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
  ],
  template: `
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </head>
    <div class="home-container" >
      <mat-toolbar class="toolbar">
        <span class="name-text">Ressty Manuzon</span>
        <span class="example-spacer"></span>
        <div class="toolbar-link-spacer">
          <span class="tooltip-link" (click)="scrollToElement('1')">What I do</span>
          <span class="tooltip-link" (click)="scrollToElement('1')">What I do</span>
          <span class="tooltip-link" (click)="scrollToElement('2')">Testimonials</span>
          <!-- <span class="tooltip-link" (click)="scrollToElement('4')">Projects</span> -->
          <span class="tooltip-link" (click)="scrollToElement('3')">Contact</span>
        </div>
      </mat-toolbar>
      <div class="landing-container">
        <div class="main-text-section">
          <p class="main-text">Hello, I'm Ressty.</p>
          <p class="sub-text">
            I solve messy business problems while making sure your engineers don't break down.
          </p>
        </div>

        <!-- <div class="contact-block">
          <a href="https://www.linkedin.com/in/resstymanuzon"><img class="contact-icon-landing" src="linkedin.png" /></a>
          
          <img class="contact-icon-landing" src="message_fill.png" />
        </div>
 -->


        <div class="main-face-section">
          <img class="ressty-face" src="ressty_image.jpg" />
        </div>
      </div>
    </div>
    <div id="1" style="height:100%; padding-top: 10vh">
      <div class="section-container">
        <span class="section-title">What I do</span>
        <div class="expanding-line"></div>
        <!-- <p>I solve messy business problems to make things easier for the customers we serve.</p> -->
        <mat-grid-list class="skill-list" cols="1" rowHeight="150px">
          @for (sb of skillBlocks; track sb.id) {
          <mat-grid-tile>
            <div class="skill-container-block">
              <div class="skill-block">
                <!-- <span class="material-icons skill-icon">face</span> -->
                <!-- <mat-icon
                  class="skill-icon"
                  aria-hidden="false"
                  aria-label="Example home icon"
                  fontIcon="home"
                ></mat-icon> -->
                <img class="skill-icon" [src]="sb.image" />
                <div class="skill-text">
                  <span class="skill-title">{{ sb.title }}</span>
                  <span class="skill-description">{{ sb.description }}</span>
                </div>
              </div>
            </div>
          </mat-grid-tile>
          }
        </mat-grid-list>
      </div>
    </div>

    <!-- <div id="2" class="section-container" style="height:100%; padding-top: 10vh">
      <span class="section-title">About me</span>
         <div class="testimonial-container-block">
            <span class="material-icons skill-icon">face</span>
            <div class="testimonial-text-block">
              <span class="text">Test Text</span>

            </div>
          </div>
    </div> -->


    <div id="2" class="section-container" style="height:100%; padding-top: 10vh">
      <span class="section-title">Testimonials</span>
      <mat-grid-list class="skill-list" cols="1" rowHeight="250px" >
        @for (tl of testimonialList; track tl.id) {
        <mat-grid-tile>
          <div class="testimonial-container-block">
            <!-- <span class="material-icons skill-icon">face</span> -->
            <div class="testimonial-text-block">
              <span class="text">{{ tl.text }}</span>
              <span class="skill-description">- {{ tl.name }}, {{ tl.relationship }} <a href="https://www.linkedin.com/in/resstymanuzon"><img class="contact-icon" src="linkedin.png" /></a> </span>
            </div>
          </div>
        </mat-grid-tile>
        }
      </mat-grid-list>
    </div>



        
    <div id="3" class="section-container" style="height:100%">

        <span class="section-title">Projects</span>

      <mat-grid-list class="project-list" cols="1" rowHeight="200px">
        @for (pl of projectList; track pl.id) {
        <mat-grid-tile>
          <div class="testimonial-container-block">
            <span class="material-icons skill-icon">face</span>
            <mat-card class="example-card" appearance="outlined">
              <mat-card-header>
                <mat-card-title class="mat-card-title">{{pl.name}}</mat-card-title>
              </mat-card-header>
              <mat-card-content class="mat-card-text">
                <p>{{pl.description}}</p>
              </mat-card-content>
              <mat-card-footer class="example-card-footer">
                <mat-chip-set aria-label="Chihuahua traits">
                  <mat-chip>charming</mat-chip>
                  <mat-chip>graceful</mat-chip>
                  <mat-chip>sassy</mat-chip>
                </mat-chip-set>
              </mat-card-footer>
            </mat-card>
          </div>
        </mat-grid-tile>
        }
      </mat-grid-list>
    </div>
   
    <div id="3" style="height:20vh; background-color: #f5f5f5">
      <div class="section-container-contact">
        <h1 style="color: #111215">Let's connect</h1>
        <div class="contact-block">
          <a href="https://www.linkedin.com/in/resstymanuzon"><img class="contact-icon" src="linkedin.png" /></a>
          <img class="contact-icon" src="message_fill.png" />
        </div>
      </div>
    </div>
    <!-- <button class="floating-button" matFab>
      <mat-icon>chat</mat-icon>
    </button> -->
  `,
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('personal_website');

  scrollToElement(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  skillBlocks = [
    {
      id: 1,
      title: 'User Research',
      description:
        'I lead interviews and usability tests to capture deep user understanding and synthesize those insights into actionable product requirements. ',
      image: 'wow.png',
    },
    {
      id: 2,
      title: 'Data Analysis',
      description:
        "I treat data as my decision-making partner. I leverage A/B tests and usage metrics to see what's working (or not), so I can always prioritize features based on measurable impact.",
      image: 'chart.png',
    },
    {
      id: 3,
      title: 'Product Strategy',
      description:
        "I use user insights and data to define our product vision and build the roadmap, making sure we're always working on the right things to hit our big company goals.",
      image: 'map_duotone.png',
    },
    {
      id: 4,
      title: 'Wireframing + Prototyping',
      description:
        "When an idea strikes, I sketch it out fast. I use tools like Whimsical and Figma to create quick prototypes and wireframes—it's the quickest way to show the team exactly how the user flow should work.",
      image: 'edit.png',
    },
    {
      id: 5,
      title: 'Technical Acumen',
      description:
        'I collaborate directly with engineers, discussing technical concepts and architectural tradeoffs. My fluency allows me to quickly refine ideas with engineering to make sure we have the best solution possible given our tech stack.',
      image: 'box_duotone.png',
    },
    {
      id: 6,
      title: 'Servant Leadership',
      description:
        'I succeed when my team succeeds. I practice servant leadership by actively removing roadblocks, providing clarity, and mentoring individuals to empower them, ensuring the entire team can focus on shipping high-quality work.',
      image: 'group.png',
    },
  ];

  testimonialList = [
    {
      id: 1,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  projectList = [
    {
      id: 1,
      name: 'Bob',
      description: 'Engineer',
      
    },
    {
      id: 2,
      name: 'Bob',
      description: 'Engineer',

    },
    {
      id: 3,
      name: 'Bob',
      description: 'Engineer',

    },
    {
      id: 4,
      name: 'Bob',
      description: 'Engineer',
      
    },
  ];
}
