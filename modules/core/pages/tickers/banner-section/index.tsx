import { Banner } from "@/modules/core/components";
import { Pill } from "@/modules/core/components/pill";

import "./index.css";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <h2>Trending Companies</h2>
      <Banner>
        <div className="pill-list">
          <Pill displayName="TSLA" />
          <Pill displayName="AAPL" />
          <Pill displayName="ROCK" />
          <Pill displayName="NVDA" />
          <Pill displayName="BLCK" />
          <Pill displayName="MMBO" />
        </div>
      </Banner>
    </section>
  );
};

export { BannerSection };
