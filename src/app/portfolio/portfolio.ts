import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly strengths = [
    'API Design',
    'Clean Architecture',
    'Responsive Interfaces',
    'QA and Testing',
    'Performance Tuning',
    'Business Alignment',
    'Team Collaboration',
  ];

  readonly projectHighlights = [
    {
      title: 'VerBiz',
      stack: 'Angular, Spring Boot, MySQL , Rest API',
      summary:
        'VeriBiz Backend is a Spring Boot service that analyzes business social media accounts to detect fake or suspicious activity. It evaluates engagement, profile data, and activity patterns to generate a trust score and risk level via REST APIs.',
    },
    {
      title: 'Grocery-Shop',
      stack: 'Angular, Java, REST API,MYSQL',
      summary:
        'Modern Grocery Shop web application developed to deliver a smooth and efficient online shopping experience. Built with a focus on clean design, user-friendly navigation, and real-world eCommerce functionality. Features include product browsing, category management, shopping cart operations, secure checkout flow, and responsive UI for all devices. Designed to demonstrate full-stack development skills, problem-solving ability, and practical implementation of scalable retail solutions. Ideal for modern digital grocery businesses.',
    },
    {
      title: 'ThogaKade-Layered Architecture',
      stack: 'javaFx,Layered Architecture,SQL',
      summary:
        'This is third step of thoga kade project i created using javafx . previous project was developed by using ObservableList , database and Singleton Design Pattern but when we get real world project create using layered Architecture not MVC .',
    },
    {
      title: 'BurgerShop-Web-Based-Point-of-Sale-POS-System',
      stack: 'HTML, CSS, JavaScript',
      summary:
        'A responsive web-based Point of Sale system designed for fast-food and burger shop operations. This project includes order management, item handling, billing, customer interaction, and real-time UI updates using HTML, CSS, and JavaScript. The system is optimized for ease of use, quick navigation, and efficient restaurant workflow.',
    },
  ];

  readonly contactItems = [
    {
      label: 'Email',
      value: 'lagensha.rupasinghe@email.com',
      href: 'mailto:lagensha.rupasinghe@email.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/lagensha-rupasinghe',
      href: 'https://www.linkedin.com/',
    },
    {
      label: 'Location',
      value: 'Sri Lanka',
      href: '',
    },
  ];
}
