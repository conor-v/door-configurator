import { useGLTF } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useStore } from "../../../../stores/appStore";

export const Door14 = (props) => {
	const { nodes, materials } = useGLTF("/doormodels/door14.glb");
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
			<group rotation={[Math.PI, Math.PI / 2, Math.PI / 2]} scale={0.84} scale-z={1} position={[-4.5, 6.9, -0.5]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02033.geometry}
					material={materials["Wood___Plastic_Frames.001"]}
				/>

				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Set_D_Pattern_02033_3.geometry}
					material={materials["Glass.001"]}
				/>
			</group>
		</a.group>
	);
};

useGLTF.preload("/doormodels/door14.glb");
