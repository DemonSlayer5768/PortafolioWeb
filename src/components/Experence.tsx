import { IoBriefcaseOutline } from "react-icons/io5";
interface Props {
  title: string;
  company: string;
  description: string;
  date: string;
  link?: string;
}

const experiences: Props[] = [
  {
    title: "Software Engineer",
    company: "Coparmex Jal",
    description: "Modificaciones de interfazces graficas en web y en delphi",
    date: "2023 - Present",
    // link: "https://techcorp.com",
  },
  {
    title: "Frontend Developer",
    company: "Design Web",
    description:
      "Created responsive and user-friendly web designs for various clients.",
    date: "2021 - 2023",
  },
];

export default function Experiencia() {
  return (
    <div className="container mx-auto px-14 py-24">
      <div className="grid gap-12">
        <h1 className="text-3xl font-bold text-left mb-12 text-white-800 flex items-center">
          <IoBriefcaseOutline className="mr-4 text-4xl" /> Experiencia
        </h1>

        {experiences.map((job, index) => (
          <div
            key={index}
            className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4"
          >
            <div className="relative pb-12 md:col-span-2">
              <div className="sticky top-0">
                <span className="text-blue-400 -left-[42px] absolute rounded-full text-5xl">
                  &bull;
                </span>
                <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                  {job.company}
                </h4>
                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                  {job.date}
                </time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
              <p>{job.description}</p>
              {job.link && (
                <a
                  href={job.link}
                  className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saber más{" "}
                  <svg
                    className="w-5 icon icon-tabler icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
