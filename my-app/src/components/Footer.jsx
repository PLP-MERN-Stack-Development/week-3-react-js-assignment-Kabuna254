export default function Footer() {
  return (
    <footer className="text-muted-foreground bg-slate-300 text-sm py-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} TaskApp. All rights reserved.</p>
      <div className="space-x-4 mt-2">
        <a href="#" className="underline">Privacy</a>
        <a href="#" className="underline">Terms</a>
      </div>
    </footer>
  );
}
