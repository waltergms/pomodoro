import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.interruptDate) return 'Interrompida';
  if (task.completeDate) return 'Concluída';
  if (task.id === activeTask?.id) return 'Em andamento';
  return 'Abandonada';
}
