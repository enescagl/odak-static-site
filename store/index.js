export const state = () => ({
    newsPosts: [],
})

export const mutations = {
    setNewsPost(state, list) {
        state.newsPosts = list
    },
}

export const actions = {
    async nuxtServerInit({ commit }) {
        try {
            let files = await require.context('@/assets/content/haber/', false, /\.json$/)
            let newsPost = files.keys().map(key => {
                let res = files(key)
                res.slug = key.slice(2, -5)
                return res
            })
            await commit('setNewsPost', newsPost)

        } catch (error) {
            console.error(error)
        }
    },
}
