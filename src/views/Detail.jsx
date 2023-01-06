import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { title } = useParams();

  const [detail, setDetail] = useState("");

  const getDetail = async () => {
    const get = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=91494ac366524b34a0b9fa7ecf40f9b2"
    );

    const filter = get.data.articles.filter((e) => title === e.title);
    setDetail(filter);
  };

  useEffect(() => {
    getDetail();
    setTimeout(() => {
      setComponent(false);
      setNoticias(true);
    }, 1000);
  }, [getDetail]);

  const [estado, setComponent] = useState(true);
  const [noticias, setNoticias] = useState(false);

  return (
    <div>
      <div className={estado === true ? "loading" : ""}></div>
      {noticias
        ? detail &&
          detail.map((e, index) => {
            return (
              <div key={index}>
                <div>{e.title}</div>
                <img src={e.urlToImage} alt="img" />
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Detail;
