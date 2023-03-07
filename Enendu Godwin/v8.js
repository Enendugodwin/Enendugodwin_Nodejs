// To access information about V8 (the JavaScript engine)

const v8 = require("v8");
const data = { name: "Godwin", age: 20 };
const serializedData = v8.serialize(data);
console.log(serializedData);