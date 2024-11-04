import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Button from "./component/Button";
import DataFetcher from "./component/DataFetcher";
import FooterCreds from "./component/FooterCreds";
import HeadNav from "./component/HeadNav";
import ListGroup from "./component/ListGroup";
import UsersTable from "./component/UsersTable";
import Like from "./component/Like";

function App() {
  let itemsData = ["NYC", "TX", "FL", "NJ", "NC"];
  let itemsData2 = ["Norway", "Egypt", "Australia", "China", "Japan"];
  let headingName1 = "Sandeep";
  let [buttonName, setButtonName] = useState("Hide");
  let headingName2 = "Surya";
  let [flag, setFlagValue] = useState(true);
  return (
    <>
      <ListGroup itemsData={itemsData} heading={headingName1} />
      {/* <div>
        <HeadNav></HeadNav>
        <ListGroup itemsData={itemsData} heading={headingName1} />
        <ListGroup itemsData={itemsData2} heading={headingName2} />
        <FooterCreds></FooterCreds>
        <DataFetcher />
      </div>
      <UsersTable />
      {flag && <Alert></Alert>}
      <Button
        onClick={() => {
          flag ? setFlagValue(false) : setFlagValue(true);
          flag ? setButtonName("Show") : setButtonName("Hide");
        }}
      >
        {buttonName}
      </Button>
      <Like></Like>{" "} */}
    </>
  );
}

export default App;
