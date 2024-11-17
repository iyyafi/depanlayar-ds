export interface ArticleCardProps {
  /** Image url of the article */
  imageSrc: string;
  /** Image alt of the article */
  imageAlt: string;
  /** Title of the article */
  title: string;
  /** Short description of the article */
  teaser: string;
  /** Slug for link to the article detail */
  slug: string;
}

/** Primary UI component for user interaction */
export const ArticleCard = ({
  imageSrc,
  imageAlt,
  title,
  teaser,
  slug,
}: ArticleCardProps) => {
  return (
    <article className="column feature rounded">
      <img
        src={imageSrc}
        alt={imageAlt}
        width="200"
        height="200"
        className="aspect-square w-full rounded-lg object-cover object-center"
      />
      <div className="">
        <h1 className="font-display my-3 line-clamp-2 text-lg font-semibold lg:text-xl">
          {title}
        </h1>
        <p className="my-3 line-clamp-3 leading-relaxed text-gray-700">
          {teaser}
        </p>
        <a
          href={slug}
          className="font-semibold text-blue-600 hover:underline"
          title="read more"
        >
          Read More »
        </a>
      </div>
    </article>
  );
};
