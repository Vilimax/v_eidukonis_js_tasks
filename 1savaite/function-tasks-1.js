const arr = ['a', 'b', 'c', 'd', 'e'];
console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
function returnFirstElement(arr){
  return arr[0];
}
console.log(arr[0])
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{

function removeFirstElement(arr){
  return arr.shift();
}

}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnLastElement(arr){
    return arr[arr.length - 1]
  }
  console.log(arr[arr.length - 1])
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastElement(arr){
    return arr.pop()
  }
  
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function arrayLength(arr){
    return arr.length
  }
  console.log(arr.length) 
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function lastIndexOfArray(arr){
    return arr.length -1;
  }

 console.log(arr.length -1);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function indexLine(arr){   
      for (let i = 0; i < arr.length; i++) {
        console.log(i)
      }
    }
    console.log(indexLine(arr))
    
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function elementsLine(arr) { 
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    }
  }
  console.log(elementsLine(arr))
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function indexAndElementPair(arr){
      for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`)
    }
  }
  console.log(indexAndElementPair(arr))
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function elementsBackwards(arr){
    for (let i = (arr.length -1); i >= 0 ; i--){
        console.log(arr[i])
    }
  }
  console.log(elementsBackwards(arr))
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function indexLine(arr){
    const index = []
    for (let i = 0; i < arr.length; i++) {
      index.push(i)
    }
    return console.log(...index)
  }
  console.log(indexLine(arr))
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function elementsLine(arr){
    const el = []
    for (let i = 0; i < arr.length; i++) {
      el.push(arr[i])
    }
    return console.log(...el)
  }
  console.log(elementsLine(arr))
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function elementsAndIndexPairs(arr){
    const elin = []
    for (let i = 0; i < arr.length; i++) {
      elin.push(`[${i}]=>${arr[i]}`)
    }
    return console.log(...elin)
  }
  console.log(elementsAndIndexPairs(arr))
}
console.groupEnd();