// import firebase from 'firebase/app'
import { auth } from '@/firebase'
import { users } from '../../firebase';
import router from '../../router';

const state = {
    userProfile: {}
};

const getters = {
};

const actions = {
    async login({ dispatch }, form) {
        const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
    dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({commit}, user) {
        const userProfile = await users.doc(user.uid).get()
        commit('setUserProfile', userProfile.data())
    router.push('/vehicles')
    }
};

const mutations = {
    setUserProfile(state, val) {
        state.userProfile = val
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}