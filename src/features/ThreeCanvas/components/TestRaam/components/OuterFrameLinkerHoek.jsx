import { useGLTF } from "@react-three/drei";

export function OuterFrameLinkerHoek(props) {
	const { nodes } = useGLTF("/estrtno_outside_frame_hoekLeft.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={nodes.Cube005.material}
				position={[0, -0.001, 0]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[0.00104, 0.00104, 0.204]}>
				<meshStandardMaterial color={"#666"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/estrtno_outside_frame_hoekLeft.glb");
