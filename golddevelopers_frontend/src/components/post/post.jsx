import { useState } from "react";
import api from "../api";
import Modal from "./modal";

function Post() {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  const handleSubmit = () => {
    api.post("api/", {
      username,
      email,
      password
    })
    .then(response => {
      setOpen(false);
      setUsername("");
      setEmail("");
      setPassword("");
    })
  };

  return (
    <>
        <div className="post-container">
            <button type="button" onClick={handleOpen}>
                Click Me to Open Modal
            </button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <input className="post-input-name" type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="post-input-email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="post-input-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="post-button-submit" onClick={handleSubmit}>Submit</button>
                </>
            </Modal>
        </div>
    </>
  );
}
export default Post;
