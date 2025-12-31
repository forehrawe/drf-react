import { useState } from "react";
import api from "./api";

function Post() {
  const [serverData, setServerData] = useState();

  var getUsers = async () => {
    var result = await api.post("api/");
    setServerData(result.data)
  };

  var hideResult = async () => {
    setServerData()
  };

  return (
    <>
      <button onClick={getUsers}>ارسال اطلاعات</button>


    </>
  );
}

export default Post;
