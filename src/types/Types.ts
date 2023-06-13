export interface Type_User {
  id: number
  kakao_id: string
  name: string
  link: string
  intro: string
  positions: Type_Detail[]
  experiences: Type_Detail[]
  meeting_locations: Type_Detail[]
  weeks: Type_Detail[]
  meeting_systems: Type_Detail[]
  meeting_times: Type_Detail[]
  created_at: Date
  deleted_at?: Date
  project: Type_Project[]
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
  week: string[]
  time: string[]
  position: number[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
  viewCnt: string
}
