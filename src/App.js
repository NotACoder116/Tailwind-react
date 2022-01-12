import React from "react";
import "./App.css";
import CallbackRefTextInput from "./components/CallbackRefTextInput/CallbackRefTextInput";
import Category from "./components/Category/Category";
import ButtonContext from "./components/Context/ButtonContext";
import UserContext from "./components/Context/UserContext";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { ParentRefInput } from "./components/InputRefText/ParentRefInput";
import OtherRoot from "./components/OtherRoot/OtherRoot";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar/Sidebar";
import UserPropTypes from "./components/UserPropTypes.js/UserPropTypes";
import CheckReducer from "./Reducer/Reducer";
import "./styles/app.css";

function App() {
  let userData = {
    name: "Yadwinder from User Context",
    greet: function () {
      return "Hello" + this.name;
    },
  };
  return (
    <div className="container mx-auto">
      <OtherRoot/>
      <div className="flex">
        <div className="w-1/5">
          <UserPropTypes/>
          {/* <Sidebar>
              <Navigation>
                <div>
                  <a href="">Yadwinder web dev</a>
                  <div>{userData.greet()}</div>
                </div>
              </Navigation>
          </Sidebar> */}
          <ErrorBoundary>
            <ButtonContext.Provider value="Yadwinder Web Dev">
              <UserContext.Provider value={userData}>
                <Sidebar />
              </UserContext.Provider>
            </ButtonContext.Provider>
          </ErrorBoundary>
        </div>
        <div className="w-4/5">
          <div>
            <Category name="yadwinder from app.js" />
          </div>
          <div>
            <ParentRefInput />
          </div>
          <div>
            <CallbackRefTextInput />
          </div>
          <div>
            <Posts />
            <CheckReducer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
