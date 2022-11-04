import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserByEmail } from "../../store/user-actions";
import Alerts from "../../UI/Alerts";

function SetUserInformations() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let user = useSelector((state) => state.todox.user);
  const dispatch = useDispatch();
  const alertIsVisible = useSelector((state) => state.alertx.alertIsVisible);
  const notification = useSelector((state) => state.alertx.notification);

  const update = (event) => {
    event.preventDefault();

    dispatch(updateUserByEmail({ user: { id: user.id, name, email } }));
  };

  return (
    <div>
      {alertIsVisible && (
        <Alerts alertType={notification.alertType} msg={notification.msg} />
      )}
      <div className="bg-green-200 p-3">
        <form>
          <input
            className="m-1 rounded p-1"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={`name: ${user.name}`}
            type="text"
            name="firstName"
          />
          <input
            className="m-1 rounded p-1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={`name: ${user.email}`}
            type="text"
            name="email"
          />
          <button className="bg-violet-300 p-1 rounded m-1" onClick={update}>
            update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetUserInformations;
