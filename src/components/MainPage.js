import React from "react";
import "./MainPage.css"
import support from "../Assests/support.jpg";
import tech from "../Assests/tech.jpg";
import { Link } from "react-router-dom";


const MainPage = () => {
  return (
    <main className="main">
      <section className="column">
        <div className="content content-left">
          <nav className="menu">
          <Link to="/chat" className="menu-link">Chats and Tickets</Link>
            <Link to="/qna" className="menu-link">QnA</Link>
            <Link to="/mock" className="menu-link">Mocks</Link>
          </nav>
          <article className="content-inner">
            <h1 className="title-medium">Welcome</h1>
            <p className="paragraph">
              Welcome to the onboarding page for the Project Engineers, Here you can explore the guidelines for onboarding on chats, tickets, QnA, and Mocks.
            </p>
            <button className="btn btn-neutral">Choose from Navbar</button>
          </article>
          <footer className="footer">
            <p>Crio PE Onboarding</p>
          </footer>
        </div>
        <div className="content content-center">
          <img src={support} className="content-image" alt="Support" />
          <article className="content-inner">
            <h2 className="title-medium">The Process</h2>
            <p className="paragraph">
              This involves understanding the users' problems, leveraging their deep knowledge of the MERN stack, and communicating solutions in an easily comprehensible manner.
            </p>
          </article>
        </div>
        <div className="content content-right">
          <article className="content-inner">
            <h2 className="title-medium">The Aim</h2>
            <p className="paragraph">
              The aim of a Project Engineer (PE) handling chats, tickets, and Q&A for users regarding MERN stack tech doubts should be to provide timely, accurate, and clear guidance to help users resolve their technical issues efficiently.
            </p>
          </article>
          <img src={tech} className="content-image" alt="landscape" />
        </div>
      </section>
    </main>
  );
};

export default MainPage;
