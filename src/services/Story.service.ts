import { URLS } from "@/constants";
import { Author, Story, StoryList } from "@/types/Story";
import * as API from "./Api.service";
import { handleError } from "./ErrorHandler.service";

export async function getStories(): Promise<StoryList | undefined> {
    try {
        const data = await API.mFetch<StoryList>(URLS.stories);
        return data;
    } catch (error: any) {
        handleError(error)
    }
}


export async function getStoryById(id: string): Promise<Story | undefined> {
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