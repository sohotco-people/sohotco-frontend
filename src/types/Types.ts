export interface Type_User {
  id: number
  name: string
  link: string
  intro: string
  positions: Type_Detail[]
  experiences: Type_Detail[]
  meetingLocations: Type_Detail[]
  meetingWeeks: Type_Detail[]
  meetingSystems: Type_Detail[]
  meetingTimes: Type_Detail[]
  createdAt: Date
  deletedAt?: Date
}

export interface Type_Detail {
  id: number
  name: string
}

export interface Type_Project {
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

export interface Type_Project_Context {
  title: string
  intro: string
  desc: string
  meetType: string
  location: Array<string>
  week: Array<string>
  time: Array<string>
  position: Array<string>
}
