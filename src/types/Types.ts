export interface Type_User {
  id: number
  name: string
  link: string
  intro: string
  positions: Type_Detail[]
  experiences: Type_Detail[]
  locations: Type_Detail[]
  meeting_weeks: Type_Detail[]
  meeting_systems: Type_Detail[]
  meeting_times: Type_Detail[]
  createdAt: Date
  deletedAt?: Date
}

export interface Type_Detail {
  id: number
  name: string
}

export interface Type_Project {
  id: string
  title: string
  intro: string
  meetType: string
  location: string[]
  week: number[]
  time: number[]
  position: number[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
  viewCnt: string
}
