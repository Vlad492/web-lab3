let contacts = []

if(localStorage.getItem('contacts')){
    contacts = JSON.parse(localStorage.getItem('contacts'))
}

function contactReducer(state,action){
    switch(action.type){
        case "ADD_CONTACT":{
            let contact = {
                name:action.name,
                number: action.number
            }
            localStorage.setItem('contacts',JSON.stringify([...state,contact]))
            return [...state,contact]
        }
        case "REMOVE_CONTACT":{
            localStorage.setItem('contacts',JSON.stringify(state.filter((_elem,index)=>index !== action.id)))
            return state.filter((_elem,index)=>index !== action.id)
        }
        default:{
            return state
        }
    }
} 

const contactsStore = createStore(contactReducer,contacts)




