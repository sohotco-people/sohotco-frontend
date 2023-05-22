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
