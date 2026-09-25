const config = {
  title: "Mohammad Hammad | Frontend Developer",
  description: {
    long: "Explore the portfolio of Mohammad Hammad (EREN), a frontend developer and UI designer from New Delhi building clean, animated interfaces. Discover my latest work, including Mind Game, Chess, Al-Qur'an, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Mohammad Hammad, a frontend developer creating clean, animated web experiences.",
  },
  keywords: [
    "Mohammad Hammad",
    "EREN",
    "portfolio",
    "frontend developer",
    "UI designer",
    "web development",
    "interactive websites",
    "Mind Game",
    "Chess",
    "Al-Qur'an",
    "web design",
    "React",
    "Next.js",
    "JavaScript",
  ],
  author: "Mohammad Hammad",
  email: "hammadpvt.2@gmail.com",
  site: "https://mohammadhammad.site",

  // for github stars button
  githubUsername: "Hammad-og",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    telegram: "https://t.me/H4MMXD",
    discord: "https://discord.com/users/1236627521810989057",
    github: "https://github.com/Hammad-og",
  },
};
export { config };
