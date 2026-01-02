import { useState } from "react";
import api from "../api";
import Modal from "./modal";
import "../../styles/get/get.css";

function Get() {
  const [serverData, setServerData] = useState();
  const [open, setopen] = useState(false);

  var handleClose = () => {
    setopen(false)
  };
  var handleOpen = () => {
    setopen(true)
  };

  var getUsers = async () => {
    var result = await api.get("api/");
    setServerData(result.data)
  };

  var hideResult = async () => {
    setServerData()
  };

  return (
    <>
      <div className="get-container">
        <button onClick={handleOpen}>دریافت پیام</button>
        <Modal isOpen={open} onClose={handleClose}>
          <p>
            username = *
            email = *
            pass = *
          </p>
        </Modal>
      </div>
    </>
  );
}

export default Get;
