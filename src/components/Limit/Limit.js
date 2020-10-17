import React from "react";
import Style from "./Limit.module.scss";

const Limit = () => {
  return (
    <div className={Style.overlay}>
      <div className={Style.wrapper}>
        YouTube Data APIのリクエスト数が上限に達しました。
        <br />
        また明日以降に起こしください。
      </div>
    </div>
  );
};

export default Limit;
