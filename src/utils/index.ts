import { Sort } from "@/types/Sort";
import { StoryWithAuthor } from "@/types/Story";

export function convertTimestampToDataString(timestamp: number) {

    const date = new Date(timestamp * 1000);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
export function sortStories(stories: StoryWithAuthor[], sortBy: Sort = Sort.TIMESTAMP) {
    switch (sortBy) {
        case Sort.SCORE:
            return stories.sort((a, b) => a.score - b.score);
        case Sort.TIMESTAMP:
            return stories.sort((a, b) => b.time - a.time);
        default:
            return stories.sort((a, b) => b.time - a.time);
    }
}