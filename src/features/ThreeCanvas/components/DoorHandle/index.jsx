import { useGLTF } from "@react-three/drei";

export function DoorHandle(props) {
	const { nodes, materials } = useGLTF("/models/doorhandle.glb");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]} />
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]} />
			</group>
		</group>
	);
}

useGLTF.preload("/models/doorhandle.glb");
