import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Home.scss";
import newBranchFirst from "./../../image/snapshot/new_branch_create_router_01.png";
import newBranchSecond from "./../../image/snapshot/new_branch_user_page.png";
import commitFirst from "./../../image/snapshot/create_router_02.png";
import commitSecond from "./../../image/snapshot/commit_01.png";
import commitMerged from "./../../image/snapshot/commit_this.png";
import checkout from "./../../image/snapshot/checkout.png";
import conflict from "./../../image/snapshot/conflicts.png";
import solveConflict from "./../../image/snapshot/solve_conflict_01.png";
import merge from "./../../image/snapshot/merge_step.png";
import pull from "./../../image/snapshot/pull_updated_content.png";
import * as R from "ramda";
const Home = () => {
  const [snapshotList, setSnapshotList] = useState([]);

  const handlePickAction = (sourceBtn) => {

    switch (sourceBtn) {
      case "newBranchFirst":
        setSnapshotList([newBranchFirst]);
        break;
      case "newBranchSecond":
        setSnapshotList([newBranchSecond]);
        break;
      case "commitFirst":
        setSnapshotList([commitFirst]);
        break;
      case "commitSecond":
        setSnapshotList([commitSecond]);
        break;
      case "commitMerged":
        setSnapshotList([commitMerged]);
        break;
      case "checkout":
        setSnapshotList([checkout]);
        break;
      case "conflict":
        setSnapshotList([conflict, solveConflict]);
        break;
      case "merge":
        setSnapshotList([merge]);
        break;
      case "pull":
        setSnapshotList([pull]);
        break;

      default:
        setSnapshotList([]);
        break;
    }
  };
  const handleReset = () => {
    handlePickAction("");
  };

  return (
    <div className={`home_container`}>
      <div className="git_flow_image">
        <div className="git_flow git_flow_01"></div>
        <div className="git_flow git_flow_02"></div>
        <div className="git_flow git_flow_03"></div>
        <div className="git_flow git_flow_04"></div>
        <div className="git_flow git_flow_05"></div>
      </div>
      <div className="git_flow_btn_area">
        <div className="btn_layer">
          <div
            className={`btn btn_reset ${snapshotList.length ? "show_btn" : ""}`}
            onClick={handleReset}
          >
            Reset
          </div>
          <div
            className="btn btn_new_branch_first"
            onClick={() => handlePickAction("newBranchFirst")}
          ></div>
          <div
            className="btn btn_new_branch_second"
            onClick={() => handlePickAction("newBranchSecond")}
          ></div>
          <div
            className="btn btn_commit_first"
            onClick={() => handlePickAction("commitFirst")}
          ></div>
          <div
            className="btn btn_commit_second"
            onClick={() => handlePickAction("commitSecond")}
          ></div>
          <div
            className="btn btn_commit_for_merge"
            onClick={() => handlePickAction("commitMerged")}
          ></div>
          <div
            className="btn btn_checkout"
            onClick={() => handlePickAction("checkout")}
          ></div>
          <div
            className="btn btn_conflict"
            onClick={() => handlePickAction("conflict")}
          ></div>
          <div
            className="btn btn_merge"
            onClick={() => handlePickAction("merge")}
          ></div>
          <div
            className="btn btn_pull"
            onClick={() => handlePickAction("pull")}
          ></div>
        </div>
      </div>
      <div
        className={`git_flow_snapshot ${snapshotList.length ? "show_bg" : ""}`}
      >
        <div className="git_flow_snapshot_wrapper">
          {snapshotList.map((item, index) => {
            return (
              <img
                className="git_flow_snapshot_img"
                alt="snapshot"
                src={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
