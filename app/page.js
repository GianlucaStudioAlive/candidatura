import React from "react";
import Avatar from "@mui/material/Avatar";
import Swipe from "./components/Swipe";
const page = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-3 ">
            <h1>CANDIDATURA</h1>
          </div>
          <div className="row  mt-5 ">
              <div className="col-4 mt-3">
                <Avatar
                  alt="Giovanni Luca Felli"
                  sx={{ width: 100, height: 100 }}
                  src="https://scontent.fcia8-2.fna.fbcdn.net/v/t39.30808-6/406606676_10231470105311815_6698213219132346529_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=GEtioaiOlIQAX_wuIqs&_nc_ht=scontent.fcia8-2.fna&oh=00_AfDJCCLbKc53JJ0wpfRxnqxjkJ23ABfmiOV8TKFuW_ZXYA&oe=658942C9"
                />
              </div>
              <div className="col-4 text-center">
                <h1>Giovanni Luca Felli</h1>
              </div>
          </div>
          <div className="col-4">
<Swipe/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
