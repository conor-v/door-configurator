import { useStore } from "../../../../../stores/appStore";
import { Door1 } from "../../DoorModels/Door1";
import { Door2 } from "../../DoorModels/Door2";
import { Door3 } from "../../DoorModels/Door3";
import { Door4 } from "../../DoorModels/Door4";
import { Door5 } from "../../DoorModels/Door5";
import { Door6 } from "../../DoorModels/Door6";
import { Door7 } from "../../DoorModels/Door7";
import { Door8 } from "../../DoorModels/Door8";
import { Door9 } from "../../DoorModels/Door9";
import { Door10 } from "../../DoorModels/Door10";
import { Door11 } from "../../DoorModels/Door11";
import { Door12 } from "../../DoorModels/Door12";
import { Door13 } from "../../DoorModels/Door13";
import { Door14 } from "../../DoorModels/Door14";
import { Door15 } from "../../DoorModels/Door15";
import { Door16 } from "../../DoorModels/Door16";
import { Door17 } from "../../DoorModels/Door17";
import { Door18 } from "../../DoorModels/Door18";
import { Door19 } from "../../DoorModels/Door19";
import { Door20 } from "../../DoorModels/Door20";
import { Door21 } from "../../DoorModels/Door21";
import { Door22 } from "../../DoorModels/Door22";
import { Door23 } from "../../DoorModels/Door23";
import { Door24 } from "../../DoorModels/Door24";
import { Door25 } from "../../DoorModels/Door25";
import { Door26 } from "../../DoorModels/Door26";
import { Door27 } from "../../DoorModels/Door27";
import { Door28 } from "../../DoorModels/Door28";

const SingleDoor = ({ handleDeurColor }) => {
	const { doorVariant } = useStore((state) => state.door.gekozendeur);

	const DoorSwitch = () => {
		switch (doorVariant) {
			case "Model1":
				return <Door1 handleDeurColor={handleDeurColor} />;
			case "Model2":
				return <Door2 handleDeurColor={handleDeurColor} />;
			case "Model3":
				return <Door3 handleDeurColor={handleDeurColor} />;
			case "Model4":
				return <Door4 handleDeurColor={handleDeurColor} />;
			case "Model5":
				return <Door5 handleDeurColor={handleDeurColor} />;
			case "Model6":
				return <Door6 handleDeurColor={handleDeurColor} />;
			case "Model7":
				return <Door7 handleDeurColor={handleDeurColor} />;
			case "Model8":
				return <Door8 handleDeurColor={handleDeurColor} />;
			case "Model9":
				return <Door9 handleDeurColor={handleDeurColor} />;
			case "Model10":
				return <Door10 handleDeurColor={handleDeurColor} />;
			case "Model11":
				return <Door11 handleDeurColor={handleDeurColor} />;
			case "Model12":
				return <Door12 handleDeurColor={handleDeurColor} />;
			case "Model13":
				return <Door13 handleDeurColor={handleDeurColor} />;
			case "Model14":
				return <Door14 handleDeurColor={handleDeurColor} />;
			case "Model15":
				return <Door15 handleDeurColor={handleDeurColor} />;
			case "Model16":
				return <Door16 handleDeurColor={handleDeurColor} />;
			case "Model17":
				return <Door17 handleDeurColor={handleDeurColor} />;
			case "Model18":
				return <Door18 handleDeurColor={handleDeurColor} />;
			case "Model19":
				return <Door19 handleDeurColor={handleDeurColor} />;
			case "Model20":
				return <Door20 handleDeurColor={handleDeurColor} />;
			case "Model21":
				return <Door21 handleDeurColor={handleDeurColor} />;
			case "Model22":
				return <Door22 handleDeurColor={handleDeurColor} />;
			case "Model23":
				return <Door23 handleDeurColor={handleDeurColor} />;
			case "Model24":
				return <Door24 handleDeurColor={handleDeurColor} />;
			case "Model25":
				return <Door25 handleDeurColor={handleDeurColor} />;
			case "Model26":
				return <Door26 handleDeurColor={handleDeurColor} />;
			case "Model27":
				return <Door27 handleDeurColor={handleDeurColor} />;
			case "Model28":
				return <Door28 handleDeurColor={handleDeurColor} />;

			default:
				return <Door1 handleDeurColor={handleDeurColor} />;
		}
	};

	return (
		<group position={[-0.01, 0, 2.18]} scale={0.09}>
			{DoorSwitch()}
		</group>
	);
};

export default SingleDoor;
