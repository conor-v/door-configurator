import { useLoader } from "@react-three/fiber";
import { useStore } from "../../../../stores/appStore";
import { RepeatWrapping, TextureLoader } from "three";
import WoodFrame from "./components/WoodFrame";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Shadermateriaal from "../../../../components/ShaderMateriaal";
import Deur1 from "./components/varianten/deur1";
import Deur4 from "./components/varianten/Deur4";
import Deur2 from "./components/varianten/Deur2";
import Deur3 from "./components/varianten/Deur3";
import Deur5 from "./components/varianten/Deur5";
import Deur6 from "./components/varianten/Deur6";
import Deur7 from "./components/varianten/Deur7";
import Deur8 from "./components/varianten/Deur8";
import Deur9 from "./components/varianten/Deur9";

const WoodenDoor = ({ materialProps, handleGlassColor }) => {
	const { doorWidth, doorHeight, doorVariant } = useStore((state) => state.door.gekozendeur);
	const { doorOpen, drawingplan } = useStore((state) => state.sidepanel);

	const [colorMap, colorMap2, colorMap3, colorMap4] = useLoader(TextureLoader, [
		"./wood.jpg",
		"./wood2.jpg",
		"./wood3.jpg",
		"./wood4.jpg",
	]);

	// Draai de texture met 90 graden (met de klok mee)
	colorMap.center.set(0.5, 0.5);
	colorMap.rotation = Math.PI / 2;

	colorMap2.center.set(0.5, 0.5);
	colorMap2.rotation = Math.PI / 2;

	// Pas de repeat-eigenschap aan voor de materialen
	colorMap.wrapS = colorMap.wrapT = colorMap2.wrapS = colorMap2.wrapT = RepeatWrapping;
	colorMap.repeat.set(1, doorHeight / 1000);
	colorMap2.repeat.set(1, doorHeight / 1000);
	colorMap3.wrapS = colorMap3.wrapT = colorMap4.wrapS = colorMap4.wrapT = RepeatWrapping;
	colorMap3.repeat.set(doorWidth / 1000, 1);
	colorMap4.repeat.set(doorWidth / 1000, 1);

	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	const handleVariant = (name) => {
		switch (name) {
			case "deur1":
				return <Deur1 materialProps={materialProps} handleGlassColor={handleGlassColor} />;
			case "deur2":
				return <Deur2 colorMap={colorMap} colorMap4={colorMap4} />;
			case "deur3":
				return (
					<Deur3
						colorMap={colorMap}
						colorMap4={colorMap4}
						materialProps={materialProps}
						handleGlassColor={handleGlassColor}
					/>
				);
			case "deur4":
				return (
					<Deur4
						colorMap={colorMap}
						colorMap4={colorMap4}
						materialProps={materialProps}
						handleGlassColor={handleGlassColor}
					/>
				);
			case "deur5":
				return <Deur5 colorMap4={colorMap4} materialProps={materialProps} handleGlassColor={handleGlassColor} />;
			case "deur6":
				return <Deur6 colorMap={colorMap} colorMap4={colorMap4} />;
			case "deur7":
				return <Deur7 colorMap={colorMap} colorMap2={colorMap2} />;
			case "deur8":
				return <Deur8 colorMap={colorMap} colorMap4={colorMap4} />;
			case "deur9":
				return (
					<Deur9
						colorMap={colorMap}
						colorMap4={colorMap4}
						materialProps={materialProps}
						handleGlassColor={handleGlassColor}
					/>
				);
			default:
				return <Deur1 materialProps={materialProps} handleGlassColor={handleGlassColor} />;
		}
	};

	return (
		<group>
			{/* door outer frame */}
			<WoodFrame textures={[colorMap, colorMap2, colorMap4]} />

			{/* door */}
			<a.group rotation-y={rotation} position={[doorWidth / 1000 / 2, doorHeight / 1000 / 2, 2.21]}>
				<group position={[-doorWidth / 1000 / 2, 0, 0]}>
					{/* inner frame  (de 4 planken van de deur zelf)*/}
					<group>
						<mesh position={[-doorWidth / 1000 / 2 + 0.083, 0, 0]}>
							<boxGeometry args={[0.166, doorHeight / 1000, 0.04]} />
							{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap} />}
						</mesh>

						<mesh position={[doorWidth / 1000 / 2 - 0.083, 0, 0]}>
							<boxGeometry args={[0.166, doorHeight / 1000, 0.04]} />
							{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap2} />}
						</mesh>

						{doorVariant.value !== "deur7" && (
							<>
								{" "}
								<mesh position={[0, doorHeight / 1000 / 2 - 0.083, 0]}>
									<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
									{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap3} />}
								</mesh>
								<mesh position={[0, -doorHeight / 1000 / 2 + 0.083, 0]}>
									<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
									{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
								</mesh>
							</>
						)}
					</group>

					{/* binne kant deur */}
					<group>{handleVariant(doorVariant.value)}</group>
				</group>
			</a.group>
		</group>
	);
};

export default WoodenDoor;
