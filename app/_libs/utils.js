import {
  Binary,
  Briefcase,
  Certificate,
  GithubLogo,
  GraduationCap,
  Link,
  Medal,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

export const stepsData = [
  {
    text: "Create hero",
  },
  { text: "Add projects" },
  { text: "Add education and work experience" },
  { text: "Add achievements and activities" },
  { text: "Deploy or download as PDF" },
];

export const heroPaletteItemsData = [
  "Palette 1",
  "Palette 2",
  "Palette 3",
  "Palette 4",
  "Palette 5",
  "Palette 6",
  "Palette 7",
];

export const heroAlignmentItemsData = ["left", "center", "right"];

export const activityBgData = [
  "low-poly-grid",
  "layered-steps",
  "blob",
  "blurry-gradient",
  "circle-scatter",
  "stacked-peaks",
];

export const borderStyleItemsData = ["dashed", "dotted", "solid", "double"];

export const heroExtraElementsData = [
  "abstract",
  "dots",
  "steps",
  "mono",
  "bubble",
  "spikes",
];

export const heroVariantData = ["A", "B", "C", "D"];

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
    case "Palette 7":
      return "bg-neutral-200";
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
    case "Palette 7":
      return "bg-red-500";
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
    case "Palette 7":
      return "bg-stone-100";
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
    case "Palette 7":
      return "text-stone-900";
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
    case "Palette 7":
      return "text-stone-100";
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
    case "Palette 7":
      return "border-red-500";
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
    case "Palette 7":
      return "text-stone-700";
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
    case "Palette 7":
      return "text-red-500";
    default:
      return "";
  }
};

export const projectLinkIcons = [
  { value: "-", label: "-", icon: null },
  { value: "github", label: "Github", icon: <GithubLogo size={28} /> },
  { value: "link", label: "Link", icon: <Link size={28} /> },
];

export const experienceLinkIcons = [
  {
    value: "job",
    label: "Job",
    icon: <Briefcase weight="duotone" size={32} />,
  },
  {
    value: "education",
    label: "Education",
    icon: <GraduationCap weight="duotone" size={32} />,
  },
];

export const activityIcons = [
  {
    value: "certificate",
    label: "Certificate",
    icon: <Certificate weight="duotone" size={32} />,
  },
  {
    value: "medal",
    label: "Medal",
    icon: <Medal weight="duotone" size={32} />,
  },
  {
    value: "trophy",
    label: "Trophy",
    icon: <Trophy weight="duotone" size={32} />,
  },
  {
    value: "binary",
    label: "Binary",
    icon: <Binary weight="duotone" size={32} />,
  },
];

export const getIconBgColor = (palette) => {
  switch (palette) {
    case "Palette 1":
    case "Palette 2":
    case "Palette 3":
    case "Palette 7":
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
    case "Palette 7":
      return "#f5f5f4"; // stone-100
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
    case "Palette 7":
      return "#1c1917"; // stone-900
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
    case "Palette 7":
      return "#44403c"; // stone-700
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
    case "Palette 6":
      return "#f97316"; // orange-500
    case "Palette 7":
      return "#ef4444"; // red-500
    default:
      return null;
  }
};

