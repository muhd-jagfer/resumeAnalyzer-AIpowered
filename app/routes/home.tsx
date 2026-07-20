import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumyzer" },
    { name: "description", content: "Get instant feedback on your resume with our AI-powered analysis." },
  ];
}

export default function Home() {
  return <main className = "bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className = "main-section">
      <div className = "page-heading py-16">
        <h1> RESUMYZER </h1>
        <h2> Track Your Resume & Review Your Submissions With AI Powered Feedback.</h2>
      </div>

     {resumes.length > 0 && (
      <div className = "resume-section">
        {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
      )}
    </section>
  </main>
}
