export interface NewsData {
    readonly author: string;
    readonly content: string;
    readonly description: string;
    readonly publishedAt: string;
    readonly source: {
        readonly id: string;
        readonly name: string;
    };
    readonly title: string;
    readonly url: string;
    readonly urlToImage: string;
}

export interface SourceData {
    readonly category: string;
    readonly country: string;
    readonly description: string;
    readonly id: string;
    readonly language: string;
    readonly name: string;
    readonly url: string;
}

type Data = NewsData | SourceData;

export interface View {
    draw(data: Data[]): void;
}

export interface ResponseNews {
    readonly articles: NewsData[];
    readonly status: string;
    readonly totalResults: number;
}

export interface ResponseSource {
    readonly sources: SourceData[];
    readonly status: string;
}

export interface LoaderOptions {
    readonly apiKey: string;
}

export interface UrlOptions {
    sources?: string;
}

export interface GetRespOptions {
    endpoint: string;
    options?: {
        [index: string]: string;
    };
}
