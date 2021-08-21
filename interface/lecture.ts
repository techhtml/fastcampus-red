export interface Category {
    id: number,
    name: string,
}

export interface Tag {
    id: number,
    name: string,
}

export interface Lecture {
    id: number,
    category: Category,
    title: string,
    tags: [Tag],
    description: string,
    thumb: string,
    isHot: boolean,
    isNew: boolean,
}