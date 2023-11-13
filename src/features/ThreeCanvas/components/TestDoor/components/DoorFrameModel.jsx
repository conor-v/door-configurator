import { useStore } from "../../../../../stores/appStore";
import Shadermateriaal from "../../../../../components/ShaderMateriaal";
import { useGLTF } from "@react-three/drei";

export function DoorFrameModel({ scaling, scalingTop = -0.001 }) {
	const { nodes } = useGLTF("/models/doorframe.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				position={[0, 0, 0]}
				scale={[scaling, scalingTop, -0.001]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#43464b"} />}
			</mesh>
		</group>
	);
}

useGLTF.preload("/models/doorframe.glb");
