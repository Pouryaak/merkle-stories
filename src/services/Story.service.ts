import { API_BATCH_SIZE, URLS } from "@/constants";
import { Author, Story, StoryList } from "@/types/Story";
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

export async function getFullStories() {
    const data = await getStories();
    let stories: any[] = [];
    if (data) {
        stories = await Promise.all(
            data.map(async (id) => {
                const storyResponse = await getStoryById(id)
                return storyResponse
            })
        );
    }
    return stories;
}