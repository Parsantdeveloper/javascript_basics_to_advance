JavaScript Console Logging Notes
Object Display in Console
The Problem

javascript
let user = {id: 1, name: "Prashant Bhusal", age: 18};

console.log(`User: ${user}`);
// ❌ Output: "User: [object Object]" - Not useful!
Why This Happens
Template literals (${}) convert objects to strings using .toString()

Objects default to "[object Object]" when converted to strings

Solutions
1. Using Comma (Recommended for Debugging)
javascript
console.log("User object:", user);
// ✅ Output: User object: {id: 1, name: "Prashant Bhusal", age: 18}
Best for debugging - shows expandable object structure

Preserves object format in console

2. Using JSON.stringify()
javascript
console.log(`User: ${JSON.stringify(user)}`);
// ✅ Output: User: {"id":1,"name":"Prashant Bhusal","age":18}

// With formatting:
console.log(`User: ${JSON.stringify(user, null, 2)}`);
// ✅ Pretty-printed JSON
3. Access Specific Properties
javascript
console.log(`Name: ${user.name}, Age: ${user.age}, ID: ${user.id}`);
// ✅ Output: Name: Prashant Bhusal, Age: 18, ID: 1
Quick Reference
Method	Syntax	Use Case
Comma	console.log("msg", obj)	Debugging objects
JSON.stringify	console.log(`msg ${JSON.stringify(obj)}`)	Objects in strings
Property Access	console.log(`msg ${obj.property}`)	Specific values
Key Takeaways
Use comma (,): When you want to inspect the full object structure

Use template literals: When you need formatted strings with specific values

Never use + or direct ${obj}: For objects in template literals

JSON.parse(JSON.stringify(obj)): ❌ Don't do this - it's redundant

Examples
javascript
// ✅ Good
console.log("Debug:", user);
console.log(`User JSON: ${JSON.stringify(user)}`);
console.log(`Hello ${user.name}`);

// ❌ Avoid
console.log(`User: ${user}`);
console.log("User: " + user);
Remember: Comma for debugging, template literals for formatted messages!