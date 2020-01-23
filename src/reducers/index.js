const initialState = [
    {
        domain: "Stonegrey",
        range: "Dark Grey"
    },
    {
        domain: "test",
        range: "test2"
    }
];


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECORD':
            return [
                ...state,
                {
                    domain: action.domain,
                    range: action.range
                }
            ];


        case 'EDIT_RECORD':
           /* console.log(action.id, action.domain, action.range);*/

            return state.map((item, idx) =>
                (idx === action.id)
                    ? {...item,
                        domain: action.domain,
                    range: action.range}
                    : item
            );




            /*return [
                ...state,
                {
                    domain: action.domain,
                    range: action.range
                }
            ];*/

        case 'REMOVE_RECORD':
            return state.filter((_, i) => i !== action.id);

        default:
            return state
    }
};

export default rootReducer