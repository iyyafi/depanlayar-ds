import clsx from "clsx";
import "./scrollBlurWord.css";

export interface scrollBlurWordProps {
  text: string;
}

export const scrollBlurWord = ({ text }: scrollBlurWordProps) => {
  const section = document.createElement("section");
  section.className = clsx(
    "[--containerHeight:3000px]",
    "[--pxPerWord:calc((var(--containerHeight)-100vh)/20)]",
    "text-5xl text-slate-900 dark:text-slate-200",
    "h-screen",
    "[scroll-timeline-name:--section]",
    "overflow-y-scroll",
  );
  // Create the main div container
  const div = document.createElement("div");
  div.className = clsx("h-[var(--containerHeight)]");

  // Create the paragraph element
  const p = document.createElement("p");
  p.className = clsx("sticky top-10 p-10");

  // Array of words to create spans for
  const words = text.split(" ");

  // Create span elements for each word
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = clsx(
      "opacity-0",
      "[--end:calc((var(--i)+1)*var(--pxPerWord))]",
      "[--start:calc(var(--i)*var(--pxPerWord))]",
      "[animation:fx]",
      "[animation-timeline:--section]",
      "[animation-fill-mode:forwards]",
      "[animation-range:var(--start)_var(--end)]",
      "[--i:" + (i + 1) + "]",
    );
    span.textContent = word;
    p.appendChild(span);
    p.appendChild(document.createTextNode(" "));
  });

  // Append paragraph to div
  div.appendChild(p);

  const srOnly = document.createElement("span");
  srOnly.className = clsx(
    "sr-only",
    "[--i:1]",
    "[--i:2]",
    "[--i:3]",
    "[--i:4]",
    "[--i:5]",
    "[--i:6]",
    "[--i:7]",
    "[--i:8]",
    "[--i:9]",
    "[--i:10]",
    "[--i:11]",
    "[--i:12]",
    "[--i:13]",
    "[--i:14]",
    "[--i:15]",
    "[--i:16]",
    "[--i:17]",
    "[--i:18]",
    "[--i:19]",
    "[--i:20]",
    "[--i:21]",
    "[--i:22]",
    "[--i:23]",
    "[--i:24]",
    "[--i:25]",
    "[--i:26]",
    "[--i:27]",
    "[--i:28]",
    "[--i:29]",
    "[--i:30]",
    "[--i:31]",
    "[--i:32]",
    "[--i:33]",
    "[--i:34]",
    "[--i:35]",
    "[--i:36]",
    "[--i:37]",
    "[--i:38]",
    "[--i:39]",
  );

  section.appendChild(div);

  const notes = ` add this keyframe in css files or @theme tailwind
    @keyframes fx {
    0% {
      filter: blur(20px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  } `;
  section.appendChild(document.createComment(notes));

  const direction = document.createElement("div");
  direction.className = clsx(
    "fixed inset-x-0 bottom-8 flex animate-bounce items-center justify-center text-base text-slate-900 opacity-80 dark:text-slate-200",
  );
  direction.textContent = "scroll down";

  section.appendChild(direction);

  return section;
};
