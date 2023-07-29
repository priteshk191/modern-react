import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

const ImageRecognition: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [predictions, setPredictions] = useState<
    { className: string; probability: number }[]
  >([]);

  useEffect(() => {
    const getPredictions = async () => {
      try {
        const response = await axios.post(
          "https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/versions/aa9ca48295b37401f8af92ad1af0d91d/outputs",
          {
            inputs: [{ data: { image: { url: imageUrl } } }],
          },
          {
            headers: {
              Authorization: `Key ${process.env.REACT_APP_CLARIFAI_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const predictions =
          response.data.outputs[0]?.data?.concepts.map((concept: any) => ({
            className: concept.name,
            probability: concept.value,
          })) || [];
        setPredictions(predictions);
      } catch (error) {
        console.error("Error getting predictions:", error);
      }
    };

    if (imageUrl) {
      getPredictions();
    }
  }, [imageUrl]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Upload image to Imgur
      const imgurResponse = await axios.post(
        "https://api.imgur.com/3/image",
        formData,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
          },
        }
      );

      // Set the image URL to the response link from Imgur
      setImageUrl(imgurResponse.data.data.link);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {predictions.map((prediction) => (
        <div key={prediction.className}>
          {prediction.className}: {prediction.probability.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default ImageRecognition;
