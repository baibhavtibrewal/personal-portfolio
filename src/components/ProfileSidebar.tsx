import avatar from "@/assets/avatar.jpg";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:baibhav@example.com", label: "Email" },
];

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-[296px] flex-shrink-0">
      <div className="flex flex-col items-center lg:items-start">
        <img
          src={avatar}
          alt="Baibhav Tibrewal - Developer & Creator"
          className="w-[296px] h-[296px] rounded-full border-2 border-avatar-border object-cover"
          loading="lazy"
        />
        <div className="mt-4 text-center lg:text-left">
          <h1 className="text-2xl font-semibold text-foreground">Baibhav Tibrewal</h1>
          <p className="text-xl font-light text-muted-foreground">baibhavtibrewal</p>
        </div>
        <p className="mt-4 text-foreground text-sm leading-relaxed">
          Full-stack developer & creative technologist. I build web apps, explore new frameworks, and share what I learn with the community.
        </p>

        <div className="flex items-center gap-3 mt-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
