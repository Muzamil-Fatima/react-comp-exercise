function ToDo() {
  function callFun() {
    alert("function called");
  }
  return (
    <>
      <h1>Muzamil Fatima ToDo</h1>
      <img
        src="https://images.unsplash.com/photo-1750860306157-e6783c3e92bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="winter"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </>
  );
}

export default ToDo;
