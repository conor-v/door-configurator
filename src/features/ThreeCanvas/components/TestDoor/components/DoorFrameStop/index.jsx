import { useGLTF } from "@react-three/drei";
import { useStore } from "../../../../../../stores/appStore";
import Shadermateriaal from "../../../../../../components/ShaderMateriaal";

export function DoorFrameStop(props) {
	const { nodes } = useGLTF("/doorframestop.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube.geometry} position={[0, 0, 0]} scale={[0.0275, 0.038, 0.04]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#43464b"} />}
			</mesh>
		</group>
	);
}

useGLTF.preload("/doorframestop.glb");
