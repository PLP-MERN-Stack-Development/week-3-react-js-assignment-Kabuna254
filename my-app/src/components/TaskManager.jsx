import { useState, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import TaskItem from './TaskItem';
import { Button } from '@/components/ui/button';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAdd = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
    setNewTask('');
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="w-full max-w-screen-md mx-auto mt-8 p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-black dark:text-white text-xl font-bold mb-4 text-center">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New task"
          className="text-black dark:text-white flex-grow border px-2 py-1 rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      <div className="flex gap-2 justify-center mb-4">
        <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>All</Button>
        <Button variant={filter === 'active' ? 'default' : 'outline'} onClick={() => setFilter('active')}>Active</Button>
        <Button variant={filter === 'completed' ? 'default' : 'outline'} onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      <div>
        {filteredTasks.length === 0 ? (
          <p className="text-center text-muted-foreground">No tasks</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
