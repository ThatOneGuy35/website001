import { vehicles } from "../../firebase";

const state = {
    vehicles: []
};

const getters = {
    allVehicles: state => state.vehicles
};

const actions = {
};

const mutations = {};

export default { 
    state,
    getters,
    actions,
    mutations
}