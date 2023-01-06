import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import style from "./home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./loading.css";

function Home() {
  //   let news = [];
  const [category, setCategory] = useState("business");
  const [news, setNews] = useState("");

  const changeCategory = async (e) => {
    setCategory(e);
  };

  const getNews = async (target) => {
    const topNews = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${target}&country=us&apiKey=91494ac366524b34a0b9fa7ecf40f9b2`
    );
    setNews(topNews.data);
  };

  useEffect(() => {
    getNews(category);
    setTimeout(() => {
      setComponent(false);
      setNoticias(true);
    }, 800);
  }, [category]);

  const [estado, setComponent] = useState(true);
  const [noticias, setNoticias] = useState(false);

  function set(target) {
    setCategory(target);
    setNews("");
    getNews(target);

    setComponent(true);
    setNoticias(false);
    setTimeout(() => {
      setComponent(false);
      setNoticias(true);
    }, 700);
  }

  return (
    <div>
      <NavBar changeCategory={changeCategory} set={set} />
      <div className={style.container}>
        <div className={estado === true ? "loading" : ""}></div>
        <div className={style.cards}>
          {noticias
            ? news &&
              news.articles.map((e, index) => {
                return (
                  <Link key={index} to={`/new/${e.title}`}>
                    <div className={style.card} key={index}>
                      <Card sx={{ maxWidth: 500 }}>
                        <img
                          className={style.img}
                          src={
                            e.urlToImage
                              ? e.urlToImage
                              : "https://imgs.search.brave.com/c_WcnrHvAf5wxc0kXTHlCuVIzUwLVm1nXj974P5Rpes/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudGVjaHNwb3Qu/Y29tL2FydGljbGVz/LWluZm8vMTM3MS9p/bWFnZXMvMjAxNy0w/NC0wNi1pbWFnZS0y/LmpwZw"
                          }
                          alt="img"
                        />
                        {/* <CardMedia sx={{ height: 200 }} image={e.urlToImage} /> */}
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {e.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {e.description}
                          </Typography>
                        </CardContent>
                        <CardActions className={style.actions}>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </div>
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Home;
