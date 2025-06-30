import { Button } from "@/components/ui/button";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer flex-grow ${task.completed ? 'line-through text-muted-foreground' : ''}`}
      >
        {task.text}
      </span>
      <Button variant="destructive" size="sm" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  );
}
