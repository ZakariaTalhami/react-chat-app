export interface IMessage {
    id?: string,
    sender: {
        name: string
    },
    body: string,
    timestamp: number
}