/* empty css                                 */
import { j as createComponent, k as createAstro, m as maybeRenderHead, n as addAttribute, q as renderSlot, r as renderTemplate, v as renderComponent, w as renderScript, s as spreadAttributes, x as Fragment, y as renderHead } from '../chunks/astro/server_D_wy3qjn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$j = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-7xl w-full"> <div${addAttribute(["mx-auto w-full px-4", Astro2.props.class], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/SectionContainer.astro", void 0);

const $$Astro$i = createAstro();
const $$Subtitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Subtitle;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(["font-semibold text-xl pb-4 sm:pb-6 sm:text-2xl md:text-4xl md:pb-12", Astro2.props.class], "class:list")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/amoil/Desktop/930/src/components/Subtitle.astro", void 0);

const $$BentoInfo = createComponent(($$result, $$props, $$slots) => {
  const ARTICLES = [
    {
      title: "Qu\xE9 esperar de un proceso de selecci\xF3n",
      contentId: "selection-process",
      class: "bg-gradient-to-r from-[#fef6db] to-[#fce197] text-ij-yellow md:aspect-[16/8] md:col-span-2 md:row-span-1 h-full",
      image: "/bento-info/selection-process.webp",
      imageClass: "w-full h-auto object-contain object-bottom md:h-auto md:w-auto md:object-right md:max-h-none",
      action: "modal",
      track: "blog_selection_process"
    },
    {
      title: "Los puestos emergentes que van a petarlo",
      contentId: "emergent-positions",
      class: "bg-gradient-to-r from-[#ffd2d2] to-[#f9b395] text-ij-red md:col-start-3 md:row-span-2 md:h-full",
      image: "/bento-info/emergent-positions.webp",
      imageClass: "w-full h-full object-cover object-[center_30%] md:object-center",
      action: "modal",
      track: "blog_emerging_jobs"
    },
    {
      title: "Las opini\xF3n de las empresas",
      contentId: "company-opinion",
      class: "bg-sky-800 text-ij-blue md:h-row-span-1",
      image: "/bento-info/company-opinion.webp",
      imageClass: "w-full h-full object-cover",
      action: "link",
      link: "https://www.tiktok.com/@infojobs/video/7291016517217520928?_r=1&amp%3B_t=8oUBsz4let7",
      track: "blog_companies_opinions"
    },
    {
      title: "\xBFSin experiencia? Destaca en las entrevistas",
      contentId: "no-experience",
      class: "bg-gradient-to-r from-[#e6f6ee] to-[#8bcfad] text-ij-green md:h-row-span-1 md:h-full",
      image: "/bento-info/no-experience.webp",
      imageClass: "w-3/4 h-auto object-contain mb-4",
      action: "modal",
      track: "blog_interview_tips"
    }
  ];
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Subtitle", $$Subtitle, {}, { "default": ($$result3) => renderTemplate`Prepárate para ganar` })} ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-0"> ${ARTICLES.map(
    ({
      class: className,
      title,
      contentId,
      image,
      imageClass,
      action,
      link,
      track
    }) => action === "link" ? renderTemplate`<a${addAttribute(link, "href")} target="_blank"${addAttribute([
      "aspect-square w-full h-full rounded-2xl overflow-hidden relative group",
      className
    ], "class:list")}${addAttribute(track, "data-track")}> <div${addAttribute([
      "absolute inset-0 flex overflow-hidden p-0",
      "items-end justify-end"
    ], "class:list")}> <img${addAttribute(image, "src")} alt=""${addAttribute([
      "transition-transform duration-300 ease-in-out group-hover:scale-110",
      imageClass
    ], "class:list")}> </div> <div class="absolute inset-0 p-4 flex flex-col justify-start items-start z-10"> <span class="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64"> ${title} </span> </div> </a>` : renderTemplate`<button${addAttribute([
      "aspect-square w-full h-full rounded-2xl overflow-hidden relative group",
      className
    ], "class:list")}${addAttribute(contentId, "data-content-id")}${addAttribute(track, "data-track")}> <div${addAttribute([
      "absolute inset-0 flex overflow-hidden p-0",
      contentId === "selection-process" ? "items-end justify-center md:items-stretch md:justify-end" : "",
      contentId === "emergent-positions" ? "items-start md:items-center" : "",
      contentId === "no-experience" ? "items-end justify-center" : "items-end justify-end"
    ], "class:list")}> <img${addAttribute(image, "src")} alt=""${addAttribute([
      "transition-transform duration-300 ease-in-out group-hover:scale-110",
      imageClass,
      contentId === "selection-process" ? "max-h-[70%] md:max-h-none md:h-full md:w-auto md:pr-0" : ""
    ], "class:list")}> </div> <div class="absolute inset-0 p-4 flex flex-col justify-start items-start z-10"> <span class="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64"> ${title} </span> </div> </button>`
  )} </div> ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/BentoInfo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/930/src/components/BentoInfo.astro", void 0);

const $$Astro$h = createAstro();
const $$CoolJobCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$CoolJobCard;
  const { image, brand, title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://cooljobs.infojobs.net/#${id}`, "href")} target="_blank" data-track="cool_jobs"> <article class="flex items-center p-4 group min-w-[274px] md:p-6 md:max-w-[312px] h-24 rounded-2xl border border-[#FE523052] overflow-hidden bg-white snap-center"> <div class="flex items-center justify-center gap-4 transition-transform group-hover:scale-105"> <div class="flex items-center h-10"> <img${addAttribute(image, "src")}${addAttribute(brand, "alt")} class="w-20 h-auto" loading="lazy"> </div> <p class="font-medium md:font-semibold"> ${title} </p> </div> </article> </a>`;
}, "C:/Users/amoil/Desktop/930/src/components/CoolJobCard.astro", void 0);

const $$CoolJobBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/img/cool-jobs/pattern.webp" alt="Cool Jobs Background Pattern" class="hidden lg:block lg:absolute lg:top-16 lg:right-2">`;
}, "C:/Users/amoil/Desktop/930/src/components/CoolJobBackground.astro", void 0);

const $$Astro$g = createAstro();
const $$CoolJobBrand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$CoolJobBrand;
  return renderTemplate`${maybeRenderHead()}<a href="https://cooljobs.infojobs.net/" target="_blank" rel="noopener noreferrer" data-track="cool_jobs"${addAttribute([
    "group transition hover:bg-[#fe5230] bg-[#fe52308f] h-24 max-w-[312px] rounded-2xl gap-4 lg:flex-col lg:items-start lg:justify-center m-auto",
    Astro2.props.class
  ], "class:list")}> <div class="flex flex-col justify-center items-center p-6 gap-1"> <img src="/img/cool-jobs/cool-jobs.webp" alt="Logo Cool Jobs" class="px-0 group-hover:scale-105 transition-transform"> <p class="text-white text-sm p-0 text-center md:pl-1 md:text-start md:w-full"> ${"Ver todos >"} </p> </div> </a>`;
}, "C:/Users/amoil/Desktop/930/src/components/CoolJobBrand.astro", void 0);

