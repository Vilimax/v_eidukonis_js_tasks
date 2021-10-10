const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printLine(person){
    console.log(person.name, person.surname, person.sex, person.age, person.income, person.married, person.hasCar)
}
people.forEach(printLine);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printFullName(person){
    console.log(person.name, '-', person.surname)
}
people.forEach(printFullName);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printFullNameAndMarried(person){
    console.log(person.name,  person.surname, person.married)
}
people.forEach(printFullNameAndMarried);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const sexAndIncome = people.map(person => ({
    sex: person.sex,
    income: person.income,
}));
  console.log(sexAndIncome)
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const fullNameAndSex = people.map(person =>
    ({
        name: person.name,
        surname: person.surname,
        sex: person.sex,
    }));
  console.log(fullNameAndSex)
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  const allMales = people.filter(person => (person.sex === 'male'));
  console.log(allMales)
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  const allFemales = people.filter(person => (person.sex === 'female'));
  console.log(allFemales)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  const hasCar = people.filter(person => {
    if(person.hasCar === true){
    return console.log(`${person.name} ${person.surname}`)
    }
  });
  
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  const married = people.filter(person =>
 (person.married === true));
  console.log(married)
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const result = people.map(p =>{
    person = {...p};
    person.salary = person.income
    delete person.income
    return person;
  });
  console.log(result)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  const result = people.map( p =>{
    person = {...p};
    delete person.name;
    delete person.surname;
    delete person.sex;
    return person
  });
  console.log(result)
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  const result = people.map(p =>{
    person = {...p};
    person.fullname = person.name + " " + person.surname
    delete person.name
    delete person.surname
    return person
  });
  console.log(result)
}
console.groupEnd();

