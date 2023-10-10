import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three";



function getRandomColor() {
  const r = Math.random();
  const g = Math.random();
  const b = Math.random();
  return new THREE.Color(r, g, b);
}

function RightSphere (props) {
  const {position,velocity} = props;
  const sphereRef = useRef();

  useFrame(() => {

    if (sphereRef.current) {
    // ランダムな速度を現在の位置に加算
    sphereRef.current.position.x += velocity.x;
    sphereRef.current.position.y += velocity.y;
    sphereRef.current.position.z += velocity.z;

    // 球体が画面外に出た場合、ランダムな位置に戻す
    if  (
      Math.abs(sphereRef.current.position.x) > 10 ||
      Math.abs(sphereRef.current.position.y) > 10 ||
      Math.abs(sphereRef.current.position.z) > 10
    ) {
      sphereRef.current.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
    }



  }
  });


  return (
    <mesh ref={sphereRef}>
       <sphereGeometry args={[0.5, 20, 20]} />
      <meshStandardMaterial color={getRandomColor()} roughness={0.5} metalness={0.5} />
    </mesh>
  )

}


export default function Main () {
  const rightSphere = [];

  for (let i = 0; i < 50; i++) {
    const position = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5,
    };
    const velocity = {
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2,
      z: (Math.random() - 0.5) * 0.2,
    };

    rightSphere.push(
      <RightSphere key={i} position={position} velocity={velocity} />
    );

  }
  return (
    <div className="flex">
    <div className="w-1/2 h-screen bg-pink-300">
      <Canvas>
        {rightSphere}
        <ambientLight intensity={8} />
        <spotLight position={[10,10,10]} penumbra={10} angle={0.15} />
        <pointLight position={[-10,-10,-10]} />
      </Canvas>
    </div>
    <div className="bg-gray-800 w-1/2 h-screen"></div>
    </div>
  )
}