const $$CoolJobs = createComponent(($$result, $$props, $$slots) => {
  const coolJobs = [
    {
      image: "/img/cool-jobs/port-aventura.webp",
      title: "Probador de monta\xF1as rusas",
      brand: "Port Aventura World",
      section_id: "lp-pom-box-499"
    },
    {
      image: "/img/cool-jobs/maxibon.webp",
      title: "Catadora de helados",
      brand: "Maxibon",
      section_id: "lp-pom-box-515"
    },
    {
      image: "/img/cool-jobs/wizink-center.webp",
      title: "Probadora de conciertos",
      brand: "WiZink Center",
      section_id: "lp-pom-box-528"
    },
    {
      image: "/img/cool-jobs/dominos.webp",
      title: "Catadora de pizzas",
      brand: "Domino's",
      section_id: "lp-pom-box-534"
    },
    {
      image: "/img/cool-jobs/btravel.webp",
      title: "Probadora de viajes",
      brand: "B travel",
      section_id: "lp-pom-box-584"
    },
    {
      image: "/img/cool-jobs/grefusa.webp",
      title: "Probadora de snacks",
      brand: "Grefusa",
      section_id: "lp-pom-box-522"
    },
    {
      image: "/img/cool-jobs/visa.webp",
      title: "Probador de pagos con el m\xF3vil",
      brand: "Visa",
      section_id: "lp-pom-box-598"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full mx-auto lg:max-w-7xl"> <article class="p-4 pb-6 flex flex-col gap-6 bg-gradient-to-r from-[#FFDEDA] to-[#FCEDEB] md:py-[70px] md:px-10 md:items-center md:relative md:rounded-2xl md:mx-4"> ${renderComponent($$result, "CoolJobBackground", $$CoolJobBackground, {})} <h2 class="text-3xl font-semibold text-center text-ij-red tracking-separated lg:text-4xl lg:z-10 lg:mb-4">
Los trabajos más cool
</h2> <div class="flex items-center px-16 pb-6 -mx-4 overflow-x-auto no-scrollbar gap-7 snap-x snap-mandatory max-w-[1536px] md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 lg:p-0 lg:m-0 lg:z-10 md:justify-items-center xl:grid-cols-4"> ${coolJobs.map(({ image, title, brand, section_id }) => renderTemplate`${renderComponent($$result, "CoolJobCard", $$CoolJobCard, { "image": image, "title": title, "brand": brand, "id": section_id })}`)} ${renderComponent($$result, "CoolJobBrand", $$CoolJobBrand, { "class": "hidden md:flex" })} </div> ${renderComponent($$result, "CoolJobBrand", $$CoolJobBrand, { "class": "md:hidden min-w-[328px]" })} </article> </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/CoolJobs.astro", void 0);

const $$Astro$f = createAstro();
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="19" fill="none" viewBox="0 0 19 19"${spreadAttributes(Astro2.props)}> <path fill="currentColor" fill-rule="evenodd" d="m18.21 16.79-5.11-5.11a7 7 0 1 0-1.41 1.41l5.11 5.11a1 1 0 0 0 1.41-1.41ZM2.5 7.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/Search.astro", void 0);

const $$file$d = "C:/Users/amoil/Desktop/930/src/icons/Search.astro";
const $$url$d = undefined;

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const dictionaries = {
  "study": [
    { id: 0, value: "(Indicar Nivel)", order: 0, key: "indicar-nivel" },
    { id: 10, value: "Sin estudios", order: 5, key: "sin-estudios" },
    {
      id: 20,
      value: "Educación Secundaria Obligatoria",
      order: 10,
      key: "educacion-secundaria-obligatoria"
    },
    { id: 50, value: "Bachillerato", order: 20, key: "bachillerato" },
    {
      id: 35,
      value: "Ciclo Formativo Grado Medio",
      order: 30,
      key: "ciclo-formativo-grado-medio"
    },
    {
      id: 60,
      value: "Ciclo Formativo Grado Superior",
      order: 40,
      key: "ciclo-formativo-grado-superior"
    },
    {
      id: 23,
      value: "Enseñanzas artísticas (regladas)",
      order: 50,
      key: "ensenanzas-artisticas-regladas"
    },
    {
      id: 27,
      value: "Enseñanzas deportivas (regladas)",
      order: 60,
      key: "ensenanzas-deportivas-regladas"
    },
    { id: 125, value: "Grado", order: 70, key: "grado" },
    { id: 140, value: "Licenciatura", order: 80, key: "licenciado" },
    { id: 110, value: "Diplomatura", order: 90, key: "diplomado" },
    {
      id: 120,
      value: "Ingeniería Técnica",
      order: 100,
      key: "ingeniero-tecnico"
    },
    {
      id: 130,
      value: "Ingeniería Superior",
      order: 110,
      key: "ingeniero-superior"
    },
    { id: 143, value: "Postgrado", order: 120, key: "postgrado" },
    { id: 147, value: "Máster", order: 130, key: "master" },
    { id: 150, value: "Doctorado", order: 140, key: "doctorado" },
    {
      id: 160,
      value: "Otros títulos, certificaciones y carnés",
      order: 150,
      key: "otros-titulos-certificaciones-y-carnes"
    },
    {
      id: 170,
      value: "Otros cursos y formación no reglada",
      order: 160,
      key: "otros-cursos-y-formacion-no-reglada"
    },
    {
      id: 30,
      value: "Formación Profesional Grado Medio",
      order: 170,
      key: "formacion-profesional-grado-medio"
    },
    {
      id: 55,
      value: "Formación Profesional Grado Superior",
      order: 180,
      key: "formacion-profesional-grado-superior"
    }
  ]
};

const getDictionary = (dictionaryId) => {
  return Promise.resolve(dictionaries[dictionaryId]);
};

const getStudies = () => {
  return getDictionary("study");
};

const $$AppStore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/footer-app-store.webp" alt="Logo App Store" class="h-[50px] w-auto">`;
}, "C:/Users/amoil/Desktop/930/src/icons/AppStore.astro", void 0);

const $$file$c = "C:/Users/amoil/Desktop/930/src/icons/AppStore.astro";
const $$url$c = undefined;

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AppStore,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute("stroke-gray-600 transition-transform duration-300 ease-in-out", "class")}${spreadAttributes(props)}> <path d="m5.84 9.59l5.66 5.66l5.66-5.66l-.71-.7l-4.95 4.95l-4.95-4.95z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/ChevronDown.astro", void 0);

const $$file$b = "C:/Users/amoil/Desktop/930/src/icons/ChevronDown.astro";
const $$url$b = undefined;

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChevronDown,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="14" height="14" fill="none"><path fill="#89898A" fill-rule="evenodd" d="m8.47 6.95 4.79-4.8A1 1 0 0 0 11.85.74l-4.8 4.79L2.26.74A1 1 0 0 0 .85 2.15l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41l4.79-4.79 4.8 4.79a1 1 0 0 0 1.41-1.41L8.47 6.95Z" clip-rule="evenodd"></path></svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/CloseIcon.astro", void 0);

const $$file$a = "C:/Users/amoil/Desktop/930/src/icons/CloseIcon.astro";
const $$url$a = undefined;

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CloseIcon,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="22" height="22" fill="none"> <path fill="currentColor" fill-rule="evenodd" d="M11 .75C5.34.75.75 5.34.75 11S5.34 21.25 11 21.25 21.25 16.66 21.25 11C21.244 5.341 16.659.756 11 .75ZM19.75 11A8.75 8.75 0 1 1 11 2.25 8.76 8.76 0 0 1 19.75 11Zm-8.106 5.75v-5.474h1.77l.264-2.134h-2.034V7.78c0-.617.166-1.038 1.019-1.038h1.087V4.832a14.299 14.299 0 0 0-1.585-.083c-1.568 0-2.642.993-2.642 2.82v1.572H7.75v2.134h1.773v5.474h2.121Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/Facebook.astro", void 0);

const $$file$9 = "C:/Users/amoil/Desktop/930/src/icons/Facebook.astro";
const $$url$9 = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facebook,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$GooglePlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/footer-google-play.webp" alt="Logo Google Play" class="h-[50px] w-auto">`;
}, "C:/Users/amoil/Desktop/930/src/icons/GooglePlay.astro", void 0);

const $$file$8 = "C:/Users/amoil/Desktop/930/src/icons/GooglePlay.astro";
const $$url$8 = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GooglePlay,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
const $$LeftArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LeftArrow;
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="32" fill="none" viewBox="0 0 32 32"${spreadAttributes(Astro2.props)}> <path fill="currentColor" fill-rule="evenodd" d="M19.334 24.667a1.333 1.333 0 0 1-.947-.387l-5.44-5.44a4 4 0 0 1 0-5.653l5.454-5.467a1.333 1.333 0 0 1 1.88 1.88l-5.454 5.467a1.333 1.333 0 0 0 0 1.88l5.44 5.44a1.333 1.333 0 0 1-.947 2.28h.014Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/LeftArrow.astro", void 0);

const $$file$7 = "C:/Users/amoil/Desktop/930/src/icons/LeftArrow.astro";
const $$url$7 = undefined;

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LeftArrow,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Play = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Play;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="18" viewBox="0 0 16 18" fill="none"${spreadAttributes(Astro2.props)}> <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 2.92002e-06 17.4678 2.98732e-06 15.9282L3.593e-06 2.0718C3.6603e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/Play.astro", void 0);

const $$file$6 = "C:/Users/amoil/Desktop/930/src/icons/Play.astro";
const $$url$6 = undefined;

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Play,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$RightArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$RightArrow;
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="32" fill="none" viewBox="0 0 32 32"${spreadAttributes(Astro2.props)}> <path fill="currentColor" fill-rule="evenodd" d="M13.105 24.667c.354.002.695-.137.946-.387l5.44-5.44a4 4 0 0 0 0-5.653L14.038 7.72a1.333 1.333 0 0 0-1.88 1.88l5.453 5.467c.517.52.517 1.36 0 1.88l-5.44 5.44a1.333 1.333 0 0 0 .947 2.28h-.013Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/RightArrow.astro", void 0);

const $$file$5 = "C:/Users/amoil/Desktop/930/src/icons/RightArrow.astro";
const $$url$5 = undefined;

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RightArrow,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Spinner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Spinner;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/Spinner.astro", void 0);

const $$file$4 = "C:/Users/amoil/Desktop/930/src/icons/Spinner.astro";
const $$url$4 = undefined;

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Spinner,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$TikTok = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" fill="none"> <path fill="currentColor" fill-rule="evenodd" d="M22.25 12C22.244 6.341 17.659 1.756 12 1.75 6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12Zm-19 0A8.75 8.75 0 0 1 12 3.25 8.76 8.76 0 0 1 20.75 12a8.75 8.75 0 1 1-17.5 0Z" clip-rule="evenodd"></path> <path fill="currentColor" stroke="currentColor" stroke-width=".35" d="M17.79 9.172A3.199 3.199 0 0 1 14.587 6h-2.069v5.651l-.002 3.096a1.872 1.872 0 0 1-1.981 1.868 1.864 1.864 0 0 1-.856-.263 1.872 1.872 0 0 1-.915-1.577 1.874 1.874 0 0 1 2.466-1.805v-2.099a4.07 4.07 0 0 0-.597-.045 3.966 3.966 0 0 0-2.98 1.333 3.88 3.88 0 0 0-.978 2.34 3.875 3.875 0 0 0 1.154 3.02 3.966 3.966 0 0 0 2.805 1.148 3.953 3.953 0 0 0 2.805-1.148 3.872 3.872 0 0 0 1.16-2.756l-.01-4.623a5.225 5.225 0 0 0 3.207 1.09V9.171h-.006Z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/TikTok.astro", void 0);

const $$file$3 = "C:/Users/amoil/Desktop/930/src/icons/TikTok.astro";
const $$url$3 = undefined;

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TikTok,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="22" height="22" fill="none"> <path fill="currentColor" fill-rule="evenodd" d="m15.573 6-3.642 4.234L15.892 16H12.98l-2.668-3.883L6.97 16h-.864l3.82-4.44L6.108 6h2.914l2.526 3.677L14.71 6h.863Zm-2.188 9.38h1.326L8.608 6.65H7.282l6.103 8.73Z" clip-rule="evenodd"></path> <path fill="currentColor" fill-rule="evenodd" d="M21.25 11C21.244 5.341 16.659.756 11 .75 5.34.75.75 5.34.75 11S5.34 21.25 11 21.25 21.25 16.66 21.25 11Zm-19 0A8.75 8.75 0 0 1 11 2.25 8.76 8.76 0 0 1 19.75 11a8.75 8.75 0 1 1-17.5 0Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/Twitter.astro", void 0);

