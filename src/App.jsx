import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input />
        <button>追加</button>
      </div>
      <div className="imcomolete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div class="comolete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
