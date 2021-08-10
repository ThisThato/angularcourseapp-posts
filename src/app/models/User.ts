export interface User {
  firstname: string;
  lastname: string;
  age?: number;
  address?: {
    street?: string,
    city?: string,
    province?: string
  }
  image?: string,
  isActive?: boolean
}