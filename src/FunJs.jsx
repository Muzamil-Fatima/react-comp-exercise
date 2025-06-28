function FunJs() {
  const name = "Fatima";
// const name = undefined;
const userObj={
    name: "Muzmail fatima",
    email:"muzamil@gmail.com",
    age:334,
}
const userArray=['sam', 'peter', 'asma']
  let x = 10;
  let y = 20;

let path = "https://images.unsplash.com/photo-1750873320435-25114c7273b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function fruit() {
  return "Apple";
}

function sum(a, b) {
  return a + b;
}

function operation(a, b, op) {
  if (op == "+") {
    return a + b;
  } else if (op == "-") {
    return a - b;
  } else {
    return a + b;
  }
}

return (
    <div>
    <h1>JSX with Curly Braces</h1>
    <h1>{name ? name:"user not found"}</h1>
    <h1>{x + y}</h1>
    <h1>{fruit()}</h1>
    <h1>{sum(10, 100)}</h1>
    <h1>{operation(20, 10, "+")}</h1>
    <h1>{userObj.email}</h1>
    <h1>{userArray[0]}</h1>
    <input type="text" value={name} />
    <br />
    <img
     src={path}
      />
  </div>
);
}

export default FunJs;