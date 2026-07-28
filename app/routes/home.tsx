import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumyzer" },
    { name: "description", content: "Get instant feedback on your resume with our AI-powered analysis." },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover bg-center px-4 py-24 sm:px-6 lg:px-8">
      <Navbar />

      <section className="main-section mx-auto max-w-7xl">
        <div className="page-heading py-8 sm:py-12 lg:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">RESUMYZER</h1>
          <h2 className="max-w-2xl text-lg sm:text-xl lg:text-2xl">
            Track your resume submissions and review them with AI-powered feedback.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section w-full">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}