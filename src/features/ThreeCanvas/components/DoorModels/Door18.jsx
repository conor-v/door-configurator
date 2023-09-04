import { useGLTF } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useStore } from "../../../../stores/appStore";

export const Door18 = (props) => {
	const { nodes, materials } = useGLTF("/doormodels/door18.glb");
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 180, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	return (
		<a.group {...props} dispose={null} position={[4.7, 0, 0.5]} rotation-y={rotation}>
			<group position={[-2.4 - 5.9, 0.5, -0.1]} rotation={[-Math.PI, 4.7, -Math.PI]} scale={12}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]} />
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]} />
			</group>
			<group rotation={[Math.PI / 2, 0, 0]} position={[0.45, 0, -0.3]} scale={[1.03, 1.05, 1.067]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02049.geometry}
					material={materials["Wood___Plastic_Frames.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02049_1.geometry}
					material={materials["Mate_White.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02049_2.geometry}
					material={materials["Mate_Silver.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02049_3.geometry}
					material={materials["Glass.002"]}
				/>
			</group>
		</a.group>
	);
};

useGLTF.preload("/doormodels/door18.glb");
