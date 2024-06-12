import React, { useState } from "react";
import "./VideoUpload.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo } from "../../actions/video";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function VideoUpload({ setVidUploadPage }) {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState("");

  const handlesetVideoFile = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const [progress, setProgress] = useState(0);

  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
        setVidUploadPage(false);
      }
    },
  };
  const uploadVideoFile = () => {
    if (!title) {
      alert("Plz Enter A Title of the video");
    } else if (!videoFile) {
      alert("plz Attach a video File");
    } else if (videoFile.size > 10000000000) {
      alert("PLZ Attach video file less than 1 KB");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("chanel", CurrentUser?.result._id);
      fileData.append("Uploader", CurrentUser?.result.name);
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
      // console.log(videoFile)
    }
  };

  return (
    <div className="container_VidUpload">
      <input
        type="submit"
        name="text"
        value={"X"}
        onClick={() => setVidUploadPage(false)}
        className="ibtn_x"
      />
      <div className="container2_VidUpload">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="ibox_vidupload"
          maxLength={30}
          placeholder="Enter Title of your video"
        />
        <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
          <input
            type="file"
            name="file"
            className="ibox_vidupload"
            style={{ fontSize: "1rem" }}
            onChange={(e) => {
              handlesetVideoFile(e);
            }}
          />
        </label>
        <div className="ibox_div_vidupload">
          <input
            onClick={() => uploadVideoFile()}
            type="submit"
            value="Upload"
            className="ibox_vidupload btn_vidUpload"
          />
        </div>
        <div className="loader ibox_div_vidupload ">
          <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
