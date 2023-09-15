import { useGLTF } from "@react-three/drei";

export function DoorFrameModel(props) {
	const { nodes } = useGLTF("/doorframe.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				position={[0, 0, 0]}
				scale={[props.scaling, -0.001, -0.001]}>
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/doorframe.glb");
