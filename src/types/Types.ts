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
  name: string
  intro: string
  description: string
  views: number
  is_published: boolean
  created_at: Date
  updated_at: Date
  meeting_systems: Type_Detail[]
  meeting_times: Type_Detail[]
  meeting_weeks: Type_Detail[]
  positions: Type_Detail[]
}

export interface Project_Post {
  name: string,
  intro: string,
  description: string,
  meeting_times: number[],
  meeting_systems: number[],
  weeks: number[],
  positions: number[],
  locations: number[]
}

export interface Type_Project_Context {
  title: string
  intro: string
  desc: string
  meetType: string
  locations: number[]
  meeting_systems: number[]
  week: number[]
  time: number[]
  position: number[]
  createdAt: string
  updatedAt: string
  isPublished: boolean
  viewCnt: string
}
