// import { DirectionalLightHelper } from "three";
// import { useHelper } from "@react-three/drei";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { useRef } from "react";

const Lights = () => {
	const directLight = useRef(null);
	const directLight2 = useRef(null);
	// const directLight3 = useRef(null);
	RectAreaLightUniformsLib.init();
	// useHelper(directLight, DirectionalLightHelper, 1, "red");
	// useHelper(directLight2, DirectionalLightHelper, 1, "green");
	// useHelper(directLight3, DirectionalLightHelper, 1, "red");
	const rectAreaLight = useRef();
	// useHelper(rectAreaLight, RectAreaLightHelper);
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-120, 151, 55]} color={0xffffff} intensity={0.5} ref={directLight} />
			<directionalLight position={[190, 30, -5]} color={0xffffff} intensity={0.5} ref={directLight2} />
			{/* <directionalLight position={[20, 5, 405]} color={0xffffff} intensity={0.001} ref={directLight3} /> */}
			<rectAreaLight
				ref={rectAreaLight}
				position={[0, 1, 3]}
				width={0.5}
				height={2}
				color={"#FEF4D9"}
				intensity={2}
				rotation={[0, 0, -Math.PI / 6]}
			/>
		</>
	);
};

export default Lights;
