import { bugAdded, bugRemoved, bugResolved } from "./store/actionsCreators";
import store from "./store/store";
store.subscribe(() => {
  console.log("asdsa", store.getState());
});
store.dispatch(bugAdded("this is bug 1"));
store.dispatch(bugAdded("this is bug 2"));
store.dispatch(bugAdded("this is bug 3"));
store.dispatch(bugAdded("this is bug 4"));
store.dispatch(bugAdded("this is bug 5"));

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(4));
const app = document.getElementById("app");

store.getState().forEach((element) => {
  app.textContent += element.description + ", ";
});

console.log(store.getState());
