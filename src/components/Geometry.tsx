import useCreateGeometry from "@/hooks/useCreateGeometry";
import { useEffect, useRef } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";


const Geometry = () => {
  const containerRef = useCreateGeometry();

 return (
      <div className="absolute w-full h-full top-1/4   flex justify-center" ref={containerRef}></div>
  );
}

export default Geometry;