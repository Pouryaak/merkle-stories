import StoriesHero from "@/components/Stories/StoriesHero";
import Tabs from "@/components/Tabs";
import React from "react";

const Home = () => {
  return (
    <div>
      <StoriesHero />
      <Tabs
        header="Categorized Stories"
        tabs={[
          { title: "Highest Scores", render: () => <div>Tab1</div> },
          { title: "Latest", render: () => <div>Tab2</div> },
        ]}
      />
    </div>
  );
};

export default Home;
