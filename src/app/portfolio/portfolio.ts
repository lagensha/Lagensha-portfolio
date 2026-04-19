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
      title: '',
      stack: 'Angular, Spring Boot, MySQL',
      summary:
        'A full-stack productivity platform with role-based access, analytics dashboards, and optimized API performance.',
    },
    {
      title: 'Smart Inventory Portal',
      stack: 'Angular, Java, REST API',
      summary:
        'An inventory tracking app built for speed and reliability with live status updates and robust validation flows.',
    },
    {
      title: 'Service Booking Platform',
      stack: 'Angular, Spring Security, SQL',
      summary:
        'A customer-facing booking experience with secure authentication and a mobile-first UX architecture.',
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