const $$file$2 = "C:/Users/amoil/Desktop/930/src/icons/Twitter.astro";
const $$url$2 = undefined;

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Twitter,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="22" height="22" fill="none"> <path fill="currentColor" fill-rule="evenodd" d="M11 .75C5.34.75.75 5.34.75 11S5.34 21.25 11 21.25 21.25 16.66 21.25 11C21.244 5.341 16.659.756 11 .75ZM19.75 11A8.75 8.75 0 1 1 11 2.25 8.76 8.76 0 0 1 19.75 11Zm-3-3a1.469 1.469 0 0 0-1.062-1.011C14.752 6.75 11 6.75 11 6.75s-3.753 0-4.688.239a1.469 1.469 0 0 0-1.061 1.01C5 8.89 5 10.75 5 10.75s0 1.86.25 2.75c.139.492.545.88 1.062 1.011.935.239 4.688.239 4.688.239s3.752 0 4.688-.239a1.469 1.469 0 0 0 1.061-1.01C17 12.61 17 10.75 17 10.75s0-1.86-.25-2.75Zm-7 4.75 3-2-3-2v4Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/amoil/Desktop/930/src/icons/YouTube.astro", void 0);

const $$file$1 = "C:/Users/amoil/Desktop/930/src/icons/YouTube.astro";
const $$url$1 = undefined;

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$YouTube,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  const icons = /* #__PURE__ */ Object.assign({"/src/icons/AppStore.astro": __vite_glob_0_0,"/src/icons/ChevronDown.astro": __vite_glob_0_1,"/src/icons/CloseIcon.astro": __vite_glob_0_2,"/src/icons/Facebook.astro": __vite_glob_0_3,"/src/icons/GooglePlay.astro": __vite_glob_0_4,"/src/icons/LeftArrow.astro": __vite_glob_0_5,"/src/icons/Play.astro": __vite_glob_0_6,"/src/icons/RightArrow.astro": __vite_glob_0_7,"/src/icons/Search.astro": __vite_glob_0_8,"/src/icons/Spinner.astro": __vite_glob_0_9,"/src/icons/TikTok.astro": __vite_glob_0_10,"/src/icons/Twitter.astro": __vite_glob_0_11,"/src/icons/YouTube.astro": __vite_glob_0_12});
  const iconMap = Object.fromEntries(
    Object.entries(icons).map(([path, module]) => [
      path.split("/").pop()?.replace(".astro", "").toLowerCase() || "",
      module.default
    ])
  );
  const iconName = Astro2.props.name?.toLowerCase();
  const IconComponent = iconMap[iconName];
  return renderTemplate`${IconComponent ? renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { ...Astro2.props, "class": Astro2.props.class })}` : renderTemplate`${maybeRenderHead()}<div class="text-sm">
Icon not found:${" "}<span class="font-bold text-base">${Astro2.props.name}</span></div>`}`;
}, "C:/Users/amoil/Desktop/930/src/components/ui/Icon.astro", void 0);

const $$Astro$8 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Button;
  const solid = {
    default: "bg-neutral-300 text-neutral-900",
    primary: "bg-primary text-white",
    secondary: "bg-accent text-white",
    success: "bg-ij-green text-white",
    warning: "bg-ij-yellow text-white",
    danger: "bg-red-500 text-white",
    foreground: "bg-black text-white"
  };
  const bordered = {
    default: "border-2 border-neutral-300 text-neutral-900",
    primary: "border-2 border-primary text-primary",
    secondary: "border-2 border-gray-500 text-gray-500",
    success: "border-2 border-ij-green text-ij-green",
    warning: "border-2 border-ij-yellow text-yellow-500",
    danger: "border-2 border-red-500 text-red-500",
    foreground: "border-2 border-black text-black"
  };
  const light = {
    default: "border-transparent text-black hover:bg-neutral-300",
    primary: "border-transparent text-primary hover:bg-primary/20",
    secondary: "border-transparent text-accent hover:bg-accent/20",
    success: "border-transparent text-ij-green hover:bg-ij-green/20",
    warning: "border-transparent text-ij-yellow hover:bg-ij-yellow/20",
    danger: "border-transparent text-red-500 hover:bg-ij-red/20",
    foreground: "border-transparent text-black hover:bg-black/20"
  };
  const ghost = {
    default: "border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-300",
    primary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "border-2 border-gray-500 text-gray-500 hover:bg-accent",
    success: "border-2 border-ij-green text-ij-green hover:bg-ij-green hover:text-white",
    warning: "border-2 border-ij-yellow text-ij-yellow hover:bg-ij-yellow hover:text-white",
    danger: "border-2 border-ij-red text-ij-red hover:bg-ij-red hover:text-white",
    foreground: "border-2 border-black text-black hover:bg-black hover:text-white"
  };
  const flat = {
    default: "bg-neutral-300/40 text-neutral-900",
    primary: "bg-primary/20 text-primary",
    secondary: "bg-accent/20 text-accent",
    success: "bg-ij-green/20 text-ij-green",
    warning: "bg-ij-yellow/20 text-ij-yellow",
    danger: "bg-ij-red/20 text-ij-red",
    foreground: "bg-black/20 text-black"
  };
  const variants = {
    solid,
    bordered,
    light,
    ghost,
    flat
  };
  function getVariantClasses(variant2, color2) {
    const variantGroup = variants[variant2] || variants.solid;
    return variantGroup[color2] ?? variantGroup.default;
  }
  const sizeClasses = {
    default: "px-4 py-2 text-lg gap-x-2 font-medium",
    sm: "px-3 min-w-16 h-8 text-sm gap-x-2",
    md: "px-4 min-w-20 h-10 text-base gap-x-2",
    lg: "px-6 min-w-24 h-12 text-lg gap-3 font-medium",
    full: "px-6 w-full py-2.5 text-lg gap-x-3 font-medium",
    icon: "h-10 w-10"
  };
  const radiusClasses = {
    none: "rounded-none",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    xxl: "rounded-4xl",
    full: "rounded-full"
  };
  const {
    variant = "solid",
    color = "primary",
    size = "default",
    radius = "xl",
    class: extraClasses = "",
    type = "button",
    href,
    as = "button",
    role = "button",
    disabled = false,
    icon,
    iconPosition = "left",
    iconOnly = false,
    loading = false,
    ariaLabel,
    disableSaturateHover = false,
    track
  } = Astro2.props;
  const customRadiusClass = typeof radius === "string" && radius.startsWith("rounded-") ? radius : radiusClasses[radius] || "";
  const variantClasses = getVariantClasses(variant, color);
  const baseClasses = [
    "z-0 group relative inline-flex items-center justify-center",
    "box-border appearance-none select-none whitespace-nowrap min-w-max",
    "subpixel-antialiased overflow-hidden tap-highlight-transparent",
    "focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-double",
    "focus-visible:outline-primary focus-visible:outline-offset-2",
    "disabled:opacity-75 disabled:select-none disabled:cursor-not-allowed",
    "disabled:active:scale-100",
    "active:scale-[0.99]",
    disableSaturateHover ? "" : "hover:saturate-150",
    "transition-transform-colors-opacity motion-reduce:transition-none"
  ].filter(Boolean).join(" ");
  const buttonClasses = [
    baseClasses,
    variantClasses,
    sizeClasses[size],
    customRadiusClass,
    iconOnly ? "p-2" : "",
    extraClasses,
    loading ? "loading" : ""
  ].filter(Boolean).join(" ");
  return renderTemplate`${as === "button" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(buttonClasses, "class")}${addAttribute(type, "type")}${addAttribute(disabled || loading, "disabled")}${addAttribute(role, "role")}${addAttribute(ariaLabel || (iconOnly ? `${icon} button` : void 0), "aria-label")}${addAttribute(loading, "aria-busy")}${addAttribute(iconOnly ? "true" : void 0, "aria-hidden")}${addAttribute(track, "data-track")} data-astro-cid-6ygtcg62>${loading ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-6ygtcg62": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "Spinner", "class": "animate-spin w-5 h-5", "data-astro-cid-6ygtcg62": true })}<span data-astro-cid-6ygtcg62>Processing...</span>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-6ygtcg62": true }, { "default": ($$result2) => renderTemplate`${icon && iconPosition === "left" && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "data-astro-cid-6ygtcg62": true })}`}${renderSlot($$result2, $$slots["default"])}${icon && iconPosition === "right" && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "data-astro-cid-6ygtcg62": true })}`}` })}`}</button>` : as === "link" && href ? renderTemplate`<a${addAttribute(buttonClasses, "class")}${addAttribute(href, "href")}${addAttribute(role || "link", "role")}${addAttribute(ariaLabel || (iconOnly ? `${icon} button` : void 0), "aria-label")}${addAttribute(iconOnly ? "true" : void 0, "aria-hidden")}${addAttribute(track, "data-track")} data-astro-cid-6ygtcg62>${icon && iconPosition === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-6ygtcg62": true })}`}${renderSlot($$result, $$slots["default"])}${icon && iconPosition === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-6ygtcg62": true })}`}</a>` : null}`;
}, "C:/Users/amoil/Desktop/930/src/components/ui/Button.astro", void 0);

