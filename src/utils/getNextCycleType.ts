import type { TaskType } from '../models/TaskType';

export function getNextCycleType(currentCycle: number): TaskType {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
