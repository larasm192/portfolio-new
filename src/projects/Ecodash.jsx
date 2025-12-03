import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, Footer } from "../components/sections";
import {
  TextSection,
  IconListSection,
  IssueListSection,
  ProjectHero,
  AccordionSection,
  ChallengeSection,
  TimelineSection,
} from "../components/sections/ProjectSectionTemplates.jsx";
import EcoDashImage from "../assets/ecodash.png";
import codingUrl from "../assets/coding.png";
import logicUrl from "../assets/logic.png";
import accessibilityUrl from "../assets/accessibility.png";

const sectionConfigs = [
  { id: "overview", label: "Overview", type: "overview" },
  {
    id: "brief",
    label: "The Brief",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Create a single-screen, iOS dashboard that shows the UK's current carbon intensity plus a graph of today’s half-hourly intensity. It should handle loading and error states gracefully, using data from NESO's Carbon Intensity API.",
    ],
  },
  {
    id: "how-it-works",
    label: "How it Works",
    type: "icons",
    items: [
      {
        img: "https://img.icons8.com/ios/100/leaf--v1.png",
        alt: "Live data",
        title: "Current Carbon Intensity",
        text: "Fetches the current half-hour window; background colour shifts with the carbon index (very low → green, very high → deep red).",
      },
      {
        img: "https://img.icons8.com/windows/100/graph.png",
        alt: "Half-hourly graph",
        title: "Half-Hourly Graph",
        text: "Calls GET /intensity/date for today. Built with fl_chart: solid white for actuals, dashed grey for forecast, tooltips show timestamp + gCO₂/kWh, dynamic Y-scale to the day’s peak.",
      },
      {
        img: "https://img.icons8.com/ios/100/error--v1.png",
        alt: "Error handling",
        title: "Error Handling",
        text: "App bar shows last update + status (e.g. “No internet”, “API unavailable”) via internet_connection_checker_plus; falls back to forecast if actuals fail; app bar turns grey on errors.",
      },
      {
        img: "https://img.icons8.com/ios-filled/100/loading.png",
        alt: "Loading",
        title: "Loading States",
        text: "CircularProgressIndicator while fetching to avoid blank UI.",
      },
      {
        img: "https://img.icons8.com/ios-filled/100/refresh--v1.png",
        alt: "Refresh",
        title: "Auto-refresh",
        text: "Refreshes every 30 minutes in sync with the API cadence; manual pull-to-refresh keeps timing predictable.",
      },
    ],
  },
  {
    id: "design-decisions",
    label: "Design & Engineering Decisions",
    type: "accordion",
    items: [
      {
        title: "Visual clarity",
        body: "Prioritised typography, spacing, and colour-coding so the dashboard reads at a glance.",
      },
      {
        title: "Inspired by Tewke",
        body: "Inter-style fonts, dark mode, and restrained UI to mirror Tewke’s minimal polish.",
      },
      {
        title: "Material + iOS feel",
        body: "Kept MaterialApp for portability, themed it to feel native on iOS while staying Android-ready.",
      },
      {
        title: "Auto-refreshing",
        body: "Timer.periodic aligns refreshes with NESO’s 30-minute cadence so updates feel expected.",
      },
      {
        title: "Error resilience",
        body: "Split internet detection from API status (via internet_connection_checker_plus) for precise, trustworthy error messages.",
      },
      {
        title: "Graph logic",
        body: "Built dual-series fl_chart with tooltips, dynamic Y-scaling, and nullSpot to cleanly separate actual vs. forecast.",
      },
    ],
  },
  {
    id: "testing",
    label: "Key Engineering Challenges",
    type: "challenges",
    bg: "muted",
    items: [
      {
        problem: "DST bug from naive time slicing",
        fix: "Use DateTime.parse().toLocal() before plotting to keep slots aligned across BST/UTC.",
        result: "Accurate graphing through daylight-saving changes.",
      },
      {
        problem: "Error UI only occurs at 30 min intervals",
        fix: "Add real-time internet listener + apiConnection flag; surface failures in the app bar with last good fetch time.",
        result: "Users see immediate, precise error states.",
      },
      {
        problem: "Choosing between Cupertino and Material",
        fix: "Use MaterialApp for flexibility, layer iOS-forward theming (typography, spacing, tint).",
        result: "iOS-native feel while remaining Android-ready.",
      },
      {
        problem: "Line break between actual and forecast",
        fix: "Split into two series and use nullSpot to separate the lines.",
        result: "Visually distinct measured vs. forecast segments.",
      },
    ],
  },
  {
    id: "timeline",
    label: "Development Timeline",
    type: "timeline",
    items: [
      {
        date: "Nov 1",
        title: "Setup & API wiring",
        text: "Project setup, theme design, NESO API integration.",
      },
      {
        date: "Nov 2",
        title: "Graph prototype",
        text: "Built fl_chart prototype; mapped actual vs. forecast data.",
      },
      {
        date: "Nov 15",
        title: "Auto-refresh loop",
        text: "Added 30-min refresh, AppBar timestamp, and card typography.",
      },
      {
        date: "Nov 26",
        title: "DST + error states",
        text: "Fixed DST time logic; added internet/API error handling.",
      },
      {
        date: "Nov 27",
        title: "Polish & docs",
        text: "Refined graph spacing, tooltips, scaling; finalised README.",
      },
    ],
  },
  {
    id: "assumptions",
    label: "Assumptions",
    type: "text",
    paragraphs: [
      "• API refreshes every 30 minutes",
      "• If actual intensity is missing or zero, fall back to forecast",
      "• Primary audience is iOS users in the UK, but the codebase stays Android-ready",
    ],
  },
  {
    id: "future",
    label: "Future Improvements",
    type: "text",
    bg: "muted",
    paragraphs: [
      "• Persistent caching (e.g., SharedPreferences) for faster cold starts",
      "• Info modal to explain colour coding and the NESO data source",
      "• Richer graph interactivity (zoom/pan/animation)",
      "• Manual refresh plus clearer error states",
      "• Theme toggles (light / high-contrast)",
      "• Regional breakdowns (e.g., Scotland, London)",
      "• Push notifications when carbon intensity drops to LOW",
    ],
  },
  {
    id: "reflection",
    label: "Reflection",
    type: "text",
    bg: "muted",
    paragraphs: [
      "Ecodash was my entry point into Flutter and Dart. I learned how to structure a mobile app from scratch, think through asynchronous logic and UX under failure modes, and build for clarity in high-stakes contexts like sustainability.",
      "It was also a reminder that design can quietly help people make better choices. If extended, Ecodash could become a smart, gentle nudge for everyday energy awareness, and I’d love to keep building in that direction.",
    ],
    iconItems: [
      {
        img: codingUrl,
        alt: "Flutter/Dart",
        title: "Learning by Building",
        text: "My first Flutter/Dart project taught me core app structure, state handling, and API integration all through solving a real, meaningful problem.",
      },
      {
        img: logicUrl,
        alt: "Error UX Matters",
        title: "Error UX Matters",
        text: "Designing for offline and failure states showed me how crucial it is to maintain clarity and usefulness even when things break.",
      },
      {
        img: accessibilityUrl,
        alt: "Purpose-Driven UI",
        title: "Purpose-Driven UI",
        text: "Every design choice, from typography to chart behavior, served the user's need to make smarter energy decisions quickly and clearly.",
      },
    ],
  },
];

