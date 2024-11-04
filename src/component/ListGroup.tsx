import "./Liststyle.css";
// function ListGroup() {
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">Cras justo odio</li>
//         <li className="list-group-item">Dapibus ac facilisis in</li>
//         <li className="list-group-item">Morbi leo risus</li>
//         <li className="list-group-item">Porta ac consectetur ac</li>
//         <li className="list-group-item">Vestibulum at eros</li>
//       </ul>
//     </>
//   );
// }

import { useState } from "react";

// function ListGroup() {
//   const items = ["NYC", "TX", "FL", "NJ", "NC"];
//   const list = [];
//   for (let i = 0; i < items.length; i++) {
//     list.push(<li className="list-group-item">{items[i]}</li>);
//     console.log(list[i]);
//   }
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">{list}</ul>
//     </>
//   );
// }

// function ListGroup() {
//   const items = ["NYC", "TX", "FL", "NJ", "NC"];
//   const list = [
//     <li className="list-group-item">a+b</li>,
//     <br></br>,
//     <li className="list-group-item">cd</li>,
//   ];
//   for (let i = 0; i < items.length; i++) {
//     list.push(<li className="list-group-item">{items[i]}</li>);
//     console.log(list[i]);
//   }
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">{list}</ul>
//     </>
//   );
// }

// function ListGroup() {
//   const items = ["NYC", "TX", "FL", "NJ", "NC"];
//   items.map((item) => <li className="list-group-item">{item}</li>);
//   console.log(items);
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">{items.map((item) => <li className="list-group-item">{item}</li>)}</ul>
//     </>
//   );
// }

// function ListGroup() {
//   const items = ["NYC", "TX", "FL", "NJ", "NC"];
//   const lists = items.map((item) => (
//     <li key={item} className="list-group-item">
//       {item}
//     </li>
//   ));
//   console.log(lists);
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">{lists}</ul>
//     </>
//   );
// }

//

//
interface Props {
  itemsData: String[];
  heading: String;
}

function ListGroup({ itemsData, heading }: Props) {
  let [items, setItem] = useState(itemsData);
  function handleUp(_e: React.MouseEvent<HTMLButtonElement>, key: number) {
    [items[key - 1], items[key]] = [items[key], items[key - 1]];
    let items2 = [...items];
    setItem(items2);
    console.log("hello");
  }
  function handleDown(_e: React.MouseEvent<HTMLButtonElement>, key: number) {
    [items[key + 1], items[key]] = [items[key], items[key + 1]];
    let items2 = [...items];
    setItem(items2);
    console.log("hello");
  }
  console.log(items);
  // setItem(itemsData);
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [direction, setDirection] = useState("option1");
  const lists = items.map((item, index, arr) =>
    index !== 0 ? (
      index !== arr.length - 1 ? (
        <li
          key={index}
          className="list-group-item"
          //   className={
          //     selectedIndex === index ? "list-group-item disabled" : "list-group-item"
          //   }
        >
          {item}
          <button
            className="up-button btn btn-info"
            onClick={(e) => handleUp(e, index)}
          >
            Up
          </button>
          <button
            className="down-button btn btn-info"
            onClick={(e) => handleDown(e, index)}
          >
            Down
          </button>
          <span>
            <input
              className="btn btn-warning delete"
              type="button"
              value="Delete"
              onClick={(e) => {
                const target = e.target as HTMLElement;
                //console.log(target.parentElement?.parentElement);
                const ind = arr.findIndex(
                  (a) =>
                    a ===
                    target.parentElement?.parentElement?.innerText.split(
                      "\n"
                    )[0]
                );
                arr.splice(ind, 1);
                console.log(
                  target.parentElement?.parentElement?.innerText.split("\n")[0]
                );
                const arn = [...arr];
                setItem(arn);
                //setSelectedIndex(index + 1);
              }}
            />
          </span>
        </li>
      ) : (
        <li
          key={index}
          className="list-group-item"
          //   className={
          //     selectedIndex === index ? "list-group-item disabled" : "list-group-item"
          //   }
        >
          {item}
          <button
            className="up-button btn btn-info"
            onClick={(e) => handleUp(e, index)}
          >
            Up
          </button>
          <span>
            <input
              className="btn btn-warning delete"
              type="button"
              value="Delete"
              onClick={(e) => {
                const target = e.target as HTMLElement;
                //console.log(target.parentElement?.parentElement);
                const ind = arr.findIndex(
                  (a) =>
                    a ===
                    target.parentElement?.parentElement?.innerText.split(
                      "\n"
                    )[0]
                );
                arr.splice(ind, 1);
                console.log(
                  target.parentElement?.parentElement?.innerText.split("\n")[0]
                );
                const arn = [...arr];
                setItem(arn);
                //setSelectedIndex(index + 1);
              }}
            />
          </span>
        </li>
      )
    ) : (
      <li
        key={index}
        className="list-group-item"
        //   className={
        //     selectedIndex === index ? "list-group-item disabled" : "list-group-item"
        //   }
      >
        {item}
        <button
          className="down-button btn btn-info"
          onClick={(e) => handleDown(e, index)}
        >
          Down
        </button>
        <span>
          <input
            className="btn btn-warning delete"
            type="button"
            value="Delete"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              //console.log(target.parentElement?.parentElement);
              const ind = arr.findIndex(
                (a) =>
                  a ===
                  target.parentElement?.parentElement?.innerText.split("\n")[0]
              );
              arr.splice(ind, 1);
              console.log(
                target.parentElement?.parentElement?.innerText.split("\n")[0]
              );
              const arn = [...arr];
              setItem(arn);
              //setSelectedIndex(index + 1);
            }}
          />
        </span>
      </li>
    )
  );
  return (
    <>
      <div className="card">
        <h2>{heading}</h2>
        <h2 className="card-header card-header">This is your Bucket List</h2>
        {items.length === 0 && (
          <>
            <h4>No list found</h4>
          </>
        )}

        <ul className="list-group">{lists}</ul>
        <h3 className="labelForData">Enter new Destinations</h3>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new bucketList item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <select
            id="options"
            name="options"
            className="btn btn-outline-info"
            onChange={() =>
              setDirection(direction === "option1" ? "option2" : "option1")
            }
          >
            <option value="option1">From Bottom</option>
            <option value="option2">From Top</option>
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                console.log("HI");
                const arn = [...items];
                if (
                  inputValue !== "" &&
                  !items.some((item) => item === inputValue)
                ) {
                  if (direction === "option1") {
                    arn.push(inputValue);
                  } else {
                    arn.unshift(inputValue);
                  }
                  setItem(arn);
                }
                setInputValue("");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListGroup;
