import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const fallbackSrc = "/images/pdf.png";

    // normalize image path: allow absolute URLs or paths served from public/
    const src = imagePath
        ? (imagePath.startsWith("http") || imagePath.startsWith("/") ? imagePath : `/${imagePath}`)
        : fallbackSrc;

    return (
        <Link to={`/resumes/${id}`} className="resume-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black break-words text-xl font-semibold">
                        {companyName}
                    </h2>
                    <h3 className="break-words text-base text-gray-500">
                        {jobTitle}
                    </h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            <div className="gradient-border overflow-hidden rounded-2xl">
                <div className="w-full">
                    <img
                        src={src}
                        alt="resume"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackSrc; }}
                        className="h-[300px] w-full rounded-xl object-cover object-top sm:h-[320px]" />
                </div>
            </div>
        </Link>
    );
}
export default ResumeCard