import React from 'react';
import TaskDisplay, { TaskDisplayProps } from './TaskDisplay';
import { Task } from '../tasks';

type TaskListProps = Omit<TaskDisplayProps, 'task'> & {
	tasks: Array<Task>;
};

// export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
export default function TaskList({ tasks, ...remainingProps }: TaskListProps) {
	return (
		<>
			<h4>Tasks</h4>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{/* <TaskDisplay
							task={task}
							onChangeTask={onChangeTask}
							onDeleteTask={onDeleteTask}
						/> */}
						<TaskDisplay
							task={task}
							{...remainingProps}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
