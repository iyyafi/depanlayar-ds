import clsx from "clsx";
import "./anchorMagnetMenu.css";

export interface anchorMagnetMenuProps {
  menu: { text: string; href: string }[];
  vertical?: boolean;
}

export const anchorMagnetMenu = ({ vertical, menu }: anchorMagnetMenuProps) => {
  const section = document.createElement("section"); // Create main nav element
  const nav = document.createElement("nav");

  // Create ul element
  const ul = document.createElement("ul");
  ul.className = clsx(
    "relative m-0 flex list-none flex-wrap p-0",
    "[:has(a:is(:focus-visible,:hover))]:[--intent:1]",
    "before:pointer-events-none before:absolute before:-z-1 before:rounded-md before:bg-green-400 before:opacity-[var(--intent,0)] before:transition-all before:content-[''] before:[--transition:0.18s]",
    vertical ? "flex-col" : "flex-row",
  );

  // Navigation items data
  const navItems = menu;

  // Create navigation items
  navItems.forEach((item) => {
    // Create li element
    const li = document.createElement("li");
    li.className = clsx("grid place-items-center");

    // Create anchor element
    const a = document.createElement("a");
    a.className = clsx("inline-block h-full w-full px-5 py-2");
    a.textContent = item.text;
    a.href = item.href;

    // Append anchor to list item
    li.appendChild(a);

    // Append list item to ul
    ul.appendChild(li);
  });

  // Append ul and style to nav
  nav.appendChild(ul);

  const notes = ` add this keyframe in css files or @theme tailwind
    @supports (anchor-name: --a) {
      a:target {
        anchor-name: --target;
      }
      li:has(a:is(:hover, :focus-visible)) {
        anchor-name: --anchor;
      }

      ul::before {
        position-anchor: --anchor;
        left: anchor(left);
        top: anchor(top);
        width: anchor-size(width);
        height: anchor-size(height);
      }
    }
  } `;
  section.appendChild(document.createComment(notes));

  section.appendChild(nav);

  return section;
};
