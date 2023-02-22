import SortableStories from "@/components/Stories/SortableStories";
import StoriesHero from "@/components/Stories/StoriesHero";

const Home = () => {
  return (
    <div>
      <StoriesHero />
      <SortableStories />
    </div>
  );
};

export default Home;
