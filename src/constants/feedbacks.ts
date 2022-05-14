export enum FeedbackTypesEnum {
  BUG = 'Bug',
  IDEA = 'Ideia',
  OTHER = 'Outro',
}

export type FeedbackType = keyof typeof FeedbackTypesEnum

export type FeedbackModel = {
  id: string
  type: FeedbackType
  comment: string
  screenshot?: string
  createdAt: string
}
