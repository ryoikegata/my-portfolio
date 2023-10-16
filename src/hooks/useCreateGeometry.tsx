import { useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";

const useCreateGeometry = () => {
  // レンダリング結果を格納するためのリファレンス
  const containerRef = useRef(null);


  // コンポーネントがマウントされた際に実行される
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 2, 0.01, 60);
    camera.position.set(5, 20, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true });


const width = 1000;
const height = 500;

renderer.setSize(width, height);

    renderer.shadowMap.enabled = true;

    const startColor = new THREE.Color(0xff0000); // 開始カラー（赤）
const endColor = new THREE.Color(0x0000ff); // 終了カラー（青）

    const geometry = new THREE.SphereGeometry(5, 32, 32);

    const positionAttribute = geometry.getAttribute("position");
    console.log(positionAttribute);
    const colors = [];


for (let i = 0; i < positionAttribute.count; i++) {
  const ratio = i / positionAttribute.count; // インデックスを基にグラデーション比率を計算
  const color = new THREE.Color(); // カラーオブジェクトを作成
  color.lerpColors(startColor, endColor, ratio); // グラデーションカラーを計算
  colors.push(color.r, color.g, color.b);
}

geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.MeshBasicMaterial({ vertexColors: true  });

    const mesh = new THREE.Mesh(geometry, material);
    const light = new THREE.DirectionalLight(0xffffff, 100);
    light.position.set(0, 20, 10);
    mesh.castShadow = true;

    scene.add(light, mesh);

    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // レンダリング結果をコンテナに追加
    containerRef.current.appendChild(renderer.domElement);
  }, [render]);

  // コンポーネント内で使用するためにレンダリング結果のリファレンスを返す
  return containerRef;
};

export default useCreateGeometry;
