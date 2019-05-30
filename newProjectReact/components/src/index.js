import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <div>Are you sure?</div>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="xxx"
          text="nice"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="yyy"
          text="oh!"
          timeAgo="Today at 3:00AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="zzz"
          text="ye"
          timeAgo="Today at 1:23PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
