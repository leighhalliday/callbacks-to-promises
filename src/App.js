import React, { Component } from "react";
import BlurImage from "./BlurImage";
import YourLocation from "./YourLocation";

// convert llama.jpg -resize 25x25 llama-small.jpg

const requestIdle = () =>
  new Promise(resolve => {
    window.requestIdleCallback(resolve);
  });

class App extends Component {
  componentDidMount() {
    this.onIdle();
  }

  onIdle = async () => {
    await requestIdle();
    console.log("I am idle");
  };

  render() {
    return (
      <div>
        <YourLocation />
        <BlurImage
          src="/images/llama.jpg"
          base64="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAOABkDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgcFCP/EACkQAAEEAQIEBQUAAAAAAAAAAAECAwQRBQAGEiEiURMxMmGRFRZVlNH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAAL/xAAcEQACAgMBAQAAAAAAAAAAAAABAgARAwUhkRP/2gAMAwEAAhEDEQA/ADr+6N0YQ47ITZuQUHULS0EzLAsilHmSOflfvpC1ltzsPQpb+UntxZq3yUSTSmw2gEhNA8Xn0nv5+4rc86W7icTIltxFB3jW0WmwhSRY9RAFm9a+FnLyeMTLl8Sk4uMsRmweXGs9a1dyQa0QZnu1Y+xDYkqmUeS0bK3VjMpEa8ZcuOwzxB2RkKUt+/SApNJBtQ6asiqGqB9Eg93PjXMiVoyO124PivoZmZeI2sCgUClG0nv0J+NKvs6P+WzP7R/mobT5cyMZk64P1FE//9k="
          alt="Beautiful llama"
          style={{ width: "250px" }}
        />
      </div>
    );
  }
}

export default App;
