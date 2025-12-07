"use client";
import StaggeredMenu from "../ui/menu";

export function NavbarHero() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/#hero" },
    { label: "About", ariaLabel: "Learn about us", link: "/#about" },
    { label: "Work", ariaLabel: "My Experience", link: "/#exp" },
    { label: "Projects", ariaLabel: "My Work", link: "/#work" },
    { label: "Skills", ariaLabel: "Skills", link: "/#skills" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://x.com/SidJain_80" },
    { label: "GitHub", link: "https://github.com/Sid-80" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/siddharth-bramhecha/" },
    { label: "Mail", link: "mailto:siddharthbramhecha@email.com" },
  ];

  return (
    <div className=" absolute" style={{ height: "100vh", background: "#1a1a1a" }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        isFixed={true}
      />
    </div>
  );
}
