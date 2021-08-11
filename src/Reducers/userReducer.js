
const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log("reducer  >>  login, state")
            return action.user
            
        case 'LOGOUT':
                console.log("reducer  >>  logout")
            return {}
        case 'ADD_VALUE_TO_USER':
            const name=action.name;
            const value=action.value
               
            return {...state, [name]:value}
        default:
            return state
    }
}

export { userReducer as default }