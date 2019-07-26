export const state = () => ({
    memos: []
})

export const mutations = {
    add (state, text) {
        var id = state.memos.length + 1;
        state.memos.push({
            id: id,
            text: text
        })
    },
    get (state, id) {
        return state.memos.find(id => id == id)
    }
}

export const getters = {
    all(state) {
        return state.memos;
    }
}