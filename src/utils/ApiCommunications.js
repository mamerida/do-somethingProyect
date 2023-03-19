export const callDoSomethingAPi = async () => {
    return await (await fetch(process.env.REACT_APP_API_URL)).json()
}