const sidebarSections = sectionConfigs.map(({ id, label }) => ({ id, label }));

export default function Ecodash() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  const getSectionOffset = (id) => {
    const el = document.getElementById(id);
    return el ? el.offsetTop : 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight - windowHeight;
      const progress = (scrollY / fullHeight) * 100;
      setScrollProgress(progress);

      for (let i = sidebarSections.length - 1; i >= 0; i--) {
        const sectionTop = getSectionOffset(sidebarSections[i].id);
        if (scrollY + 100 >= sectionTop) {
          setActiveSection(sidebarSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSection = (section) => {
    switch (section.type) {
      case "text":
        return (
          <TextSection
            key={section.id}
            id={section.id}
            label={section.label}
            paragraphs={section.paragraphs}
            images={section.images}
            stats={section.stats}
            quote={section.quote}
            personas={section.personas}
            bg={section.bg}
            iconItems={section.iconItems}
            iconColumns={section.iconColumns}
          />
        );
      case "icons":
        return (
          <IconListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
            columns={section.columns}
          />
        );
      case "timeline":
        return (
          <TimelineSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
          />
        );
      case "accordion":
        return (
          <AccordionSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
            allowMultiple={section.allowMultiple}
          />
        );
      case "issues":
        return (
          <IssueListSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            paragraphs={section.paragraphs}
            bg={section.bg}
          />
        );
      case "challenges":
        return (
          <ChallengeSection
            key={section.id}
            id={section.id}
            label={section.label}
            items={section.items}
            bg={section.bg}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16 text-neutral-900">
        <Sidebar
          sections={sidebarSections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
        />
        <main className="flex-1">
          <ProjectHero
            title="Ecodash"
            summary="Real-time UK carbon intensity insights via a minimalist Flutter dashboard designed for iOS with robust offline handling and dark-mode polish."
            badges={[
              {
                label: "Tools",
                value:
                  "Flutter, Dart, fl_chart, internet_connection_checker_plus, API",
              },
              { label: "Timeframe", value: "Nov 2025" },
            ]}
            buttons={[
              {
                image: "https://img.icons8.com/windows/32/external-link.png",
                text: "GitHub Repo",
                link: "https://github.com/larasm192/carbon_intensity_dashboard",
              },
            ]}
            extra={
              <span className="mt-3 inline-flex items-center rounded-2xl bg-emerald-600/10 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                Key highlight: Auto-refreshing every 30 min with state-aware
                error display
              </span>
            }
            image={{ src: EcoDashImage, alt: "EcoDash Screenshot" }}
          />

          {sectionConfigs
            .filter((section) => section.type !== "overview")
            .map(renderSection)}
        </main>
      </div>
      <Footer />
    </>
  );
}
