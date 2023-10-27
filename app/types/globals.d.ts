export { }

declare global {
    interface Cocktail {
        id: string
        title: string
        difficulty: string
        image: string
        portion: string
        time: string
        description: string
        ingredients: []
        method: []
    }

    // interface Comment {
    //     id: number
    //     user: string
    //     time: string
    //     parent_id: number
    //     message: string
    // }
}