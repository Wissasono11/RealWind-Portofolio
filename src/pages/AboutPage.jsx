import React from "react";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";

const AboutPage = () => {
  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black)">
        <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          About Us
        </h1>
        <p className="text-lg">
          Hi, I’m Aiden R. Vale, a Frontend Web Developer with a passion for
          crafting seamless, responsive, and visually compelling web
          experiences. My primary focus lies in building user-centered
          interfaces using modern frameworks like React.js, enhanced by
          utility-first tools such as Tailwind CSS. With over 4 years of
          experience in frontend engineering, I specialize in creating
          fast-loading, accessible, and scalable websites that look and feel
          great across all devices.
          <br />
          I take pride in blending clean code with meaningful design. Whether
          it’s implementing smooth GSAP animations or integrating immersive 3D
          interactions using Three.js, I approach every project with attention
          to performance, responsiveness, and creative flair. Beyond just "how
          it looks," I care deeply about how it works—making sure every UI
          component is efficient, intuitive, and reusable.
          <br />
          Currently, I collaborate with creative teams, startups, and indie game
          developers to turn complex ideas into elegant, functional interfaces.
          I'm always exploring new frontiers in web animation, motion design,
          and frontend architecture. Let’s build something awesome together.
        </p>
        <BoxSocial />
      </div>
    </section>
  );
};

export default AboutPage;
