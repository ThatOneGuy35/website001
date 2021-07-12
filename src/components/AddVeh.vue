<template>
<div class="addForm">
  <v-form ref="addvehform">
      <v-container>
          <v-row cols="2"  justify-center>
              <v-col>
                  <v-text-field v-model="vin" label="VIN" placeholder="VIN" outlined></v-text-field>
                  <v-text-field v-model="year" label="Year" placeholder="Year" outlined></v-text-field>
                  <v-text-field v-model="make" label="Make" placeholder="Make" outlined></v-text-field>
                  <v-text-field v-model="model" label="Model" placeholder="Model" outlined></v-text-field>
                  <v-text-field v-model="plate" label="Plate" placeholder="Plate" outlined></v-text-field>
                  <v-text-field v-model="state" label="State" placeholder="State" outlined></v-text-field>
                  <v-text-field v-model="color" label="Color" placeholder="Color" outlined></v-text-field>
                  <v-text-field v-model="location" label="Location" placeholder="Location" outlined></v-text-field>
                  <v-list-item><v-select v-model="type" :items="typeItems" item-value="id" item-text="name" label="Type"/></v-list-item>
                  <v-list-item><v-select v-model="yard" :items="yardItems" item-value="id" item-text="name" label="Yard"/></v-list-item>
                  <v-list-item><v-select v-model="key" :items="keyItems" item-value="id" item-text="name" label="Keys"/></v-list-item>
                  <v-list-item><v-select v-model="bio" :items="bioItems" item-value="id" item-text="name" label="Bio"/></v-list-item>
                  <v-list-item><v-date-picker v-model="datein" label="Date In"></v-date-picker></v-list-item>
                  <v-btn @click="addVehDB" >Submit</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </v-form>
</div>
</template>

<script>
import { vehicles } from '@/firebase'
export default {
    name: 'AddVeh',
    data() {
        return {
             vin: null,
             year: null,
             make: null,
             model: null,
             plate: null,
             state: null,
             color: null,
             datein: null,
             location: null,
             key: null,
             bio: null,
             type: null,
             yard: null,
             dateout: null,
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
        addVehDB() {
            vehicles.add({
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
            this.$refs.addvehform.reset()
        },
    }
}
</script>

<style scoped>
  .addForm {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .v-btn {
    color: green;
    margin-top: 20px;
    min-width: 0;
  }
</style>