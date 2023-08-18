import { useGLTF } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useStore } from "../../../../stores/appStore";

export const Door11 = (props) => {
	const { nodes, materials } = useGLTF("/doormodels/door11.glb");
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 180, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	return (
		<a.group {...props} dispose={null} position={[6, 0, 0.2]} rotation-y={rotation}>
			<group position={[-5 - 5.9, 0.5, 0.25]} rotation={[-Math.PI, 4.7, -Math.PI]} scale={12}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]} />
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.DBMULTILIJN_door001.geometry}
				material={materials["Material.057"]}
				position={[-0.05 - 6.48, 0, -0.2]}
				rotation={[0, 0, 0]}
				scale={0.306}
				scale-x={0.365}
			/>
		</a.group>
	);
};

useGLTF.preload("/doormodels/door11.glb");
