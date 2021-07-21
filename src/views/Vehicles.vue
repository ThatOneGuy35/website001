<template>
  <div>
    <v-flex>
      <AddVeh v-show="showAdd"/>
      <v-card v-show="!showAdd" v-for="vehicle in vehicles" :key="vehicle.id">
        <v-list-item two-line class="right align">
          <v-list-item-title>
              {{vehicle.color}}
              {{vehicle.year}}
              {{vehicle.make}}
              {{vehicle.model}}
              <v-list-item-avatar align-end>
                <router-link v-bind:to="{name: 'view-vehicle', params: {vehicle_id: vehicle.id}}"><i class="fas fa-info-circle"></i></router-link>
              </v-list-item-avatar>
              <v-list-item-subtitle>
                VIN: {{vehicle.vin}}
              </v-list-item-subtitle>
          </v-list-item-title>
        </v-list-item>
      </v-card>
        <div class="fixed-action-btn">
              <v-btn fab elevation="2" color="red" @click="showAdd = !showAdd"><i class="fas fa-plus-circle"></i></v-btn>
        </div>
    </v-flex>
  </div>

</template>
<script>
import { vehicles } from '@/firebase'
import AddVeh from '@/components/AddVeh.vue'
export default {
    name: 'Vehicles',
    data () {
      return {
        vehicles: [],
        showAdd: false,
      }
    },
    components: {
      AddVeh,
    },
    methods: {
      
    },
    created () {
      vehicles.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
                    'id': doc.id,
                    'vin': doc.data().vin,
                    'year': doc.data().year,
                    'make': doc.data().make,
                    'model': doc.data().model,
                    'plate': doc.data().plate,
                    'state': doc.data().state,
                    'yard': doc.data().yard,
                    'type': doc.data().type,
                    'loc': doc.data().location,
                    'keys': doc.data().key,
                    'color': doc.data().color,
                    'datein': doc.data().datein,
                    'bio': doc.data().bio,
                    'dateout': doc.data().dateout,
        }
        this.vehicles.push(data)
        })
      })
    }
}
</script>
<style scoped>
.fas .fa-plus-circle {
  background-color: red;
}
.fixed-action-btn {
    padding: 0.5rem ;
}
</style>