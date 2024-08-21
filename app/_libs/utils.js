import {
  Binary,
  Briefcase,
  Certificate,
  GithubLogo,
  GraduationCap,
  Link,
  Medal,
  Trophy,
  GameController,
  Ranking,
  ArrowFatLineLeft,
  HandsClapping,
  Handshake,
  Users,
  UsersFour,
  UsersThree,
  GlobeHemisphereWest,
  AirplaneTilt,
  YoutubeLogo,
  FacebookLogo,
  Video,
  Image as ImageIcon,
} from "@phosphor-icons/react/dist/ssr";

export const stepsData = [
  {
    text: "Create hero",
  },
  { text: "Add projects" },
  { text: "Add education and work experience" },
  { text: "Add achievements and activities" },
  {
    text: "Customize portfolio",
  },
  { text: "Deploy or download as PDF" },
];

export const projectDesignsItemsData = [
  "Design 1",
  "Design 2",
  "Design 3",
  "Design 4",
];
export const projectsAlignmentItemsData = ["left", "alternately", "right"];

export const experienceAlignmentItemsData = [
  "2-columns",
  "1-column-left",
  "1-column-right",
];

export const portfolioPaletteItemsData = [
  "Palette 1",
  "Palette 2",
  "Palette 3",
  "Palette 4",
  "Palette 5",
  "Palette 6",
  "Palette 7",
];

