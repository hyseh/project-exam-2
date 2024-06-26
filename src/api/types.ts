export type Bookings = {
  id: string
  dateFrom: string
  dateTo: string
  guests: number
  created: string
  updated: string
  venue: Venue
  customer: Profile
}

export type Venue = {
  id: string
  name: string
  description: string
  media: { url: string; alt: string }[]
  price: number
  maxGuests: number
  rating: number
  created: string
  updated: string
  meta: { wifi: boolean; parking: boolean; breakfast: boolean; pets: boolean }
  location: {
    address: string
    city: string
    zip: string
    country: string
    continent: string
    lat: number
    lng: number
  }
  owner?: Profile
  bookings?: Bookings[]
}

export type Profile = {
  name: string
  email: string
  banner: { url: string; alt: string }
  avatar: { url: string; alt: string }
  bio: string
  venueManager: boolean
  _count: { bookings: number; venues: number }
  bookings: Bookings[]
  venues: Venue[]
}

export type Meta = {
  isFirstPage: boolean
  isLastPage: boolean
  currentPage: number
  previousPage?: number
  nextPage?: number
  pageCount: number
  totalCount: number
}

export type Errors = {
  code?: string
  message: string
  path?: string[]
}
