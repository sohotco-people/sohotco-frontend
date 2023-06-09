export interface Type_User {
  id: number
  kakao_id: string
  name: string
  link: string
  intro: string
  positions: Type_Detail[]
  experiences: Type_Detail[]
  locations: Type_Detail[]
  weeks: Type_Detail[]
  meeting_systems: Type_Detail[]
  meeting_times: Type_Detail[]
  created_at: Date
  deleted_at?: Date
  project: {}
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
  created_at: string
  updated_at: Date
  meeting_systems: Type_Detail[]
  meeting_times: Type_Detail[]
  weeks: Type_Detail[]
  positions: Type_Detail[]
  locations: Type_Detail[]
}

export interface Project_Post {
  name: string,
  intro: string,
  description: string,
  meeting_times: number[],
  meeting_systems: number[],
  weeks: number[],
  positions: number[],
  locations: number[],
  experiences: number[]
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

export interface Type_News {
  id: number
  requestor_id: number
  requestor_name: string
  respondent_id: number
  respondent_name: string
  project_id: number
  message: string
  created_at: string
}
