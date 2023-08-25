import Sidepanel from "@/features/Sidepanel";
import ThreeCanvas from "@/features/ThreeCanvas";
import { Container } from "./styles";
import { useEffect } from "react";
import DeurData from "../../../data/config/dataset1.json";
import { useStore } from "../../../stores/appStore";
import Popup from "../../../features/Popup";
import GridData from "../../../data/doorgrid.json";
import AanvraagForm from "@/features/ApplicationFrom";

const Home = () => {
	const updateObject = useStore((state) => state.updateObject);
	const popup = useStore((state) => state.door.popup);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const aanvragen = useStore((state) => state.pdf.aanvragen);

	useEffect(() => {
		const deurenLijst = [];
		DeurData.forEach((deur, index) => {
			deurenLijst.push(deur);
			if (index === 0) {
				updateObject("door", { gekozendeur: deur });
			}
		});

		updateObject("door", { deuren: deurenLijst });
	}, []);

	useEffect(() => {
		const gridArray = GridData.filter((grid) => grid.name === gekozendeur.doorGridType);
		const arrayCopy = JSON.parse(JSON.stringify(gridArray));

		if (JSON.stringify(gekozendeur) !== "{}") {
			gekozendeur.partitionGridHor = arrayCopy[0].gridHorizontalArray;
			gekozendeur.partitionGridVer = arrayCopy[0].gridVerticalArray;

			updateObject("door", { gekozendeur: gekozendeur });
		}
	}, [gekozendeur.doorGridType]);

	return (
		<Container>
			<ThreeCanvas />
			<Sidepanel width={400} />
			{popup && <Popup />}
			{aanvragen && <AanvraagForm />}
		</Container>
	);
};

export default Home;
