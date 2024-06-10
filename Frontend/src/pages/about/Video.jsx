

export default function Video() {
  return (
    <div className="main-video">
    <div className="overlay"></div>
    <video src="./assets/images/videoBG.mp4" muted loop autoPlay/>
    <div className="content">
    <h2>WE SERVE YOU THE BEST</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
     Aenean commodo ligula eget dolor.Aenean massa.
     Cum sociis natoque penatibus et magnis dis parturient montes.</p>
    </div>
    </div>
  );
}