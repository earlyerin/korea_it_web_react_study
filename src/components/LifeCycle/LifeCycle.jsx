import { useEffect } from "react";

function LifeCycle({ count }) {
  console.log("RENDERING...");
  useEffect(() => {
    console.log("MOUNT...");

    return () => {
      console.log("UNMOUNT...");
    };
  }, []);
  return (
    <div>
      <h4>Children Component</h4>
      <p>Count By Parent : {count}</p>
    </div>
  );
}

export default LifeCycle;
