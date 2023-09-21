import { useGLTF } from "@react-three/drei";

export function OuterFrameRechterHoek(props) {
	const { nodes } = useGLTF("/esterno_outside_frame_hoekRight.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={nodes.Cube004.material}
				position={[0, -0.001, 0]}
				rotation={[-Math.PI, -Math.PI / 2, 0]}
				scale={[0.00104, 0.00104, 0.204]}>
				<meshStandardMaterial color={"#666"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/esterno_outside_frame_hoekRight.glb");
