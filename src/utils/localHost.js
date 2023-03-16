const bcryptjs = require('bcryptjs')


const createStorare = () => {
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USERS, JSON.stringify([]))
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_LOGED, JSON.stringify({}))
}

export const consultUserLogin = ({ email, password }) => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USERS)) {
        createStorare()
    }
}

export const IsUserRegistered = (newUser, usersRegistered) => {
    let isRegistered = false;

    //Is mail registered?
    usersRegistered.forEach(user => {

        if (user.email == newUser.email) {
            isRegistered = true
        }
    });

    return isRegistered

}


export const IsUserLoged = () => {
    const userLoged = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_LOGED))
    if (userLoged == {} || !userLoged) {
        return false
    }
    return JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_LOGED))
}


export const registerUser = async (newUser, setUserExist) => {

    //Store are created ? Pass : create storare
    if (!localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USERS)) {
        createStorare()
    }

    let usersRegistered = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USERS))
    if (IsUserRegistered(newUser, usersRegistered)) {
        setUserExist(true)
        return
    }
    usersRegistered.push(newUser)
    newUser["password"] = await bcryptjs.hash(newUser.password, Number(process.env.REACT_APP_NUMBER_JUMPS))
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USERS, JSON.stringify(usersRegistered))
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_LOGED, JSON.stringify(newUser)
    )
}