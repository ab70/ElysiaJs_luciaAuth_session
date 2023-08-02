
const checkUser = ({ set }) => {
    set.user = { L: "hello" }
}
const secondMiddlewre = ({ set }) => {
    set.user = { L: "sec" }
}
// 


export { checkUser, secondMiddlewre }