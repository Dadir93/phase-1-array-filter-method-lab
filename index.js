// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

function matchName(driverObjects, query) {
  return driverObjects.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}

const drivers = ['John', 'Alice', 'Bob', 'Charlie', 'David'];

const driverObjects = [
  { name: 'John', hometown: 'New York' },
  { name: 'Alice', hometown: 'San Francisco' },
  { name: 'Bob', hometown: 'Los Angeles' },
  { name: 'Charlie', hometown: 'Chicago' },
  { name: 'David', hometown: 'Boston' }
];

console.log(findMatching(drivers, 'Alice'));
console.log(fuzzyMatch(drivers, 'a'));
console.log(matchName(driverObjects, 'Alice'));
