import Vuex from 'vuex'


const createStore = ()=>{
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state,posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            vuexContext.commit('setPosts',  [
              {
                id:'1', 
                title: 'First post', 
                previewText: 'This is my first post', 
                thumbnail: 'https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png'
            },
              {
                id:'2', 
                title: 'Second post', 
                previewText: 'This is my second post', thumbnail: 'https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png'},
              {
              id:'3', 
              title: 'Third post', 
              previewText: 'This is my third post', 
              thumbnail: 'https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png'},])
            resolve() 
              },1000)
      })},
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore