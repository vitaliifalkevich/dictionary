export const addRecord = (domain,range) => ({
    type: "ADD_RECORD",
    domain,
    range
});

export const removeRecord = (id) => ({
    type: "REMOVE_RECORD",
    id
});

export const editRecord = (id, domain, range) => ({
    type: "EDIT_RECORD",
    id,
    domain,
    range
});


