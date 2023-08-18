import Sidepanel from "@/features/Sidepanel";
import ThreeCanvas from "@/features/ThreeCanvas";
import { Container } from "./styles";
import { useEffect } from "react";
import DeurData from "../../../data/config/dataset1.json";
import { useStore } from "../../../stores/appStore";

const Home = () => {
	const updateObject = useStore((state) => state.updateObject);

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

	return (
		<Container>
			<ThreeCanvas />
			<Sidepanel width={400} />
		</Container>
	);
};

export default Home;
