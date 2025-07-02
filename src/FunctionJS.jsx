function FunctionJS() {
//   function callFun() {
//     alert("function called");
//   }
  const fruit = () => {
    alert("apple");
  };
  const fruit1 = () => {
    alert("banana");
  };

  return (
    <div>
      <h1 className="bg-amber-300">Event and Function call</h1>
      <button onClick={()=> fruit("apple")} className="bg-red-300">Apple</button>
      <button onClick={()=> fruit1("banana")}>Banana</button>
      <button onClick={()=>{alert("yes, you click me ")}}>Click Me</button>
    </div>
  );
}

export default FunctionJS;