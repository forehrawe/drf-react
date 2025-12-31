import { useState } from "react";
import api from "./api";

function Get() {
  const [serverData, setServerData] = useState();

  var getUsers = async () => {
    var result = await api.get("api/");
    setServerData(result.data)
  };

  var hideResult = async () => {
    setServerData()
  };

  return (
    <>
      <button onClick={getUsers}>دریافت پیام</button>

      <div>{JSON.stringify(serverData, null, 2)}</div>
      {serverData && (
        <button onClick={hideResult}>
          نمایش
        </button>
      )}


    </>
  );
}

export default Get;
