import clsx from "clsx";

export interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  headline?: string;
  subheadline?: string;
  primaryText?: string;
}

export const createHero = ({
  imageSrc,
  imageAlt,
  headline,
  subheadline,
  primaryText,
}: HeroProps) => {
  const section = document.createElement("section");
  section.className = clsx("mt-12 flex flex-col items-center gap-4 lg:mt-20");

  // Create and append image if imageSrc exists
  if (imageSrc) {
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = imageAlt || "";
    image.className = clsx("w-[70%] object-cover");
    image.loading = "eager";
    image.decoding = "sync";
    section.appendChild(image);
  }

  // Create and append headline if it exists
  if (headline) {
    const h1 = document.createElement("h1");
    h1.className = clsx(
      "w-[90%] text-center font-[Montserrat] text-2xl leading-tight font-semibold text-[#231f20] lg:w-[70vw] lg:text-6xl dark:text-white",
    );
    h1.textContent = headline;
    section.appendChild(h1);
  }

  // Create and append subheadline if it exists
  if (subheadline) {
    const h2 = document.createElement("h2");
    h2.className = clsx(
      "w-[90%] text-center font-[Raleway] text-base font-semibold text-[#231f20] lg:w-[70vw] lg:text-2xl dark:text-white",
    );
    h2.textContent = subheadline;
    section.appendChild(h2);
  }

  // Create and append primaryText if it exists
  if (primaryText) {
    const h2Primary = document.createElement("h2");
    h2Primary.className = clsx(
      "w-[90%] text-center font-[Raleway] text-base text-[#9b9b9b] lg:w-[70vw] lg:text-2xl dark:text-white/80",
    );
    h2Primary.textContent = primaryText;
    section.appendChild(h2Primary);
  }

  return section;
};
