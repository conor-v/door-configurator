import { useGLTF } from "@react-three/drei";
import { RepeatWrapping, TextureLoader, Vector2 } from "three";

export function GlasDoorFrame(props) {
	const { nodes } = useGLTF("/ferro_solid_frame.glb");
	const textureLoader = new TextureLoader();
	const grainTexture = textureLoader.load("./metaalTexture/noise2.jpg");

	grainTexture.repeat = new Vector2(1, 1);
	grainTexture.wrapS = RepeatWrapping;
	grainTexture.wrapT = RepeatWrapping;

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} scale={-0.017}>
				<meshStandardMaterial color={props.handleBorderColor()} metalness={0.6} roughness={0.5} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/ferro_solid_frame.glb");
