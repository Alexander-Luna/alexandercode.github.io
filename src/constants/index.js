import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  flutter,
  androidstudio,
  git,
  figma,
  docker,
  mundomascotas,
  avesjoyas,
  softec,
  controldeudas,
  ropa,
  veterinaria,
  firebase,
  rpmr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Información",
  },
  {
    id: "work",
    title: "Mis Trabajos",
  },
  {
    id: "contact",
    title: "Contácteme",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador ReactJS",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Desarrollador Movil Android",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Asistente Programador",
    company_name: "Registro de la Propiedad y Mercantil Rumiñahui",
    icon: rpmr,
    iconBg: "#383E56",
    date: "Abril 2025 - Actualmente",
    points: [
  "Colaboración en el desarrollo de aplicaciones empresariales utilizando Java EE bajo arquitectura EAR.",
  "Apoyo en la administración y despliegue de aplicaciones en servidores WildFly.",
  "Gestión y mantenimiento de bases de datos SQL Server, incluyendo creación de procedimientos almacenados y consultas optimizadas.",
  "Asistencia en la implementación de servicios web (REST y SOAP) para la integración de sistemas.",
  "Documentación técnica y soporte en pruebas funcionales y corrección de errores en entornos de desarrollo y producción.",
],

  },
  {
    title: "Desarrollador Móvil y Web",
    company_name: "Softec Microsystems",
    icon: softec,
    iconBg: "#383E56",
    date: "Enero 2024 - Marzo 2025",
    points: [
  "Desarrollo del sistema web para la gestión integral de citas médicas e historias clínicas utilizando Laravel y MySQL.",
  "Implementación de autenticación de usuarios, roles y permisos para personal médico, administrativo y pacientes.",
  "Diseño e implementación de interfaces responsivas, asegurando compatibilidad entre navegadores.",
  "Integración de notificaciones por correo electrónico para confirmación y recordatorio de citas.",
  "Participación activa en revisiones de código, optimización de consultas y buenas prácticas de desarrollo.",
],

  },
  {
    title: "React.js Developer",
    company_name: "Mundo Mascotas",
    icon: mundomascotas,
    iconBg: "#383E56",
    date: "Enero 2024 - Mayo 2024",
    points: [
      "Análisis de requerimientos para sistemas móvil y web",
      "Despliegue de sistemas en servidores dedicados y servidores compartidos CPanel.",
    ],
  },
  {
    title: "Desarrollo Móvil Android",
    company_name: "AVES Joyas Accesorios y Más",
    icon: avesjoyas,
    iconBg: "#E6DEDD",
    date: "Agosto 2023 - Enero 2024",
    points: [
      "Análisis de requerimientos para la implementación de una aplicación móvil para la gestión de ventas y gastos diarios del negocio",
      "Desarrollo y prueba de la aplicación móvil para la gestión de ventas y gastos del negocio",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Excelente aplicación. muy practica y la única con la opción de restar monto de deuda",
    name: "WILLYAN007",
    designation: "Usuario Android",
    company: "Control de Deudas",
    image: "https://i.pinimg.com/736x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg",
  },
  {
    testimonial:
      "Primer comentario 👌 la recomiendo gente muy buena para los que son prestamistas y para otros tipos de personas que deseen usarla 😊",
    name: "Juop Reab",
    designation: "Usuario Android",
    company: "Control de Deudas",
    image: "https://i.pinimg.com/736x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg",
  },
  {
    testimonial:
      "Me gusta la aplicación fácil de usar y mantiene los registros. Sería de gran ayuda que agreguen un botón de búsqueda para ubicar de forma fácil un nombre.",
    name: "Sherisfa Diaz",
    designation: "Usuario Android",
    company: "Control de Deudas",
    image: "https://i.pinimg.com/736x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg",
  },
];

const projects = [
  {
    name: "Control de Deudas",
    description:
      "Control de Deudas es una aplicación de gestión financiera desarrollada en Android Studio con el lenguaje Java y firebase para su base de datos para ayudar a gestionar el flujo de dinero como préstamos, deudas y mucho más.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: controldeudas,
    source_code_link: "https://play.google.com/store/apps/details?id=com.alexander.controldedeudas&hl=es_419",
  },
  {
    name: "Sistema de Venta de Ropa",
    description:
      "Sitio Web desarrollado en PHP puro para tiendas de ropa con el modelo MVC y base de datos MySQL, control de existencias, multiples imágenes por prenda, stock por talla y color",
    tags: [
      {
        name: "MVC",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ropa,
    source_code_link: "https://github.com/Alexander-Luna/EcommerceRopa",
  },
  {
    name: "MediVen",
    description:
      "Sitio web para la gestión de citas medicas e historias clínicas desarrollado usando Laravel 10 y ReactJS 18, autenticación Access Token JWT.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel 10",
        color: "green-text-gradient",
      },
      {
        name: "JWT token",
        color: "pink-text-gradient",
      },
    ],
    image: veterinaria,
    source_code_link: "https://mundomascotasec.com/client/",
  },
];

export { services, technologies, experiences, testimonials, projects };
