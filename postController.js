// a exmaple of a post controller on a website
const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' }
]

export const getPostsLength = () => posts.length
// we can use arrow functions and export diretcly to posts
// to export we can do this:
// export const getPosts = () => posts
// or
// we can add at the end as the following:
// const getPosts = () => posts
// export { getPosts }
//or
// we can export them as default, like in React components
const getPosts = () => posts
export default getPosts