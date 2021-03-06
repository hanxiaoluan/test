import React, { useState, useEffect } from "react";
import request from "../../utils/request";
import "./index.scss";
import Post from "./Post";
import MyForm from "./Form";
import dayjs from "dayjs";
const _ = require("lodash");
export interface contentType {
  [key: string]: any[];
  storage: any[];
  living: any[];
  bedroom: any[];
  dining: any[];
  other: any[];
}
interface activeType {
  [key: string]: boolean;
  storage: boolean;
  living: boolean;
  bedroom: boolean;
  dining: boolean;
  other: boolean;
}
const Home = () => {
  const [content, setContent] = useState<contentType>({} as contentType);
  const [active, setActive] = useState<activeType>({
    storage: true,
    living: false,
    bedroom: false,
    dining: false,
    other: false,
  });
  const submitPost = (
    ImageUrl: string,
    kind: string,
    ig_handle: string,
    _uid: string
  ) => {
    console.log(Image, kind);
    let _content = _.cloneDeep(content);
    _content[kind].push({
      Image: ImageUrl,
      _uid: _uid,
      date: dayjs().format("YYYY-MM-DD HH:mm"),
      ig_handle: ig_handle,
    });
    setContent(_content);
    if (!active[kind]) {
      toggleCollpase(kind);
    }
  };
  const toggleCollpase = (value: string) => {
    if (active[value] === true) {
      setActive({
        storage: false,
        living: false,
        bedroom: false,
        dining: false,
        other: false,
      });
    } else {
      let _active = _.cloneDeep(active);
      Object.keys(_active).map((key) => (_active[key] = false));
      _active[value] = true;
      setActive(_active);
    }
  };
  useEffect(() => {
    const getHomeData = async () => {
      const { story } = await request.get("social-images");
      setContent(story.content);
    };
    getHomeData();
  }, []);
  return (
    <div className="home__wrapper">
      <aside className="home container">
        <MyForm submitPost={submitPost} />
        <Post
          commoditys={content.storage}
          collapsed={active.storage}
          handleClick={() => toggleCollpase("storage")}
          kind="storage"
        />
        <Post
          commoditys={content.living}
          collapsed={active.living}
          handleClick={() => toggleCollpase("living")}
          kind="living"
        />
        <Post
          commoditys={content.bedroom}
          collapsed={active.bedroom}
          handleClick={() => toggleCollpase("bedroom")}
          kind="bedroom"
        />
        <Post
          commoditys={content.dining}
          collapsed={active.dining}
          handleClick={() => toggleCollpase("dining")}
          kind="dining"
        />
        <Post
          commoditys={content.other}
          collapsed={active.other}
          handleClick={() => toggleCollpase("other")}
          kind="other"
        />
      </aside>
    </div>
  );
};
export default Home;