const $$HeroSearch = createComponent(async ($$result, $$props, $$slots) => {
  const SHORTCUTS = [
    {
      label: "\u{1F331}  Sin experiencia",
      href: "https://www.infojobs.net/jobsearch/search-results/list.xhtml?keyword=&segmentId=&page=1&sortBy=PUBLICATION_DATE&onlyForeignCountry=false&countryIds=17&sinceDate=ANY&experienceMin=_0_YEARS&experienceMax=_0_YEARS",
      track: "explore_no_experience"
    },
    {
      label: "\u{1F5D3}\uFE0F  Findes",
      href: "https://www.infojobs.net/ofertas-trabajo/fines-de-semana",
      track: "explore_weekend_jobs"
    },
    {
      label: "\u{1F552}  Media jornada",
      href: "https://www.infojobs.net/ofertas-trabajo/media-jornada",
      track: "explore_part_time"
    },
    {
      label: "\u{1F4BC}  Pr\xE1cticas",
      href: "https://www.infojobs.net/ofertas-trabajo/practicas",
      track: "explore_internships"
    }
  ];
  const studies = await getStudies();
  const sortedStudies = studies.sort((a, b) => a.order - b.order);
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "data-astro-cid-gp6napx3": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-hero-pattern rounded-3xl px-4 py-6 md:w-full md:max-w-7xl md:mx-auto" data-astro-cid-gp6napx3> <h1 class="text-black/80 font-semibold tracking-[0.35px] text-2xl text-center pb-4 sm:text-4xl lg:hidden" data-astro-cid-gp6napx3>
Tu carrera empieza aquí
</h1> <h1 class="hidden text-black/80 font-semibold tracking-[0.35px] text-2xl text-center pb-4 sm:text-4xl lg:pb-8 lg:block" data-astro-cid-gp6napx3>
Conecta tus estudios con el empleo ideal
</h1> <search class="bg-white rounded-3xl p-4 lg:mx-10" data-astro-cid-gp6napx3> <form id="hero-form" class="mx-5 lg:flex lg:justify-between lg:items-center lg:gap-2" data-astro-cid-gp6napx3> <div id="study-level-container" class="flex items-center border-b border-gray-300 lg:border-none relative select-none outline-none lg:focus-visible:outline lg:focus-visible:outline-[#167DB7] lg:focus-visible:outline-1 lg:focus-visible:outline-offset-0 lg:focus-visible:rounded-lg rounded-md lg:w-full lg:px-4" tabindex="0" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="study-level-container" data-astro-cid-gp6napx3> <div class="w-full py-4 text-gray-600 bg-transparent cursor-pointer flex justify-between items-center" aria-label="Selecciona tu nivel de estudios" data-astro-cid-gp6napx3> <span id="study-level-text" data-astro-cid-gp6napx3> Nivel de estudios </span> ${renderComponent($$result2, "ChevronDown", $$ChevronDown, { "id": "study-level-chevron", "width": "24", "height": "24", "data-astro-cid-gp6napx3": true })} </div> <ul id="study-level-options" role="listbox" class="absolute top-full mt-2 space-y-1 rounded-lg left-0 p-1 max-h-80 w-full border border-gray-300 bg-white shadow-md hidden overflow-auto no-scrollbar z-20" data-track="study_level" data-astro-cid-gp6napx3> ${sortedStudies.map(({ id, value }) => {
    const isDefault = id === 0;
    const literal = isDefault ? "Nivel de estudios" : value;
    return renderTemplate`<li id="study-level-option" role="option"${addAttribute(`p-3 transition-colors duration-200 ease-in-out rounded-md outline-none cursor-pointer hover:bg-[#F3F9FB] focus-visible:bg-[#F3F9FB] ${isDefault ? "text-gray-400 bg-none pointer-events-none" : "text-gray-600"}`, "class")}${addAttribute(id, "data-value")}${addAttribute(isDefault, "aria-disabled")}${addAttribute(isDefault, "aria-selected")}${addAttribute(isDefault ? -1 : 0, "tabindex")} data-astro-cid-gp6napx3> ${literal} </li>`;
  })} </ul> </div> <div class="lg:w-full relative" data-astro-cid-gp6napx3> <input autocomplete="off" id="hero-keywords" name="keywords" placeholder="Estudios, puesto, empresa..." class="w-full py-3 lg:px-3 border-b border-gray-300 lg:border-none text-gray-600 focus:outline-none lg:focus-visible:bg-[#E8F2F8] lg:focus-visible:outline lg:focus-visible:outline-[#167DB7] lg:focus-visible:outline-1 lg:focus-visible:outline-offset-0 lg:focus-visible:rounded-lg" role="combobox" aria-expanded="false" aria-controls="hero-keywords-list" aria-autocomplete="list" data-astro-cid-gp6napx3> <ul id="hero-keywords-list" class="bg-white w-full mx-auto absolute inset-0 top-14 min-h-[224px] h-full max-h-[224px] z-[999] flex flex-col gap-1 p-1 rounded-lg border border-gray-300 shadow-md no-scrollbar [&>li]:rounded-md [&>li]:transition-colors [&>li]:duration-300 [&>li]:text-ij-black [&>li:hover]:bg-[#F3F9FB] [&>li]:p-3 [&>li]:cursor-pointer [&>li:focus]:bg-[#F3F9FB] [&>li:focus]:outline-none" role="listbox" aria-label="Lista de sugerencias" tabindex="0" data-astro-cid-gp6napx3></ul> </div> <div class="mb-8 lg:mb-0 lg:w-full" data-astro-cid-gp6napx3> <input name="geolocation" placeholder="Provincia o población" class="w-full py-3 lg:px-3 border-b border-gray-300 lg:border-none text-gray-600 focus:outline-none lg:focus-visible:bg-[#E8F2F8] lg:focus-visible:outline lg:focus-visible:outline-[#167DB7] lg:focus-visible:outline-1 lg:focus-visible:outline-offset-0 lg:focus-visible:rounded-lg" data-astro-cid-gp6napx3> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "color": "secondary", "variant": "solid", "size": "md", "radius": "full", "class": "shadow-md rounded-full text-lg font-medium bg-accent hover:saturate-150 transition text-white px-4 py-2 inline-flex gap-x-2 justify-center items-center w-full lg:size-12 lg:mt-1 lg:hover:scale-105", "ariaLabel": "Buscar ofertas", "track": "job_search", "data-astro-cid-gp6napx3": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SearchIcon", $$Search, { "data-astro-cid-gp6napx3": true })} <p class="lg:hidden" data-astro-cid-gp6napx3>Buscar ofertas</p> ` })} </form> </search> <footer data-astro-cid-gp6napx3> <p class="text-center pt-8 pb-4" data-astro-cid-gp6napx3>Explora trabajos que se adaptan a ti</p> <div class="max-xs:grid-cols-1 max-sm:grid max-sm:grid-cols-2 flex flex-wrap gap-4 justify-center" data-astro-cid-gp6napx3> ${SHORTCUTS.map(({ label, href, track }) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { "as": "link", "href": href, "color": "default", "variant": "solid", "radius": "full", "size": "lg", "class": "bg-white whitespace-nowrap text-center rounded-full p-4 lg:px-6 shadow-sm text-primary transition hover:scale-105 hover:text-white hover:bg-primary !font-light", "disableSaturateHover": true, "track": track, "data-astro-cid-gp6napx3": true }, { "default": async ($$result3) => renderTemplate`${label}` })}`)} </div> </footer> </section> ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro?astro&type=script&index=2&lang.ts")}  ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro?astro&type=script&index=3&lang.ts")} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro?astro&type=script&index=4&lang.ts")}`;
}, "C:/Users/amoil/Desktop/930/src/components/HeroSearch.astro", void 0);

const $$Astro$7 = createAstro();
const $$TiktokVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TiktokVideo;
  const { videoId, thumbnailUrl, title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "tiktok-video", "tiktok-video", { "class": "rounded-[16px] h-[570px] w-80 snap-center bg-black relative shrink-0 cursor-pointer bg-center bg-[length:100%] hover:bg-[length:105%] transition-[background-size]", "videoid": videoId, "thumbnailurl": thumbnailUrl, "data-title": title, "data-track": "play_video", "aria-label": "Reproducir video", "role": "button", "tabindex": "0" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="p-4 pl-[18px] bg-white rounded-full absolute bottom-6 right-6 hover:scale-110 transition-transform duration-300"${addAttribute(`Id${videoId}`, "id")}${addAttribute(title, "title")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "play", "class": "text-primary" })} </div> ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/TiktokVideo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/930/src/components/TiktokVideo.astro", void 0);

const $$SocialBest = createComponent(($$result, $$props, $$slots) => {
  const VIDEOS = [
    {
      videoId: "7222709244125007109",
      thumbnailUrl: "/img/thumbnails/ibai.webp",
      title: "La relaci\xF3n de Ibai con Marcos"
    },
    {
      videoId: "7258016065563807003",
      thumbnailUrl: "/img/thumbnails/jijantes.webp",
      title: "Fichaje del nuevo reportero de Jijantes"
    },
    {
      videoId: "7343332399662533920",
      thumbnailUrl: "/img/thumbnails/midudev.webp",
      title: "Fichajes de la web de La Velada junto a Midudev"
    },
    {
      videoId: "7265231719068880160",
      thumbnailUrl: "/img/thumbnails/cristinini.webp",
      title: "Ganadora de la Beca Infojobs Cristinini"
    },
    {
      videoId: "7285448407756393761",
      thumbnailUrl: "/img/thumbnails/marcos.webp",
      title: "Entrevista a Marcos de Ola\xF1eta"
    }
  ];
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "class": "px-0", "data-astro-cid-putkzjic": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between pb-6 md:pb-12" data-astro-cid-putkzjic> ${renderComponent($$result2, "Subtitle", $$Subtitle, { "class": "!pb-0", "data-astro-cid-putkzjic": true }, { "default": ($$result3) => renderTemplate`Trabaja con los mejores` })} <div class="hidden md:flex items-center gap-x-4" data-astro-cid-putkzjic> <button class="bg-[#E2E2E5] text-[#636365] opacity-45 p-1 rounded-full enabled:hover:scale-110 transition-all enabled:active:scale-100" id="left-button" disabled="true" aria-label="Ir al elemento anterior" data-astro-cid-putkzjic> ${renderComponent($$result2, "Icon", $$Icon, { "name": "leftarrow", "data-astro-cid-putkzjic": true })} </button> <button class="bg-[#E2E2E5] text-[#636365] p-1 rounded-full enabled:hover:scale-110 transition-all enabled:active:scale-100" id="right-button" aria-label="Ir al siguiente elemento" data-astro-cid-putkzjic> ${renderComponent($$result2, "Icon", $$Icon, { "name": "rightarrow", "data-astro-cid-putkzjic": true })} </button> </div> </div> <div class="relative carousel-container -mr-4 pr-4 md:mr-0 md:pr-0" id="carousel-container" style="--left-opacity: 0; --right-opacity: 1;" data-astro-cid-putkzjic> <div class="flex overflow-scroll custom-scrollbar gap-x-4 md:gap-x-8 snap-mandatory snap-x -mr-4 pr-4 md:mr-0 md:pr-0" id="carousel" data-astro-cid-putkzjic> ${VIDEOS.map(({ videoId, thumbnailUrl, title }) => renderTemplate`${renderComponent($$result2, "TiktokVideo", $$TiktokVideo, { "videoId": videoId, "thumbnailUrl": thumbnailUrl, "title": title, "data-astro-cid-putkzjic": true })}`)} </div> </div> ` })}  ${renderScript($$result, "C:/Users/amoil/Desktop/930/src/components/SocialBest.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/930/src/components/SocialBest.astro", void 0);

const $$KingsLeagueInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full aspect-[9/16] sm:aspect-[16/9] sm:col-span-2 rounded-3xl overflow-hidden"> <div class="w-full h-full relative"> <a href="https://kingsleague.ofertas-trabajo.infojobs.net/" target="_blank" class="absolute inset-0 group" data-track="kings_league"> <img src="/img/kings-league/background.webp" alt="Kings League InfoJobs Background" class="w-full h-full object-cover object-[center_top]"> <img src="/img/kings-league/players.webp" alt="Kings League InfoJobs Players" class="absolute bottom-0 h-full w-full md:w-fit md:h-fit object-cover object-[center_top] transition-transform duration-700 ease-in-out group-hover:scale-110 md:scale-100"> <div class="absolute inset-0 p-4 sm:p-6 flex flex-col justify-start items-start z-10"> <h3 class="text-2xl sm:text-2xl text-white/80">Patrocinador oficial</h3> <h2 class="text-5xl sm:text-5xl font-bold text-white">
Kings League InfoJobs
</h2> </div> </a> </div> </div>`;
}, "C:/Users/amoil/Desktop/930/src/components/KingsLeagueInfo.astro", void 0);

const $$OportunidadesTikTok = createComponent(($$result, $$props, $$slots) => {
  const cardsOportunidades = [
    {
      title1: "Oferta de empleo",
      title2: "Miles de oportunidades",
      img: "./img/pre-footer/oferta-empleo.webp",
      gradient: "bg-gradient-to-t from-[#8BCFAD] to-[#E6F6EE]",
      colorTitle: "text-[#0E8247]",
      imageClass: "p-4 sm:p-8 md:p-4 lg:p-8 !pb-0",
      href: "https://www.infojobs.net/",
      track: "job_offers"
    },
    {
      title1: "InfoJobs en TikTok",
      title2: "Consejos para encontrar trabajo",
      img: "./img/pre-footer/info-tiktok.webp",
      gradient: "bg-gradient-to-t from-[#FFE4A2] to-[#FEF6DB]",
      colorTitle: "text-[#EFA500]",
      imageClass: "",
      href: "https://www.tiktok.com/@infojobs/playlist/Encontrar%20trabajo-7401023016819378977 ",
      track: "tik_tok"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 w-auto h-auto gap-6 sm:gap-[40px]"> ${cardsOportunidades.map((card) => renderTemplate`<a${addAttribute(`group flex flex-col rounded-[16px] pt-4 px-4 md:px-12 lg:px-15 lg:pt-6 xl:pt-10 aspect-[328/436] md:aspect-square w-full overflow-hidden ${card.gradient}`, "class")}${addAttribute(card.href, "href")} target="_blank"${addAttribute(card.track, "data-track")}> <p class="mt-4 text-2xl font-semibold text-gray-900">${card.title1}</p> <p${addAttribute(`mt-2 text-3xl lg:text-5xl font-semibold ${card.colorTitle}`, "class")}> ${card.title2} </p> <div class="flex justify-center mt-auto w-full h-auto md:mb-0"> <img${addAttribute(["w-full h-full scale-100 transition group-hover:scale-105 group-hover:z-10 object-contain object-bottom", card.imageClass], "class:list")}${addAttribute(card.img, "src")} alt="InfoJobs"> </div> </a>`)} </div>`;
}, "C:/Users/amoil/Desktop/930/src/components/OportunidadesTikTok.astro", void 0);

