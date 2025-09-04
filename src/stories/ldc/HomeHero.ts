import clsx from "clsx";

export interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  headline?: string;
  primaryText?: string;
}

export const createHomeHero = ({
  imageSrc,
  imageAlt,
  headline,
  primaryText,
}: HeroProps) => {
  const section = document.createElement("section");
  section.className = clsx(
    "container flex flex-col items-center p-5 pt-12 lg:pt-20",
  );

  // Create and append image if imageSrc is provided
  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = imageAlt || "";
    img.className = clsx(
      "mb-10 max-w-[234px] object-cover md:max-w-[349px] lg:max-w-[464px]",
    );
    section.appendChild(img);
  }

  // Create and append headline if provided
  if (headline) {
    const h1 = document.createElement("h1");
    h1.className = clsx(
      "mb-5 max-w-[900px] text-center font-sans text-2xl leading-tight font-semibold text-[#231f20] sm:text-3xl lg:text-5xl lg:leading-tight",
    );
    h1.textContent = headline;
    section.appendChild(h1);
  }

  // Create and append primary text if provided
  if (primaryText) {
    const h2 = document.createElement("h2");
    h2.className = clsx(
      "max-w-[920px] text-center font-[Raleway] text-base text-[#9b9b9b] lg:text-2xl",
    );
    h2.textContent = primaryText;
    section.appendChild(h2);
  }

  return section;
};
