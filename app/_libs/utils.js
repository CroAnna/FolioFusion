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
  { icon: "abap" },
  { icon: "aftereffects" },
  { icon: "amazonwebservices" },
  { icon: "android" },
  { icon: "angular" },
  { icon: "ansible" },
  { icon: "apachekafka" },
  { icon: "apple" },
  { icon: "arduino" },
  { icon: "asterisk" },
  { icon: "atom" },
  { icon: "azure" },
  { icon: "backbonejs" },
  { icon: "bash" },
  { icon: "behance" },
  { icon: "blender" },
  { icon: "bootstrap" },
  { icon: "bulma" },
  { icon: "c" },
  { icon: "cakephp" },
  { icon: "canva" },
  { icon: "centos" },
  { icon: "circleci" },
  { icon: "clojure" },
  { icon: "cmake" },
  { icon: "codeigniter" },
  { icon: "codepen" },
  { icon: "coffeescript" },
  { icon: "composer" },
  { icon: "confluence" },
  { icon: "couchdb" },
  { icon: "cplusplus" },
  { icon: "csharp" },
  { icon: "css3" },
  { icon: "d3js" },
  { icon: "daisyui" },
  { icon: "dart" },
  { icon: "deno" },
  { icon: "digitalocean" },
  { icon: "django" },
  { icon: "docker" },
  { icon: "doctrine" },
  { icon: "dotnet" },
  { icon: "dribbble" },
  { icon: "dropbox" },
  { icon: "drupal" },
  { icon: "eclipseide" },
  { icon: "electron" },
  { icon: "elixir" },
  { icon: "emberjs" },
  { icon: "facebook" },
  { icon: "fastify" },
  { icon: "feathersjs" },
  { icon: "fedora" },
  { icon: "firebase" },
  { icon: "figma" },
  { icon: "filestack" },
  { icon: "firebase" },
  { icon: "flask" },
  { icon: "flutter" },
  { icon: "foundation" },
  { icon: "framer" },
  { icon: "gatling" },
  { icon: "gatsby" },
  { icon: "gcp" },
  { icon: "gimp" },
  { icon: "git" },
  { icon: "github" },
  { icon: "gitlab" },
  { icon: "gitter" },
  { icon: "gimp" },
  { icon: "go" },
  { icon: "godotengine" },
  { icon: "googlecloud" },
  { icon: "gradle" },
  { icon: "grafana" },
  { icon: "graphql" },
  { icon: "grunt" },
  { icon: "gulp" },
  { icon: "hadoop" },
  { icon: "haskell" },
  { icon: "haxe" },
  { icon: "heroku" },
  { icon: "hive" },
  { icon: "html5" },
  { icon: "hubspot" },
  { icon: "ifttt" },
  { icon: "illustrator" },
  { icon: "inkscape" },
  { icon: "instagram" },
  { icon: "ionic" },
  { icon: "jamstack" },
  { icon: "java" },
  { icon: "javascript" },
  { icon: "jekyll" },
  { icon: "jenkins" },
  { icon: "jira" },
  { icon: "joomla" },
  { icon: "jquery" },
  { icon: "julia" },
  { icon: "kafka" },
  { icon: "kubernetes" },
  { icon: "laravel" },
  { icon: "latex" },
  { icon: "linkedin" },
  { icon: "lightroom" },
  { icon: "linux" },
  { icon: "lua" },
  { icon: "magento" },
  { icon: "mailchimp" },
  { icon: "markdown" },
  { icon: "mastodon" },
  { icon: "materializecss" },
  { icon: "matlab" },
  { icon: "mdbootstrap" },
  { icon: "medium" },
  { icon: "memcached" },
  { icon: "messenger" },
  { icon: "microsoftsqlserver" },
  { icon: "mongodb" },
  { icon: "mui" },
  { icon: "mysql" },
  { icon: "nextjs" },
  { icon: "nginx" },
  { icon: "nodejs" },
  { icon: "notion" },
  { icon: "numpy" },
  { icon: "objectivec" },
  { icon: "ocaml" },
  { icon: "opencv" },
  { icon: "oracle" },
  { icon: "outlook" },
  { icon: "php" },
  { icon: "photoshop" },
  { icon: "phpstorm" },
  { icon: "postgresql" },
  { icon: "premierepro" },
  { icon: "pug" },
  { icon: "python" },
  { icon: "pytorch" },
  { icon: "quasar" },
  { icon: "r" },
  { icon: "rails" },
  { icon: "react" },
  { icon: "redis" },
  { icon: "redux" },
  { icon: "ruby" },
  { icon: "rubyonrails" },
  { icon: "rust" },
  { icon: "sass" },
  { icon: "selenium" },
  { icon: "shopify" },
  { icon: "sketch" },
  { icon: "slack" },
  { icon: "socketio" },
  { icon: "solidity" },
  { icon: "spring" },
  { icon: "sqlite" },
  { icon: "stackoverflow" },
  { icon: "svelte" },
  { icon: "swift" },
  { icon: "symfony" },
  { icon: "tailwindcss" },
  { icon: "tensorflow" },
  { icon: "threejs" },
  { icon: "trello" },
  { icon: "twitter" },
  { icon: "typescript" },
  { icon: "ubuntu" },
  { icon: "unity" },
  { icon: "vagrant" },
  { icon: "vercel" },
  { icon: "vim" },
  { icon: "visualstudio" },
  { icon: "vuejs" },
  { icon: "vuedotjs" },
  { icon: "vulkan" },
  { icon: "wasmer" },
  { icon: "webflow" },
  { icon: "webgl" },
  { icon: "webstorm" },
  { icon: "wechat" },
  { icon: "weibo" },
  { icon: "woocommerce" },
  { icon: "wordpress" },
  { icon: "xamarin" },
  { icon: "xcode" },
  { icon: "xdotool" },
  { icon: "yarn" },
  { icon: "youtube" },
  { icon: "zapier" },
  { icon: "zig" },
  { icon: "zoho" },
  { icon: "zoom" },
  { icon: "zulip" },
  { icon: "zwave" },
];