const $$PreFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Subtitle", $$Subtitle, {}, { "default": ($$result3) => renderTemplate`InfoJobs, ¿la de trabajar te la sabes?` })} ${maybeRenderHead()}<div class="flex flex-col gap-10"> ${renderComponent($$result2, "KingsLeagueInfo", $$KingsLeagueInfo, {})} ${renderComponent($$result2, "OportunidadesTikTok", $$OportunidadesTikTok, {})} </div> ` })}`;
}, "C:/Users/amoil/Desktop/930/src/components/PreFooter.astro", void 0);

const $$InfographicModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="infographic-modal" class="transition-all fixed inset-0 bg-white py-2 z-[999] opacity-0 invisible" data-astro-cid-dfbforxd> <header class="w-full h-[40px] flex items-center justify-end px-4 lg:px-8" data-astro-cid-dfbforxd> <button id="btn-modal" class="p-2 rounded-full transition-colors md:hover:bg-gray-200" data-astro-cid-dfbforxd> ${renderComponent($$result, "CloseIcon", $$CloseIcon, { "data-astro-cid-dfbforxd": true })} </button> </header> <div id="infographic-modal-body" class="h-full w-full rounded-lg overflow-y-auto" data-astro-cid-dfbforxd></div> </section> `;
}, "C:/Users/amoil/Desktop/930/src/components/InfographicModal.astro", void 0);

const $$Astro$6 = createAstro();
const $$InfographicBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$InfographicBody;
  const { bentoInfoModalCards = [], bentoInfoModalCardsBig = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="grid gap-[48px] md:justify-between grid-cols-1 lg:grid-cols-2 overflow-hidden" data-astro-cid-jqofj3vp> ${bentoInfoModalCards.map(
    ({
      image,
      title,
      description,
      firstBgColor,
      secondBgColor,
      textColor
    }) => renderTemplate`<article class="file-card w-auto h-full mx-auto max-h-[456px] max-w-[330px] md:max-w-[600px] md:max-h-[630px] lg:min-h-[700px]"${addAttribute({
      background: `linear-gradient(to bottom right, ${firstBgColor}, ${secondBgColor})`
    }, "style")} data-astro-cid-jqofj3vp> <div class="w-full h-full p-2 my-7" data-astro-cid-jqofj3vp> <img${addAttribute(image, "src")}${addAttribute(`${title} Card`, "alt")} class="min-h-[115px] max-h-[115px] lg:min-h-[210px] lg:max-h-[210px] w-auto mx-auto my-7" data-astro-cid-jqofj3vp> <div class="py-10 px-15 flex flex-col gap-6 items-center" data-astro-cid-jqofj3vp> <h4 class="text-[26px] leading-[26px] md:text-5xl md:leading-[48px] text-center"${addAttribute({ color: textColor }, "style")} data-astro-cid-jqofj3vp> ${title} </h4> <p class="text-[15px] leading-[15px] md:text-[28px] md:leading-7 text-center"${addAttribute({ color: textColor }, "style")} data-astro-cid-jqofj3vp> ${description} </p> </div> </div> </article>`
  )} </section> <section class="w-auto h-auto" data-astro-cid-jqofj3vp> ${bentoInfoModalCardsBig.map((card) => renderTemplate`<article${addAttribute(`${card.backgroundColor} p-5 mb-20 rounded-3xl `, "class")} style="background-size: 100% 100%;" data-astro-cid-jqofj3vp> <h5${addAttribute(` ${card.backgroundColor3} uppercase py-2 px-4 w-fit  md:w-fit rounded-lg text-white text-sm lg:text-xl md:text-xs leading-5 text-center tracking-[2%] `, "class")} data-astro-cid-jqofj3vp> ${card.title} </h5> <p class=" lg:text-[3.5rem] lg:my-9 text-2xl my-3" data-astro-cid-jqofj3vp> ${card.description} </p> <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 mb-6" data-astro-cid-jqofj3vp> ${card.requirements.map((requirement) => renderTemplate`<div${addAttribute(`flex flex-col gap-3 ${card.backgroundColor2} rounded-[1.25rem] px-5 py-5 `, "class")} data-astro-cid-jqofj3vp> <h6 class="rounded-xl text-base md:text-2xl bg-white text-black w-fit py-2 px-3" data-astro-cid-jqofj3vp> ${requirement.label} </h6> <div class=" flex flex-wrap gap-2 md:gap-5 mt-2" data-astro-cid-jqofj3vp> ${requirement.tag.map((tag) => renderTemplate`<span class="text-black sm:text-base md:text-2xl lg:text-3xl px-5 py-1 rounded-[2rem] border-[1px] border-[#5B666C80]  w-auto" data-astro-cid-jqofj3vp> ${tag} </span>`)} </div> </div>`)} </div> <div data-astro-cid-jqofj3vp> ${card.location.map((location) => renderTemplate`<div${addAttribute(`flex flex-col gap-2 justify-between ${card.backgroundColor2} rounded-[20px] px-5 py-6 `, "class")} data-astro-cid-jqofj3vp> <h6 class="rounded-xl text-base md:text-2xl bg-white text-black w-fit py-2 px-3" data-astro-cid-jqofj3vp> ${location.label} </h6> <div class="flex flex-col md:flex-row justify-around gap-2 mt-2" data-astro-cid-jqofj3vp> <div${addAttribute(`rounded-xl ${card.image1} pl-4 pt-2 w-auto md:w-[48%]`, "class")} data-astro-cid-jqofj3vp> <span class="text-black text-base md:text-xl  w-full uppercase" data-astro-cid-jqofj3vp> ${location.tag1} </span> </div> <div${addAttribute(`rounded-xl ${card.image2} pl-4 p-2 w-auto md:w-[48%] `, "class")} data-astro-cid-jqofj3vp> <span class="text-black text-base md:text-xl w-full uppercase" data-astro-cid-jqofj3vp> ${location.tag2} </span> </div> </div> </div>`)} </div> </article>`)} </section> `;
}, "C:/Users/amoil/Desktop/930/src/components/InfographicBody.astro", void 0);

