import { API_BATCH_SIZE, URLS } from "@/constants";
import { Author, Story, StoryList, StoryWithAuthor } from "@/types/Story";
import * as API from "./Api.service";
import { handleError } from "./ErrorHandler.service";

async function getStories(): Promise<StoryList | undefined> {
    try {
        const data = await API.mFetch<StoryList>(URLS.stories);
        return data.slice(0, 10);
    } catch (error: any) {
        handleError(error)
    }
}

export async function getStoryById(id: string | number): Promise<Story | undefined> {
    try {
        const data = await API.mFetch<Story>(URLS.story(id));
        return data;
    } catch (error: any) {
        handleError(error)
    }
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
    try {
        const data = await API.mFetch<Author>(URLS.author(id));
        return data;
    } catch (error: any) {
        handleError(error)
    }
}

export async function getFullStoriesWithAuthors() {
    const data = await getStories();
    const storiesWithAuthors: StoryWithAuthor[] = [];
    if (data) {
        for (let index = 0; index < data.length; index++) {
            const storyId = data[index];
            const storyDetail = await getStoryById(storyId);
            const author = await getAuthorById(storyDetail!.by);
            const num = Math.floor(Math.random() * 6) + 1;
            if (author && storyDetail) storiesWithAuthors.push({ ...storyDetail, author, image: `/src/assets/images/img${num}.jpeg` });
        }
    }
    return storiesWithAuthors;
}