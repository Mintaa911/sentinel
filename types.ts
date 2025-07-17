export interface FileUpload extends File {
    preview: string;
    url?: string;
}

export type BlogPost = {
    _id: string;
    title: string;
    slug: string;
    author: BlogAuthor;
    publishedAt: string;
    mainImage: string;
    categories: BlogCategory[];
    body: BlogBody[];
    excerpt: string;
}

export type BlogBody = {
    _type: string;
    children?: BlogBodyChild[];
    markDefs?: any[];
    asset?: any;
    author?: string;
    quote?: string;
    style: string;
    _key: string;
    listItem?: string;
}

export type BlogBodyChild = {
    _type: string;
    marks: any[];
    text: string;
    _key: string;
}

export type BlogCategory = {
    _id: string;
    title: string;
}

export type BlogAuthor = {
    name: string;
    image: string;
}