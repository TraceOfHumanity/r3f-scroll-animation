import { Canvas } from '@react-three/fiber';
import { Experience } from 'components/Experience';

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} intensity={500} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
