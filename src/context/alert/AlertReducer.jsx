 const alertReducer = function(state, action){
    switch(action.type){
        case "show_alert": 
            return action.payload;

        case "remove_alert": 
            return null;

        default: 
            return state;
    }
}

export default alertReducer;