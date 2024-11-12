export interface ITechnology {
  title: string;
  description: string;
  link: string;
}

export type ITechTypes = "frontend" | "backend" | "apis";

export const technologies = {
  frontend: [
    {
      title: "Next JS",
      description:
        "A React framework that enables server-side rendering, static site generation, and other advanced features to build fast and scalable web applications.",
      link: "https://nextjs.org/",
    },
    {
      title: "React JS",
      description:
        "A popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.",
      link: "https://react.dev/",
    },
    {
      title: "React-photo-album",
      description:
        "A React component or library designed to create photo albums or galleries, providing features like pagination, image zoom, and customizable layouts to showcase collections of photos or images on a webpage.",
      link: "https://react-photo-album.com/",
    },
    {
      title: "Shadcn UI",
      description:
        "A collection of re-usable components that you can copy and paste into your apps, built on top of Radix UI and Tailwind CSS",
      link: "https://ui.shadcn.com/",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that provides low-level utility classes to build custom designs quickly without writing custom CSS.",
      link: "https://tailwindcss.com/",
    },
    {
      title: "CSS",
      description:
        "A style sheet language used for describing the presentation of a document written in HTML or XML, allowing you to control the layout, colors, fonts, and other aspects of the web page's appearance.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "JavaScript",
      description:
        "A versatile and widely-used programming language for creating dynamic and interactive elements on websites. It is essential for web development and works across all major browsers.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "TypeScript",
      description:
        "A superset of JavaScript that adds static typing to the language, helping catch errors early in development and improve code maintainability.",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Yet-another-react-lightbox",
      description:
        "A lightweight and customizable React component for creating modal lightboxes to showcase images or other content in a visually appealing way.",
      link: "https://yet-another-react-lightbox.com/",
    },
    {
      title: "Zustand",
      description:
        "A simple and flexible state management library for React applications, offering a minimalistic API while supporting complex state requirements through hooks.",
      link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    },
    {
      title: "Jest",
      description:
        "A JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It is widely used for unit tests in JavaScript applications and provides powerful mocking capabilities, making it ideal for frontend and backend testing.",
      link: "https://jestjs.io/",
    },
    {
      title: "Cypress",
      description:
        "A JavaScript end-to-end testing framework that enables developers to write, execute, and debug tests directly in the browser. It provides an easy and reliable way to test the entire user experience for modern web applications.",
      link: "https://www.cypress.io/",
    },
  ],
  backend: [
    {
      title: "TypeScript",
      description:
        "A superset of JavaScript that adds static typing to the language, helping catch errors early in development and improve code maintainability.",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Node.js",
      description:
        "An open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It enables server-side execution of JavaScript, making it popular for building scalable network applications.",
      link: "https://nodejs.org/",
    },
    {
      title: "Vercel",
      description:
        "A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It provides seamless integration with frontend frameworks and helps you to deploy, manage, and scale your applications with ease.",
      link: "https://vercel.com/",
    },
    {
      title: "Firebase",
      description:
        "Firebase is a comprehensive app development platform provided by Google. It includes various services such as Realtime Database, Firestore, Authentication, Hosting, and more. Firebase makes it easy to build, deploy, and scale applications with features like real-time updates, authentication, and serverless functions.",
      link: "https://firebase.google.com/",
    },
    {
      title: "Supabase",
      description:
        "An open-source alternative to Firebase, Supabase provides a suite of tools and services like real-time databases, authentication, and file storage, built on top of PostgreSQL.",
      link: "https://supabase.com/",
    },
    {
      title: "Fastify",
      description:
        "A highly efficient and lightweight web framework for Node.js, designed for low overhead and fast performance. It offers plugins, schema-based validation, and high extensibility for rapid API development.",
      link: "https://www.fastify.io/",
    },
    {
      title: "PostgreSQL",
      description:
        "An open-source, powerful, and highly extensible relational database system known for advanced SQL compliance, stability, and support for complex queries and large datasets.",
      link: "https://www.postgresql.org/",
    },
    {
      title: "Vitest",
      description:
        "A fast unit testing framework built for Vite, offering modern features like instant test runs, rich error reporting, and native TypeScript support, aimed at frontend and JavaScript/TypeScript applications.",
      link: "https://vitest.dev/",
    },
    {
      title: "Supertest",
      description:
        "A library for testing HTTP requests in Node.js, often used with frameworks like Express and Fastify. It allows for simple integration and end-to-end testing of REST APIs.",
      link: "https://github.com/visionmedia/supertest",
    },
    {
      title: "Prisma",
      description:
        "A modern, type-safe ORM for Node.js and TypeScript that simplifies database workflows by providing an intuitive API, automatic migrations, and comprehensive database support.",
      link: "https://www.prisma.io/",
    },
    {
      title: "Docker",
      description:
        "A containerization platform that enables developers to package applications with all dependencies into isolated containers, ensuring consistency across various environments.",
      link: "https://www.docker.com/",
    },
    {
      title: "Zod",
      description:
        "A TypeScript-first schema declaration and validation library, offering a simple and expressive API for defining and validating complex data structures.",
      link: "https://zod.dev/",
    },
    {
      title: "PHP",
      description:
        "A server-side scripting language designed for web development but also used as a general-purpose programming language. It powers popular content management systems like WordPress and Laravel.",
      link: "https://www.php.net/",
    },
    {
      title: "Laravel",
      description:
        "A PHP framework known for its elegant syntax, simplifying common tasks like routing, authentication, and database interactions. It offers a modern toolkit for rapid web application development.",
      link: "https://laravel.com/",
    },
    {
      title: "C#",
      description:
        "A modern, object-oriented programming language developed by Microsoft. It is widely used for building applications on the .NET framework, from desktop applications to web services.",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      title: ".NET",
      description:
        "A free, cross-platform framework developed by Microsoft, supporting a wide range of applications including web, desktop, mobile, cloud, and IoT. It provides a robust environment for building scalable software.",
      link: "https://dotnet.microsoft.com/",
    },
    {
      title: "ASP.NET",
      description:
        "An open-source, server-side web application framework built on the .NET platform. It enables developers to build dynamic web sites, web applications, and web services with ease and flexibility.",
      link: "https://learn.microsoft.com/en-us/aspnet/",
    },
  ],
  apis: [
    {
      title: "Stripe",
      description:
        "Stripe API enables developers to seamlessly integrate online payment processing into their applications, facilitating secure transactions, subscription management, and financial automation.",
      link: "https://docs.stripe.com/api",
    },
    // {
    //   title: "Youtube",
    //   description:
    //     "Allows developers to integrate YouTube features, such as video playback, search, and user interaction, into their applications through a set of RESTful APIs.",
    //   link: "https://developers.google.com/youtube/v3",
    // },
    // {
    //   title: "OpenAI",
    //   description:
    //     "Offers access to state-of-the-art artificial intelligence models for natural language processing, text generation, image recognition, and more, empowering developers to build innovative AI-powered applications and services.",
    //   link: "https://openai.com/blog/openai-api",
    // },
  ],
};
