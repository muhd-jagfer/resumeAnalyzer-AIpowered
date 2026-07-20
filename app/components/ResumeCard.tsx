import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const fallbackSrc = "/images/pdf.png";

    // normalize image path: allow absolute URLs or paths served from public/
    const src = imagePath
        ? (imagePath.startsWith("http") || imagePath.startsWith("/") ? imagePath : `/${imagePath}`)
        : fallbackSrc;

    return (
        <Link to={`/resumes/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">
                        {companyName}
                    </h2>
                    <h3 className="text-lg break-words text-gray-500">
                        {jobTitle}
                    </h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={src}
                        alt="resume"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackSrc; }}
                        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top" />
                </div>
            </div>
        </Link>
    );
}
export default ResumeCard