import { UserRole, CostumeCondition, RentalStatus } from '../types/index.js';

export const mockUsers = [
  {
    id: '1',
    email: 'admin@costumeworld.com',
    name: 'Admin User',
    role: UserRole.ADMIN
  },
  {
    id: '2',
    email: 'john@example.com',
    name: 'John Doe',
    role: UserRole.USER
  },
  {
    id: '3',
    email: 'jane@example.com',
    name: 'Jane Smith',
    role: UserRole.USER
  }
];

export const mockCostumes = [
  {
    id: '1',
    name: 'Medieval Knight Armor',
    description: 'Complete medieval knight costume with chainmail, helmet, and sword. Perfect for Renaissance fairs and historical events.',
    category: 'Historical',
    size: 'L',
    price: 45,
    image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg',
    available: true,
    condition: CostumeCondition.EXCELLENT
  },
  {
    id: '2',
    name: 'Victorian Ball Gown',
    description: 'Elegant Victorian-era ball gown with corset, bustle, and intricate lace details. Includes matching gloves and accessories.',
    category: 'Historical',
    size: 'M',
    price: 65,
    image: 'https://images.pexels.com/photos/6069113/pexels-photo-6069113.jpeg',
    available: true,
    condition: CostumeCondition.EXCELLENT
  },
  {
    id: '3',
    name: 'Superhero Cape Set',
    description: 'Classic superhero costume with flowing cape, mask, and emblem. Available in multiple colors and perfect for comic conventions.',
    category: 'Superhero',
    size: 'L',
    price: 35,
    image: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg',
    available: false,
    condition: CostumeCondition.GOOD
  },
  {
    id: '4',
    name: 'Pirate Captain Outfit',
    description: 'Complete pirate costume with tricorn hat, cutlass, eye patch, and authentic-looking accessories. Ahoy matey!',
    category: 'Fantasy',
    size: 'XL',
    price: 40,
    image: 'https://images.pexels.com/photos/6069115/pexels-photo-6069115.jpeg',
    available: true,
    condition: CostumeCondition.GOOD
  },
  {
    id: '5',
    name: 'Fairy Princess Dress',
    description: 'Magical fairy princess costume with iridescent wings, sparkling tiara, and flowing dress. Perfect for fantasy events.',
    category: 'Fantasy',
    size: 'S',
    price: 30,
    image: 'https://images.pexels.com/photos/6069116/pexels-photo-6069116.jpeg',
    available: true,
    condition: CostumeCondition.EXCELLENT
  },
  {
    id: '6',
    name: 'Zombie Apocalypse Set',
    description: 'Terrifying zombie costume with special effects makeup, torn clothing, and realistic blood effects. Not for the faint of heart!',
    category: 'Horror',
    size: 'M',
    price: 55,
    image: 'https://images.pexels.com/photos/6069117/pexels-photo-6069117.jpeg',
    available: true,
    condition: CostumeCondition.FAIR
  },
  {
    id: '7',
    name: 'Space Explorer Suit',
    description: 'Futuristic space suit with helmet, oxygen tank, and LED lights. Perfect for sci-fi conventions and space-themed parties.',
    category: 'Sci-Fi',
    size: 'L',
    price: 70,
    image: 'https://images.pexels.com/photos/6069118/pexels-photo-6069118.jpeg',
    available: true,
    condition: CostumeCondition.EXCELLENT
  },
  {
    id: '8',
    name: 'Clown Comedy Set',
    description: 'Colorful clown costume with oversized shoes, red nose, rainbow wig, and juggling balls. Guaranteed to bring smiles!',
    category: 'Comedy',
    size: 'M',
    price: 25,
    image: 'https://images.pexels.com/photos/6069119/pexels-photo-6069119.jpeg',
    available: true,
    condition: CostumeCondition.GOOD
  }
];

export const mockRentals = [
  {
    id: '1',
    userId: '2',
    costumeId: '3',
    startDate: '2024-12-20',
    endDate: '2024-12-22',
    status: RentalStatus.ACTIVE,
    totalCost: 70
  },
  {
    id: '2',
    userId: '2',
    costumeId: '1',
    startDate: '2024-11-15',
    endDate: '2024-11-17',
    status: RentalStatus.RETURNED,
    totalCost: 90
  },
  {
    id: '3',
    userId: '3',
    costumeId: '2',
    startDate: '2024-10-31',
    endDate: '2024-11-02',
    status: RentalStatus.RETURNED,
    totalCost: 130
  }
];