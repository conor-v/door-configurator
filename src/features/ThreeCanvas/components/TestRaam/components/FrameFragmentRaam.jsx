import { useGLTF } from "@react-three/drei";

export function FrameFragmentRaam(props) {
	const { nodes } = useGLTF("./esterno_raam_frameFragment.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.frame_fragment.geometry}
				material={nodes.frame_fragment.material}
				rotation={[0, 0, 0]}
				scale={[props.scaleX, 0.00112, 0.00112]}>
				<meshStandardMaterial color={"#666"} />
			</mesh>
		</group>
	);
}

useGLTF.preload("./esterno_raam_frameFragment.glb");
