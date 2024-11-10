import { GridItem } from "./../GridItem/GridItem";
import css from "./PhotosGalleryItem.module.css";
export const PhotosGalleryItem = ({ src, alt, avg_color }) => {
  return (
    <>
      <GridItem>
        <div
          style={{ borderColor: avg_color, backgroundColor: avg_color }}
          className={css.thumb}>
          <img src={src.large} alt={alt} />
        </div>
      </GridItem>
    </>
  );
};
