import React from "react";
import "../stream/AllSports.scss";
import img from "../stream/man.png";
import dummy from "../stream/fake.jpg";
// import { useEffect, useState } from "react";

function AllSports() {
  // const [isLoading, setLoading] = React.useState(true);
  // const [data, setData] = useState([]);

  // const getProfileData = async (e) => {
  //   let number = await contract.getTotalStreamNumber();
  //   number = parseInt(number._hex, 16);
  //   for (let i = 1; i <= number; i++) {
  //     const stream = await contract.getAllStream(i);
  //     const cover = stream.img_cid;
  //     const title = stream.title;
  //     const user = stream.stream_creator;
  //     const creator = await contract.getCreator(account);
  //     const name = creator.creatorName;
  //     const cid = creator.photo_cid;
  //     data.push([cover, title, name, cid]);
  //   }
  //   setData(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getProfileData();
  //   // setLoading(false);
  // }, [contract]);

  // if (isLoading) {
  //   console.log("Loading");
  // }

  return (
    <>
      <div className="sports-main-container">
        <div className="sports-header">
          <h1 className="t-header">AllSports</h1>
          <p className="p-header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            temporibus sed voluptatem dicta quas vitae quibusdam omnis similique
            optio sint esse quisquam
          </p>
        </div>
        <div className="sports-main-content">
          {/* {data.map((inde) => {
            return ( */}
          <div className="sports-content">
            <div className="sports-img">
              <div className="sports-img-main">
                <a>
                  <img src={dummy} alt="" />
                </a>
              </div>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>Where we starting that and didn’t</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-img">
              <a>
                <img src={dummy} alt="" />
              </a>
            </div>
            <div className="sports-user">
              <div className="sports-img-name">
                <img src={img} alt="" />
                <span>user name</span>
              </div>
            </div>
            <div className="sports-title">
              <h4>The news you asking thought, king’s</h4>
            </div>
            <div className="sports-date">
              <span>Date:22/8/2022</span>
            </div>
          </div>
          {/* );
          })} */}
        </div>
      </div>
    </>
  );
}

export default AllSports;
