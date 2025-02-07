export interface BlogTypes {
    id: number,
    title: string,
    dec: string,
    slug:string,
    image: string,
    date: string
}


export const Blog: BlogTypes[] = [
    {
        id: 1,
        title: "Blog 1",
        dec: "This is the first blog post",
        slug:"ilk3",
        image: "https://picsum.photos/1000/1000",
        date: "2022-01-01"
    },
    {
        id: 2,
        title: "Blog 2",
        dec: "This is the second blog post",
        slug:"ilk3",
        image: "https://picsum.photos/300/300",
        date: "2022-02-02"
    }

]