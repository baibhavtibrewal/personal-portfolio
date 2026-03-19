import { Helmet } from "react-helmet-async";
import NavBar from "@/components/NavBar";
import ProfileSidebar from "@/components/ProfileSidebar";
import ContentArea from "@/components/ContentArea";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Baibhav Tibrewal",
    url: "https://baibhavtibrewal.dev",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/baibhavtibrewal",
      "https://linkedin.com/in/baibhavtibrewal",
      "https://twitter.com/baibhavtibrewal",
    ],
    knowsAbout: ["React", "Node.js", "TypeScript", "Python", "Web Development"],
  };

  return (
    <>
      <Helmet>
        <title>Baibhav Tibrewal — Full-Stack Developer & Creator</title>
        <meta name="description" content="Baibhav Tibrewal is a full-stack developer building scalable web apps with React, Node.js, and TypeScript. Explore projects, skills, and get in touch." />
        <meta name="keywords" content="Baibhav Tibrewal, full-stack developer, React, Node.js, TypeScript, portfolio" />
        <meta property="og:title" content="Baibhav Tibrewal — Full-Stack Developer" />
        <meta property="og:description" content="Full-stack developer building scalable web apps. Explore projects and skills." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baibhav Tibrewal — Full-Stack Developer" />
        <link rel="canonical" href="https://baibhavtibrewal.dev" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <NavBar />
        <main className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProfileSidebar />
            <ContentArea />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
