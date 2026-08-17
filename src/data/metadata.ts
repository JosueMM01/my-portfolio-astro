export interface SiteMetadata {
  name: string;
  brand: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  author: string;
  email: string;
  emailEn: string;
  phone: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  ogImage: string;
  gtagId?: string;
  gscVerification?: string;
}

export const metadata: SiteMetadata = {
  name: "Josue Martinez",
  brand: "Josue M01",
  title: "Josue Martinez </> Desarrollador Web Full Stack",
  titleEn: "Josue Martinez </> Full Stack Web Developer",
  description: "Portafolio de Josue Martinez, desarrollador web full stack. Especializado en desarrollo de aplicaciones web escalables con TypeScript, NestJS, Astro, Laravel y más.",
  descriptionEn: "Portfolio of Josue Martinez, full stack web developer. Specialized in building scalable web applications with TypeScript, NestJS, Astro, Laravel and more.",
  url: "https://josuem01.dev",
  author: "Josue Martinez",
  email: "contacto@josuem01.dev",
  emailEn: "hello@josuem01.dev",
  phone: "+52 33 4282 2799",
  linkedin: "https://www.linkedin.com/in/josue-martinez-moreno-6b9222301/",
  github: "https://github.com/JosueMM01",
  whatsapp: "https://wa.me/523342822799",
  ogImage: "/assets/images/photo_profile_linkedin.jpeg",
  gtagId: "",
  gscVerification: ""
};
