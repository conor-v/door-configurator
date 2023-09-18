import { useMemo } from "react";
import fragmentShader from "../../shader/outline_fragment";
import vertexShader from "../../shader/outline_vertex";

const Shadermateriaal = () => {
	const uniforms = useMemo(
		() => ({
			thickness: {
				value: 1,
			},
		}),
		[]
	);

	return <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />;
};

export default Shadermateriaal;
