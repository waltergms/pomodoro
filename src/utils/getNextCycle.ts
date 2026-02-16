import type { TaskModel } from '../models/taskModel';

export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

export function getCurrentType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';

  if (currentCycle % 2 === 0) return 'shortBreakTime';

  return 'workTime';
}

export function getFormattedTime(currentTime: number): string {
  const minutes: string = String(Math.ceil(currentTime / 60)).padStart(2, '0');
  let seconds: string = '00';
  if (currentTime % 60 !== 0) {
    seconds = String(currentTime % 60).padStart(2, '0');
  }
  return `${minutes}:${seconds}`;
}
