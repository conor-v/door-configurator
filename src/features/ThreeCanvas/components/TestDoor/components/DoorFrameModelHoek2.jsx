import { useGLTF } from "@react-three/drei";
import { useStore } from "../../../../../stores/appStore";
import Shadermateriaal from "../../../../../components/ShaderMateriaal";

export const DoorFrameModelHoek2 = (props) => {
	const { nodes } = useGLTF("/models/doorframe_hoek2.glb");
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={nodes.Cube001.material}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[-0.26, -0.001, -0.001]}>
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#55585d"} />}
			</mesh>
		</group>
	);
};

useGLTF.preload("/models/doorframe_hoek2.glb");
