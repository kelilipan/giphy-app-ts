import Image from "../components/GifCard";
import { useEffect } from "react";
import { getTrending } from "../lib/giphy";
import { useDispatch, useSelector } from "react-redux";
import { storeImage } from "../redux/store/gifs";
const Trending = () => {
  const images = useSelector((state) => state.gifs.images);
  const dispatch = useDispatch();
  useEffect(() => {
    getTrending("mario").then((data) => {
      dispatch(storeImage(data.data));
    });
  }, [dispatch]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Trending</h1>
      <div className="imageList">
        {images.map((image) => {
          return (
            image.rating === "g" && (
              <Image
                key={image.id}
                title={image.title}
                url={image.images.fixed_height.url}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
