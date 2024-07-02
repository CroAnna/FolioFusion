import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr";

export const stepsData = [
  {
    text: "Create hero",
  },
  { text: "Add projects" },
  { text: "Add education and work experience" },
  { text: "Add other info" },
  { text: "Deploy or download as PDF" },
];

export const heroPaletteItemsData = [
  "Palette 1",
  "Palette 2",
  "Palette 3",
  "Palette 4",
  "Palette 5",
  "Palette 6",
];

export const borderStyleItemsData = ["dashed", "dotted", "solid", "double"];

export const heroExtraElementsData = ["abstract", "dots"];

export const getBgColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "bg-zinc-100";
    case "Palette 2":
      return "bg-sky-50";
    case "Palette 3":
      return "bg-orange-50";
    case "Palette 4":
      return "bg-slate-800";
    case "Palette 5":
      return "bg-neutral-900";
    case "Palette 6":
      return "bg-stone-900";
    default:
      return null;
  }
};

export const getPrimaryBgColors = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "bg-amber-600";
    case "Palette 2":
      return "bg-blue-800";
    case "Palette 3":
      return "bg-orange-800";
    case "Palette 4":
      return "bg-yellow-400";
    case "Palette 5":
      return "bg-lime-500";
    case "Palette 6":
      return "bg-yellow-400";
    default:
      return null;
  }
};

export const getSecondaryBgColors = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "bg-white";
    case "Palette 2":
      return "bg-sky-100";
    case "Palette 3":
      return "bg-orange-100";
    case "Palette 4":
      return "bg-slate-900";
    case "Palette 5":
      return "bg-neutral-800";
    case "Palette 6":
      return "bg-stone-800";
    default:
      return null;
  }
};

export const getPrimaryTextColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "text-gray-900";
    case "Palette 2":
      return "text-gray-800";
    case "Palette 3":
      return "text-amber-900";
    case "Palette 4":
      return "text-gray-50";
    case "Palette 5":
      return "text-gray-100";
    case "Palette 6":
      return "text-gray-100";
    default:
      return null;
  }
};

export const getSecondaryTextColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "text-gray-100";
    case "Palette 2":
      return "text-gray-100";
    case "Palette 3":
      return "text-gray-100";
    case "Palette 4":
      return "text-gray-900";
    case "Palette 5":
      return "text-gray-900";
    case "Palette 6":
      return "text-gray-900";
    default:
      return null;
  }
};

export const getPrimaryBorderColors = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "border-cyan-900";
    case "Palette 2":
      return "border-cyan-900";
    case "Palette 3":
      return "border-lime-800";
    case "Palette 4":
      return "border-amber-200";
    case "Palette 5":
      return "border-emerald-500";
    case "Palette 6":
      return "border-orange-500";
    default:
      return null;
  }
};

export const getPrimaryColors = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "text-amber-600";
    case "Palette 2":
      return "text-blue-800";
    case "Palette 3":
      return "text-orange-800";
    case "Palette 4":
      return "text-yellow-400";
    case "Palette 5":
      return "text-lime-500";
    case "Palette 6":
      return "text-yellow-400";
    default:
      return "";
  }
};

export const getSecondaryColors = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "text-cyan-900";
    case "Palette 2":
      return "text-cyan-900";
    case "Palette 3":
      return "text-lime-800";
    case "Palette 4":
      return "text-amber-200";
    case "Palette 5":
      return "text-emerald-500";
    case "Palette 6":
      return "text-orange-500";
    default:
      return "";
  }
};

export const projectLinkIcons = [
  { value: "-", label: "-", icon: null },
  { value: "github", label: "Github", icon: <GithubLogo size={32} /> },
  { value: "link", label: "Link", icon: <Link size={32} /> },
];

export const getIconBgColor = (palette) => {
  switch (palette) {
    case "Palette 1":
    case "Palette 2":
    case "Palette 3":
      return "light";
    case "Palette 4":
    case "Palette 5":
    case "Palette 6":
      return "dark";
    default:
      return null;
  }
};

export const getHexSecondaryBgColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "#FFFFFF"; // white
    case "Palette 2":
      return "#e0f2fe"; // sky-100
    case "Palette 3":
      return "#FFEDD5"; // orange-100
    case "Palette 4":
      return "#0F172A"; // slate-900
    case "Palette 5":
      return "#262626"; // neutral-800
    case "Palette 6":
      return "#2D2D2D"; // stone-800
    default:
      return null;
  }
};