export const portfolioFontItemsData = [
  "gabarito",
  "montserrat",
  "inter",
  "poppins",
  "robotoMono",
  "greyQo",
  "sankofaDisplay",
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

export const heroVariantData = ["A", "B", "C"];

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
      return "bg-zinc-100";
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
      return "bg-zinc-200";
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
  { value: "video", label: "Video", icon: <Video size={28} /> },
  { value: "image", label: "Image", icon: <ImageIcon size={28} /> },
  { value: "youtube", label: "YouTube", icon: <YoutubeLogo size={28} /> },
  { value: "facebook", label: "Facebook", icon: <FacebookLogo size={28} /> },
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
  {
    value: "gameController",
    label: "Game Controller",
    icon: <GameController weight="duotone" size={32} />,
  },
  {
    value: "ranking",
    label: "Ranking",
    icon: <Ranking weight="duotone" size={32} />,
  },
  {
    value: "arrowFatLineLeft",
    label: "Arrow",
    icon: <ArrowFatLineLeft weight="duotone" size={32} />,
  },
  {
    value: "handsClapping",
    label: "Hands Clapping",
    icon: <HandsClapping weight="duotone" size={32} />,
  },
  {
    value: "handshake",
    label: "Handshake",
    icon: <Handshake weight="duotone" size={32} />,
  },
  {
    value: "GlobeHemisphereWest",
    label: "Globe",
    icon: <GlobeHemisphereWest weight="duotone" size={32} />,
  },
  {
    value: "AirplaneTilt",
    label: "Airplane",
    icon: <AirplaneTilt weight="duotone" size={32} />,
  },
  {
    value: "Users",
    label: "Duo",
    icon: <Users weight="duotone" size={32} />,
  },
  {
    value: "UsersThree",
    label: "Trio",
    icon: <UsersThree weight="duotone" size={32} />,
  },
  {
    value: "UsersFour",
    label: "Quatro",
    icon: <UsersFour weight="duotone" size={32} />,
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
      return "#e4e4e7"; // zinc-200
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
  { icon: "acrobat" },
  { icon: "activitypub" },
  { icon: "actix" },
  { icon: "adonis" },
  { icon: "aero" },
  { icon: "aftereffects" },
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
  { icon: "api" },
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
  { icon: "audition" },
  { icon: "babel" },
  { icon: "bash" },
  { icon: "beeceptor" },
  { icon: "behance" },
  { icon: "behat" },
  { icon: "bevy" },
  { icon: "bigquery" },
  { icon: "bitbucket" },
  { icon: "blazor" },
  { icon: "blender" },
  { icon: "bokeh" },
  { icon: "bootstrap" },
  { icon: "brave" },
  { icon: "breeze" },
  { icon: "bridge" },
  { icon: "bsd" },
  { icon: "btlo" },
  { icon: "bulma" },
  { icon: "bun" },
  { icon: "c" },
  { icon: "cachyos" },
  { icon: "caddy" },
  { icon: "cairo" },
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
  { icon: "claude" },
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
  { icon: "daisyui" },
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
  { icon: "directus" },
  { icon: "discord" },
  { icon: "discordbots" },
  { icon: "discordjs" },
  { icon: "django" },
  { icon: "docker" },
  { icon: "docksal" },
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
  { icon: "elementplus" },
  { icon: "elixir" },
  { icon: "elysia" },
  { icon: "emacs" },
  { icon: "ember" },
  { icon: "emotion" },
  { icon: "envoyer" },
  { icon: "erlang" },
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
  { icon: "gentoo" },
  { icon: "gherkin" },
  { icon: "gimp" },
  { icon: "git" },
  { icon: "gitea" },
  { icon: "github" },
  { icon: "githubactions" },
  { icon: "githubcopilot" },
  { icon: "githubpages" },
  { icon: "gitkraken" },
  { icon: "gitlab" },
  { icon: "gleam" },
  { icon: "gmail" },
  { icon: "gnome" },
  { icon: "godot" },
  { icon: "goland" },
  { icon: "golang" },
  { icon: "googleanalytics" },
  { icon: "googleappsscript" },
  { icon: "gradle" },
  { icon: "grafana" },
  { icon: "grails" },
  { icon: "graphql" },
  { icon: "grunt" },
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
  { icon: "huggingface" },
  { icon: "hugo" },
  { icon: "hydrogen" },
  { icon: "hyprland" },
  { icon: "i3" },
  { icon: "iced" },
  { icon: "idea" },
  { icon: "ignite" },
  { icon: "illustrator" },
  { icon: "incopy" },
  { icon: "indesign" },
  { icon: "inertia" },
  { icon: "infura" },
  { icon: "inkscape" },
  { icon: "insomnia" },
  { icon: "instagram" },
  { icon: "integrations" },
  { icon: "ipfs" },
  { icon: "jamovi" },
  { icon: "java" },
  { icon: "javascript" },
  { icon: "jekyll" },
  { icon: "jenkins" },
  { icon: "jest" },
  { icon: "jetpackcompose" },
  { icon: "jetstream" },
  { icon: "jira" },
  { icon: "joomla" },
  { icon: "jquery" },
  { icon: "julia" },
  { icon: "jupyter" },
  { icon: "kafka" },
  { icon: "kaggle" },
  { icon: "kakoune" },
  { icon: "kali" },
  { icon: "karma" },
  { icon: "kde" },
  { icon: "keycloak" },
  { icon: "keydb" },
  { icon: "kibana" },
  { icon: "kitty" },
  { icon: "kotlin" },
  { icon: "ktor" },
  { icon: "kubernetes" },
  { icon: "langchain" },
  { icon: "laravel" },
  { icon: "laravelspark" },
  { icon: "latex" },
  { icon: "leaflet" },
  { icon: "leetcode" },
  { icon: "less" },
  { icon: "libsql" },
  { icon: "lighthouse" },
  { icon: "lightning" },
  { icon: "lightroom" },
  { icon: "lightroomclassic" },
  { icon: "linkedin" },
  { icon: "linux" },
  { icon: "lit" },
  { icon: "litmus" },
  { icon: "livewire" },
  { icon: "llamaindex" },
  { icon: "logto" },
  { icon: "looker" },
  { icon: "lua" },
  { icon: "luau" },
  { icon: "lucidchart" },
  { icon: "lunacy" },
  { icon: "lxc" },
  { icon: "manjaro" },
  { icon: "markdown" },
  { icon: "mastodon" },
  { icon: "materialui" },
  { icon: "matlab" },
  { icon: "matplotlib" },
  { icon: "maven" },
  { icon: "mediaencoder" },
  { icon: "mermaid" },
  { icon: "meteorjs" },
  { icon: "microsoftcopilot" },
  { icon: "millionjs" },
  { icon: "mindsdb" },
  { icon: "mint" },
  { icon: "miro" },
  { icon: "misskey" },
  { icon: "mistral" },
  { icon: "mjml" },
  { icon: "ml5" },
  { icon: "mocha" },
  { icon: "mojo" },
  { icon: "mongodb" },
  { icon: "mongoose" },
  { icon: "mysql" },
  { icon: "neovim" },
  { icon: "nestjs" },
  { icon: "netlify" },
  { icon: "nextjs" },
  { icon: "nginx" },
  { icon: "ngrok" },
  { icon: "nim" },
  { icon: "nixos" },
  { icon: "nodejs" },
  { icon: "notion" },
  { icon: "nova" },
  { icon: "npm" },
  { icon: "numpy" },
  { icon: "nuxtjs" },
  { icon: "obsidian" },
  { icon: "ocaml" },
  { icon: "octane" },
  { icon: "octave" },
  { icon: "ollama" },
  { icon: "onedrive" },
  { icon: "onenote" },
  { icon: "opencv" },
  { icon: "openshift" },
  { icon: "opensource" },
  { icon: "openstack" },
  { icon: "openzeppelin" },
  { icon: "opera" },
  { icon: "oracle" },
  { icon: "outlook" },
  { icon: "p5js" },
  { icon: "pail" },
  { icon: "pandas" },
  { icon: "papertrail" },
  { icon: "payload" },
  { icon: "pbi" },
  { icon: "pennant" },
  { icon: "perl" },
  { icon: "photoshop" },
  { icon: "photoshopclassic" },
  { icon: "photoshopexpress" },
  { icon: "php" },
  { icon: "phpstan" },
  { icon: "phpstorm" },
  { icon: "picocss" },
  { icon: "pinecone" },
  { icon: "pinia" },
  { icon: "pint" },
  { icon: "pkl" },
  { icon: "plan9" },
  { icon: "planetscale" },
  { icon: "platformio" },
  { icon: "playwright" },
  { icon: "plsql" },
  { icon: "pm2" },
  { icon: "cypnpmpress" },
  { icon: "pocketbase" },
  { icon: "podman" },
  { icon: "popos" },
  { icon: "portfolio" },
  { icon: "postgresql" },
  { icon: "postman" },
  { icon: "powerpoint" },
  { icon: "powershell" },
  { icon: "preact" },
  { icon: "prelude" },
  { icon: "premiere" },
  { icon: "premiererush" },
  { icon: "primevue" },
  { icon: "prisma" },
  { icon: "processing" },
  { icon: "prometheus" },
  { icon: "prompts" },
  { icon: "proton" },
  { icon: "proxmox" },
  { icon: "pug" },
  { icon: "pulse" },
  { icon: "puppeteer" },
  { icon: "pycharm" },
  { icon: "pygame" },
  { icon: "python" },
  { icon: "pytorch" },
  { icon: "pyxel" },
  { icon: "qodana" },
  { icon: "qt" },
  { icon: "r" },
  { icon: "rabbitmq" },
  { icon: "rails" },
  { icon: "raspberrypi" },
  { icon: "react" },
  { icon: "reactivex" },
  { icon: "reactnative" },
  { icon: "reactquery" },
  { icon: "recoil" },
  { icon: "redhat" },
  { icon: "redis" },
  { icon: "redshift" },
  { icon: "redux" },
  { icon: "regex" },
  { icon: "remix" },
  { icon: "render" },
  { icon: "renpy" },
  { icon: "replit" },
  { icon: "resharper" },
  { icon: "reverb" },
  { icon: "rider" },
  { icon: "robloxstudio" },
  { icon: "rocket" },
  { icon: "rollupjs" },
  { icon: "ros" },
  { icon: "rubocop" },
  { icon: "ruby" },
  { icon: "rubymine" },
  { icon: "rust" },
  { icon: "rustrover" },
  { icon: "s3" },
  { icon: "safari" },
  { icon: "sail" },
  { icon: "sanctum" },
  { icon: "sass" },
  { icon: "scala" },
  { icon: "scikitlearn" },
  { icon: "scipy" },
  { icon: "scout" },
  { icon: "scratch" },
  { icon: "seaborn" },
  { icon: "selenium" },
  { icon: "sentry" },
  { icon: "sequelize" },
  { icon: "sharepoint" },
  { icon: "shopify" },
  { icon: "skeletonui" },
  { icon: "sketchup" },
  { icon: "slack" },
  { icon: "snowflake" },
  { icon: "snyk" },
  { icon: "socialite" },
  { icon: "solidity" },
  { icon: "solidjs" },
  { icon: "sonarqube" },
  { icon: "spark" },
  { icon: "sqlalchemy" },
  { icon: "sqlite" },
  { icon: "sqlserver" },
  { icon: "stackoverflow" },
  { icon: "steam" },
  { icon: "stock" },
  { icon: "storyblok" },
  { icon: "storybook" },
  { icon: "strapi" },
  { icon: "streamlit" },
  { icon: "stripe" },
  { icon: "styledcomponents" },
  { icon: "stylus" },
  { icon: "sublime" },
  { icon: "supabase" },
  { icon: "surrealdb" },
  { icon: "svelte" },
  { icon: "svg" },
  { icon: "svn" },
  { icon: "swagger" },
  { icon: "swift" },
  { icon: "symfony" },
  { icon: "tableau" },
  { icon: "tailwindcss" },
  { icon: "tallyprime" },
  { icon: "tauri" },
  { icon: "teams" },
  { icon: "telescope" },
  { icon: "tensorflow" },
  { icon: "terminal" },
  { icon: "terraform" },
  { icon: "testinglibrary" },
  { icon: "threejs" },
  { icon: "thunkable" },
  { icon: "tidb" },
  { icon: "tmux" },
  { icon: "tomcat" },
  { icon: "tor" },
  { icon: "trpc" },
  { icon: "truffle" },
  { icon: "twitch" },
  { icon: "typeorm" },
  { icon: "typescript" },
  { icon: "ubuntu" },
  { icon: "unity" },
  { icon: "unrealengine" },
  { icon: "v" },
  { icon: "vagrant" },
  { icon: "vala" },
  { icon: "vapor" },
  { icon: "vercel" },
  { icon: "vim" },
  { icon: "visualbasic" },
  { icon: "visualstudio" },
  { icon: "vite" },
  { icon: "vitest" },
  { icon: "vscode" },
  { icon: "vscodium" },
  { icon: "vuejs" },
  { icon: "vuetify" },
  { icon: "vyper" },
  { icon: "wandb" },
  { icon: "webassembly" },
  { icon: "webflow" },
  { icon: "webpack" },
  { icon: "webstorm" },
  { icon: "windicss" },
  { icon: "windows" },
  { icon: "word" },
  { icon: "wordpress" },
  { icon: "workers" },
  { icon: "wsl" },
  { icon: "x" },
  { icon: "xcode" },
  { icon: "xd" },
  { icon: "yaml" },
  { icon: "yammer" },
  { icon: "yarn" },
  { icon: "yew" },
  { icon: "yii" },
  { icon: "youtube" },
  { icon: "zed" },
  { icon: "zellij" },
  { icon: "zig" },
  { icon: "zustand" },
];
