import ChevronLeft from "@/assets/svgs/ChevronLeft";
import { StyledBox, PanelToggle, PannelContent, PannelContentBox, ButtonDoor } from "./styles";
import { useState } from "react";
import { useStore } from "../../stores/appStore";
import Doors from "./components/sidePanelContent/doors";
import Layout from "./components/sidePanelContent/layout";
import Aluminium from "./components/sidePanelContent/aluminium";
import DoorGrid from "./components/sidePanelContent/doorGrid";
import DoorVarianten from "./components/sidePanelContent/doorVarianten";
import PartitionGrid from "./components/sidePanelContent/partitionGrid";
import GlasMaterial from "./components/sidePanelContent/glasMaterial";
import Grepen from "./components/sidePanelContent/grepen";
import Sloten from "./components/sidePanelContent/sloten";
import Display from "./components/sidePanelContent/display";
import Overview from "./components/sidePanelContent/overview";
import PrijsBerekening from "./components/sidePanelContent/prijsberekening";
import Scharnieren from "./components/sidePanelContent/scharnieren";
import Afmetingen from "./components/sidePanelContent/afmetingen";
import IconNav from "./components/iconNav";

const Sidepanel = ({ width = 500 }) => {
	const [open, setOpen] = useState(true);
	const sidePanelType = useStore((state) => state.sidepanel.sidePanelType);
	const { doorOpen, sideOpen } = useStore((state) => state.sidepanel);
	const updateObject = useStore((state) => state.updateObject);

	const sidePanelComp = () => {
		switch (sidePanelType) {
			case "doors":
				return <Doors />;

			case "layout":
				return <Layout />;

			case "aluminium":
				return <Aluminium />;

			case "door grid":
				return <DoorGrid />;

			case "door varianten":
				return <DoorVarianten />;

			case "partition grid":
				return <PartitionGrid />;

			case "material":
				return <GlasMaterial />;

			case "grepen":
				return <Grepen />;

			case "sloten":
				return <Sloten />;

			case "display":
				return <Display />;

			case "overview":
				return <Overview />;

			case "prijsberekening":
				return <PrijsBerekening />;

			case "scharnieren":
				return <Scharnieren />;

			case "afmetingen":
				return <Afmetingen />;

			default:
				return <Doors />;
		}
	};

	return (
		<StyledBox open={open} width={width}>
			<PanelToggle open={open} onClick={() => setOpen((p) => !p)}>
				<ChevronLeft />
			</PanelToggle>
			<ButtonDoor sideOpen={sideOpen} onClick={() => updateObject("sidepanel", { doorOpen: Number(!doorOpen) })}>
				<img src={doorOpen ? "/door_closed.svg" : "/door.svg"} alt="dooricon" />
			</ButtonDoor>
			<PannelContent>
				<PannelContentBox>{sidePanelComp()}</PannelContentBox>
				<IconNav />
			</PannelContent>
		</StyledBox>
	);
};

export default Sidepanel;
