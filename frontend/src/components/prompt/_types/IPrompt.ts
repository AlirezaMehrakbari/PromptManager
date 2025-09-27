export interface IPrompt {
    id: number,
    title: string,
    description: string
    favorite?: boolean,
    userId?: number,
    createdAt?: string,
    updatedAt?: string
}