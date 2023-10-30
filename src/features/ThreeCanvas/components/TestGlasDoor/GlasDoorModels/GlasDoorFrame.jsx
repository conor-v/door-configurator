import { useGLTF } from "@react-three/drei";

export function GlasDoorFrame(props) {
	const { nodes } = useGLTF("/ferro_solid_frame.glb");
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={nodes.Cube.material} scale={-0.017} />
		</group>
	);
}

useGLTF.preload("/ferro_solid_frame.glb");