const $$Astro$5 = createAstro();
const $$InfographicHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$InfographicHeader;
  const { badgeText, title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-[10px] md:gap-[35px]"> <span class="uppercase bg-[#499AC3] py-2 px-4 w-full md:w-fit rounded-lg text-white text-xl leading-5 text-center tracking-[2%]"> ${badgeText} </span> <div class="py-10 flex flex-col gap-6"> <h2 class="text-[32px] leading-[35.2px] md:text-[64px] md:leading-[70px] text-[#0073AA] max-w-5xl"> ${title} </h2> <h4 class="text-3xl leading-[30px] text-[#499AC3]">${subtitle}</h4> </div> </div>`;
}, "C:/Users/amoil/Desktop/930/src/components/InfographicHeader.astro", void 0);

const $$Astro$4 = createAstro();
const $$StandsInterviews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StandsInterviews;
  const standsInterviews = [
    {
      image: "/img/bento-info-modal-cards/sincerity-and-trust.webp",
      title: "Sinceridad y confianza",
      description: "\xA1Si te han llamado ser\xE1 por algo! Demuestra que lo que te falta de experiencia, te sobra de aptitud.",
      firstBgColor: "#B4E5CD",
      secondBgColor: "#E1F4EB",
      textColor: "#008949"
    },
    {
      image: "/img/bento-info-modal-cards/show-enthusiasm.webp",
      title: "Demuestra entusiasmo",
      description: "Inf\xF3rmate sobre la empresa y el puesto para explicar al entrevistador/a tu inter\xE9s.",
      firstBgColor: "#FDECBE",
      secondBgColor: "#FFF7E4",
      textColor: "#B08B2B"
    },
    {
      image: "/img/bento-info-modal-cards/focus-on-your-skills.webp",
      title: "C\xE9ntrate en tus habilidades",
      description: "Muestra iniciativa y remarca tus conocimientos: tecnolog\xEDas, herramientas digitales, idiomas o deportes",
      firstBgColor: "#FFBFB5",
      secondBgColor: "#FBE9E7",
      textColor: "#FF523C"
    },
    {
      image: "/img/bento-info-modal-cards/learning-ability.webp",
      title: "Capacidad de aprendizaje",
      description: "Si no tienes experiencia laboral, muestra tus ganas por seguir form\xE1ndote, dentro y fuera de la compa\xF1\xEDa.",
      firstBgColor: "#64C6F6",
      secondBgColor: "#D2EEFA",
      textColor: "#085C81"
    },
    {
      image: "/img/bento-info-modal-cards/questions-and-answers.webp",
      title: "Practica preguntas y respuestas",
      description: "Prep\xE1rate posibles respuestas y\xA0preguntas sobre la compa\xF1\xEDa y tu rol, \xA1as\xED ver\xE1n que vas a por todas!",
      firstBgColor: "#88DBFF",
      secondBgColor: "#E1F8FF",
      textColor: "#0073AA"
    },
    {
      image: "/img/bento-info-modal-cards/double-authenticity.webp",
      title: "La autenticidad punt\xFAa doble",
      description: "Mira a los ojos, expr\xE9sate con las manos,\xA0t\xFA tienes el control de la situaci\xF3n.\xA0\xA1Y sonr\xEDe de forma natural!",
      firstBgColor: "#FFBEBF",
      secondBgColor: "#FBE9E7",
      textColor: "#DF4D3A"
    }
  ];
  const { infographicId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`infographic-${infographicId}`, "id")} class="mx-auto px-4 max-w-7xl w-full flex-col md:gap-[50px] py-[72px] hidden"> ${renderComponent($$result, "InfographicHeader", $$InfographicHeader, { "badgeText": "Destaca en las entrevistas", "title": "\xBFQuieres triunfar en una entrevista aunque no tengas experiencia para ese trabajo?", "subtitle": "\xA1Sin problema!" })} ${renderComponent($$result, "InfographicBody", $$InfographicBody, { "bentoInfoModalCards": standsInterviews })} </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/StandsInterviews.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="py-4 px-8 flex justify-between items-center md:max-w-[1400px] md:mx-auto sticky top-0 right-0 left-0 bg-white/70 z-50 mb-4 backdrop-blur-xl"> <a href="#" aria-label="Regresar a la página de inicio"><img src="/logo.svg" alt="Logo InfoJobs" class="w-auto h-[30px]"></a> ${renderComponent($$result, "Button", $$Button, { "variant": "solid", "color": "primary", "size": "lg", "radius": "full", "as": "link", "href": "https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml" }, { "default": ($$result2) => renderTemplate`
Crea tu cuenta
` })} </header>`;
}, "C:/Users/amoil/Desktop/930/src/components/Header.astro", void 0);

const $$LinksColumns = createComponent(($$result, $$props, $$slots) => {
  const linksInfo = [
    {
      title: "Nosotros",
      links: [
        {
          label: "Ayuda",
          href: "https://ayuda.infojobs.net/hc/es",
          showOnMobile: true
        },
        {
          label: "Seguridad",
          href: "https://nosotros.infojobs.net/infojobs-seguridad"
        },
        {
          label: "Condiciones legales",
          href: "https://www.infojobs.net/lex.xhtml",
          showOnMobile: true
        },
        {
          label: "Pol\xEDtica de privacidad",
          href: "https://www.infojobs.net/privacy-policy/extended.xhtml"
        },
        {
          label: "Uso del servicio",
          href: "https://www.infojobs.net/rules-and-services.xhtml"
        },
        {
          label: "Pol\xEDtica de cookies",
          href: "https://www.infojobs.net/lex.xhtml#cookies-policy"
        },
        {
          label: "Gesti\xF3n de cookies",
          href: "https://www.figma.com/exit?url=javascript%3Avoid(null)%3B"
        }
      ]
    },
    {
      title: "Sobre InfoJobs",
      links: [
        {
          label: "InfoJobs hoy",
          href: "https://nosotros.infojobs.net/"
        },
        {
          label: "Trabaja con nosotros",
          href: "https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml?error=caducado&dgv=8615867714346349222"
        },
        {
          label: "Ofertas de empleo",
          href: "https://www.infojobs.net/ofertas-empleo"
        }
      ]
    },
    {
      title: "+ InfoJobs",
      links: [
        {
          label: "InfoJobs Awards",
          href: "https://awards.infojobs.net/"
        },
        {
          label: "InfoJobs Academy",
          href: "https://infojobsacademy.com/"
        },
        {
          label: "Orientaci\xF3n laboral",
          href: "https://orientacion-laboral.infojobs.net/"
        },
        {
          label: "InfoJobs Formaci\xF3n",
          href: "https://formacion.infojobs.net/"
        },
        {
          label: "Blog empresas",
          href: "https://recursos-humanos.infojobs.net/"
        },
        {
          label: "Offerte di lavoro in Italia",
          href: "https://www.infojobs.it/"
        }
      ]
    },
    {
      title: "Prensa",
      links: [
        {
          label: "Indicadores de InfoJobs",
          href: "https://nosotros.infojobs.net/indicadores-infojobs"
        },
        {
          label: "Notas de prensa",
          href: "https://nosotros.infojobs.net/prensa/notas-prensa"
        },
        {
          label: "Contacto de prensa",
          href: "https://nosotros.infojobs.net/contacto-prensa/contacto-de-prensa"
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="px-[40px] items-center md:justify-between md:items-start flex flex-col md:flex-row"> ${linksInfo.map(({ title, links }, index) => {
    return renderTemplate`<div${addAttribute(`${index === 0 ? "" : "hidden sm:block"}`, "class")}> <h2 class="text-black font-semibold text-[18px] hidden md:block mb-2"> ${title} </h2> <ul class="flex flex-row  md:flex-col underline md:no-underline gap-4 md:gap-0"> ${links.map(({ label, href, showOnMobile }) => {
      return renderTemplate`<li${addAttribute([
        `mb-2 hover:underline hover:underline-offset-[3px]`,
        showOnMobile ? "" : "hidden md:block"
      ], "class:list")}> <a${addAttribute(href, "href")} class="text-[14px] leading-6" target="_blank" rel="noopener noreferrer"${addAttribute(label, "aria-label")}> ${label} </a> </li>`;
    })} </ul> </div>`;
  })} </div>`;
}, "C:/Users/amoil/Desktop/930/src/components/LinksColumns.astro", void 0);

