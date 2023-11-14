import { useGLTF } from "@react-three/drei";
import Shadermateriaal from "../../../../../components/ShaderMateriaal";
import { useStore } from "../../../../../stores/appStore";

export function GlasDoorHoek1(props) {
	const { nodes } = useGLTF("/models/ferro_solid_door_hoek1.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={nodes.Cube004.material}
				rotation={[0, 0, Math.PI]}
				scale={[4.791, -0.017, -0.017]}>
				{drawingplan ? (
					<Shadermateriaal />
				) : (
					<meshStandardMaterial color={props.handleBorderColor} metalness={0.6} roughness={0.5} />
				)}
			</mesh>
		</group>
	);
}

useGLTF.preload("/models/ferro_solid_door_hoek1.glb");
