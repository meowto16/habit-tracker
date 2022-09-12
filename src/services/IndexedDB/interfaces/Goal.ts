import { Checkpoint } from './Checkpoint'

export enum Day {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
}

export interface Goal {
  checkpoints: Checkpoint[]
  date: {
    start: Date
    end: Date | null
  }
  days: Day[]
}
