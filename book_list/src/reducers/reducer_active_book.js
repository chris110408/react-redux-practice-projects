/**
 * Created by leichen on 4/3/16.
 */
export default function (state = null,action){
    console.log(state);
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }


    return state
}