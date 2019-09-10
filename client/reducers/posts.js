// a reducer takes in two things

// 1. takes in the action
// 2. copy of the current state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        // return the updated state
        console.log("incrementing likes");
        const i = action.index;
        return [
            ...state.slice(0,i), //before the one we are updating  
            {...state[i], likes: state[i].likes +1},
             ...state.slice(i + 1), //after th eone we are updating      
            ]
        default:
            return state;
    }
    
}

export default posts;