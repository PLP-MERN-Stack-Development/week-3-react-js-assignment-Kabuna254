import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle>About This App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            TaskApp is a modern task management app built with React, Vite, Tailwind CSS, and shadcn/ui.
            It helps you stay organized by allowing you to add, complete, and delete tasks with ease. 
            The app features theme switching (light/dark mode), persistent local storage, and a clean, 
            responsive UI — all designed with modular, reusable components.
            Whether you're managing daily to-dos or long-term goals, TaskMate keeps your productivity in focus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="default">Learn More</Button>
          </div>
              
        </CardContent>
      </Card>
    </div>
  );
}