export const getHexPrimaryTextColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "#111827"; // gray-900
    case "Palette 2":
      return "#1f2937"; // gray-800
    case "Palette 3":
      return "#78350f"; // amber-900
    case "Palette 4":
      return "#f9fafb"; // gray-50
    case "Palette 5":
    case "Palette 6":
      return "#f3f4f6"; // gray-100
    default:
      return null;
  }
};

export const getHexPrimaryColor = (palette) => {
  switch (palette) {
    case "Palette 1":
      return "#d97706"; // amber-600
    case "Palette 2":
      return "#1e40af"; // blue-800
    case "Palette 3":
      return "#9a3412"; // orange-800
    case "Palette 4":
      return "#facc15"; // yellow-400
    case "Palette 5":
      return "#84cc16"; // lime-500
    case "Palette 6":
      return "#facc15"; // yellow-400
    default:
      return null;
  }
};

export const getHexSecondaryColor = (palette) => {
  switch (palette) {
    case "Palette 1":
    case "Palette 2":
      return "#164e63"; // cyan-900
    case "Palette 3":
      return "#3f6212"; // lime-800
    case "Palette 4":
      return "#fde68a"; // amber-200
    case "Palette 5":
      return "#10b981"; // emerald-500
    case "Palette 6":
      return "#f97316"; // orange-500
    default:
      return null;
  }
};

export const getHexLineColor = (palette) => {
  switch (palette) {
    case "Palette 1":
    case "Palette 2":
    case "Palette 3":
      return "#d4d4d4";
    case "Palette 4":
    case "Palette 5":
    case "Palette 6":
      return "#525252";
    default:
      return null;
  }
};

