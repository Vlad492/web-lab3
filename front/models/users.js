const users = []


function userReducer(state,action){
    switch(action.type){
        case "ADD_USER":{
            let contact = {
                email:action.email,
                password: action.password
            }
            return [...state,contact]
        }
        default:{
            return state
        }
    }
} 


const usersStore = createStore(userReducer,users)

