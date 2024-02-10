export interface ITechnology {
  title: string;
  description: string;
  link: string;
}

export const technologies = {
  frontend: [
    {
      title: "React JS",
      description:
        "A popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.",
      link: "https://react.dev/",
    },
    {
      title: "Next JS",
      description:
        "A React framework that enables server-side rendering, static site generation, and other advanced features to build fast and scalable web applications.",
      link: "https://nextjs.org/",
    },
    {
      title: "Typescript",
      description:
        "A superset of JavaScript that adds static typing to the language, helping catch errors early in development and improve code maintainability.",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that provides low-level utility classes to build custom designs quickly without writing custom CSS.",
      link: "https://tailwindcss.com/",
    },
    {
      title: "ShadcnUI",
      description:
        "A collection of re-usable components that you can copy and paste into your apps, built on top of Radix UI and Tailwind CSS",
      link: "https://ui.shadcn.com/",
    },

    {
      title: "Zustand",
      description:
        "A simple and flexible state management library for React applications, offering a minimalistic API while supporting complex state requirements through hooks.",
      link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    },
    {
      title: "Yet-another-react-lightbox",
      description:
        "A lightweight and customizable React component for creating modal lightboxes to showcase images or other content in a visually appealing way.",
      link: "https://yet-another-react-lightbox.com/",
    },
    {
      title: "React-photo-album",
      description:
        "A React component or library designed to create photo albums or galleries, providing features like pagination, image zoom, and customizable layouts to showcase collections of photos or images on a webpage.",
      link: "https://react-photo-album.com/",
    },
  ],
  backend: [
    {
      title: "Supabase",
      description:
        "An open-source alternative to Firebase, Supabase provides a suite of tools and services like real-time databases, authentication, and file storage, built on top of PostgreSQL.",
      link: "https://supabase.com/",
    },
    {
      title: "AWS S3",
      description:
        "Amazon Simple Storage Service (S3) is a scalable cloud storage solution designed to store and retrieve any amount of data from anywhere on the web. It's commonly used for static website hosting, data backup, and content distribution.",
      link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
    },
  ],
  apis: [
    {
      title: "Youtube",
      description:
        "Allows developers to integrate YouTube features, such as video playback, search, and user interaction, into their applications through a set of RESTful APIs.",
      link: "https://developers.google.com/youtube/v3",
    },
    {
      title: "OpenAI",
      description:
        "Offers access to state-of-the-art artificial intelligence models for natural language processing, text generation, image recognition, and more, empowering developers to build innovative AI-powered applications and services.",
      link: "https://openai.com/blog/openai-api",
    },
  ],
};
