import React from "react";
import img from "../styles/Gaming4-5.jpg";

function ProfileNfts() {
  return (
    <>
      <section className="ps-main-container">
        <section className="ps-grid-container">
          {/* **************************** */}
          {/* ********************************* */}
          <div className="ps-grid-div">
            <div className="ps-video-image">
              <img src={img} alt="video_cover" height="100%" width="100%" />
            </div>
            <div className="ps-grid-title">
              <h3 className="ps-title">Where we starting that and didn’t</h3>
            </div>
            <div className="ps-nft-div">
              <div className="ps-nft-div-inside-one">
                <div className="ps-user-name">
                  <p>User Name</p>
                </div>
                <div className="ps-stream-time">
                  <h6>1 year ago</h6>
                </div>
              </div>
              <div className="ps-nfts-buy-btn">
                <button className="ps-nfts-buy-button">Buy NFT</button>
              </div>
            </div>
          </div>
          {/* **************************** */}
          {/* ********************************* */}
          <div className="ps-grid-div">
            <div className="ps-video-image">
              <img src={img} alt="video_cover" height="100%" width="100%" />
            </div>
            <div className="ps-grid-title">
              <h3 className="ps-title">Where we starting that and didn’t</h3>
            </div>
            <div className="ps-nft-div">
              <div className="ps-nft-div-inside-one">
                <div className="ps-user-name">
                  <p>User Name</p>
                </div>
                <div className="ps-stream-time">
                  <h6>1 year ago</h6>
                </div>
              </div>
              <div className="ps-nfts-buy-btn">
                <button className="ps-nfts-buy-button">Buy NFT</button>
              </div>
            </div>
          </div>
          {/* **************************** */}
          {/* ********************************* */}
          <div className="ps-grid-div">
            <div className="ps-video-image">
              <img src={img} alt="video_cover" height="100%" width="100%" />
            </div>
            <div className="ps-grid-title">
              <h3 className="ps-title">Where we starting that and didn’t</h3>
            </div>
            <div className="ps-nft-div">
              <div className="ps-nft-div-inside-one">
                <div className="ps-user-name">
                  <p>User Name</p>
                </div>
                <div className="ps-stream-time">
                  <h6>1 year ago</h6>
                </div>
              </div>
              <div className="ps-nfts-buy-btn">
                <button className="ps-nfts-buy-button">Buy NFT</button>
              </div>
            </div>
          </div>
          {/* **************************** */}
        </section>
      </section>
    </>
  );
}

export default ProfileNfts;
