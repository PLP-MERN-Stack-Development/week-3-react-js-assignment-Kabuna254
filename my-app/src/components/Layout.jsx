import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow px-4 py-10 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
