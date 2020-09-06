import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { storeStateType } from "../../reducer";
import "./index.scss";
/* interface detailProps {
  kind: string;
} */
type reduxType = ReturnType<typeof mapStateToProps>;
const Detail: React.FC<reduxType> = ({ kind, image, content, variants }) => {
  return (
    <div className="container detail-wrapper">
      <nav>
        <span>{kind}</span>
        <Link to="/home">Back</Link>
      </nav>
      <aside className="detail row">
        <img src={image} alt="" className="col" />
        <div className="detail__content col">
          <p>content: {content}</p>
          <p>varints:{variants}</p>
        </div>
      </aside>
    </div>
  );
};
const mapStateToProps = (state: { detail: storeStateType }) => ({
  content: state.detail.content,
  image: state.detail.image,
  _uid: state.detail._uid,
  date: state.detail.date,
  variants: state.detail.variants,
  ig_handle: state.detail.ig_handle,
  kind: state.detail.kind,
});

export default connect(mapStateToProps)(Detail);
