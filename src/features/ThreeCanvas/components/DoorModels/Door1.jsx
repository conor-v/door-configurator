import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useStore } from "../../../../stores/appStore";
import * as THREE from "three";

export const Door1 = (props) => {
	const { nodes, materials } = useGLTF("/doormodels/door1.glb");
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 180, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	const doorTexture = useTexture("/plywood_diff_1k.jpg");
	const doorRoughnessTexture = useTexture("/plywood_rough_1k.jpg");
	const doorNormalTexture = useTexture("/plywood_nor_dx_1k.jpg");
	const doorAOTexture = useTexture("/plywood_ao_1k.jpg");
	const doorArnTexture = useTexture("/plywood_arm_1k.jpg");

	const doorMaterial = new THREE.MeshStandardMaterial({
		map: doorTexture,
		roughnessMap: doorRoughnessTexture,
		normalMap: doorNormalTexture,
		aoMap: doorAOTexture,
		envMap: doorArnTexture,
	});

	return (
		<a.group {...props} dispose={null} position={[4.7, 0, 0.5]} rotation-y={rotation}>
			<group position={[-2.4 - 5.9, 0.5, -0.1]} rotation={[-Math.PI, 4.7, -Math.PI]} scale={12}>
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_1.geometry} material={materials["Metall.Aniz"]} />
				<mesh castShadow receiveShadow geometry={nodes.Door_Handle_01_2.geometry} material={materials["Back.002"]} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["Fineer-Eik-cracks_door"].geometry}
				material={doorMaterial}
				position={[-5, 0, -0.5]}
				rotation={[0, 0, 0]}
				scale={0.28}
			/>
		</a.group>
	);
};

useGLTF.preload("/doormodels/door1.glb");
