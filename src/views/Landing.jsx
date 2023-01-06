// import { dividerClasses } from "@mui/material";
import Spline from "@splinetool/react-spline";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.container_nav}>
          <div className={style.allNav}>
            <img
              className={style.logo}
              src="https://imgs.search.brave.com/6NnHdb4eVsNe9FHYtHQ8Rw_RkGbmUAx1aX_V99N7Gho/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMva2ZjL2tmY19Q/TkcyMC5wbmc"
              alt=""
            />
            {/* <div className={style.contenedor}> */}
            <div className={style.nav}>
              <ul className={style.ul}>
                <li className={style.li}>Home</li>
                <li className={style.li}>About</li>
                <li className={style.li}>News</li>
              </ul>
            </div>
            {/* </div> */}

            <button className={style.button}>Get Started</button>
            {/* ----------------- contendor nav */}
          </div>

          <div className={style.wrap}>
            <h1 className={style.title}>Your only place for news</h1>
            <Spline
              className={style.house}
              scene="https://prod.spline.design/dwINpOqs4Xmz6OJS/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
