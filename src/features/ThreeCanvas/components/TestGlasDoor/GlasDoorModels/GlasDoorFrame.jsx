import { useGLTF } from "@react-three/drei";

export function GlasDoorFrame(props) {
	const { nodes } = useGLTF("/models/ferro_solid_frame.glb");

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} scale={-0.017}>
				<meshStandardMaterial color={props.handleBorderColor()} metalness={0.6} roughness={0.5} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/models/ferro_solid_frame.glb");
