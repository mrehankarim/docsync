import React from "react";
import Background from "./component/Background";
import Foreground from "./component/Foreground";
const App = () => {
  return (
    <>
      <div className="h-screen bg-zinc-800 relative">
        <Background></Background>
        <Foreground></Foreground>
      </div>
    </>
  );
};

export default App;
