export const types = {
  init: {
    description: "Code that initializes the project.",
    title: "Begin a project.",
    emoji: "🎉",
  },
  format: {
    description:
      "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    title: "Format",
    emoji: "🎨",
  },
  chore: {
    description: "Other changes that don't modify src or test files",
    title: "Chores",
    emoji: "🧹",
  },
  "comment-fixes": {
    description: "A code that fixes comments.",
    title: "Add or update comments in source code.",
    emoji: "💡",
  },
  refactor: {
    description: "A code change that neither fixes a bug nor adds a feature",
    title: "Code Refactoring",
    emoji: "♻️",
  },
  "lint-fix": {
    description: "A code fixes compiler / linter warnings.",
    title: "Fix compiler / linter warnings.",
    emoji: "🚨",
  },
  seo: {
    description: "A code that add / update / improve SEO.",
    title: "Add / Update / Improve SEO.",
    emoji: "🔍",
  },
  types: {
    description: "A code that add or update types.",
    title: "Add or update types.",
    emoji: "🏷",
  },
  WIP: {
    description: "A code that is still work in progress.",
    title: "Work in progress.",
    emoji: "🚧",
  },
  typo: {
    description: "A code to fix the typos.",
    title: "Fix typos.",
    emoji: "✏️",
  },
  "update-text": {
    description: "A code that add or update text and literals.",
    title: "Add or update text and literals.",
    emoji: "💬",
  },
  "minor-fix": {
    description: "Simple fix for a non-critical issue.",
    title: "Minor Fix",
    emoji: "🩹",
  },
  feat: {
    description: "A new feature",
    title: "Features",
    emoji: "✨",
  },
  "clean-up": {
    description: "A code that removes the deprecated / dead codes.",
    title: "Deprecate / dead code that needs to be cleaned up.",
    emoji: "⚰️",
  },
  style: {
    description: "Add or update the UI and style files.",
    title: "Styles",
    emoji: "💎",
  },
  responsive: {
    description: "A code that add responsive design.",
    title: "Add responsive design.",
    emoji: "📱",
  },
  animations: {
    description: "A code that add or update animations and transitions.",
    title: "Add or update animations and transitions.",
    emoji: "💫",
  },
  assets: {
    description: "A code that add or updates assets.",
    title: "Add or update assets.",
    emoji: "🍱",
  },
  "downgrade-dependencies": {
    description: "A code that downgrade dependencies.",
    title: "Downgrade dependencies.",
    emoji: "⬇️",
  },
  "upgrade-dependencies": {
    description: "A code that upgrade dependencies.",
    title: "Upgrade dependencies.",
    emoji: "⬆️",
  },
  "pin-dependencies": {
    description: "Pin dependencies to specific versions.",
    title: "Pin dependencies to specific versions.",
    emoji: "📌",
  },
  "add-dependencies": {
    description: "A code that adds dependencies.",
    title: "Add dependencies.",
    emoji: "📦",
  },
  "remove-dependencies": {
    description: "A code that removes dependencies.",
    title: "Remove dependencies.",
    emoji: "🚮",
  },
  perf: {
    description: "A code change that improves performance",
    title: "Performance Improvements",
    emoji: "⚡️",
  },
  remove: {
    description: "Remove code or files.",
    title: "Remove code or files",
    emoji: "🔥",
  },
  fix: {
    description: "A bug fix",
    title: "Bug Fixes",
    emoji: "🐛",
  },
  UX: {
    description: "A code that improve user experience / usability.",
    title: "Improve user experience / usability.",
    emoji: "👥",
  },
  accessibility: {
    description: "A code that improves accessibility.",
    title: "Accessibility.",
    emoji: "♿️",
  },
  "hot-fix": {
    description: "A critical hot fix",
    title: "Hot fix",
    emoji: "🚑",
  },
  revert: {
    description: "Revert changes.",
    title: "Revert changes.",
    emoji: "⏪️",
  },
  merge: {
    description: "Merge branches.",
    title: "Merge branches.",
    emoji: "🔀",
  },
  "needs-improvement": {
    description: "A code that is pushed in rush and that needs to be improved",
    title: "Write bad code that needs to be improved.",
    emoji: "💩",
  },
  update: {
    description: "A code that updates an app.",
    title: "Update.",
    emoji: "🔄",
  },
  move: {
    description: "Move resources (e.g.: files, paths, routes)..",
    title: "Move files.",
    emoji: "🚚",
  },
  rename: {
    description: "Rename resources (e.g.: files, paths, routes)..",
    title: "Rename files.",
    emoji: "🔄",
  },
  "catch-errors": {
    description: "A code that catches errors.",
    title: "catches errors.",
    emoji: "🥅",
  },
  "improve-dev-experience": {
    description: "A code that improves the developer experience.",
    title: "Improve the developer experience.",
    emoji: "🧑‍💻",
  },
  "ci-fix": {
    description: "A code that that fixes CI build.",
    title: "Fix CI Build.",
    emoji: "👷",
  },
  gitignore: {
    description: "A code that add or update gitignore files.",
    title: "Add or update gitignore files.",
    emoji: "🙈",
  },
  mock: {
    description: "A code that mock things.",
    title: "Mock things.",
    emoji: "🤡",
  },
  auth: {
    description:
      "A code that is related to authorization, roles and permissions.",
    title: "Work on code related to authorization, roles and permissions.",
    emoji: "🛂",
  },
  docs: {
    description: "Documentation only changes",
    title: "Documentation",
    emoji: "📝",
  },
  internationalization: {
    description: "A code that add or updates internationalization.",
    title: "Internationalization and localization.",
    emoji: "🌍",
  },
  analytics: {
    description: "A code that add or update analytics or track code.",
    title: "Add or update analytics or track code.",
    emoji: "📈",
  },
  "breaking-changes": {
    description: "A code that introduce breaking changes.",
    title: "Introduce breaking changes.",
    emoji: "💥",
  },
  build: {
    description:
      "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    title: "Builds",
    emoji: "🏗️",
  },
  deploy: {
    description: "Code that affects teh deployment",
    title: "Deploy stuff",
    emoji: "🚀",
  },
  check: {
    description: "A code that add, update, or pass tests.",
    title: "Add, update, or pass tests.",
    emoji: "✅",
  },
  security: {
    description: "Code that fixes security issues.",
    title: "Fix security issues.",
    emoji: "🔒",
  },
  secrets: {
    description: "Code that add or updates secrets.",
    title: "Add or update secrets.",
    emoji: "🔐",
  },
  bookmark: {
    description: "Release / Version tags.",
    title: "Release / Version tags.",
    emoji: "🔖",
  },
  configuration: {
    description: "A code that add or updates configuration files.",
    title: "Add or update configuration files.",
    emoji: "🔧",
  },
  "script-update": {
    description: "A code  that adds or updates script files.",
    title: "Add or update development scripts.",
    emoji: "🔨",
  },
  "update-license": {
    description: "Update license.",
    title: "Update license.",
    emoji: "📄",
  },
  "drunk-code": {
    description: "A code that needs improvement later.",
    title: "Write code drunkenly.",
    emoji: "🍻",
  },
  database: {
    description: "A code that perform database related changes.",
    title: "Perform database related changes.",
    emoji: "🗃",
  },
  logs: {
    description: "Add or update logs.",
    title: "Add or update logs.",
    emoji: "🔈",
  },
  "remove-logs": {
    description: "Remove logs.",
    title: "Remove logs.",
    emoji: "🔇",
  },
  "update-contributor": {
    description: "Add or update contributor(s).",
    title: "Add or update contributor(s).",
    emoji: "👥",
  },
  "easter-egg": {
    description: "A code that add or update easter eggs.",
    title: "Add or update easter eggs.",
    emoji: "🥚",
  },
  experiment: {
    description: "A code that perform experiments.",
    title: "Perform experiments.",
    emoji: "⚗️",
  },
  snapshot: {
    description: "A code that add or update snapshot.",
    title: "Add or update snapshots.",
    emoji: "📸",
  },
  test: {
    description: "Adding missing tests or correcting existing tests",
    title: "Tests",
    emoji: "🧪",
  },
  seed: {
    description: "A code that add or update seed files.",
    title: "Add or update seed files.",
    emoji: "🌱",
  },
  "feature-flag": {
    description: "A code that add or update feature flags.",
    title: "Add, update, or remove feature flags.",
    emoji: "🚩",
  },
  debug: {
    description: "A code that is used for debugging.",
    title: "Debugging / exploration / inspection.",
    emoji: "🧐",
  },
  sponsorship: {
    description:
      "A code that add sponsorships or money related infrastructure.",
    title: "Add sponsorships or money related infrastructure.",
    emoji: "💰",
  },
};
