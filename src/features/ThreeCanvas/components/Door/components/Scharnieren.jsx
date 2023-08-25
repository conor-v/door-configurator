import { useGLTF } from "@react-three/drei";

export function Scharnieren(props) {
	const { nodes, materials } = useGLTF("/scharnieren.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.scharnieren_2002.geometry}
				material={materials["Material.024"]}
				position={[5.4, 3.8, 0.7]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={1.05}
			/>
		</group>
	);
}

useGLTF.preload("/scharnieren.glb");
