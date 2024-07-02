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
  return `
  ${palette == "Palette 1" && "bg-zinc-100"} 
  ${palette == "Palette 2" && "bg-sky-50 "} 
  ${palette == "Palette 3" && "bg-orange-50"} 
  ${palette == "Palette 4" && "bg-slate-800"} 
  ${palette == "Palette 5" && "bg-neutral-900"}
  ${palette == "Palette 6" && "bg-stone-900"}`;
};

export const getPrimaryBgColors = (palette) => {
  return `
      ${palette == "Palette 1" && "bg-amber-600"} 
      ${palette == "Palette 2" && "bg-blue-800"} 
      ${palette == "Palette 3" && "bg-orange-800"} 
      ${palette == "Palette 4" && "bg-yellow-400"} 
      ${palette == "Palette 5" && "bg-lime-500"}
      ${palette == "Palette 6" && "bg-yellow-400"}`;
};

export const getSecondaryBgColors = (palette) => {
  return `
      ${palette == "Palette 1" && "bg-white"} 
      ${palette == "Palette 2" && "bg-sky-100"} 
      ${palette == "Palette 3" && "bg-orange-100"} 
      ${palette == "Palette 4" && "bg-slate-900"} 
      ${palette == "Palette 5" && "bg-neutral-800"}
      ${palette == "Palette 6" && "bg-stone-800"}`;
};

export const getPrimaryTextColor = (palette) => {
  return `
  ${palette == "Palette 1" && "text-gray-900"} 
  ${palette == "Palette 2" && "text-gray-800"}
  ${palette == "Palette 3" && "text-amber-900"} 
  ${palette == "Palette 4" && "text-gray-50"}
  ${palette == "Palette 5" && "text-gray-100"}
  ${palette == "Palette 6" && "text-gray-100"}`;
};

export const getSecondaryTextColor = (palette) => {
  return `
  ${palette == "Palette 1" && "text-gray-100"} 
  ${palette == "Palette 2" && "text-gray-100"} 
  ${palette == "Palette 3" && "text-gray-100"} 
  ${palette == "Palette 4" && "text-gray-900"} 
  ${palette == "Palette 5" && "text-gray-900"}
  ${palette == "Palette 6" && "text-gray-900"}`;
};

export const getPrimaryBorderColors = (palette) => {
  return `
      ${palette == "Palette 1" && "border-cyan-900"} 
      ${palette == "Palette 2" && "border-cyan-900"}
      ${palette == "Palette 3" && "border-lime-800"} 
      ${palette == "Palette 4" && "border-amber-200 "} 
      ${palette == "Palette 5" && "border-emerald-500"} 
      ${palette == "Palette 6" && "border-orange-500"}`;
};

export const getPrimaryColors = (palette) => {
  return `
      ${palette == "Palette 1" && "text-amber-600"} 
      ${palette == "Palette 2" && "text-blue-800"} 
      ${palette == "Palette 3" && "text-orange-800"} 
      ${palette == "Palette 4" && "text-yellow-400"} 
      ${palette == "Palette 5" && "text-lime-500"}
      ${palette == "Palette 6" && "text-yellow-400"}`;
};

export const getSecondaryColors = (palette) => {
  return `
      ${palette == "Palette 1" && "text-cyan-900"} 
      ${palette == "Palette 2" && "text-cyan-900"}
      ${palette == "Palette 3" && "text-lime-800"} 
      ${palette == "Palette 4" && "text-amber-200 "} 
      ${palette == "Palette 5" && "text-emerald-500"}  
      ${palette == "Palette 6" && "text-orange-500"}`;
};

export const projectLinkIcons = [
  { value: "-", label: "-", icon: null },
  { value: "github", label: "Github", icon: <GithubLogo size={32} /> },
  { value: "link", label: "Link", icon: <Link size={32} /> },
];

export const getIconBgColor = (palette) => {
  return `${palette == "Palette 1" ? "light" : ""}${
    palette == "Palette 2" ? "light" : ""
  }${palette == "Palette 3" ? "light" : ""}${
    palette == "Palette 4" ? "dark" : ""
  }${palette == "Palette 5" ? "dark" : ""}${
    palette == "Palette 6" ? "dark" : ""
  }`;
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
  { icon: "css" },
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
  { icon: "windicss" },
  { icon: "windows" },
  { icon: "wordpress" },
  { icon: "workers" },
  { icon: "xd" },
  { icon: "yarn" },
  { icon: "yew" },
  { icon: "zig" },
];
