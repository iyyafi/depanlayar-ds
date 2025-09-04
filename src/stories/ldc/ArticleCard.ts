import clsx from "clsx";

export interface ArticleCardProps {
  imageSrc?: string;
  imageAlt?: string;
  publishedAt?: string;
  title?: string;
  teaser?: string;
  slug?: string;
}

export const createArticleCard = ({
  imageSrc,
  imageAlt = "",
  publishedAt = "",
  title = "",
  teaser = "",
  slug,
}: ArticleCardProps) => {
  const article = document.createElement("article");
  article.className = clsx("rounded");

  // Conditionally create image if imageSrc exists
  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = imageAlt;
    img.className = clsx(
      "aspect-square w-full rounded-lg object-cover object-center",
    );
    article.appendChild(img);
  }

  // Create content container div
  const contentDiv = document.createElement("div");
  contentDiv.className = clsx("flex flex-col");

  // Create published date paragraph
  const dateParagraph = document.createElement("p");
  dateParagraph.className = clsx(
    "my-2 self-end text-sm leading-relaxed text-gray-700",
  );
  dateParagraph.textContent = publishedAt;
  contentDiv.appendChild(dateParagraph);

  // Create title heading
  const titleHeading = document.createElement("h3");
  titleHeading.className = clsx(
    "mb-3 line-clamp-2 font-[Raleway] text-lg font-semibold lg:text-xl",
  );
  titleHeading.textContent = title;
  contentDiv.appendChild(titleHeading);

  // Create teaser paragraph
  const teaserParagraph = document.createElement("p");
  teaserParagraph.className = clsx(
    "my-3 line-clamp-3 leading-relaxed text-gray-700",
  );
  teaserParagraph.textContent = teaser;
  contentDiv.appendChild(teaserParagraph);

  // Create "Read More" link
  const readMoreLink = document.createElement("a");
  readMoreLink.href = `/${slug}`;
  readMoreLink.className = clsx("font-semibold text-blue-600 hover:underline");
  readMoreLink.title = "read more";
  readMoreLink.textContent = "Read More »";
  contentDiv.appendChild(readMoreLink);

  // Append content div to article
  article.appendChild(contentDiv);

  return article;
};
