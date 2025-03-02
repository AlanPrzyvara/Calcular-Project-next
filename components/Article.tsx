import Image from "next/image";
import AuthorInfo from "./AuthorInfo";

interface ArticleProps {
  title: string;
  text?: string;
  imageSrc?: string;
  author?: string;
  date?: string;
  time?: string;
}

export default function Article({ title, text, imageSrc, author, date, time }: ArticleProps) {
  return (
    <article className="article">
      {imageSrc && (
        <Image src={imageSrc} alt={title} width={700} height={160} className="article-image" />
      )}
      <h2>{title}</h2>
      <AuthorInfo author={author} date={date} time={time} />
      <p>{text}</p>
    </article>
  );
}
{/* <Image src={imageSrc} alt={title} width={800} height={400} className="article-image" /> */}