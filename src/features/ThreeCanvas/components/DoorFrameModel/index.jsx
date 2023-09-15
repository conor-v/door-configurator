import { useGLTF } from "@react-three/drei";

export function DoorFrameModel({ scaling, scalingTop = -0.001 }) {
	const { nodes } = useGLTF("/doorframe.glb");
	return (
		<group dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				position={[0, 0, 0]}
				scale={[scaling, scalingTop, -0.001]}>
				<meshStandardMaterial color={"#43464b"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/doorframe.glb");
