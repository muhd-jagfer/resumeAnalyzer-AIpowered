import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

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
      <div className = "page-heading">
        <h1> RESUMYZER </h1>
        <h2> Track Your Resume & Review Your Submissions With AI Powered Feedback.</h2>
      </div>
    </section>

    
  </main>
}
