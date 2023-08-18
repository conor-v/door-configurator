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
				position={[6.5, 3.5, 0.4]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={1.2}
			/>
		</group>
	);
}

useGLTF.preload("/scharnieren.glb");
