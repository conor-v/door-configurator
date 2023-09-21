import { useStore } from "../../../../stores/appStore";
import { FrameFragmentRaam } from "./components/FrameFragmentRaam";
import { LinkerRaamHoek } from "./components/LinkerRaamHoek";
import { OuterFrameFragment } from "./components/OuterFrameFragment";
import { OuterFrameLinkerHoek } from "./components/OuterFrameLinkerHoek";
import { OuterFrameRechterHoek } from "./components/OuterFrameRechterHoek";
import { RechterRaamHoek } from "./components/RechterRaamHoek";

const TestRaam = () => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const calcWidth = doorWidth / 1000;
	const calcHeight = doorHeight / 1000;

	const materialProps = {
		thickness: 0.2,
		roughness: 0.3,
		metalness: 0.1,
		clearcoat: 1,
		clearcoatRoughness: 0.1,
		transmission: 0.9,
		ior: 1,
		envMapIntensity: 25,
		color: "#ffffff",
		attenuationTint: "#ffe79e",
		attenuationDistance: 0.03,
		reflectivity: 0.1,
	};

	const calcScale = (minScale, maxScale, minLength, maxLength, side) => {
		return minScale + ((maxScale - minScale) * (side - minLength)) / (maxLength - minLength);
	};

	return (
		<group position={[0, 0, 2.19]}>
			{/* outerframe */}
			<group>
				{/* top outer frame */}
				<group position={[0, calcHeight - 0.03, -0.025]} rotation={[0, Math.PI, 0]}>
					<OuterFrameFragment scalex={calcScale(0.16, 1.77, 0.4, 3.2, calcWidth)} />
					<OuterFrameLinkerHoek position={[-calcWidth / 2 + 0.05, 0, 0]} />
					<OuterFrameRechterHoek position={[calcWidth / 2 - 0.05, 0, 0]} />
				</group>

				{/* bottom outer frame */}
				<group position={[0, +0.03, -0.025]} rotation={[Math.PI, 0, 0]}>
					<OuterFrameFragment scalex={calcScale(0.16, 1.77, 0.4, 3.2, calcWidth)} />
					<OuterFrameLinkerHoek position={[-calcWidth / 2 + 0.05, 0, 0]} />
					<OuterFrameRechterHoek position={[calcWidth / 2 - 0.05, 0, 0]} />
				</group>

				{/* right outer frame */}
				<group position={[calcWidth / 2 - 0.03, calcHeight / 2, -0.025]} rotation={[0, Math.PI, Math.PI / 2]}>
					<OuterFrameFragment scalex={calcScale(0.22, 1.25, 0.5, 2.3, calcHeight)} />
					<OuterFrameLinkerHoek position={[-calcHeight / 2 + 0.046, 0, 0]} />
					<OuterFrameRechterHoek position={[calcHeight / 2 - 0.0495, 0, 0]} />
				</group>

				{/* left outer frame */}
				<group position={[-calcWidth / 2 + 0.03, calcHeight / 2, -0.025]} rotation={[0, Math.PI, -Math.PI / 2]}>
					<OuterFrameFragment scalex={calcScale(0.22, 1.25, 0.5, 2.3, calcHeight)} />
					<OuterFrameLinkerHoek position={[-calcHeight / 2 + 0.049, 0, 0]} />
					<OuterFrameRechterHoek position={[calcHeight / 2 - 0.046, 0, 0]} />
				</group>
			</group>

			<mesh position={[0, calcHeight / 2, 0]}>
				<boxGeometry args={[calcWidth - 0.15, calcHeight - 0.15, 0.03]} />
				<meshPhysicalMaterial {...materialProps} />
				{/* <meshBasicMaterial color={"yellow"} /> */}
			</mesh>

			{/* Top frame */}
			<group position={[0, calcHeight - 0.09, 0]}>
				<FrameFragmentRaam scaleX={calcScale(0.095, 1.9, 0.4, 3.2, calcWidth)} />
				<LinkerRaamHoek position={[calcWidth / 2 - 0.11, 0, 0]} />
				<RechterRaamHoek position={[-calcWidth / 2 + 0.11, 0, 0]} />
			</group>

			{/* Left frame */}
			<group rotation={[0, 0, Math.PI / 2]} position={[-calcWidth / 2 + 0.09, calcHeight / 2, 0]}>
				<FrameFragmentRaam scaleX={calcScale(0.16, 1.32, 0.5, 2.3, calcHeight)} />
				<LinkerRaamHoek position={[calcHeight / 2 - 0.109, 0, 0]} />
				<RechterRaamHoek position={[-calcHeight / 2 + 0.109, 0, 0]} />
			</group>

			{/* Bottom frame */}
			<group rotation={[0, 0, Math.PI]} position={[0, 0.09, 0]}>
				<FrameFragmentRaam scaleX={calcScale(0.095, 1.9, 0.4, 3.2, calcWidth)} />
				<LinkerRaamHoek position={[calcWidth / 2 - 0.11, 0, 0]} />
				<RechterRaamHoek position={[-calcWidth / 2 + 0.11, 0, 0]} />
			</group>

			{/* Right frame */}
			<group rotation={[0, 0, -Math.PI / 2]} position={[calcWidth / 2 - 0.09, calcHeight / 2, 0]}>
				<FrameFragmentRaam scaleX={calcScale(0.16, 1.32, 0.5, 2.3, calcHeight)} />
				<LinkerRaamHoek position={[calcHeight / 2 - 0.109, 0, 0]} />
				<RechterRaamHoek position={[-calcHeight / 2 + 0.109, 0, 0]} />
			</group>
		</group>
	);
};

export default TestRaam;
