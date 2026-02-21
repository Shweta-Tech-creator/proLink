export type Profession = 'Plumber' | 'Electrician' | 'Carpenter' | 'Painter' | 'Mason' | 'Handyman' | 'Gardener';

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
    title: 'Kitchen Tap & Sink Leakage',
    description: 'The main pipe under the kitchen sink is leaking continuously. Need a plumber to fix the connection and replace the gasket if needed.',
    location: 'Dadar, Mumbai',
    price: '₹500 - ₹1,200',
    profession: 'Plumber',
    postedAt: '2 hours ago',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Full House Shifting & Re-wiring',
    description: 'Relocating to a new flat. Need to install 4 ceiling fans, 10 LED bulbs, and check the main MCB box wiring.',
    location: 'Kothrud, Pune',
    price: '₹2,500 - ₹5,000',
    profession: 'Electrician',
    postedAt: '5 hours ago',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Wooden Wardrobe Door Repair',
    description: 'The sliding door of the bedroom wardrobe is jammed. Need a carpenter to replace the rollers and adjust the alignment.',
    location: 'Sitabuldi, Nagpur',
    price: '₹1,500 - ₹3,000',
    profession: 'Carpenter',
    postedAt: '1 day ago',
    status: 'Open',
  },
  {
    id: '4',
    title: 'Exterior Wall Waterproofing & Painting',
    description: 'Living room wall has dampness issues. Need professional painting with a coat of waterproof primer and premium emulsion.',
    location: 'Panchavati, Nashik',
    price: '₹12,000 - ₹20,000',
    profession: 'Painter',
    postedAt: '3 hours ago',
    status: 'Open',
  },
  {
    id: '5',
    title: 'Compound Wall Cement Plastering',
    description: 'A small portion of the garden compound wall has collapsed. Need a mason for brickwork and cement plastering.',
    location: 'Cidco, Aurangabad',
    price: '₹3,000 - ₹5,500',
    profession: 'Mason',
    postedAt: '1 hour ago',
    status: 'Open',
  },
  {
    id: '6',
    title: 'Seasonal Garden Trimming',
    description: 'Need someone to trim the lawn grass, prune the hibiscus plants, and apply organic fertilizer across the backyard.',
    location: 'Naupada, Thane',
    price: '₹800 - ₹1,500',
    profession: 'Gardener',
    postedAt: '6 hours ago',
    status: 'Open',
  },
];

export const PROFESSIONS: Profession[] = [
  'Plumber',
  'Electrician',
  'Carpenter',
  'Painter',
  'Mason',
  'Handyman',
  'Gardener',
];
