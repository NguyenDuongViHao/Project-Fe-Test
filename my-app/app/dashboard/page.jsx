"use client";
import { useState } from "react";
import StockChart from "./chart";
import "./dashboard.css";
import Layout from "./Layout";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout>
      <div className="protfolio-dash">
        <h2>My Portfolio</h2>
        <div className="portfolio">
          <div className="portfolio-item">
            <div className="portfolio-hover">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <h3>Vietcombank </h3>
                </div>
                <div>
                  <img
                    src="https://ibrand.vn/wp-content/uploads/2022/10/NDTH-Vietcombank-3-min.png"
                    alt=""
                    className="profile-img"
                  />
                </div>
              </div>

              <p>Total Shares: $50</p>
              <p>Total Return: 25%</p>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-hover">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <h3>VietinBank</h3>
                </div>
                <div>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VietinBank-CTG-Ori.png"
                    alt=""
                    className="profile-img"
                  />
                </div>
              </div>
              <p>Total Shares: $30</p>
              <p>Total Return: 20%</p>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-hover">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <h3>BIDV</h3>
                </div>
                <div>
                  <img
                    src="https://play-lh.googleusercontent.com/SD4lUzWCqLq6nqURm8abnazm8sC0h_hkikryHyODrVpI0g3xMjeuaVs379jUCKrd0vk"
                    alt=""
                    className="profile-img"
                  />
                </div>
              </div>
              <p>Total Shares: $750</p>
              <p>Total Return: -7.14%</p>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-hover">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <h3>Agribank </h3>
                </div>
                <div>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Icon-Agribank.png"
                    alt=""
                    className="profile-img"
                  />
                </div>
              </div>
              <p>Total Shares: $90</p>
              <p>Total Return: -5.88%</p>
            </div>
          </div>
        </div>

        <div className="gird-container">
          <div className="chart-container">
            <div className="chart-title">
              <div>
                <h2>TCP</h2>
                <h4>Vietcombank</h4>
              </div>

              <div>
                <p>$52</p>
                <p>Last update at 14.30</p>
              </div>
            </div>

            <hr />
            <div
              className="chart-placeholder"
              style={{ height: 300, backgroundColor: "#ffffff" }}
            >
              <StockChart />
            </div>
          </div>

          <div
              className={`watchlist ${isCollapsed ? "collapsed" : ""}`}
            >
            <div style={{ display: "flex" }}>
              <div>
                <h2>My Watchlist</h2>
              </div>
              <div style={{ marginTop: "20px", marginLeft:"70px"}}>
                <button onClick={toggleCollapse}>
                  {isCollapsed ? "+" : "-"}
                </button>
              </div>
            </div>
            <div
              className={`watchlist-content ${isCollapsed ? "collapsed" : ""}`}
            >
              <div className="watchlist-item">
                <div className="watchlist-left">
                  <div className="watchlist-image">
                    <img
                      src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474066ubq/mau-logo-techcombank-dep_045648494.png"
                      alt=""
                    />
                  </div>
                  <div className="watchlist-name">
                    <p>Techcombank </p>
                    <p>TCB</p>
                  </div>
                </div>

                <div className="watchlist-right">
                  <p>$25 </p>
                  <p>25%</p>
                </div>
              </div>

              <div className="watchlist-item">
                <div className="watchlist-left">
                  <div className="watchlist-image">
                    <img
                      src="https://inrenhat.com/wp-content/uploads/2022/08/logo-sacombank-trang-inhoahiep.jpg"
                      alt=""
                    />
                  </div>
                  <div className="watchlist-name">
                    <p>Sacombank </p>
                    <p>STB</p>
                  </div>
                </div>

                <div className="watchlist-right">
                  <p>$70</p>
                  <p>-7.14%</p>
                </div>
              </div>

              <div className="watchlist-item">
                <div className="watchlist-left">
                  <div className="watchlist-image">
                    <img
                      src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-OceanBank.png"
                      alt=""
                    />
                  </div>
                  <div className="watchlist-name">
                    <p>OceanBank </p>
                    <p>OCB</p>
                  </div>
                </div>

                <div className="watchlist-right">
                  <p>$55 </p>
                  <p>-8.33%</p>
                </div>
              </div>

              <div className="watchlist-item">
                <div className="watchlist-left">
                  <div className="watchlist-image">
                    <img
                      src="https://inkythuatso.com/uploads/thumbnails/800/2021/12/logo-vib-inkythuatso-3-21-13-44-34.jpg"
                      alt=""
                    />
                  </div>
                  <div className="watchlist-name">
                    <p>VIB</p>
                    <p>VIB</p>
                  </div>
                </div>

                <div className="watchlist-right">
                  <p>$45 </p>
                  <p>12.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
