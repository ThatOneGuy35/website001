import { auth } from '@/firebase'
import { users } from '../../firebase';
//import { currentUser } from '@/firebase'
import router from '../../router';

const state = {
    userProfile: {},
    isLogged: false,
    userEmail: '',
    isAdmin: false,
};

const getters = {
};

const actions = {
    async login({ dispatch, commit }, form) {
        const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
    dispatch('fetchUserProfile', user)
    commit('setUserDet', form)
    },
    async fetchUserProfile({commit, dispatch}, user) {
        const userProfile = await users.doc(user.uid).get()
        commit('setUserProfile', userProfile.data())
        dispatch('checkAdmin')
        router.push('/vehicles')
    },
    async logout({ commit }) {
        await auth.signOut().then(() => {
            confirm('Are you sure you want to logout?')
        })
    commit('userLogout')
    router.push('/home')
    },
    async checkAdmin({ state, commit }) {
        await users.where('email', '==', state.userEmail).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const docData = doc.data().sec_level
                commit('setUserLevel', docData)
            })
        })  
    }, 
};

const mutations = {
    setUserProfile(state, val) {
        state.userProfile = val
        state.isLogged = true
    },
    userLogout(state) {
        state.isLogged = false
        state.isAdmin = false
    },
    setUserDet(state, form) {
        state.userEmail = form.email
    },
    setUserLevel(state, docData) {
        state.isAdmin = docData
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}