export const getHexLineColor = (palette) => {
  switch (palette) {
    case "Palette 1":
    case "Palette 2":
    case "Palette 3":
    case "Palette 7":
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
  { icon: "acrobat" },
  { icon: "activitypub" },
  { icon: "actix" },
  { icon: "adonis" },
  { icon: "ae" },
  { icon: "aero" },
  { icon: "aftereffects" },
  { icon: "ai" },
  { icon: "aiscript" },
  { icon: "alacritty" },
  { icon: "alchemy" },
  { icon: "alpinejs" },
  { icon: "anaconda" },
  { icon: "androidstudio" },
  { icon: "angular" },
  { icon: "animate" },
  { icon: "ansible" },
  { icon: "anss" },
  { icon: "apollo" },
  { icon: "appcode" },
  { icon: "apple" },
  { icon: "appwrite" },
  { icon: "aqua" },
  { icon: "arcbrowser" },
  { icon: "arch" },
  { icon: "arduino" },
  { icon: "argocd" },
  { icon: "assembly" },
  { icon: "astro" },
  { icon: "atom" },
  { icon: "audition" },
  { icon: "authjs" },
  { icon: "autocad" },
  { icon: "aws" },
  { icon: "azul" },
  { icon: "azure" },
  { icon: "azuredevops" },
  { icon: "babel" },
  { icon: "bash" },
  { icon: "beeceptor" },
  { icon: "behance" },
  { icon: "behat" },
  { icon: "bevy" },
  { icon: "bitbucket" },
  { icon: "blazor" },
  { icon: "blender" },
  { icon: "bootstrap" },
  { icon: "brave" },
  { icon: "breeze" },
  { icon: "bridge" },
  { icon: "bsd" },
  { icon: "btlo" },
  { icon: "bulma" },
  { icon: "bun" },
  { icon: "c" },
  { icon: "canva" },
  { icon: "capacitor" },
  { icon: "capture" },
  { icon: "cashier" },
  { icon: "cassandra" },
  { icon: "characteranimator" },
  { icon: "chartjs" },
  { icon: "chatgpt" },
  { icon: "chrome" },
  { icon: "chromium" },
  { icon: "circleci" },
  { icon: "clion" },
  { icon: "clojure" },
  { icon: "cloudflare" },
  { icon: "cmake" },
  { icon: "cockroachdb" },
  { icon: "codeberg" },
  { icon: "codeigniter" },
  { icon: "codepen" },
  { icon: "coffeescript" },
  { icon: "commercetools" },
  { icon: "composer" },
  { icon: "contentful" },
  { icon: "cpp" },
  { icon: "creativecloud" },
  { icon: "crystal" },
  { icon: "cs" },
  { icon: "css" },
  { icon: "cuda" },
  { icon: "cypress" },
  { icon: "d" },
  { icon: "d3" },
  { icon: "dailydev" },
  { icon: "dart" },
  { icon: "databricks" },
  { icon: "datadog" },
  { icon: "datagrip" },
  { icon: "dataspell" },
  { icon: "davinci" },
  { icon: "dbeaver" },
  { icon: "debian" },
  { icon: "defold" },
  { icon: "deno" },
  { icon: "desmos" },
  { icon: "devto" },
  { icon: "digitalocean" },
  { icon: "dimension" },
  { icon: "discord" },
  { icon: "discordbots" },
  { icon: "discordjs" },
  { icon: "docksal" },
  { icon: "docker" },
  { icon: "docsify" },
  { icon: "dotnet" },
  { icon: "dreamweaver" },
  { icon: "drupal" },
  { icon: "duckduckgo" },
  { icon: "dusk" },
  { icon: "dynamodb" },
  { icon: "echo" },
  { icon: "eclipse" },
  { icon: "edge" },
  { icon: "elasticsearch" },
  { icon: "electron" },
  { icon: "elixir" },
  { icon: "elysia" },
  { icon: "emacs" },
  { icon: "ember" },
  { icon: "emotion" },
  { icon: "envoyer" },
  { icon: "excel" },
  { icon: "expressjs" },
  { icon: "fabric" },
  { icon: "facebook" },
  { icon: "fastai" },
  { icon: "fastapi" },
  { icon: "fediverse" },
  { icon: "ffmpeg" },
  { icon: "figma" },
  { icon: "filament" },
  { icon: "firebase" },
  { icon: "firefox" },
  { icon: "flameshot" },
  { icon: "flask" },
  { icon: "fleet" },
  { icon: "flutter" },
  { icon: "flyio" },
  { icon: "fonts" },
  { icon: "forge" },
  { icon: "forgejo" },
  { icon: "forth" },
  { icon: "fortran" },
  { icon: "fresco" },
  { icon: "fresh" },
  { icon: "fuse" },
  { icon: "gamemakerstudio" },
  { icon: "ganache" },
  { icon: "gatsby" },
  { icon: "gcp" },
  { icon: "gemini" },
  { icon: "gherkin" },
  { icon: "gimp" },
  { icon: "git" },
  { icon: "gitea" },
  { icon: "github" },
  { icon: "githubactions" },
  { icon: "githubcopilot" },
  { icon: "gitkraken" },
  { icon: "gitlab" },
  { icon: "gmail" },
  { icon: "gnome" },
  { icon: "go" },
  { icon: "godot" },
  { icon: "goland" },
  { icon: "golang" },
  { icon: "gradle" },
  { icon: "grafana" },
  { icon: "grails" },
  { icon: "graphql" },
  { icon: "gsap" },
  { icon: "gtk" },
  { icon: "gulp" },
  { icon: "hadoop" },
  { icon: "hardhat" },
  { icon: "haskell" },
  { icon: "haxe" },
  { icon: "haxeflixel" },
  { icon: "helix" },
  { icon: "helm" },
  { icon: "herd" },
  { icon: "heroku" },
  { icon: "hibernate" },
  { icon: "holyc" },
  { icon: "hono" },
  { icon: "horizon" },
  { icon: "html" },
  { icon: "htmx" },
  { icon: "htop" },
  { icon: "hugo" },
  { icon: "hydrogen" },
  { icon: "hyprland" },
  { icon: "i3" },
  { icon: "idea" },
  { icon: "ignite" },
  { icon: "illustrator" },
  { icon: "incopy" },
  { icon: "indesign" },
  { icon: "infura" },
  { icon: "inertia" },
  { icon: "insomnia" },
  { icon: "instagram" },
  { icon: "ipfs" },
  { icon: "jamovi" },
  { icon: "java" },
  { icon: "javascript" },
  { icon: "jest" },
  { icon: "jetpackcompose" },
  { icon: "jetstream" },
  { icon: "jira" },
  { icon: "joomla" },
  { icon: "jquery" },
  { icon: "julia" },
  { icon: "kafka" },
  { icon: "kaggle" },
  { icon: "kakoune" },
  { icon: "kali" },
  { icon: "karma" },
  { icon: "kde" },
  { icon: "keycloak" },
  { icon: "keydb" },
  { icon: "kitty" },
  { icon: "kivy" },
  { icon: "knockout" },
  { icon: "kotlin" },
  { icon: "krakend" },
  { icon: "krakenjs" },
  { icon: "kubearmor" },
  { icon: "kubectl" },
  { icon: "kubernetes" },
  { icon: "kustomize" },
  { icon: "laragon" },
  { icon: "laravel" },
  { icon: "launchpad" },
  { icon: "lcars" },
  { icon: "lens" },
  { icon: "leptos" },
  { icon: "lf" },
  { icon: "lightroom" },
  { icon: "lighttpd" },
  { icon: "lighthouse" },
  { icon: "lime" },
  { icon: "linkedin" },
  { icon: "linux" },
  { icon: "lit" },
  { icon: "litespeed" },
  { icon: "liveview" },
  { icon: "logspot" },
  { icon: "lumen" },
  { icon: "luxon" },
  { icon: "macos" },
  { icon: "magma" },
  { icon: "magnet" },
  { icon: "maiar" },
  { icon: "mariadb" },
  { icon: "markdown" },
  { icon: "materialize" },
  { icon: "matlab" },
  { icon: "maya" },
  { icon: "mdx" },
  { icon: "medibangpaint" },
  { icon: "meltano" },
  { icon: "memcached" },
  { icon: "memgraph" },
  { icon: "mendix" },
  { icon: "mercurial" },
  { icon: "messenger" },
  { icon: "metabase" },
  { icon: "metasploit" },
  { icon: "meteostat" },
  { icon: "metis" },
  { icon: "metrodotjs" },
  { icon: "microsoftsqlserver" },
  { icon: "minikube" },
  { icon: "mint" },
  { icon: "mit" },
  { icon: "mixpanel" },
  { icon: "mongodb" },
  { icon: "moo" },
  { icon: "motion" },
  { icon: "msaccess" },
  { icon: "msexcel" },
  { icon: "mspowerpoint" },
  { icon: "msword" },
  { icon: "mui" },
  { icon: "mysql" },
  { icon: "n" },
  { icon: "nano" },
  { icon: "nestjs" },
  { icon: "netbeans" },
  { icon: "netlify" },
  { icon: "nextjs" },
  { icon: "nib" },
  { icon: "nightwatch" },
  { icon: "nim" },
  { icon: "nix" },
  { icon: "nixpkgs" },
  { icon: "nodemon" },
  { icon: "nodepadplusplus" },
  { icon: "nodejs" },
  { icon: "nomad" },
  { icon: "notion" },
  { icon: "numpy" },
  { icon: "nuxtdotjs" },
  { icon: "nx" },
  { icon: "nvim" },
  { icon: "ocaml" },
  { icon: "octave" },
  { icon: "octobercms" },
  { icon: "openai" },
  { icon: "opencv" },
  { icon: "opengl" },
  { icon: "openscad" },
  { icon: "opensuse" },
  { icon: "openvpn" },
  { icon: "opera" },
  { icon: "oracle" },
  { icon: "oxygenbuilder" },
  { icon: "pandas" },
  { icon: "pants" },
  { icon: "pencil2d" },
  { icon: "perl" },
  { icon: "pharo" },
  { icon: "phoenix" },
  { icon: "photoshop" },
  { icon: "php" },
  { icon: "phpstorm" },
  { icon: "pipenv" },
  { icon: "plasmic" },
  { icon: "platypus" },
  { icon: "playwright" },
  { icon: "pnpm" },
  { icon: "polymer" },
  { icon: "popos" },
  { icon: "postgresql" },
  { icon: "postman" },
  { icon: "prisma" },
  { icon: "processing" },
  { icon: "project" },
  { icon: "prometheus" },
  { icon: "proton" },
  { icon: "protonmail" },
  { icon: "protools" },
  { icon: "puppet" },
  { icon: "purescript" },
  { icon: "pycharm" },
  { icon: "pytorch" },
  { icon: "python" },
  { icon: "qml" },
  { icon: "quarkus" },
  { icon: "quarto" },
  { icon: "quasar" },
  { icon: "qubes" },
  { icon: "quilljs" },
  { icon: "r" },
  { icon: "rabbitmq" },
  { icon: "rails" },
  { icon: "raindrop" },
  { icon: "rainmeter" },
  { icon: "random" },
  { icon: "ratchet" },
  { icon: "razor" },
  { icon: "react" },
  { icon: "reactnative" },
  { icon: "realitykit" },
  { icon: "reason" },
  { icon: "redis" },
  { icon: "redux" },
  { icon: "refine" },
  { icon: "reflect" },
  { icon: "remix" },
  { icon: "renpy" },
  { icon: "replit" },
  { icon: "resolve" },
  { icon: "restic" },
  { icon: "rhino" },
  { icon: "riot" },
  { icon: "rocksdb" },
  { icon: "rome" },
  { icon: "rollupjs" },
  { icon: "ros" },
  { icon: "roughjs" },
  { icon: "rspec" },
  { icon: "rubocop" },
  { icon: "rubyonrails" },
  { icon: "rust" },
  { icon: "rxjs" },
  { icon: "safari" },
  { icon: "salesforce" },
  { icon: "sanity" },
  { icon: "sass" },
  { icon: "scala" },
  { icon: "scaleway" },
  { icon: "scribus" },
  { icon: "scully" },
  { icon: "scummvm" },
  { icon: "seaborn" },
  { icon: "semeru" },
  { icon: "semgrep" },
  { icon: "selenium" },
  { icon: "semanticrelease" },
  { icon: "sequelize" },
  { icon: "sh" },
  { icon: "shadow" },
  { icon: "shopify" },
  { icon: "shotcut" },
  { icon: "shuriken" },
  { icon: "signal" },
  { icon: "sinatra" },
  { icon: "sketch" },
  { icon: "skia" },
  { icon: "slack" },
  { icon: "slides" },
  { icon: "slidesgo" },
  { icon: "slideshare" },
  { icon: "smartgit" },
  { icon: "smartsheet" },
  { icon: "snowflake" },
  { icon: "socketdotio" },
  { icon: "sorbet" },
  { icon: "sourcetree" },
  { icon: "spark" },
  { icon: "sparkpost" },
  { icon: "specflow" },
  { icon: "speedtest" },
  { icon: "spline" },
  { icon: "spring" },
  { icon: "springboot" },
  { icon: "spyder" },
  { icon: "sqlite" },
  { icon: "squarespace" },
  { icon: "storybook" },
  { icon: "strapi" },
  { icon: "strawberry" },
  { icon: "styledcomponents" },
  { icon: "stylelint" },
  { icon: "stylus" },
  { icon: "subversion" },
  { icon: "sublime" },
  { icon: "supabase" },
  { icon: "surge" },
  { icon: "suse" },
  { icon: "svg" },
  { icon: "svgo" },
  { icon: "svelte" },
  { icon: "svgr" },
  { icon: "swagger" },
  { icon: "swift" },
  { icon: "symphony" },
  { icon: "synfig" },
  { icon: "tableau" },
  { icon: "tailwind" },
  { icon: "taro" },
  { icon: "tata" },
  { icon: "tauri" },
  { icon: "tailwindcss" },
  { icon: "teamviewer" },
  { icon: "terraform" },
  { icon: "testcafe" },
  { icon: "tex" },
  { icon: "textmate" },
  { icon: "thunderbird" },
  { icon: "tikz" },
  { icon: "tinkerbell" },
  { icon: "tint" },
  { icon: "toad" },
  { icon: "todolist" },
  { icon: "torbrowser" },
  { icon: "tortoisegit" },
  { icon: "towergit" },
  { icon: "toxiproxy" },
  { icon: "travis" },
  { icon: "trello" },
  { icon: "trpc" },
  { icon: "truenas" },
  { icon: "truffle" },
  { icon: "trustedadvisor" },
  { icon: "ts" },
  { icon: "turborepo" },
  { icon: "tux" },
  { icon: "twilio" },
  { icon: "twinmacro" },
  { icon: "typegraph" },
  { icon: "typescript" },
  { icon: "ubuntu" },
  { icon: "udacity" },
  { icon: "udemy" },
  { icon: "uglifyjs" },
  { icon: "uikit" },
  { icon: "unocss" },
  { icon: "uwsgi" },
  { icon: "vagrant" },
  { icon: "vala" },
  { icon: "vercel" },
  { icon: "verilog" },
  { icon: "vhdl" },
  { icon: "vim" },
  { icon: "virtualbox" },
  { icon: "visualstudio" },
  { icon: "vitejs" },
  { icon: "vlang" },
  { icon: "vlcmediaplayer" },
  { icon: "vmd" },
  { icon: "vmware" },
  { icon: "volar" },
  { icon: "vue" },
  { icon: "vuetify" },
  { icon: "vuls" },
  { icon: "vultr" },
  { icon: "web3" },
  { icon: "webassembly" },
  { icon: "webflow" },
  { icon: "webgl" },
  { icon: "webhint" },
  { icon: "webpack" },
  { icon: "webrtc" },
  { icon: "wechat" },
  { icon: "whatsapp" },
  { icon: "wifi" },
  { icon: "wikidata" },
  { icon: "wikipedia" },
  { icon: "windows" },
  { icon: "wordpress" },
  { icon: "workers" },
  { icon: "writedotls" },
  { icon: "xamarin" },
  { icon: "xd" },
  { icon: "yarn" },
  { icon: "ycombinator" },
  { icon: "youtube" },
  { icon: "ytstudio" },
  { icon: "zapier" },
  { icon: "zig" },
  { icon: "zotero" },
  { icon: "zulip" },
  { icon: "zwave" },
];
