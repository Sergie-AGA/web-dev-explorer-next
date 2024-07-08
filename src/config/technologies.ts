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
            title: "ShadcnUI",
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
            title: "Typescript",
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
            title: "React Grid Layout",
            description: "A draggable and resizable grid layout with customizable widgets, similar to a dashboard. It supports responsive breakpoints and is powered by React.",
            link: "https://github.com/react-grid-layout/react-grid-layout",
        },
        {
            title: "Vitest",
            description: "A Vite-native test framework with a focus on speed and a great developer experience. It provides a simple API and supports TypeScript, JSX, and Vue components.",
            link: "https://vitest.dev/",
        },
        {
            title: "Cypress",
            description: "A fast, easy, and reliable testing framework for anything that runs in a browser. Cypress is designed to make end-to-end testing, integration testing, and unit testing easier and more enjoyable.",
            link: "https://www.cypress.io/",
        },
        {
            title: "Storybook",
            description: "An open-source tool for developing UI components in isolation. It helps you build, test, and showcase components with an interactive UI that allows for dynamic interaction and customization.",
            link: "https://storybook.js.org/",
        }
    ],
    backend: [
        {
            title: "Vercel",
            description: "A cloud platform for static sites and serverless functions that enables developers to deploy instantly, scale automatically, and serve personalized content with ease. It provides a seamless integration with popular frontend frameworks.",
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
            title: "IndexedDB",
            description: "A low-level API for storing large amounts of structured data, including files and blobs. It allows for high-performance searches using indexes and is available in modern web browsers.",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
        },
        {
            title: "Supabase Auth",
            description: "An open-source authentication system that provides user sign-up, sign-in, and password recovery features. Supabase Auth is easy to integrate with your apps and is built on top of PostgreSQL.",
            link: "https://supabase.com/docs/guides/auth",
        }
    ],
    apis: [
        {
            title: "Star Wars API",
            description: "Provides data from the Star Wars universe, including films, characters, starships, planets, and species.",
            link: "https://swapi.dev/",
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
