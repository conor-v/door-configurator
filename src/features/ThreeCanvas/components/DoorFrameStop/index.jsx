import { useGLTF } from "@react-three/drei";

export function DoorFrameStop(props) {
	const { nodes } = useGLTF("/doorframestop.glb");
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube.geometry} position={[0, 0, 0]} scale={[0.0275, 0.038, 0.04]}>
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/doorframestop.glb");
