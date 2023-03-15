


export const consultUserLogin = ({ email, password }) => {

    let userRegistered = localStorage.getItem(process.env.REACT_APP_NAME_LOCALSTORAGE_OBJECT)


    if (!userRegistered) {
        localStorage.setItem(process.env.REACT_APP_NAME_LOCALSTORAGE_OBJECT, JSON.stringify([]))
    }


}