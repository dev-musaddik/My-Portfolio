import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { getProjects, getSkills } from "../api/axiosInstance";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../context/AuthContext";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  RefreshCcw,
  Sparkles,
  Cloud,
  Clock,
} from "lucide-react";
import Typewriter from "typewriter-effect";
import {
  DepthShadowRotateButton,
  UnderlineFadeButton,
} from "../components/buttons/buttons";
import { smoothScrollingFunction } from "../utils/smoothScroll";
// Skeleton for loading state
const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);
// SectionTitle component for headers
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center space-y-3">
    {eyebrow && (
      <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-600 dark:text-gray-400">
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
      <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    )}
  </div>
);

// GradientButton.jsx
const GradientButton = ({ href, children, Icon }) => (
  <a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    className="group relative inline-flex items-center gap-2 justify-center rounded-full p-[2px] overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
  >
    {/* Border layer */}
    <span className="absolute inset-0 rounded-full bg-[length:300%_300%] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-[0%_50%] group-hover:animate-border" />

    {/* Inner button */}
    <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-950/70 backdrop-blur px-6 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </span>
  </a>
);

const PortfolioSection = () => {
  const { state } = useContext(AuthContext);
  const { user } = state || {};

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typingDone, setTypingDone] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [projectsData, skillsData] = await Promise.all([
        getProjects(),
        getSkills(),
      ]);
      setProjects(projectsData || []);
      setSkills(skillsData || []);
    } catch (err) {
      console.error("Error fetching projects and skills:", err);
      setError("Failed to load content. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const skillsList = useMemo(() => skills, [skills]);
  const projectsList = useMemo(() => projects, [projects]);

  return (
    <div className="relative scroll-smooth">
      {/* Ambient gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 space-y-16">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <div className="absolute inset-0 opacity-60">
            <div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25)_0%,transparent_60%),conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.25),transparent)]" />
          </div>

          <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-20 text-center">
            <p className="text-sm tracking-widest text-gray-700 dark:text-gray-300 uppercase">
              Portfolio
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
              Welcome to
              {typingDone ? (
                " Musaddik"
              ) : (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" Musaddik")
                      .callFunction(() => setTypingDone(true))
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 75,
                    cursor: "|", // show cursor during typing
                  }}
                />
              )}
              <span className="ml-3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                portfolio
              </span>
            </h1>

            {/* Typewriter Name */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-indigo-600 dark:text-fuchsia-400"></h2>

            {/* Looping Subtext */}
            <p className="text-lg md:text-xl text-gray-700/90 dark:text-gray-300">
              <Typewriter
                options={{
                  strings: [
                    "Future Engineer",
                    "Coder",
                    "Programmer",
                    "Tech Enthusiast",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 60,
                }}
              />
            </p>

            {/* Buttons */}

            <div className="mt-2 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 p-4 w-full">
              <UnderlineFadeButton
                href="#about"
                icon={Cloud}
                text="Learn more about me"
              />
              <UnderlineFadeButton
                href="#projects"
                icon={Cloud}
                text="Explore projects"
              />
            </div>
          </div>
        </motion.section>

        {/* ERROR / LOADING STATES */}
        {error && (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-red-200/40 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30 p-6 text-red-700 dark:text-red-300 flex items-center justify-between gap-4">
              <p className="text-sm md:text-base">{error}</p>
              <button
                onClick={fetchData}
                className="inline-flex items-center gap-2 rounded-lg border border-red-300/40 bg-white/70 dark:bg-gray-950/60 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300 hover:bg-white transition"
              >
                <RefreshCcw className="h-4 w-4" /> Retry
              </button>
            </div>
          </div>
        )}

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="About"
            title="About Me"
            subtitle="I build robust, scalable web apps with delightful UX."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <p>
                I'm a passionate full‑stack engineer focused on creating fast,
                accessible experiences. I love turning complex problems into
                elegant, production‑ready solutions.
              </p>
              <p>
                My current toolkit: React, Node.js, Express, TypeScript,
                Tailwind CSS, and a sprinkle of Framer Motion for polish.
              </p>
            </div>
            <div className="flex justify-center order-1  md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 blur opacity-30" />
                <img
                  src={user?.profileImage || "https://via.placeholder.com/256"}
                  alt="Profile"
                  className="relative rounded-full h-56 w-56 md:h-64 md:w-64 object-cover border border-white/20 shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="Skills"
            title="Skills & Technologies"
            subtitle="A snapshot of my current toolkit"
          />

          {loading ? (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-16 rounded-2xl" />
              ))}
            </div>
          ) : (
            <>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {skillsList.map((skill) => (
                  <SkillCard key={skill._id} skill={skill} />
                ))}
              </div>
              <Tooltip id="skill-tooltip" />
            </>
          )}
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="Work"
            title="Featured Projects"
            subtitle="A selection of shipped, real‑world builds"
          />

          {loading ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/10 p-4">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-6 w-1/2 mt-4" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                  <Skeleton className="h-10 w-2/3 mt-4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsList.map((project) => (
                <motion.div
                  key={project._id}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* CONTACT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] text-center"
        >
          <SectionTitle
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Let's collaborate on something exceptional"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GradientButton href="mailto:your-email@example.com" Icon={Mail}>
              Email Me
            </GradientButton>
            <GradientButton
              href="https://www.linkedin.com/in/your-profile"
              Icon={Linkedin}
            >
              LinkedIn
            </GradientButton>
            <GradientButton
              href="https://github.com/your-profile"
              Icon={Github}
            >
              GitHub
            </GradientButton>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PortfolioSection;
