import { Button } from "@/components/ui/button";
import TaskManager from "@/components/TaskManager";


export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome Home</h1>
        <p className="mb-6">
          Your simple, fast, and theme-friendly task manager built with React.  
          Stay focused. Stay organized. Get things done.
        </p>
        <Button variant="default">Get Started</Button>
      </div>
      <div className="flex flex-col items-center gap-6">
        <TaskManager />
      </div>
    </>
  );
}