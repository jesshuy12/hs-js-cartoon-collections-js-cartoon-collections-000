function dwarfRollCall(dwarves) {
  var dwarfString = ""
  var num = 0
	for (var i = 0; i < dwarves.length; i++) {
	  num++
		dwarfString = dwarfString + num + ". " + dwarves[i]
		if (i != dwarves.length) {
			dwarfString = dwarfString + " "
		}
	}
	return dwarfString
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(planeteerCalls => planeteerCalls.toUpperCase()+"!")
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true
    } else {
      return false
  }
 }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
    return foods[i]
  }
  }
  return "no cheese!"
}
