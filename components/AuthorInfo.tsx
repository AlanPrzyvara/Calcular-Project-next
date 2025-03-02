import styles from "../styles/AuthorInfo.module.css";

interface AuthorInfoProps {
  author?: string;
  date?: string;
  time?: string;
}

export default function AuthorInfo({ author, date, time }: AuthorInfoProps) {
  return (
    <div className={styles.container}>
      <span className={styles.author}>{author}</span>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
}