import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaArrowCircleUp } from "react-icons/fa";
import "./styles.css";
import { Button, Heading, CardWrapper, CardItem } from "./styles";

export default function App() {
  const [list, setList] = useState(new Array(30).fill(0));
  const getMoreData = () => {
    setTimeout(() => {
      setList(list.concat(new Array(30).fill(0)));
    }, 1000);
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <InfiniteScroll
      dataLength={list.length}
      hasMore={true}
      next={getMoreData}
      loader={<h4>Loading...</h4>}
    >
      <div>
        <Heading>Add Item</Heading>
        {list &&
          list.map((item, index) => (
            <CardWrapper key={index}>
              <CardItem>
                <p>{index}</p>
              </CardItem>
            </CardWrapper>
          ))}
      </div>
      <Button>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
    </InfiniteScroll>
  );
}
