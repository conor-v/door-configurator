import { useGLTF } from "@react-three/drei";
import Shadermateriaal from "../../../../components/ShaderMateriaal";
import { useStore } from "../../../../stores/appStore";

export function DoorHandle(props) {
	const { nodes, materials } = useGLTF("/models/doorhandle.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]}>
					{drawingplan && <Shadermateriaal />}
				</mesh>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]}>
					{drawingplan && <Shadermateriaal />}
				</mesh>
			</group>
		</group>
	);
}

useGLTF.preload("/models/doorhandle.glb");
