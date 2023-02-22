export type Story = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}


export type StoryList = number[];

export type Author = {
    created: number;
    id: string;
    karma: number;
    submitted: number[];
}

export interface StoryWithAuthor extends Story {
    author: Author;
    image?: string;
}