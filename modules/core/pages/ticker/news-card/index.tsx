import NextImage from "next/image";
import NextLink from "next/link";
import { Fragment } from "react";
import "./index.css";

type NewsProps = {
  id: string;
  publisher: any;
  title: string;
  author: string;
  published_utc: string;
  article_url: string;
  tickers: Array<string>;
  image_url?: string;
  description?: string;
  keywords?: Array<string>;
};
const News = ({
  id,
  publisher,
  title,
  author,
  published_utc,
  article_url,
  tickers,
  image_url,
  description,
  keywords,
}: NewsProps) => {
  const { name, homepage_url, logo_url, favicon_url } = publisher || {};
  return (
    <NextLink className="news" href={article_url}>
      <div>
        <b>{title}</b>
      </div>
      <div>{description}</div>
      <div className="mt-1 flex items-center gap-2">
        <NextImage unoptimized src={logo_url} alt="" width={24} height={24} />
        <div className="text-xs text-zinc-600">{name}</div>
      </div>
      <div className="mt-2 text-xs text-zinc-600">
        {new Date(published_utc).toLocaleString()}
      </div>
    </NextLink>
  );
};

type NewsCardProps = {
  data?: any;
};
const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <div className="news-card">
      <div className="top">
        <div className="title">News</div>
      </div>
      <div className="news-list">
        {data?.map((datum: NewsProps, idx: number) => (
          <Fragment key={datum?.id}>
            <News {...datum} />
            {idx !== data?.length - 1 && <hr />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export { NewsCard };
