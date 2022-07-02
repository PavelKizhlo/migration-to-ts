export interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourceData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

type Data = NewsData | SourceData;

export interface View {
    draw(data: Data[]): void;
}

export interface ResponseNews {
    articles: NewsData[];
    status: string;
    totalResults: number;
}

export interface ResponseSource {
    sources: SourceData[];
    status: string;
}

export interface LoaderOptions {
    apiKey: string;
}

export interface UrlOptions {
    sources?: string;
}

export interface GetRespOptions {
    endpoint: string;
    options: {
        [index: string]: string;
    };
}
