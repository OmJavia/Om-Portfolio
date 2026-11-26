import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  showCommandMenu: true,
  copyrightYear: 2026,
  footerTagline: "Building products at the intersection of intelligence, technology and execution.",
  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "proof", enabled: true, order: 2 },
    { id: "projects", enabled: true, order: 3 },
    { id: "flagship", enabled: true, order: 4 },
    { id: "capabilities", enabled: true, order: 5 },
    { id: "experience", enabled: true, order: 6 },
    { id: "method", enabled: true, order: 7 },
    { id: "stack", enabled: true, order: 8 },
    { id: "openSource", enabled: true, order: 9 },
    { id: "about", enabled: true, order: 10 },
    { id: "contact", enabled: true, order: 11 },
  ],
};

export const picklShowcase = {
  title: "Turning a physical paddle into an interactive connected experience.",
  subtitle: "Case study · Connected Hardware & GTM",
  period: "Jan 2026 — Present",
  site: "https://pickleball.themegashot.com/",
  kickstarter:
    "https://www.kickstarter.com/projects/megashot/megashot-pickl-smart-pickleball-gaming-device",
  press: "https://pickleball.com/news/worlds-first-smart-pickleball-game-launched-by-metashot",
  intro:
    "MegaShot Pickl+ is a motion-sensing smart pickleball paddle with a companion game. Players swing a real paddle at home; the paddle reads the stroke and the game answers in real time.",
  problem:
    "Active at-home sports gaming usually needs a console, cameras, or a dedicated hub. Pickl+ had to work in a living room, pair with the phone or tablet people already own, and feel like hitting a real ball.",
  execution: [
    "Owned feature planning, PRDs, and requirement gathering across hardware, firmware, and app teams.",
    "Chose direct BLE pairing to everyday devices over a custom TV hub, removing hardware cost and supply-chain risk.",
    "Kept stroke interpretation on the phone so firmware stayed light and the algorithm could iterate without re-flashing.",
    "Designed the pairing-to-gameplay flow and tuned handle haptics to confirm ball contact.",
  ],
  story: [
    { step: "Physical product", text: "A real paddle with motion sensors, a handle haptic motor, and a BLE module." },
    { step: "Connected intelligence", text: "Sensor readings stream over Bluetooth; the phone interprets stroke type, swing velocity, and angle." },
    { step: "Interactive experience", text: "The companion game turns each swing into play and answers through the handle." },
  ],
  gtm: [
    { title: "Positioning", text: "Shaped technical positioning and the capability claims used across public launch material." },
    { title: "Campaign", text: "Led GTM strategy and execution for the public Kickstarter campaign and backer communications." },
    { title: "Creator outreach", text: "Built creator outreach lists, community engagement, and launch-day campaign monitoring." },
    { title: "Feedback & iteration", text: "Ran player feedback rounds on sensor latency, grip ergonomics, and stroke accuracy, and fed them back into PRDs." },
  ],
  architecture: [
    { id: "01", title: "Motion Sensors", short: "Physical motion capture", detail: "Motion sensors embedded in the paddle read each swing as it happens." },
    { id: "02", title: "BLE Sync", short: "Data communication", detail: "Bluetooth Low Energy streams filtered sensor packets straight to the player's phone or tablet. No console or hub." },
    { id: "03", title: "Swing Logic", short: "Swing interpretation", detail: "The mobile runtime interprets stroke type, swing velocity, and angle, so the algorithm can improve without firmware updates." },
    { id: "04", title: "Mobile UI", short: "Connected application", detail: "The companion app handles pairing and calibration, then drops the player straight into a round." },
    { id: "05", title: "Game Engine", short: "Interactive gameplay", detail: "The game uses each interpreted swing as the player's input." },
    { id: "06", title: "Feedback", short: "Haptic response", detail: "On ball contact the game triggers the handle's haptic motor, so the swing feels like a hit." },
  ],
};
