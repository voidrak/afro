export interface Girls {
  id: number
  name: string
  price: number
  image: string
  isNew: boolean
  isFavorite: boolean
  description: string
}

export interface GirlsDetails extends Girls {
  age: number
  height: number
  weight: number
  body_color: string
}