const $$Astro$3 = createAstro();
const $$FollowUsLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FollowUsLink;
  const { href, socialPlatform } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(Astro2.props.class, "class")}${addAttribute(socialPlatform, "aria-label")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/amoil/Desktop/930/src/components/FollowUsLink.astro", void 0);

const $$FollowUs = createComponent(($$result, $$props, $$slots) => {
  const hoverSocialNetworks = "md:transition-transform md:hover:scale-110";
  const hoverStoreApps = "md:transition-opacity md:duration-150 md:ease-in-out md:hover:opacity-90";
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-between md:flex-row md:p-10"> <article class="w-full flex items-center justify-center gap-2 py-4 flex-wrap md:justify-start"> <p class="text-xl tracking-[0.38px] leading-6 font-semibold">
¡Síguenos!
</p> <span class="flex items-center gap-2"> ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://www.tiktok.com/@infojobs", "class": hoverSocialNetworks, "socialPlatform": "Vis\xEDtanos en TikTok." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "tiktok" })} ` })} ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://www.youtube.com/InfoJobs", "class": hoverSocialNetworks, "socialPlatform": "Vis\xEDtanos en YouTube." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "youtube" })} ` })} ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://x.com/InfoJobs", "class": hoverSocialNetworks, "socialPlatform": "Vis\xEDtanos en X." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter" })} ` })} ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://www.facebook.com/InfoJobs", "class": hoverSocialNetworks, "socialPlatform": "Vis\xEDtanos en Facebook." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook" })} ` })} </span> </article> <article class="w-full flex items-center justify-center gap-4 py-4 flex-wrap md:flex-nowrap md:p-0 md:gap-2 md:justify-end"> ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://infojobs.go.link/?adj_t=1b8zxouv_1bnixj2z", "class": hoverStoreApps, "socialPlatform": "Vis\xEDtanos en Google." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "googleplay" })} ` })} ${renderComponent($$result, "FollowUsLink", $$FollowUsLink, { "href": "https://infojobs.onelink.me/2882600328/rjh2wn2f", "class": hoverStoreApps, "socialPlatform": "Vis\xEDtanos en la AppStore." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "appstore" })} ` })} </article> </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/FollowUs.astro", void 0);

const $$AdevintaInfo = createComponent(($$result, $$props, $$slots) => {
  const LINKS = [
    {
      label: "JobisJob",
      href: "https://www.jobisjob.es/"
    },
    {
      label: "Fotocasa",
      href: "https://www.fotocasa.es/es"
    },
    {
      label: "habitaclia",
      href: "https://www.habitaclia.com/"
    },
    {
      label: "Coches.net",
      href: "https://www.coches.net/"
    },
    {
      label: "Motos.net",
      href: "https://motos.coches.net/"
    },
    {
      label: "Milanuncios",
      href: "https://www.milanuncios.com/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center px-10"> <ul class="hidden md:inline-flex gap-x-4 gap-y-4 flex-wrap justify-center text-sm w-full pb-10 underline-offset-[3px]"> <li> <span>InfoJobs es partner de </span> </li> ${LINKS.map(({ label, href }, index) => renderTemplate`<li${addAttribute(`${index !== LINKS.length - 1 && "after:content-['|'] after:ml-4"} text-center`, "class")}> <a class="hover:underline"${addAttribute(href, "href")} target="_blank"${addAttribute(`Visita ${label}`, "aria-label")}> ${label} </a> </li>`)} <li class="text-center"> <span>© 2024 Adevinta Jobs S.L.U.</span> </li> </ul> </div>`;
}, "C:/Users/amoil/Desktop/930/src/components/AdevintaInfo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#F5F5F5] py-6 lg:py-10 mt-20"> <section class="mx-auto max-w-7xl px-4 w-full"> ${renderComponent($$result, "LinksColumns", $$LinksColumns, {})} ${renderComponent($$result, "FollowUs", $$FollowUs, {})} ${renderComponent($$result, "AdevintaInfo", $$AdevintaInfo, {})} </section> </footer>`;
}, "C:/Users/amoil/Desktop/930/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><title>Infojobs Landing Practice</title><meta name="description" content="Usa InfoJobs e impulsa tu carrera trabajando en una empresa l\xEDder"><meta name="viewport" content="width=device-width"><meta property="twitter:image" content="https://primer-trabajo.infojobs.net/og.jpg"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title" content="Encuentra tu Primer Trabajo en InfoJobs"><meta property="twitter:description" content="Usa InfoJobs e impulsa tu carrera trabajando en una empresa l\xEDder"><meta property="og:image" content="https://primer-trabajo.infojobs.net/og.jpg"><meta property="og:site_name" content="InfoJobs.net"><meta property="og:title"', '><meta property="og:description" content="Usa InfoJobs e impulsa tu carrera trabajando en una empresa l\xEDder"><meta property="og:url" content="https://primer-trabajo.infojobs.net/"><link rel="preload" as="image" href="/hero-pattern.webp"><link rel="shortcut icon" href="./assets/favicon.webp" type="image/x-icon"><script defer src="https://components.infojobs.com/widgets/downloader.js"><\/script><script defer src="https://unpkg.com/@s-ui/ij-segment-wrapper@2.6.0/umd/index.js"><\/script><script defer>\n      analytics.track("Landing Page Viewed", {\n        page_name: "landing_infojobs",\n        site: "infojobs.net",\n        section: "candidate",\n        channel: "landing_captacion_ontarget",\n        platform: "web",\n        vertical: "jobs",\n        page_type: "landing",\n      })\n    <\/script>', "</head> </html> <body> ", ' <main class="flex flex-col gap-20 md:gap-24"> ', ' </main> <div id="cmpContainer"></div> ', ' <script defer>\n  const DEFAULT_TRACKING = {\n    channel: "landing_captacion_ontarget",\n    page_detail: "landing_infojobs",\n    platform: "web",\n    section: "candidate",\n    site: "infojobs.net",\n    vertical: "jobs",\n  }\n\n  const elementsToTrack = document.querySelectorAll("[data-track]")\n\n  elementsToTrack.forEach((el) => {\n    el.addEventListener("click", (event) => {\n      const { track } = event.currentTarget.dataset\n      const trackingData = { ...DEFAULT_TRACKING, label: track }\n      window.analytics.track("Button Clicked", trackingData)\n    })\n  })\n<\/script> </body>'])), addAttribute(title, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/amoil/Desktop/930/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$EmergentPositions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmergentPositions;
  const standsInterviewsBig = [
    {
      title: "Inteligencia Artificial",
      description: "Ingeniero/a de Machine Learning",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Ciencia Computacional", "Matem\xE1ticas", "Estad\xEDstica"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 35k-58k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["Python", "R", "TensorFlow", "PyTorch"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Pensamiento critico", "Trabajo en equipo", "Analisis"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Madrid",
          tag2: "Barcelona"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/madrid.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center ",
      image2: "bg-[url(/img/emergent-positions/barcelona.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "bg-[url(/img/emergent-positions/bg2Img1.webp)] text-[#3C49F0] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg1.webp)] ",
      backgroundColor2: "bg-[#CCCCFA]",
      backgroundColor3: "bg-[#9B9DF6]"
    },
    {
      title: "Data/Analytics",
      description: "Data Engineer",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Ingenier\xEDa inform\xE1tica", "Telecomunicaciones"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 33k-60k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["SQL", "Python", "Big Data", "Spark"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Resoluci\xF3n de problemas", "Adaptaci\xF3n al cambio"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Barcelona",
          tag2: "Valencia"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/barcelona.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/valencia.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "  text-[#008949] bg-[url(/img/emergent-positions/bg2Img2.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg2.webp)] ",
      backgroundColor2: "bg-[#B4E5CD]",
      backgroundColor3: "bg-[#3EB87E]"
    },
    {
      title: " Building Information Modeling (BIM)",
      description: "Arquitecto/a BIM",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Arquitectura", "Ingeneir\xEDa de Edificaci\xF3n"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 30k-50k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["Revit", "AutoCAD", "Gesti\xF3n de proyectos"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Comunicaci\xF3n", "Liderazgo", "Autogesti\xF3n"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Barcelona",
          tag2: "Sevilla"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/barcelona.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/sevilla.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: " text-[#D1A22E] bg-[url(/img/emergent-positions/bg2Img3.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg3.webp)]",
      backgroundColor2: "bg-[#FDECBE]",
      backgroundColor3: "bg-[#F7CE5B] text-xs md:text-[0.7rem]"
    },
    {
      title: " Ciberseguridad / Cloud",
      description: "Cloud Security Engineer",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Inform\xE1tica", "Ingeneir\xEDa en telecomunicaciones"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 40k-60k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["AWS", "Azure", "Seguridad en la nube"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Atenci\xF3n al detalle", "Pensamiento anal\xEDtico"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Madrid",
          tag2: "M\xE1laga"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/madrid.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/malaga.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "bg-[url(/img/emergent-positions/bg2Img4.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg4.webp)] text-[#006895]",
      backgroundColor2: "bg-[#C4DFEB]",
      backgroundColor3: "bg-[#7BB6D3] text-xs"
    },
    {
      title: "Quality Assurance (QA)",
      description: "QA Automation Engineer",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Ingeneir\xEDa T\xE9cnica o Superior "]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 30k-50k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["Selenium", "Jenkins", "Python"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Proactividad", "Resoluci\xF3n de problemas"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Madrid",
          tag2: "Bilbao"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/madrid.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/bilbao.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "bg-[url(/img/emergent-positions/bg2Img5.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg5.webp)] text-[#DF4D3A]",
      backgroundColor2: "bg-[#FAC7C8]",
      backgroundColor3: "bg-[#F1696E] text-xs"
    },
    {
      title: "Eficiencia Energ\xE9tica",
      description: "Ingeniero/a de Eficiencia Energ\xE9tica",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Ingeniero/a de Eficiencia Energ\xE9tica"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 30k-50k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["Presto", "DIALux", "An\xE1lisis de costes"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Organizaci\xF3n", "Planificaci\xF3n"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Valencia",
          tag2: "Zaragoza"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/valencia.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/zaragoza.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "bg-[url(/img/emergent-positions/bg2Img6.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg6.webp)] text-[#009B4E]  ",
      backgroundColor2: "bg-[#B4E5CD]",
      backgroundColor3: "bg-[#008949] md:text-[0.6rem]"
    },
    {
      title: "Vocaci\xF3n social",
      description: "Psic\xF3logo/a",
      requirements: [
        {
          label: "\u{1F4D6} Estudios",
          tag: ["Psicolog\xEDa", "Trabajo Social"]
        },
        {
          label: "\u{1F4DD} Condiciones",
          tag: ["Contrato indefinido", "Salario de 12k-24k \u20AC/a\xF1o"]
        },
        {
          label: "\u{1F9BE} Hard Skills",
          tag: ["Intervenci\xF3n psicol\xF3gica", "Programas sociales"]
        },
        {
          label: "\u{1F44B} Soft Skills",
          tag: ["Empat\xEDa", "Paciencia", "Comunicaci\xF3n asertiva"]
        }
      ],
      location: [
        {
          label: "\u{1F4CD} D\xF3nde",
          tag1: "Madrid",
          tag2: "Valencia"
        }
      ],
      image1: "bg-[url(/img/emergent-positions/madrid.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      image2: "bg-[url(/img/emergent-positions/valencia.webp)] w-[31.25rem] md:h-[11rem] h-[7rem] bg-cover bg-center",
      backgroundColor: "bg-[url(/img/emergent-positions/bg2Img7.webp)] md:bg-cover md:bg-[url(/img/emergent-positions/bgImg7.webp)] text-[#006895]",
      backgroundColor2: "bg-[#C4DFEB]",
      backgroundColor3: "bg-[#7BB6D3] md:text-[0.6rem]"
    }
    // Agrega más objetos según sea necesario
  ];
  const { infographicId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`infographic-${infographicId}`, "id")} class="mx-auto px-4 max-w-7xl w-full flex-col md:gap-[50px] py-[72px] hidden"> ${renderComponent($$result, "InfographicHeader", $$InfographicHeader, { "badgeText": "Puestos Emergentes", "title": "\xBFQuieres saber qu\xE9 estudiar para lograr los trabajos del futuro?", "subtitle": "\xA1Te lo explicamos!" })} ${renderComponent($$result, "InfographicBody", $$InfographicBody, { "bentoInfoModalCardsBig": standsInterviewsBig })} </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/EmergentPositions.astro", void 0);

const $$InfographicTips = createComponent(($$result, $$props, $$slots) => {
  const TIPS = [
    {
      title: "Favoritos",
      description: "Marca como favoritas las empresas que te molen",
      image: "/img/bento-info-modal-cards/heart-on-fire.webp",
      firstBgColor: "#FFB3B6",
      secondBgColor: "#FCD3D3",
      titleColor: "#EA2E39",
      descriptionColor: "#F1696E"
    },
    {
      title: "Notificaciones",
      description: "\xA1Recibir\xE1s un aviso cuando publiquen una oferta!",
      image: "/img/bento-info-modal-cards/bell.webp",
      firstBgColor: "#FFB3B6",
      secondBgColor: "#FCD3D3",
      titleColor: "#EA2E39",
      descriptionColor: "#F1696E"
    },
    {
      title: "Revisa tu CV",
      description: "Y t\xF3mate tu tiempo para contestar bien a las preguntas que hacen ",
      image: "/img/bento-info-modal-cards/eyes.webp",
      firstBgColor: "#FFB3B6",
      secondBgColor: "#FCD3D3",
      titleColor: "#EA2E39",
      descriptionColor: "#F1696E"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative mt-8 md:mt-0" data-astro-cid-vs6s43qj> <img class="absolute top-0 left-1/2 -translate-x-1/2 h-auto w-8 xs:w-10 sm:w-14 md:w-16 lg:w-20 xl:w-24 z-10" src="/img/bento-info-modal-cards/fire.webp" alt="Icono de fuego" data-astro-cid-vs6s43qj> <div class="folder-shape rounded-lg md:rounded-2xl lg:rounded-3xl w-full h-full bg-[#FDE8E8]" data-astro-cid-vs6s43qj> <h3 class="pt-8 xs:pt-10 sm:pt-10 md:pt-14 lg:pt-20 xl:pt-24 text-center text-[#EA2E39] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" data-astro-cid-vs6s43qj>
Trucos para petarlo
</h3> <div class="grid grid-cols-3 gap-2 xs:gap-4 md:gap-6 xl:gap-8 p-2 xs:p-4 md:p-6 xl:p-8" data-astro-cid-vs6s43qj> ${TIPS.map(
    ({
      image,
      title,
      description,
      firstBgColor,
      secondBgColor,
      titleColor,
      descriptionColor
    }) => renderTemplate`<article class="file-card rounded-lg md:rounded-2xl w-full h-full p-2 md:p-4 lg:p-8 bg-[#FFB3B6] flex flex-col items-center justify-center"${addAttribute({
      background: `linear-gradient(to bottom right, ${firstBgColor} 0%, ${secondBgColor} 100%)`
    }, "style")} data-astro-cid-vs6s43qj> <img${addAttribute(image, "src")}${addAttribute(`${title} Card`, "alt")} class="pb-1 md:pb-4 h-auto w-8 xs:w-10 sm:w-14 md:w-16 lg:w-20 xl:w-24" data-astro-cid-vs6s43qj> <h4 class="text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"${addAttribute({ color: titleColor }, "style")} data-astro-cid-vs6s43qj> ${title} </h4> <p class="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center py-2"${addAttribute({ color: descriptionColor }, "style")} data-astro-cid-vs6s43qj> ${description} </p> </article>`
  )} </div> </div> </section> `;
}, "C:/Users/amoil/Desktop/930/src/components/InfographicTips.astro", void 0);

const $$Astro = createAstro();
const $$YourNextJob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YourNextJob;
  const yourNextJobContent = [
    {
      image: "/img/bento-info-modal-cards/style-your-cv.webp",
      title: "Pon guapo tu CV",
      description: "Actual\xEDzalo, sube una foto profesional \xA1y rellena tus habilidades/skills! (sobre todo si te falta experiencia).",
      firstBgColor: "#FDECBE",
      secondBgColor: "#FFF7E4",
      textColor: "#B08B2B"
    },
    {
      image: "/img/bento-info-modal-cards/search-ideal-offer.webp",
      title: "Busca tu oferta ideal",
      description: "Utiliza las recomendaciones que te ofrece InfoJobs o busca a tu medida\xA0seg\xFAn el sector que m\xE1s te interesa.",
      firstBgColor: "#B4E5CD",
      secondBgColor: "#E1F4EB",
      textColor: "#008949"
    },
    {
      image: "/img/bento-info-modal-cards/register.webp",
      title: "\xA1Inscr\xEDbete!",
      description: "Lee bien la oferta, ajusta tu CV y adj\xFAntalo. Y no olvides a\xF1adir una carta de presentaci\xF3n personalizada a la oferta. \xA1Todo suma!",
      firstBgColor: "#BADAE8",
      secondBgColor: "#E3EFF5",
      textColor: "#006895"
    },
    {
      image: "/img/bento-info-modal-cards/you-are-their-candidate.webp",
      title: "Ya eres su candidato/a",
      description: "Toca esperar y cruzar los dedos, pero valora inscribirte en otras ofertas que tambi\xE9n te interesen",
      firstBgColor: "#FFD1C8",
      secondBgColor: "#FBE9E7",
      textColor: "#FF523C"
    }
  ];
  const { infographicId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`infographic-${infographicId}`, "id")} class="mx-auto px-4 max-w-7xl w-full flex-col md:gap-[50px] py-[72px] hidden"> ${renderComponent($$result, "InfographicHeader", $$InfographicHeader, { "badgeText": "S\xE1cale partido a InfoJobs", "title": "\xBFQuieres conseguir tu pr\xF3ximo empleo con InfoJobs?", "subtitle": "\xA1Vamos a ello!" })} ${renderComponent($$result, "InfographicBody", $$InfographicBody, { "bentoInfoModalCards": yourNextJobContent })} ${renderComponent($$result, "InfographicTips", $$InfographicTips, {})} </section>`;
}, "C:/Users/amoil/Desktop/930/src/components/YourNextJob.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "InfoJobs - \xA1Encuentra tu primer empleo!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSearch", $$HeroSearch, {})} ${renderComponent($$result2, "BentoInfo", $$BentoInfo, {})} ${renderComponent($$result2, "SocialBest", $$SocialBest, {})} ${renderComponent($$result2, "CoolJobs", $$CoolJobs, {})} ${renderComponent($$result2, "PreFooter", $$PreFooter, {})} ${renderComponent($$result2, "InfographicModal", $$InfographicModal, {})}  ${renderComponent($$result2, "StandsInterviews", $$StandsInterviews, { "infographicId": "no-experience" })} ${renderComponent($$result2, "EmergentPositions", $$EmergentPositions, { "infographicId": "emergent-positions" })} ${renderComponent($$result2, "YourNextJob", $$YourNextJob, { "infographicId": "selection-process" })} ` })}`;
}, "C:/Users/amoil/Desktop/930/src/pages/index.astro", void 0);

const $$file = "C:/Users/amoil/Desktop/930/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
