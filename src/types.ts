export type Profession = 'Plumber' | 'Electrician' | 'Carpenter' | 'Painter' | 'HVAC' | 'Handyman' | 'Gardener';

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  profession: Profession;
  postedAt: string;
  status: 'Open' | 'In Progress' | 'Completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  profession?: Profession;
  location?: string;
  avatar?: string;
  isProvider: boolean;
}

export const DUMMY_JOBS: Job[] = [
  {
    id: '1',
    title: 'Leaking Kitchen Sink Repair',
    description: 'The main pipe under the sink is leaking. Need immediate assistance.',
    location: 'Mumbai, Maharashtra',
    price: '₹2,500 - ₹4,000',
    profession: 'Plumber',
    postedAt: '2 hours ago',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Install 5 New Ceiling Fans',
    description: 'Need to replace old fixtures with new smart fans in all bedrooms.',
    location: 'Pune, Maharashtra',
    price: '₹1,500 - ₹3,000',
    profession: 'Electrician',
    postedAt: '5 hours ago',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Custom Bookshelf Construction',
    description: 'Looking for a skilled carpenter to build a floor-to-ceiling oak bookshelf.',
    location: 'Nagpur, Maharashtra',
    price: '₹15,000 - ₹25,000',
    profession: 'Carpenter',
    postedAt: '1 day ago',
    status: 'Open',
  },
  {
    id: '4',
    title: 'Full Living Room Repaint',
    description: 'Need two coats of premium eggshell paint. Walls are already prepped.',
    location: 'Nashik, Maharashtra',
    price: '₹8,000 - ₹12,000',
    profession: 'Painter',
    postedAt: '3 hours ago',
    status: 'Open',
  },
  {
    id: '5',
    title: 'AC Unit Not Cooling',
    description: 'Central AC system is blowing warm air. Might need refrigerant recharge.',
    location: 'Aurangabad, Maharashtra',
    price: '₹1,200 - ₹2,500',
    profession: 'HVAC',
    postedAt: '1 hour ago',
    status: 'Open',
  },
  {
    id: '6',
    title: 'Garden Fence Repair',
    description: 'Several panels of the wooden fence were damaged during the storm.',
    location: 'Thane, Maharashtra',
    price: '₹3,500 - ₹6,000',
    profession: 'Carpenter',
    postedAt: '6 hours ago',
    status: 'Open',
  },
];

export const PROFESSIONS: Profession[] = [
  'Plumber',
  'Electrician',
  'Carpenter',
  'Painter',
  'HVAC',
  'Handyman',
  'Gardener',
];
