import { useGLTF } from "@react-three/drei";
import { useStore } from "../../../../stores/appStore";
import Shadermateriaal from "../../../../components/ShaderMateriaal";

export function DeurSlot(props) {
	const { nodes, materials } = useGLTF("./models/deur_slot.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<group position={[-0.004, 0.868, -0.279]} rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Door_Handle_01001.geometry}
					material={materials["Stainless Steel"]}>
					{drawingplan ? (
						<Shadermateriaal />
					) : (
						<meshStandardMaterial color={"#b4bdc7"} metalness={1} roughness={0.55} />
					)}
				</mesh>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01001_1.geometry} material={materials["Back.001"]} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder.geometry}
				material={materials["Stainless Steel"]}
				position={[0.037, 0.909, -0.267]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#b4bdc7"} metalness={1} roughness={0.55} />}
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder001.geometry}
				material={materials["Stainless Steel"]}
				position={[0.037, 0.755, -0.267]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#b4bdc7"} metalness={1} roughness={0.55} />}
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder002.geometry}
				material={materials["Stainless Steel"]}
				position={[0.069, 0.784, -0.234]}
				rotation={[Math.PI / 2, -Math.PI / 4, 0]}
				scale={1.245}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#b4bdc7"} metalness={1} roughness={0.55} />}
			</mesh>
		</group>
	);
}

useGLTF.preload("./models/deur_slot.glb");
