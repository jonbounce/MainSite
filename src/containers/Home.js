import React from "react";
import "./Home.css";


const footerChild = [
  {
    title: "About",
    elements: [
      {
        title: "Location"
      },
      {
        title: "New start with god"
      }
    ]
  },
  {
    title: "Resources",
    elements: [
      {
        title: "House Fellowship"
      },
      {
        title: "Ministries"
      }
    ]
  },
  {
    title: "Events",
    elements: [
      {
        title: "Class"
      },
      {
        title: "Foundations"
      }
    ]
  },
  {
    title: "Sermons",
    elements: [
      {
        title: "Live services"
      },
      {
        title: "Current services"
      }
    ]
  }
]
export default function Home() {

  return (
    <div className="Home">
      <div className="lander">
        <h1>Deeper Christian Life Ministry North-America Region</h1>
        <p style={{ color: "whitesmoke" }}>Welcome to the Home Page</p>
      </div>
      <div className="footer">
        <div className="footer-header">
          DEEPER LIFE BIBLE CHURCH
        </div>
        <div className="footer-body">
          {footerChild.map((obj, i) =>
            <div className="footer-body-child">
              <div className="footer-child-header" key={i}>
                {obj.title}
              </div>
              {obj.elements.map((element, i) =>
                <div className="footer-child-element">
                  {element.title}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>

  );
}