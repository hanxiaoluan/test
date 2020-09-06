import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
interface toDetailProps {
  image: string;
  ig_handle: string;
  date: string;
  _uid: string;
}

const formatTime = (date: string) =>
  dayjs(date.split(" ")[0]).format("MMMM YYYY");
const LinkToDetail: React.FC<toDetailProps> = ({
  image,
  ig_handle,
  date,
  _uid,
}) => {
  return (
    <Link to={`detail/${_uid}`} className="link">
      <img src={image} alt="" data-src={image} />
      <p className="ig_handle">
        <b>{ig_handle}</b> <br />
        {formatTime(date)}
      </p>
    </Link>
  );
};
export default LinkToDetail;
