const initialState = [
    {
        domain: "Stonegrey",
        range: "Dark Grey"
    },
    {
        domain: "Midnight Black",
        range: "Black"
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
            return state.map((item, idx) =>
                (idx === action.id)
                    ? {...item,
                        domain: action.domain,
                    range: action.range}
                    : item
            );

        case 'REMOVE_RECORD':
            return state.filter((_, i) => i !== action.id);

        default:
            return state
    }
};

export default rootReducer