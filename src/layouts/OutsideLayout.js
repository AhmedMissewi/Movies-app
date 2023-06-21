


function OutsideLayout({children}) {

  return (
    <div className="outside-layout">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ color: "white" }}>Welcome to Watch ToYou</h1>
        <p style={{ color: "white" }}>Your best movies and series platform</p>
      </div>
        {children}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ color: "white" }}>Copyright AhmedMissewi 2023</p>
      </div>
      
    </div>
  );
}

export default OutsideLayout;
