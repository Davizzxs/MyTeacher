export interface Tutor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  pricePerHour: number;
  image: string;
  bio: string;
  subjects: string[];
}

export interface Review {
  id: string;
  studentName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Reservation {
  id: string;
  tutorId: string;
  tutorName: string;
  date: string;
  time: string;
  modality: 'Online' | 'Presencial';
  status: 'confirmada' | 'pendiente' | 'finalizada';
}
