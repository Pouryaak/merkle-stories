const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export const URLS = {
    stories: BASE_URL + '/topstories.json',
    story: (id: string) => BASE_URL + `/item/${id}.json`,
    author: (id: string) => BASE_URL + `/user/${id}.json`,
}
