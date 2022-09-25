import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { userActions } from "../store/user-slice";
function UserAuth() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSingedUp, setisSingedUp] = useState(false);

  const dispatch = useDispatch();

  const afterSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-6/12 m-2  rounded flex justify-center bg-red-50">
          <form
            onSubmit={afterSubmission}
            className="m-2  flex flex-col h-100 justify-around   m-5"
          >
            {isSingedUp && (
              <input
                className="mb-2 rounded p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                name="firstName"
              />
            )}

            <input
              value={email}
              className="mb-2 rounded p-1 mt-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
            />
            <input
              className="mt-2 rounded p-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
            />

            <button className="bg-stone-400 mt-2 mb-2 rounded p-2">
              {isSingedUp ? <p>sign up</p> : <p>sign in </p>}
            </button>

            <div className="flex flex justify-center w-60 min-w-full flex-row ">
              {isSingedUp ? (
                <p className=" bg-red-300 rounded p-1">got an account </p>
              ) : (
                <p className=" bg-red-300 rounded p-1">create an account </p>
              )}
              <button
                className="ml-2 rounded bg-red-400 p-1"
                onClick={() => {
                  setisSingedUp(!isSingedUp);
                }}
              >
                {isSingedUp ? <p>sign in</p> : <p>sign up </p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserAuth;