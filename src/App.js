import { Canvas } from '@react-three/fiber';

import { Experience } from 'components/Experience';

function App() {
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
        {/* <ambientLight /> */}
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
