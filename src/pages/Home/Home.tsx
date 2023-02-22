import Loader from "@/components/Loader/Loader";
import StoriesHero from "@/components/Stories/StoriesHero";
import StoriesList from "@/components/Stories/StoriesList";
import Tabs from "@/components/Tabs";
import { Sort } from "@/types/Sort";
import React from "react";

const Home = () => {
  return (
    <div>
      <StoriesHero />
      <Tabs
        header="Sorted Stories"
        tabs={[
          {
            title: "Highest Scores",
            render: () => (
              <div>
                <StoriesList sorting={Sort.SCORE} />
              </div>
            ),
          },
          {
            title: "Latest",
            render: () => (
              <div>
                <StoriesList sorting={Sort.TIMESTAMP} />
              </div>
            ),
          },
        ]}
      />
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
