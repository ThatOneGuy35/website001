<template>
  <div>
    <AddVeh v-show="showAdd"/>
    <v-card v-show="!showAdd" v-for="vehicle in vehicles" :key="vehicle.id">
      <v-list-item two-line>
        <v-list-item-title>
            {{vehicle.color}}
            {{vehicle.year}}
            {{vehicle.make}}
            {{vehicle.model}}
            <v-list-item-subtitle>
              VIN: {{vehicle.vin}}
              <v-spacer></v-spacer>
              <router-link v-bind:to="{name: 'view-vehicle', params: {vehicle_id: vehicle.id}}"><i class="fas fa-info-circle"></i></router-link>
            </v-list-item-subtitle>
        </v-list-item-title>
      </v-list-item>
    </v-card>
      <div class="fixed-action-btn">
            <v-btn fab elevation="2" color="red" @click="showAdd = !showAdd"><i class="fas fa-plus-circle"></i></v-btn>
      </div>
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
        showAdd: true,
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
.fa.fa-plus {
    background-color: red;
}
</style>