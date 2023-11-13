import { LoadingContainer } from "./styles";
import { ClipLoader } from "react-spinners";

const Loading = () => {
	return (
		<LoadingContainer>
			<p>Offerte aan het maken...</p>
			<ClipLoader color="#333333" speedMultiplier={0.5} size={70} />
		</LoadingContainer>
	);
};

export default Loading;
