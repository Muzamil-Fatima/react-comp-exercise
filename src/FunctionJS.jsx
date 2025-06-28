function FunctionJS() {
//   function callFun() {
//     alert("function called");
//   }
  const fruit = () => {
    alert("apple");
  };

  return (
    <div>
      <h1>Event and Function call</h1>
      <button onClick={()=> fruit("apple")}>Apple</button>
      <button onClick={()=> fruit("banana")}>Banana</button>
    </div>
  );
}

export default FunctionJS;