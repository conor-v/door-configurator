import { Environment } from "@react-three/drei";

const Lights = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<Environment files="/hdr/empty_warehouse_01_1k.hdr" />
		</>
	);
};

export default Lights;
