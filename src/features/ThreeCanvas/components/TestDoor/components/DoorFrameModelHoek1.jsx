import { useGLTF } from "@react-three/drei";
import { useStore } from "../../../../../stores/appStore";
import Shadermateriaal from "../../../../../components/ShaderMateriaal";

export const DoorFrameModelHoek1 = (props) => {
	const { nodes } = useGLTF("/models/doorframe_hoek1.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={nodes.Cube002.material}
				rotation={[0, 0, Math.PI]}
				scale={[-0.265, -0.001, -0.001]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#55585d"} />}
			</mesh>
		</group>
	);
};

useGLTF.preload("/models/doorframe_hoek1.glb");
