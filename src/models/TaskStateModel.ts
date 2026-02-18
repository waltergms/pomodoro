import type { TaskType } from './TaskType';
import type { TaskModel } from './TaskModel.ts';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    [key in TaskType]: number;
  };
};
