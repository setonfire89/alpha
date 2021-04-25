const defaultState = () => {
    return {
        emailId: "",
    }
};

export const state = () => defaultState();

export const mutations = {
    setEmailId: (state, emailId) => {
        state.emailId = emailId
    },
}

export const actions = {
    async getEmailId ({ commit }) {
        commit('setEmailId', emailId)
    },
    async createEmailId ({ commit }) {
        commit('getEmailId', emailId)
    }
}