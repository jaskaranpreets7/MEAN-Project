var HeroesDetails = function(heroId,heroName,universe,specialPower,description){
    this.heroId = heroId,
    this.heroName = heroName,
    this.universe = universe,
    this.specialPower = specialPower,
    this.description = description
}

// HeroesDetails.toObject = function (obj) {
    
//     return new HeroesDetails(obj.heroId, obj.heroName, obj.universe, obj.specialPower, obj.description);
// }

module.exports = HeroesDetails;