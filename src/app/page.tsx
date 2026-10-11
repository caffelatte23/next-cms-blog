import Image from "next/image";
import styles from "./page.module.css";
import { client } from "@/lib/microcms";
import { css } from "@/styled-system/css";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  content: string;
};

export default async function Home() {
  const data = await client.getList<Blog>({ endpoint: "blogs", queries: { fields: "id,title" } });
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          {data.contents.map((d) => (
            <article
              key={d.id}
              className={css({
                bg: "slate.100",
                rounded: "md",
                w: "80",
                h: "40",
                display: "grid",
                placeItems: "center",
                textAlign: "center",
              })}
            >
              <Link href={`/blog/${d.id}`}>
                <p>{d.title}</p>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.ctas}></div>
      </main>
    </div>
  );
}
