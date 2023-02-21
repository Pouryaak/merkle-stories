import Loader from "@/components/Loader/Loader";
import StoriesHero from "@/components/Stories/StoriesHero";
import StoriesList from "@/components/Stories/StoriesList";
import Tabs from "@/components/Tabs";
import React from "react";

const Home = () => {
  return (
    <div>
      <StoriesHero />
      <Tabs
        header="Categorized Stories"
        tabs={[
          {
            title: "Highest Scores",
            render: () => (
              <div style={{ height: "100px" }}>
                <StoriesList
                  stories={[
                    {
                      by: "julicen",
                      descendants: 18,
                      id: 34879304,
                      kids: [
                        34880034, 34880294, 34880064, 34880431, 34880300,
                        34879852, 34880626, 34880233,
                      ],
                      score: 54,
                      time: 1676975392,
                      title: "Haiku Package Management",
                      type: "story",
                      url: "https://www.markround.com/blog/2023/02/13/haiku-package-management/",
                    },
                    {
                      by: "julicen",
                      descendants: 18,
                      id: 34879304,
                      kids: [
                        34880034, 34880294, 34880064, 34880431, 34880300,
                        34879852, 34880626, 34880233,
                      ],
                      score: 54,
                      time: 1676975392,
                      title: "Haiku Package Management",
                      type: "story",
                      url: "https://www.markround.com/blog/2023/02/13/haiku-package-management/",
                    },
                    {
                      by: "julicen",
                      descendants: 18,
                      id: 34879304,
                      kids: [
                        34880034, 34880294, 34880064, 34880431, 34880300,
                        34879852, 34880626, 34880233,
                      ],
                      score: 54,
                      time: 1676975392,
                      title: "Haiku Package Management",
                      type: "story",
                      url: "https://www.markround.com/blog/2023/02/13/haiku-package-management/",
                    },
                    {
                      by: "julicen",
                      descendants: 18,
                      id: 34879304,
                      kids: [
                        34880034, 34880294, 34880064, 34880431, 34880300,
                        34879852, 34880626, 34880233,
                      ],
                      score: 54,
                      time: 1676975392,
                      title: "Haiku Package Management",
                      type: "story",
                      url: "https://www.markround.com/blog/2023/02/13/haiku-package-management/",
                    },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Latest",
            render: () => <div style={{ height: "100px" }}>Tab2</div>,
          },
        ]}
      />
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
