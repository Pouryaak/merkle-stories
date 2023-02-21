import React, { useState } from "react";
import Section from "../Section";
import styles from "./Tabs.module.scss";

type Tab = {
  title: string;
  render: () => JSX.Element;
};

interface TabsProps {
  header: string;
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, header }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Section title={header} />
      <div className={styles.buttons}>
        {tabs.map((tab, i) => (
          <div
            className={`${styles["tab-button"]} ${
              i === selectedTab ? styles.active : ""
            }`}
            key={`${tab.title}-${i}`}
            onClick={() => setSelectedTab(i)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="component">{tabs[selectedTab].render()}</div>
    </>
  );
};
export default Tabs;
