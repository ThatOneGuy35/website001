<template>
<v-card>
     <v-list>
      <v-row>
        <v-list-item><v-text-field v-model="year" label="year"></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="make" label="make"></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="model" label="model"></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="plate" label="plate" ></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="state" label="state" ></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="vin" label="vin" ></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="color" label="color" ></v-text-field></v-list-item>
        <v-list-item><v-text-field v-model="location" label="location" ></v-text-field></v-list-item>
        <v-list-item><v-select v-model="type" :items="typeItems" item-value="id" item-text="name" label="Type"/></v-list-item>
        <v-list-item><v-select v-model="yard" :items="yardItems" item-value="id" item-text="name" label="Yard"/></v-list-item>
        <v-list-item><v-select v-model="key" :items="keyItems" item-value="id" item-text="name" label="Keys"/></v-list-item>
        <v-list-item><v-select v-model="bio" :items="bioItems" item-value="id" item-text="name" label="Bio"/></v-list-item>
        <v-list-item><v-date-picker v-model="datein" label="Date In"></v-date-picker></v-list-item>
        <v-list-item><v-btn @click="submit" color="green"><i class="fas fa-save"></i></v-btn></v-list-item>
      </v-row>
    </v-list>
</v-card>


</template>

<script>
import { vehicles } from '@/firebase'
export default {
    name:'edit-vehicle',
    data () {
        return {
             year: null,
             make: null,
             model: null,
             plate: null,
             state: null,
             vin: null,
             key: '',
             bio: '',
             color: null,
             type: '',
             yard: '',
             datein: null,
             dateout: null,
             location: null,
             uType: null,
             uYard: null,
             uBio: null,
             uKey: null,
          typeInput :{
            user_id: this.type
          },
          yardInput: {
            yard_id: this.yard
          },
          keyInput: {
            key_id: this.key
          },
          bioInput: {
            bio_id: this.bio
          },
          typeItems: [
            {
              id: 1,
              name: "Wreck"
              }, 
              {
                id: 2,
                name: "Impound - LEO"
              }, 
              {
                id: 3,
                name: "Impound - PP"
              }, 
              {
                id: 4,
                name: "Other"
              }
                ],
          yardItems: [
            {
              id: 1,
              name: "Huntington"
            },
            {
              id: 2,
              name: "Wayne"
            },
          
          ],
          keyItems: [
            {
              id: 1,
              name: "Yes"
            },
            {
              id: 2,
              name: "No"
            },
          
          ],
          bioItems: [
            {
              id: 1,
              name: "Yes"
            },
            {
              id: 2,
              name: "No"
            },
            {
              id: 3,
              name: "Unknown"
            }
          
          ],

        }
    },
    methods: {
      onStep1Update(newData) {
        this.uType = newData
      },
      submit() {
        vehicles.doc(this.id).update({
             year: this.year,
             make: this.make,
             model: this.model,
             plate: this.plate,
             state: this.state,
             vin: this.vin,
             key: this.key,
             bio: this.bio,
             color: this.color,
             type: this.type,
             yard: this.yard,
             datein: this.datein,
             dateout: this.dateout,
             location: this.location,
        })
          this.$router.push('/vehicles')
      }
    },
     beforeRouteEnter(to, from, next) {
         vehicles.where('vin', '==', to.params.vehicle_id).get().then(querySnapshot => {
             querySnapshot.forEach(doc => {
                 next(vm => {
                     vm.id = doc.id
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
             })
         })
     },

}
</script>

<style scoped>
  .editForm {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>