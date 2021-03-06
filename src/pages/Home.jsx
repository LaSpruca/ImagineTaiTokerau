import React from "react";
import { Card, CardBorderless } from "../components/Card";
import Header from "../components/Header";

// IMAGES, I hate this syntax.
import talk_1 from "../assets/image/talk_1.png";
import three_friends from "../assets/image/three_friends.png";
import growth from "../assets/image/growth.png";
import human_pyramid from "../assets/image/human_pyramid.png";

import introductions from "../assets/image/introductions.jpg";
import story from "../assets/image/story.jpg";
import choose_proj from "../assets/image/choose_proj.jpg";
import team from "../assets/image/team.jpg";
import get_support from "../assets/image/get_support.jpg";
import present from "../assets/image/present.jpg";
import colab from "../assets/image/colab.jpg";
import tpk from "../assets/image/te_puni_kokiri.png";
import ngen from "../assets/image/ngen_room.png";
import nic from "../assets/image/nic_logo.jpg";
import dev_inst from "../assets/image/dev_inst.png";

export const Home = (props) => (
  <div>
    <Header />
    <div className="content">
      <div className="home">
        <div className="top-bit">
          <div className="inner">
            <h1>
              25<sup>th</sup> - 27<sup>th</sup> September 2020
            </h1>

            <h3>Mā pango mā whero ka oti te mahi.</h3>

            <h2>CREATE THE COMMUNITY YOU WANT TO LIVE IN!</h2>

            <p>
              Imagine Tai Tokerau is an innovation weekend for everyone who is
              committed to make Te Tai Tokerau an even better place to live.
              Together, we will brainstorm workable solutions to the problems
              that you see in our community and support the best ideas to become
              reality.
            </p>
            <button
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              Tell me more!
            </button>
          </div>
        </div>

        <p className="blue-text" id="middle-text">
          The hardest part of bringing change forward is to find people who are
          as passionate and motivated as you are. At our innovation weekend,
          you’ll be immersed in the ideal environment to make change happen.
        </p>

        <div className="cards">
          <CardBorderless title="Tell Your Story" imageLocation={talk_1}>
            Bring the challenges your community faces in front of an audience of
            like-minded people, brainstorm a solution together or pitch your
            idea of how to tackle the problem.
          </CardBorderless>
          <CardBorderless title="Connect" imageLocation={three_friends}>
            Bring the challenges your community faces in front of an audience of
            like-minded people, brainstorm a solution together or pitch your
            idea of how to tackle the problem.
          </CardBorderless>
          <CardBorderless title="Develop" imageLocation={growth}>
            Bring the challenges your community faces in front of an audience of
            like-minded people, brainstorm a solution together or pitch your
            idea of how to tackle the problem.
          </CardBorderless>
          <CardBorderless title="Support" imageLocation={human_pyramid}>
            Bring the challenges your community faces in front of an audience of
            like-minded people, brainstorm a solution together or pitch your
            idea of how to tackle the problem.
          </CardBorderless>
        </div>

        <div className="schedule">
          <h1>The Shedule</h1>
          <p className="blue-text">
            Here's what happens during our innovation weekend:
          </p>

          <h2>Friday, Day 1: Meet, Pitch, Team Up</h2>
          <div className="cards-schedule">
            <Card imageLocation={introductions} title="Introductions">
              Get to know the talent in the room. Listen to success stories from
              Tai Tokerau’s own.
            </Card>
            <Card imageLocation={story} title="Tell your own story">
              Share your community challenges and pitch your ideas for
              solutions.
            </Card>
            <Card imageLocation={choose_proj} title="Choose Your Project">
              Out of the top ideas – which one do you like best? Choose which
              one you’ll work on over the weekend.
            </Card>
            <Card imageLocation={team} title="Build Your Team">
              Whether it’s your idea or someone else’s, you’ll create a
              cross-functional team to work with over the weekend.
            </Card>
          </div>

          <h2>Saturday, Day 2: Learn & Work</h2>
          <div className="cards-schedule">
            <Card imageLocation={get_support} title="Get Support">
              Local mentors will be coming in throughout the event to coach you
              through the challenges and provide support.
            </Card>
            <Card imageLocation={story} title="Get To Work">
              We’ve got the resources and support in place to make things happen
              in a short period of time. You’ll test your idea, refine it and
              create a working solution to your challenge.
            </Card>
          </div>

          <h2>Sunday, Day 3: Present & Choose</h2>
          <div className="cards-schedule">
            <Card
              imageLocation={present}
              title="Present in Front of Local Judges"
            >
              You’ll have 5 minutes to present your solution to the crowd and a
              panel of experts. The chosen ideas will receive ongoing support.
            </Card>
            <Card imageLocation={colab} title="Celebrate & Network">
              Celebrate all the work you’ve done and decide where to go from
              here. Get the opportunity to talk to judges and mingle with
              mentors.
            </Card>
          </div>
        </div>

        <div className="register">
          <h3>That all sound great?</h3>

          <h1>Join us and get creative!</h1>

          <button onClick={() => (window.location.href = "/register")}>
            Register
          </button>
        </div>
        <div className="in-collaboration-with">
          <h6>In collaboration with</h6>
          <a href="https://www.tpk.govt.nz/en">
            <img src={tpk} alt="" />
          </a>
          <a href="https://www.ngenroom.co.nz">
            <img src={ngen} alt="" />
          </a>
          <a href="https://n-ic.nz">
            <img src={nic} alt="" />
          </a>
          <a href="https://www.developers.ac.nz/">
            <img src={dev_inst} alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
