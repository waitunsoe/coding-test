import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import OurChallenge from "../assets/images/case-study-trip-pro-our-challenges.png";
import { motion } from "framer-motion";
const OurChallenges = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  const fetchPosts = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
      (res) => res.json()
    );
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  return (
    <section className="container overflow-hidden my-5 pb-5">
      <div className="row justify-content-evenly align-items-center">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="col-5"
        >
          <div>
            <img src={OurChallenge} alt="" className="w-100" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="col-5"
        >
          <h3 className="mb-4">
            <span className="fw-bold mb-3 mt-5">OUR </span>
            <span className="trippro">CHALLENGES</span>
          </h3>
          <div className="overflow-y-scroll" style={{ height: 390 + "px" }}>
            <Accordion defaultActiveKey={1}>
              {posts.slice(0, visiblePosts).map((post) => (
                <Accordion.Item
                  key={post.id}
                  eventKey={post.id}
                  className="mb-2 border border-info shadow-sm"
                >
                  <Accordion.Header>
                    <span className="fs-3 me-3 text-number">
                      {post.id < 10 ? "0" + post.id : post.id}
                    </span>
                    <span className="title">{post.title}</span>
                  </Accordion.Header>
                  <Accordion.Body>{post.body} </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          {visiblePosts < posts.length && (
            <button
              className="btn btn-info text-white mt-3 px-4 py-2"
              onClick={loadMorePosts}
            >
              View More
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurChallenges;
