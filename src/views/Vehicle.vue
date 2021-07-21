<template>
  <v-card>
      <ReleaseVehicle v-show="showRel" :year="this.year" :make="this.make" :model="this.model" :plate="this.plate" :state="this.state" :vin="this.vin" :bio="this.bio" :color="this.color" :type="this.type" :datein="this.datein" :location="this.location" :dateout="this.dateout" :sDays="this.diffDays" />
      <div v-show="this.showVeh">
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
        </v-list>
        <v-btn color="yellow"><router-link :to="{name: 'editVehicle', params: {vehicle_id: vin}}"><i class="far fa-edit"></i></router-link></v-btn>
        <v-btn v-show="$store.state.access.isAdmin" @click="deleteVehicle" color="red"><i class="far fa-trash-alt"></i></v-btn>
      </div>
      <v-btn @click="releaseVehicle" color="green"><i class="fas fa-receipt"></i></v-btn>
    </v-card>
    
</template>

<script>
import { vehicles } from '@/firebase'
import ReleaseVehicle from '@/components/ReleaseVehicle'
//import html2pdf from 'html2pdf.js'
export default {
    name: 'Vehicle',
    components: {
        ReleaseVehicle
    },
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
             showRel: false,
             showVeh: true,
             diffDays: null,
        }
    },
    methods: {
        updateSelector() {
            if (this.key == 1) {
                this.key = 'Yes'
            } else {
                this.key = 'No'
            } if(this.bio == 1) {
                this.bio = 'Yes'
            } else {
                this.bio = 'No'
            } if(this.yard == 1) {
                this.yard = 'Huntington'
            } else {
                this.yard = 'Wayne'
            } 
            if (this.type == 1) {
                this.type = 'Wreck'
            } else if(this.type == 2) {
                this.type = 'Impound - LEO'
            } else if(this.type == 3) {
                this.type = 'Impound - PP'
            } else if(this.type == 4) {
                this.type = 'Other'
            }
        },
        deleteVehicle() {
            
        },
        releaseVehicle() {
            this.showRel = !this.showRel
            this.showVeh = !this.showVeh
            var date1 = new Date(this.dateout);
            var date2 = new Date(this.datein);
            var diffTime = Math.abs(date2 - date1);
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            console.log(this.diffDays + " days");
        },
    },

    async beforeRouteEnter(to, from, next) {
         await vehicles.doc(to.params.vehicle_id).get().then((doc) => {
             if (doc.exists) { next(vm => {
                    vm.docId = to.params.vehicle_id
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
                     vm.updateSelector()
             })
             } else {
                 console.log('Something went wrong!')
             }
             })
             
     },
}
</script>
<style scoped>
.v-btn {
    margin: 0.1rem;
}
</style>
