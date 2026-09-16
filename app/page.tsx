import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/project-image";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  const projects = [
    {
      title: "OPERRA",
      description:
        "Developer infrastructure and SaaS API platform featuring multi-tenant organizations, API key management, usage tracking, billing workflows, and production-oriented backend architecture.",
      tags: [
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Docker",
        "REST API",
      ],
      image: "/operra-dashboard.png",
      link: "https://www.ventryxtech.com/login",
      linkLabel: "Live Demo",
      repo: "https://github.com/Ventryx-Technologies/operra-web.git",
    },
    {
      title: "3D PrintVault",
      description:
        "Desktop application for organizing and managing 3D printing assets and workflows, with licensing, file management, and integrations designed for digital fabrication.",
      tags: ["Tauri", "React", "TypeScript", "Vite", "REST API"],
      image: "/printvault-dashboard.png",
      link: "https://github.com/SwiftPrint-Lab/3D-PrintVault/releases",
      linkLabel: "View Release",
      repo: "https://github.com/SwiftPrint-Lab/3D-PrintVault.git",
    },
    {
      title: "ITSM Ticketing System",
      description:
        "IT service management application featuring user authentication, ticket management, automated triage, workflow routing, and database-backed incident tracking.",
      tags: ["Python", "Flask", "SQLite", "SQLAlchemy", "HTML", "CSS"],
      image: "/itsm-ticketing-system.png",
      link: "https://itsm-ticketing-system.onrender.com/",
      linkLabel: "Live Demo",
      repo: "https://github.com/cshamburger/itsm-ticketing-system.git",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: [
        "Python",
        "PHP",
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Flask", "Tauri", "Vite", "jQuery"],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "Prisma ORM",
        "SQLAlchemy",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "VS Code",
        "NetBeans",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <ScrollToTop />

      {/* =========================
          NAVIGATION / HEADER
      ========================== */}
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 uppercase"
      >
        <div className="whitespace-nowrap font-mono text-base font-bold tracking-tighter sm:text-xl">
          Corey<span className="text-primary">_</span>Shamburger
        </div>

        <nav className="hidden gap-5 text-xs font-medium text-muted-foreground md:flex lg:gap-8 lg:text-sm">
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>

          <Link
            href="#skills"
            className="transition-colors hover:text-primary"
          >
            Skills
          </Link>

          <Link
            href="#about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <Button
          asChild
          variant="outline"
          className="border-primary/50 px-3 font-mono text-[10px] hover:border-primary hover:bg-primary/10 hover:text-primary sm:px-4 sm:text-xs"
        >
          <a
            href="/Corey_Shamburger_Software_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </Button>
      </Container>

      {/* =========================
          HERO SECTION
      ========================== */}
      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden bg-background">
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>

          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 py-16 md:grid-cols-2 md:gap-8 md:py-12 lg:gap-12">
          {/* Hero Text */}
          <div className="mx-auto w-full max-w-xl space-y-5 md:mx-0 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              SYSTEM ONLINE // AVAILABLE FOR HIRE
            </div>

            <h1 className="font-display text-5xl leading-[0.9] tracking-tighter sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
              SOFTWARE
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #00bfe8 0%, #67e8f9 50%, #ffffff 100%)",
                }}
              >
                DEVELOPER
              </span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg md:text-base lg:text-lg xl:text-xl">
              I specialize in Software Development with a focus on Application
              Development, building full-stack applications, backend services,
              REST APIs, databases, and automation tools.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4 sm:pt-4">
              <a
                href="#projects"
                className={cn(
                  "uppercase",
                  buttonVariants({ size: "lg" })
                )}
              >
                View projects <ArrowRight className="size-4" />
              </a>

              <div className="flex gap-1 sm:gap-2">
                <Link
                  href="https://github.com/cshamburger"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })
                  )}
                >
                  <Github className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/corey-shamburger"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>

                <a
                  href="mailto:corey@coreysham.dev"
                  aria-label="Email Corey"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })
                  )}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Development Architecture */}
          <div className="relative mx-auto hidden w-full items-center justify-center md:flex">
            <img
              src="/hero-development-architecture.png"
              alt="Software development architecture showing code, APIs, backend services, database connections"
              className="h-auto w-[125%] max-w-none object-contain lg:w-[140%] xl:w-[150%]"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </div>
      </Container>

      {/* =========================
          PROJECTS SECTION
      ========================== */}
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-16 sm:py-20 lg:py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1 scroll-mt-20"
      >
        <div className="mb-10 grid items-end justify-between gap-6 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="mb-4 font-display text-4xl tracking-tighter sm:text-5xl md:text-6xl">
              SELECTED
              <br />
              WORKS
            </h2>

            <div className="h-1 w-24 bg-primary" />
          </div>

          <p className="max-w-sm text-left text-muted-foreground">
            A selection of software applications, backend systems, and developer
            tools built to solve practical problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-none border-border bg-card pt-0 transition-all duration-300 hover:border-primary/50"
            >
              <ProjectImage src={project.image} alt={project.title} />

              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="font-display text-2xl transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>

              <CardFooter className="flex flex-wrap justify-between gap-4 pt-0">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm transition-colors hover:text-primary"
                >
                  {project.linkLabel}
                  <ExternalLink className="size-3" />
                </Link>

                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm transition-colors hover:text-primary"
                >
                  CODE <Github className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      {/* =========================
          SKILLS SECTION
      ========================== */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-16 sm:py-20 lg:py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1 scroll-mt-20"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mb-6 font-display text-4xl tracking-tighter sm:text-5xl lg:text-4xl">
              TECH_STACK
            </h2>

            <p className="mb-8 max-w-lg text-muted-foreground">
              My preferred weapons of choice for building digital products.
              Always learning, always evolving.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex aspect-square flex-col items-center justify-center border border-border bg-background p-3 transition-colors hover:border-primary sm:p-4">
                <Code2 className="mb-2 h-8 w-8 text-primary" />
                <span className="text-center font-mono text-[10px] sm:text-xs">
                  CLEAN_CODE
                </span>
              </div>

              <div className="flex aspect-square flex-col items-center justify-center border border-border bg-background p-3 transition-colors hover:border-primary sm:p-4">
                <Database className="mb-2 h-8 w-8 text-primary" />
                <span className="text-center font-mono text-[10px] sm:text-xs">
                  SCALABLE_DB
                </span>
              </div>

              <div className="flex aspect-square flex-col items-center justify-center border border-border bg-background p-3 transition-colors hover:border-primary sm:p-4">
                <Cpu className="mb-2 h-8 w-8 text-primary" />
                <span className="text-center font-mono text-[10px] sm:text-xs">
                  PERFORMANCE
                </span>
              </div>

              <div className="flex aspect-square flex-col items-center justify-center border border-border bg-background p-3 transition-colors hover:border-primary sm:p-4">
                <Terminal className="mb-2 h-8 w-8 text-primary" />
                <span className="text-center font-mono text-[10px] sm:text-xs">
                  DEVOPS
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="inline-block border-b border-primary/30 pb-2 font-display text-xl">
                  {skillGroup.category}
                </h3>

                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="group flex items-center justify-between gap-4"
                    >
                      <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {skill}
                      </span>

                      <div className="h-0.5 w-8 shrink-0 bg-secondary transition-colors group-hover:bg-primary sm:w-12" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* =========================
          ABOUT SECTION
      ========================== */}
      <Container
        id="about"
        className="scroll-mt-20 border-t border-border py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center">
            <div className="flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
              {/* Profile Image */}
              <div className="mx-auto w-52 shrink-0 overflow-hidden rounded-full sm:w-60 md:mx-0 md:w-64 lg:w-72">
                <img
                  src="/corey-shamburger.jpeg"
                  alt="Corey Shamburger"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Cyan Divider - Desktop */}
              <div className="hidden w-px shrink-0 bg-primary md:block" />

              {/* Cyan Divider - Mobile */}
              <div className="h-px w-24 bg-primary md:hidden" />

              {/* About Content */}
              <div className="w-full min-w-0 max-w-xl">
                <div className="mb-5 font-mono text-xs text-primary">
                  // SOFTWARE_DEVELOPER
                </div>

                <h3 className="mb-6 font-display text-2xl leading-tight sm:text-3xl">
                  BUILDING{" "}
                  <span className="text-primary">PRACTICAL SOFTWARE</span>
                  <br className="hidden sm:block" />
                  <span className="sm:ml-0"> FOR REAL-WORLD PROBLEMS.</span>
                </h3>

                <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I&apos;m a software developer focused on application
                  development, full-stack systems, backend services, REST APIs,
                  databases, and automation.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I build practical software solutions with an emphasis on clean
                  architecture, reliability, and real-world functionality. My
                  background in technical systems, troubleshooting, and
                  leadership brings a disciplined, problem-solving approach to
                  software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <Container
        id="contact"
        className="scroll-mt-20 border-t border-border bg-card py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 font-display text-3xl sm:text-4xl">
              INITIATE_CONTACT
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Interested in discussing a software development opportunity,
              potential employment, project, or collaboration? Send me a
              message.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>

      {/* =========================
          FOOTER
      ========================== */}
      <Container
        component="footer"
        className="mx-auto max-w-7xl border-t border-border bg-background py-8 text-center"
      >
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 COREY SHAMBURGER. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-muted-foreground sm:gap-6">
            <Link
              href="https://github.com/cshamburger"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GITHUB
            </Link>

            <Link
              href="https://www.linkedin.com/in/corey-shamburger"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LINKEDIN
            </Link>

            <Link
              href="mailto:corey@coreysham.dev"
              className="transition-colors hover:text-primary"
            >
              EMAIL
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}