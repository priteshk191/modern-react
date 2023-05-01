import React, { useState } from "react";
import styles from "./imageCropper.module.scss";
import { MdDelete } from "react-icons/Md";

interface Image {
  url: string;
  name: string;
}

const ImageCropper: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagesArray: Image[] = Array.from(files).reduce(
        (acc: Image[], file) => {
          if (
            !images.some((image) => image.url === URL.createObjectURL(file))
          ) {
            acc.push({
              url: URL.createObjectURL(file),
              name: file.name,
            });
          }
          return acc;
        },
        []
      );
      setImages(images.concat(imagesArray));
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  const handleRemoveImg = () => {
    const data = images[selectedImageIndex].name;
    setImages((preValue) => preValue.filter((img: any) => img.name !== data));
  };

  return (
    <div className={styles.imageUploadWrapper}>
      <div className={styles.fileButtonOuter}>
        <div className={styles.fileButton}>
          <input
            type="file"
            className={styles.input}
            multiple
            onChange={handleImageUpload}
          />
          Upload Image
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.sidebar}>
          {images.map((image, index) => (
            <div
              key={image.name}
              className={`${styles.thumbnail} ${
                index === selectedImageIndex ? styles.active : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image.url} alt={image.name} />
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <div className={styles.preview}>
            <div className={styles.deletIcon} onClick={handleRemoveImg}>
              <MdDelete size={30} />
            </div>
            <img
              src={images[selectedImageIndex]?.url}
              alt={images[selectedImageIndex]?.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCropper;
