{
  /* <div id="parent">
    <div id="child">
        <h1>Nested heading1</h1>
    </div>
</div> */
}

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from ReactJs"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Nested heading1"),
    React.createElement("h3", {}, "Nested heading3"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
