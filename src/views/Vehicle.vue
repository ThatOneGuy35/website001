<template>
  <v-card>
      <v-list nav class="grey lighten-4">
          <v-list-item >
        VIN: {{vin}}
        </v-list-item>
        <v-list-item>
            Year: {{year}}
        </v-list-item>
        <v-list-item>
            Make: {{make}}
        </v-list-item>
        <v-list-item>
            Model: {{model}}
        </v-list-item>
        <v-list-item>
            Plate: {{plate}}
        </v-list-item>
        <v-list-item>
            State: {{state}}
        </v-list-item>
        <v-list-item>
            Yard: {{yard}}
        </v-list-item>
        <v-list-item>
            Type: {{type}}
        </v-list-item>
        <v-list-item>
            Pickup Location: {{location}}
        </v-list-item>
        <v-list-item>
            Key: {{key}}
        </v-list-item>
        <v-list-item>
            Color: {{color}}
        </v-list-item>
        <v-list-item>
            Date in: {{datein}}
        </v-list-item>
        <v-list-item>
            Biohazard: {{bio}}
        </v-list-item>
        <v-list-item>
            Date released: {{dateout}}
        </v-list-item>
      </v-list>
      <v-btn color="yellow"><router-link :to="{name: 'editVehicle', params: {vehicle_id: vin}}"><i class="far fa-edit"></i></router-link></v-btn>
      <v-btn @click="deleteVehicle" color="red"><i class="far fa-trash-alt"></i></v-btn>
    </v-card>
    
</template>

<script>
import { vehicles } from '@/firebase'
export default {
    name: 'Vehicle',
    data () {
        return {
             year: null,
             make: null,
             model: null,
             plate: null,
             state: null,
             vin: null,
             key: null,
             bio: null,
             color: null,
             type: null,
             yard: null,
             datein: null,
             dateout: null,
             location: null,
             docId: null,
        }
    },
    methods: {
        deleteVehicle() {
            console.log('Delete vehicle')
        },
    },
    beforeRouteEnter(to, from, next) {
         vehicles.doc(to.params.vehicle_id).get().then((doc) => {
             if (doc.exists) { next(vm => {
                     vm.vin = doc.data().vin
                     vm.year = doc.data().year
                     vm.make = doc.data().make
                     vm.model = doc.data().model
                     vm.plate = doc.data().plate
                     vm.state = doc.data().state
                     vm.yard = doc.data().yard
                     vm.type = doc.data().type
                     vm.location = doc.data().location
                     vm.key = doc.data().key
                     vm.color = doc.data().color
                     vm.datein = doc.data().datein
                     vm.bio = doc.data().bio
                     vm.dateout = doc.data().dateout
             })
             } else {
                 console.log('Something went wrong!')
             }
             })
     },
}
</script>

