const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export const URLS = {
    stories: BASE_URL + '/topstories.json',
    story: (id: string | number) => BASE_URL + `/item/${id}.json`,
    author: (id: string | number) => BASE_URL + `/user/${id}.json`,
}


export const API_BATCH_SIZE = 5;