import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const GoToEpisodes = ({ data }) => {
  return (
    <div className="go-to-episodes">
      <Link
        to={`/tv/series/${data.id}/episodes`}
        state={{
          sesons: data?.number_of_seasons,
          posterUrl: data?.poster_path,
          title: data?.name,
        }}
      >
        <h1>{data.number_of_episodes} פרקים קיימים<MdKeyboardDoubleArrowLeft/></h1>
      </Link>
      <div className="last-episodes">
        <div></div>
      </div>
    </div>
  );
};

export default GoToEpisodes;
