import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton, MatFabButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

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
    MatTabsModule,
  ],
  template: `
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <div class="home-container">
      <mat-toolbar class="toolbar">
        <span class="name-text">Ressty Manuzon</span>
        <span class="example-spacer"></span>
        <div class="toolbar-link-spacer">
          <span class="tooltip-link" (click)="scrollToElement('1')">What I do</span>
          <span class="tooltip-link" (click)="scrollToElement('2')">Testimonials</span>
          <span class="tooltip-link" (click)="scrollToElement('3')">Portfolio</span>
          <span class="tooltip-link" (click)="scrollToElement('4')">Contact</span>
        </div>
      </mat-toolbar>
      <div class="landing-container">
        <div class="main-text-section">
          <p class="main-text">Hello, I'm Ressty.</p>
          <p class="sub-text">
            I leverage a data-driven product mindset and a full-stack development skillset to solve
            messy business problems.
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
        <div class="project-list-container">
          @for (sb of skillBlocks; track sb.id) {
          <mat-card class="skill-card" appearance="outlined">
            <mat-card-header>
              <mat-card-title class="skill-mat-card-title">{{ sb.title }}</mat-card-title>
            </mat-card-header>
            <mat-card-content class="skill-mat-card-text">
              <p>{{ sb.description }}</p>
            </mat-card-content>
            <!-- <mat-card-footer class="example-card-footer">
                <mat-chip-set aria-label="Chihuahua traits">
                  <mat-chip>charming</mat-chip>
                  <mat-chip>graceful</mat-chip>
                  <mat-chip>sassy</mat-chip>
                </mat-chip-set>
              </mat-card-footer> -->
          </mat-card>

          }
        </div>
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

      <div class="project-list-container">
        @for (tl of testimonialList; track tl.id) {
        <mat-card class="testimonial-card" appearance="outlined">
          <mat-card-content class="testimonial-mat-card-text">
            <p>{{ tl.text }}</p>
            <span class="skill-description"
              >- {{ tl.name }}, {{ tl.relationship }}
              <!-- <a href="https://www.linkedin.com/in/resstymanuzon"
                  ><img class="contact-icon" src="linkedin.png"
                /></a> -->
            </span>
          </mat-card-content>
          <!-- <mat-card-footer class="example-card-footer">
                <mat-chip-set aria-label="Chihuahua traits">
                  <mat-chip>charming</mat-chip>
                  <mat-chip>graceful</mat-chip>
                  <mat-chip>sassy</mat-chip>
                </mat-chip-set>
              </mat-card-footer> -->
        </mat-card>

        }
      </div>
    </div>

    <div id="3" class="section-container">
      <span class="section-title" (panLeft)="nextTab()" (tap)="onTap()">Portfolio</span>
      <mat-tab-group>
        <mat-tab dynamicHeight label="Initiatives">
          <div
            id="31"
            class="project-list-container"
            (panLeft)="nextTab()"
            (panRight)="previousTab()"
          >
            @for (il of initiativeList; track il.id) {
            <div class="testimonial-container-block">
              <span class="material-icons skill-icon">face</span>
              <mat-card class="project-card" appearance="outlined">
                <mat-card-header>
                  <mat-card-title class="mat-card-title">{{ il.name }}</mat-card-title>
                </mat-card-header>
                <mat-card-content class="project-mat-card-text">
                  <p>{{ il.description }}</p>
                </mat-card-content>
                <!-- <mat-card-footer class="example-card-footer">
                <mat-chip-set aria-label="Chihuahua traits">
                  <mat-chip>charming</mat-chip>
                  <mat-chip>graceful</mat-chip>
                  <mat-chip>sassy</mat-chip>
                </mat-chip-set>
              </mat-card-footer> -->
              </mat-card>
            </div>
            }
          </div>
        </mat-tab>
        <mat-tab label="Case Studies">
          <div class="project-list-container">
            @for (il of initiativeList; track il.id) {
            <div class="testimonial-container-block">
              <span class="material-icons skill-icon">face</span>
              <mat-card class="project-card" appearance="outlined">
                <mat-card-header>
                  <mat-card-title class="mat-card-title">{{ il.name }}</mat-card-title>
                </mat-card-header>
                <mat-card-content class="project-mat-card-text">
                  <p>{{ il.description }}</p>
                </mat-card-content>
                <!-- <mat-card-footer class="example-card-footer">
                <mat-chip-set aria-label="Chihuahua traits">
                  <mat-chip>charming</mat-chip>
                  <mat-chip>graceful</mat-chip>
                  <mat-chip>sassy</mat-chip>
                </mat-chip-set>
              </mat-card-footer> -->
              </mat-card>
            </div>
            }
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>

    <div id="4" style="height:20vh; background-color: #f5f5f5">
      <div class="section-container-contact">
        <h1 style="color: #111215">Let's connect</h1>
        <div class="contact-block">
          <a href="https://www.linkedin.com/in/resstymanuzon"
            ><img class="contact-icon" src="linkedin.png"
          /></a>
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

  onTap() {
    console.log('tapped');
  }
  nextTab() {
    console.log('next tab');
  }
  previousTab() {
    console.log('previous tab');
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Bob',
      relationship: 'Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  initiativeList = [
    {
      id: 1,
      name: 'QA Product Workshop',
      description:
        'Trained and mentored a team of six QAs to support a company-wide initiative to improve product capabilities within the QA team.  Training included SQL, A/B testing, as well as Product Ideation Workshops.',
    },
    {
      id: 2,
      name: 'Customer Love',
      description:
        'Rebooted a company’s discovery process by regularly interviewing users. Initiative resulted in a deepened understanding of our client user journey and how clients rehire on the site.',
    },
    {
      id: 3,
      name: 'Product <> Customer Experience',
      description:
        'Re-established Product and Customer Experience communication by involving them as stakeholders in the product ideation process. This resulted in: more well-rounded ideas, better customer support for new product launches.',
    },
  ];

  projectList = [
    {
      id: 1,
      name: 'QA Product Workshop',
      description:
        'Trained and mentored a team of six QAs to support a company-wide initiative to improve product capabilities within the QA team.  Training included SQL, A/B testing, as well as Product Ideation Workshops.',
    },
    {
      id: 2,
      name: 'Customer Love',
      description:
        'Rebooted a company’s discovery process by regularly interviewing users. Initiative resulted in a deepened understanding of our client user journey and how clients rehire on the site.',
    },
    {
      id: 3,
      name: 'Product <> Customer Experience',
      description:
        'Re-established Product and Customer Experience communication by involving them as stakeholders in the product ideation process. This resulted in: more well-rounded ideas, better customer support for new product launches.',
    },
  ];
}
