import React from "react";
import { Link } from "react-router-dom";

import Style from "./Header.module.scss";
//import { useHistory } from "react-router-dom";
//import { Store } from "../../store/index";

const Header = () => {
  //  const [term, setTerm] = useState("");
  //  const history = useHistory();
  //  const { globalState, setGlobalState } = useContext(Store);
  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    setGlobalState({ type: "SET_TERM", payload: { term } });
  //    history.push(`./search?query=${term}`);
  //  };
  /*
  useEffect(() => {
    setTerm(globalState.term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
*/
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <h1>
          <Link to="/">MOVEMENT</Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
