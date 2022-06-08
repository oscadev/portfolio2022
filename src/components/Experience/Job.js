import gsap from "gsap";
import { Power3 } from "gsap/src/all";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const Job = ({ company, date, body, noteworthy }) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const subtextRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      {
        y: "10vw",
        opacity: 0.1,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: "-=600px",
          end: "+=100%",
        },
      },
      {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: "-=600px",
          end: "+=100%",
        },
      }
    )
      .fromTo(
        bodyRef.current,
        {
          x: "20vw",
          opacity: 0,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: "-=600px",
            end: "+=100%",
          },
        },
        {
          x: 0,
          opacity: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: "-=600px",
            end: "+=100%",
          },
        }
      )
      .fromTo(
        subtextRef.current,
        {
          x: "-5vw",
          opacity: 0,
          ease: Power3.easeOut,
          delay: 2,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: "-=600px",
            end: "+=100%",
          },
        },
        {
          x: 0,
          opacity: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: "-=600px",
            end: "+=100%",
            delay: 4,
          },
        }
      );
    return () => tl.kill;
  }, []);
  return (
    <Wrapper ref={wrapperRef} data-speed=".7">
      <div className="flex row start">
        <h2 ref={titleRef}>{company}</h2>
      </div>
      <h5 ref={subtextRef}>{date}</h5>
      <p ref={bodyRef}>{body}</p>
      {/* {noteworthy && <p className="noteworthy">{noteworthy}</p>} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 200px 0;
`;

const Company = styled.h3``;

const DateRange = styled.h5``;

const Body = styled.p``;

const Noteworthy = styled.div``;
