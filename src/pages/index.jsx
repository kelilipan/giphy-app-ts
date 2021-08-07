import Image from "../components/GifCard";
import SearchBox from "../components/search-box";
import { useEffect, useState } from "react";
import { getSearchImage } from "../lib/giphy";
import { useDispatch, useSelector } from "react-redux";
import { storeImage } from "../redux/store/gifs";
import Grid from "@material-ui/core/Grid";
const Index = () => {
  // const [images, setImages] = useState([]);
  const images = useSelector((state) => state.gifs.images);
  const dispatch = useDispatch();
  useEffect(() => {
    getSearchImage("mario").then((data) => {
      dispatch(storeImage(data.data));
    });
  }, [dispatch]);

  const [query, setQuery] = useState("");
  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  //function when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getSearchImage(query).then((data) => {
      //render response to state/DOM
      dispatch(storeImage(data.data));
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Search gif</h1>
      <SearchBox
        handleSubmit={handleSubmit}
        query={query}
        handleChange={onSearchChange}
      />
      <Grid container spacing={2} style={{ padding: "1em" }}>
        {images.map((image) => {
          return (
            image.rating === "g" && (
              <Grid item md={3} sm={4} lg={2}>
                <Image
                  key={image.id}
                  title={image.title}
                  url={image.images.fixed_height.url}
                />
              </Grid>
            )
          );
        })}
      </Grid>
    </div>
  );
};

export default Index;
