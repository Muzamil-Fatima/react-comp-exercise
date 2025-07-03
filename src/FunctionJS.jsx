function FunctionJS() {
  const fruit = () => {
    alert("apple");
  };
  const fruit1 = () => {
    alert("banana");
  };

  return (
    <div>
      <h1 className="bg-amber-300 font-bold">Event and Function call</h1>
      <button onClick={()=> fruit("apple")} className=" border-2 m-2 p-2">Apple</button>
      <button onClick={()=> fruit1("banana")} className=" border-2 m-2 p-2">Banana</button>
      <button onClick={()=>{alert("yes, you click me ")}} className=" border-2 m-2 p-2">Click Me</button>
    </div>
  );
}

export default FunctionJS;