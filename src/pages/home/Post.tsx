import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { getDetail, actionType } from "../../action";
import { storeStateType } from "../../reducer";
import LinkToDetail from "./LinkToDetail";
type postProps = {
  collapsed: boolean;
  handleClick: (event: React.MouseEvent) => void;
  commoditys: any[];
  kind: string;
};
type ReduxType = ReturnType<typeof mapDispatchToProps>;
const Post: React.FC<postProps & ReduxType> = ({
  handleClick,
  collapsed,
  commoditys,
  toDetail,
  kind,
}) => {
  return (
    <div className="postItems">
      <h5 className="postItems__header">
        <span>{kind}</span>
        <span
          onClick={(e) => {
            e.preventDefault();
            handleClick(e);
          }}
        >
          {collapsed ? "-" : "+"}
        </span>
      </h5>
      {collapsed && (
        <ul className="postItems__content row">
          {commoditys &&
            commoditys.map((commodity) => {
              return (
                <li
                  key={commodity._uid}
                  className="postItem col-sm-6 col-md-4 col-lg-3 "
                  onClick={() => toDetail({ ...commodity, kind })}
                >
                  <LinkToDetail
                    image={commodity.image}
                    ig_handle={commodity.ig_handle}
                    date={commodity.date}
                    _uid={commodity._uid}
                  />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch: Dispatch<actionType>) => ({
  toDetail: (commodity: storeStateType) => dispatch(getDetail(commodity)),
});
export default connect(null, mapDispatchToProps)(Post);
