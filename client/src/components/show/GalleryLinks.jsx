import React from "react";
import { AiOutlineVideoCamera, AiOutlineCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const GalleryLinks = ({type,id,title,posterUrl}) => {
  const navigate = useNavigate();

  return (
    <div className="gallery-links">
      <div
        className="photos"
        onClick={() =>
          navigate(`/${type}/${id}/media/images`, {
            state: { posterUrl, title },
          })
        }
      >
        <AiOutlineCamera />
        <h2>תמונות</h2>
      </div>
      <div
        className="videos"
        onClick={() =>
          navigate(`/${type}/${id}/media/videos`, {
            state: { posterUrl, title },
          })
        }
      >
        <AiOutlineVideoCamera />
        <h2>וידיאו</h2>
      </div>
    </div>
  );
};

export default GalleryLinks;
