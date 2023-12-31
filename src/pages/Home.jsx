import Gamecard from "../component/Gamecard";
import StartScreen from "../component/StartScreen";
import { gameArr } from "../assets/gamesData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#111111]  text-white w-full">
      <StartScreen />
      <div className="w-full h-24 flex items-center justify-center text-lg font-semibold tracking-wider">
        <span>
          <q>
            {" "}
            FUN FACT: Your brain’s storage capacity is considered virtually
            unlimited !{" "}
          </q>
        </span>
      </div>
      <div className="w-full bg-[#F79540]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-7xl text-black font-extrabold tracking-wider mt-10 mb-10">
            Play All Games !
          </h2>
          <div className=" flex justify-start flex-wrap w-3/4 ">
            {gameArr.map((elem) => {
              return (
                <Link to={elem.path}>
                  <div className="m-6">
                    <Gamecard data={elem} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
