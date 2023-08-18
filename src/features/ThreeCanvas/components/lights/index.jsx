// import { DirectionalLightHelper } from "three";
// import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
	const directLight = useRef(null);
	const directLight2 = useRef(null);
	const directLight3 = useRef(null);
	// useHelper(directLight, DirectionalLightHelper, 1, "red");
	// useHelper(directLight2, DirectionalLightHelper, 1, "green");
	// useHelper(directLight3, DirectionalLightHelper, 1, "red");
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-120, 151, 55]} color={0xffffff} intensity={0.5} ref={directLight} />
			<directionalLight position={[190, 30, -5]} color={0xffffff} intensity={0.5} ref={directLight2} />
			<directionalLight position={[20, 5, 405]} color={0xffffff} intensity={0.001} ref={directLight3} />
		</>
	);
};

export default Lights;
