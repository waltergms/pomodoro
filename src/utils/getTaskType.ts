import type { TaskModel } from '../models/TaskModel';

export function getTaskType(task: TaskModel): string {
  if (task.type === 'workTime') return 'Trabalho';
  if (task.type === 'shortBreakTime') return 'Descanso Curto';
  if (task.type === 'longBreakTime') return 'Descanso Longo';
  return 'Outro';
}
