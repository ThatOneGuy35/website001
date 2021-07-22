<template>
<div>
    <div class="logo">
      <img src="@/assets/bakers.png">
      <h1>Baker's Towing & Recovery</h1>
      <h3>6891 Rt. 152</h3>
      <h3>Wayne, WV 25570</h3>
  </div>
  <div class="invoice">
    <h2>Invoice #{{this.invoiceN}}</h2>
  </div>
  <div class="vehicleinfo">
    <h2>Vehicle Information</h2>
    <v-list class="grey lighten-3">
      <v-list-item two-line>
        <v-list-item-content>
                  <v-list-item-title v-html="'VIN'"></v-list-item-title>
                  <v-list-item-subtitle>{{vin}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
                  <v-list-item-title v-html="'Year / Make / Model'"></v-list-item-title>
                  <v-list-item-subtitle>{{year}} {{make}} {{model}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
                  <v-list-item-title v-html="'Color'"></v-list-item-title>
                  <v-list-item-subtitle>{{color}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
                  <v-list-item-title v-html="'Plate / State'"></v-list-item-title>
                  <v-list-item-subtitle>{{plate}} / {{state}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </div>
  <div class="puinfo">
    <h2>Pick-up Information</h2>
    <v-list class="grey lighten-3">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Pick-up Location</v-list-item-title>
          <v-list-item-subtitle>{{location}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Date Brought In</v-list-item-title>
          <v-list-item-subtitle>{{datein}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Type</v-list-item-title>
          <v-list-item-subtitle>{{type}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
  <div class="price">
    <h2>Cost Breakdown</h2>
    <v-list class="grey lighten-3">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Tow Charge</v-list-item-title>
          <v-list-item-subtitle>${{tC}}.00</v-list-item-subtitle>
        </v-list-item-content>
         <v-list-item-content>
          <v-list-item-title>Fuel Surcharge</v-list-item-title>
          <v-list-item-subtitle>$15.83</v-list-item-subtitle>
        </v-list-item-content>
         <v-list-item-content>
          <v-list-item-title>Admin Fee</v-list-item-title>
          <v-list-item-subtitle>$20.00</v-list-item-subtitle>
        </v-list-item-content>
         <v-list-item-content>
          <v-list-item-title>Storage</v-list-item-title>
          <v-list-item-subtitle>${{sC}}.00</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Total</v-list-item-title>
          <v-list-item-subtitle>${{totalC}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Total w/o Admin and Fuel</v-list-item-title>
          <v-list-item-subtitle>${{totalCWOE}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </v-list>


  </div>
  <h1>Release vehicle component</h1>
  

  {{year}}
  {{make}}
  {{model}}
  {{plate}}
  {{state}}
  {{vin}}
  {{bio}}
  {{color}}
  {{type}}
  {{datein}}
  {{location}}
  {{dateout}}
  {{sDays}}

   
</div>

</template>

<script>

export default {
    name: 'ReleaseVehicle',
    props: ['totalC','totalCWOE','sC','year','make','model','plate','state','vin','bio','color','type','datein','location','dateout', 'sDays', 'bC', 'tC'],
    data() {
      return {
        invoiceN: '1254',
      }
    },
      
}
</script>

<style scoped>
.logo {
  text-align: center;
  margin: 1rem;
}
.invoice {
  text-align: left;
  margin: 1rem;
}
.vehicleinfo {
  text-align: center;
  margin: 1rem;
}
.puinfo {
  text-align: center;
  margin: 1rem;
}
</style>