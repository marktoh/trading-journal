import { Banner } from "@/modules/components";
import { Pill } from "@/modules/components/pill";

import "./index.css";

const BannerSection = () => {
  return (
    <section className="banner-section">
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
