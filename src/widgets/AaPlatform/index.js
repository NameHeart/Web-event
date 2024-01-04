import { AaPlatformStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const AaPlatform = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state);

  return (
    <AaPlatformStyled>
      <div>Container</div>
    </AaPlatformStyled>
  );
};

export default AaPlatform;
