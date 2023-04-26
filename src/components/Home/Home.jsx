import CardsHome from "../Cards/cardsHome";
import Slider from "../Slider/Slider";
import NavBar from "../NavBar/NavBar";
import style from "../Home/cards.module.css";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/actions/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CartBtn from "../CartBtn/CartBtn";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const userInfo = { email: user.email, name: user.name, sub: user.sub };
      dispatch(postUser(userInfo));
      console.log(userInfo);
    }
  }, [isAuthenticated, user, dispatch]);
  return (
    <div>
      <NavBar />
      <CartBtn />
      <p />
      <p />
      <div className="container">
        <div class="row">
          <div class="text-center">
            <div className="btn btn-secondary ">
              <Slider />
            </div>
          </div>
          <p />
        </div>
      </div>
      <div className={style.minibox}>
        <h1 class="display-4 text-dark text-center">🕹️ Best Games 🕹️</h1>
      </div>
      <div className="text-center ">
        <p />
        <CardsHome />
      </div>
    </div>
  );
};

export default Home;
