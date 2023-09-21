import { useGLTF } from "@react-three/drei";

export function LinkerRaamHoek(props) {
	const { nodes } = useGLTF("./esterno_raam_linkerhoek.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.left_corner.geometry}
				material={nodes.left_corner.material}
				rotation={[0, 0, 0]}
				scale={[0.42762, 0.00112, 0.00112]}>
				<meshStandardMaterial color={"#666"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("./esterno_raam_linkerhoek.glb");
