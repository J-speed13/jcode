import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'AI Terminal', href: '#terminal' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Custom Web Development',
    description: 'High-performance React applications tailored to your business needs using the latest modern stacks.',
    icon: 'code'
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate Large Language Models (LLMs) like Gemini into your existing workflows.',
    icon: 'cpu'
  },
  {
    title: 'UI/UX Design',
    description: 'Dark-mode first, accessibility-focused designs that captivate users and drive engagement.',
    icon: 'palette'
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable serverless infrastructure design to handle millions of requests without breaking a sweat.',
    icon: 'cloud'
  }
];
