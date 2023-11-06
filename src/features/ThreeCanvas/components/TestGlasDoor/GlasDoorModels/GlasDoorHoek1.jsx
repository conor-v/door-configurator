import { useGLTF } from "@react-three/drei";

export function GlasDoorHoek1(props) {
	const { nodes } = useGLTF("/ferro_solid_door_hoek1.glb");

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={nodes.Cube004.material}
				rotation={[0, 0, Math.PI]}
				scale={[4.791, -0.017, -0.017]}>
				<meshStandardMaterial color={props.handleBorderColor} metalness={0.6} roughness={0.5} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/ferro_solid_door_hoek1.glb");
