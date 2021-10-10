console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ];

    function sortDrinkByPrice(drinks){
        return drinks.sort((a,b)=> a.price - b.price)
       };
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName (obj, name, value) {
        obj[name] = value;
        return obj;
      };
      console.log(addName({}, "Brutus", 300))
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const generations = {
            m: {
                "-3": "great grandfather",
                "-2": "grandfather",
                "-1": "father",
                "0": "me!",
                "1": "son",
                "2": "grandson",
                "3": "great grandson"
                },
            f:{
                "-3": "great grandmother",
                "-2": "grandmother",
                "-1": "mother",
                "0": "me!",
                "1": "daughter",
                "2": "granddaughter",
                "3": "great granddaughter"
            }
        };
        if(y === "m" ){
                return generations[y][x]
            };
            return generations[y][x]
    };
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        const letter = [
           { tile: "N", score: 1 },
           { tile: "K", score: 5 },
           { tile: "Z", score: 10 },
           { tile: "X", score: 8 },
           { tile: "D", score: 2 },
           { tile: "A", score: 1 },
           { tile: "E", score: 1 }
         ];
           
           return tileHand.reduce((tscore, {score}) => {
               tscore += score 
               return tscore
           },0);
       
   };
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
	
      const values = Object.values(obj)
      const sum = values.reduce((acc, currVal) => acc + currVal)
    
      return sum - limit
    };
    console.log(calculateDifference({ "baseball bat": 20 }, 5));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj)
    };
    console.log(toArray({ a: 1, b: 2 }));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(...Object.values(inks))
    };
    console.log(inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
      }));
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{   
    const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50,
      };

    function calculateLosses(obj) {
        const itemValues = Object.values(obj);
        return itemValues.reduce((sum, itemValue) => sum + itemValue, 0) || "Lucky you!";	
    };
    console.log(calculateLosses({
        tv: 30,
        skate: 20,
        stereo: 50,
      }));
      console.log(calculateLosses({
          
      }));
      
}
console.groupEnd();