import ReactDOM from "react-dom"
import React from "react"
import App from "./App.js"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
