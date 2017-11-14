// Object example. Flag dictated by Jose Sosa
var bandera = {
  colors: ["blue", "red", "green", "yellow", "white"],
  oldest: false,
  saying: "patria, libertad, dios",
  adopted: 1844,

  coatOfArms: {
    arrows: 6,
    cross: true,
    worship: "Catholic Bible",
  },

  iAmFrom: function(name, country){
    console.log(name + " is from " + country + ".")
  }

}

bandera.iAmFrom("Sosa", "The Dominican Republic");
bandera.iAmFrom("Sosa", "The Dominican Republic");
console.log(bandera.coatOfArms.arrows);
