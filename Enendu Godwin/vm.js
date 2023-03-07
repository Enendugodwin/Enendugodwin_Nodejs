var vm = require('vm');
var myObj = { name: 'ansa', age: 3 };
vm.createContext(myObjectives);
vm.runInContext('age += 4;', myObjectives);
console.log(myObj);


// To compile JavaScript code in a virtual machine
// Run some JavaScript code in a "virtual machine"