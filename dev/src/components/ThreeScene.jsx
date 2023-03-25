import React, { useRef, useEffect } from 'react';
import { Lips, scene, camera, renderer } from 'face_ui';

// const lips = Lips.create(Lips.parameters.random())
const lips = Lips.create()

const ThreeScene = () => {
  const containerRef = useRef();


  scene.add(lips)



  useEffect(() => {
    containerRef.current.appendChild(renderer.domElement);


    const animate = () => {
      requestAnimationFrame(animate);
      // Lips.animate(lips)
      // Lips.animate(lips)
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