export const icons = [
  { icon: "-" },
  { icon: "ableton" },
  { icon: "activitypub" },
  { icon: "actix" },
  { icon: "adonis" },
  { icon: "ae" },
  { icon: "aiscript" },
  { icon: "alpinejs" },
  { icon: "anaconda" },
  { icon: "androidstudio" },
  { icon: "angular" },
  { icon: "ansible" },
  { icon: "apollo" },
  { icon: "apple" },
  { icon: "appwrite" },
  { icon: "arch" },
  { icon: "arduino" },
  { icon: "astro" },
  { icon: "atom" },
  { icon: "au" },
  { icon: "autocad" },
  { icon: "aws" },
  { icon: "azul" },
  { icon: "azure" },
  { icon: "babel" },
  { icon: "bash" },
  { icon: "bevy" },
  { icon: "bitbucket" },
  { icon: "blender" },
  { icon: "bootstrap" },
  { icon: "bsd" },
  { icon: "bun" },
  { icon: "c" },
  { icon: "cs" },
  { icon: "cpp" },
  { icon: "crystal" },
  { icon: "cassandra" },
  { icon: "clion" },
  { icon: "clojure" },
  { icon: "cloudflare" },
  { icon: "cmake" },
  { icon: "codepen" },
  { icon: "coffeescript" },
  { icon: "hex" },
  { icon: "cypress" },
  { icon: "d3" },
  { icon: "dart" },
  { icon: "debian" },
  { icon: "deno" },
  { icon: "devto" },
  { icon: "discord" },
  { icon: "bots" },
  { icon: "discordjs" },
  { icon: "django" },
  { icon: "docker" },
  { icon: "dotnet" },
  { icon: "dynamodb" },
  { icon: "eclipse" },
  { icon: "elasticsearch" },
  { icon: "electron" },
  { icon: "elixir" },
  { icon: "elysia" },
  { icon: "emacs" },
  { icon: "ember" },
  { icon: "emotion" },
  { icon: "express" },
  { icon: "fastapi" },
  { icon: "fediverse" },
  { icon: "figma" },
  { icon: "firebase" },
  { icon: "flask" },
  { icon: "flutter" },
  { icon: "forth" },
  { icon: "fortran" },
  { icon: "gamemakerstudio" },
  { icon: "gatsby" },
  { icon: "gcp" },
  { icon: "git" },
  { icon: "github" },
  { icon: "githubactions" },
  { icon: "gitlab" },
  { icon: "gmail" },
  { icon: "gherkin" },
  { icon: "go" },
  { icon: "gradle" },
  { icon: "godot" },
  { icon: "grafana" },
  { icon: "graphql" },
  { icon: "gtk" },
  { icon: "gulp" },
  { icon: "haskell" },
  { icon: "haxe" },
  { icon: "haxeflixel" },
  { icon: "heroku" },
  { icon: "hibernate" },
  { icon: "html" },
  { icon: "htmx" },
  { icon: "idea" },
  { icon: "ai" },
  { icon: "instagram" },
  { icon: "ipfs" },
  { icon: "java" },
  { icon: "js" },
  { icon: "jenkins" },
  { icon: "jest" },
  { icon: "jquery" },
  { icon: "kafka" },
  { icon: "kali" },
  { icon: "kotlin" },
  { icon: "ktor" },
  { icon: "kubernetes" },
  { icon: "laravel" },
  { icon: "latex" },
  { icon: "less" },
  { icon: "linkedin" },
  { icon: "linux" },
  { icon: "lit" },
  { icon: "lua" },
  { icon: "md" },
  { icon: "mastodon" },
  { icon: "materialui" },
  { icon: "matlab" },
  { icon: "maven" },
  { icon: "mint" },
  { icon: "misskey" },
  { icon: "mongodb" },
  { icon: "mysql" },
  { icon: "neovim" },
  { icon: "nestjs" },
  { icon: "netlify" },
  { icon: "nextjs" },
  { icon: "nginx" },
  { icon: "nim" },
  { icon: "nix" },
  { icon: "nodejs" },
  { icon: "notion" },
  { icon: "npm" },
  { icon: "nuxtjs" },
  { icon: "obsidian" },
  { icon: "ocaml" },
  { icon: "octave" },
  { icon: "opencv" },
  { icon: "openshift" },
  { icon: "openstack" },
  { icon: "p5js" },
  { icon: "perl" },
  { icon: "ps" },
  { icon: "php" },
  { icon: "phpstorm" },
  { icon: "pinia" },
  { icon: "pkl" },
  { icon: "plan9" },
  { icon: "planetscale" },
  { icon: "pnpm" },
  { icon: "postgres" },
  { icon: "postman" },
  { icon: "powershell" },
  { icon: "pr" },
  { icon: "prisma" },
  { icon: "processing" },
  { icon: "prometheus" },
  { icon: "pug" },
  { icon: "pycharm" },
  { icon: "py" },
  { icon: "pytorch" },
  { icon: "qt" },
  { icon: "r" },
  { icon: "rabbitmq" },
  { icon: "rails" },
  { icon: "raspberrypi" },
  { icon: "react" },
  { icon: "reactivex" },
  { icon: "redhat" },
  { icon: "redis" },
  { icon: "redux" },
  { icon: "regex" },
  { icon: "remix" },
  { icon: "replit" },
  { icon: "rider" },
  { icon: "robloxstudio" },
  { icon: "rocket" },
  { icon: "rollupjs" },
  { icon: "ros" },
  { icon: "ruby" },
  { icon: "rust" },
  { icon: "sass" },
  { icon: "spring" },
  { icon: "sqlite" },
  { icon: "stackoverflow" },
  { icon: "styledcomponents" },
  { icon: "sublime" },
  { icon: "supabase" },
  { icon: "scala" },
  { icon: "sklearn" },
  { icon: "selenium" },
  { icon: "sentry" },
  { icon: "sequelize" },
  { icon: "sketchup" },
  { icon: "solidity" },
  { icon: "solidjs" },
  { icon: "svelte" },
  { icon: "svg" },
  { icon: "swift" },
  { icon: "symfony" },
  { icon: "tailwind" },
  { icon: "tauri" },
  { icon: "tensorflow" },
  { icon: "terraform" },
  { icon: "threejs" },
  { icon: "twitter" },
  { icon: "ts" },
  { icon: "ubuntu" },
  { icon: "unity" },
  { icon: "unreal" },
  { icon: "v" },
  { icon: "vala" },
  { icon: "vercel" },
  { icon: "vim" },
  { icon: "visualstudio" },
  { icon: "vite" },
  { icon: "vitest" },
  { icon: "vscode" },
  { icon: "vscodium" },
  { icon: "vue" },
  { icon: "vuetify" },
  { icon: "wasm" },
  { icon: "webflow" },
  { icon: "webpack" },
  { icon: "webstorm" },
  { icon: "windihex" },
  { icon: "windows" },
  { icon: "wordpress" },
  { icon: "workers" },
  { icon: "xd" },
  { icon: "yarn" },
  { icon: "yew" },
  { icon: "zig" },
];
