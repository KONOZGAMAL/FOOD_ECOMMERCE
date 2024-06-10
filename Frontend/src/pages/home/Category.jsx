import HeadLines from "../../components/HeadLines/HeadLines";
export default function Category() {
  return (
    <>
      <HeadLines title={"Our Gallery"} />
      <div className="category">
        <div className="col">
          <div className="row hov-items">
            <img src="./assets/images/category/1_1.png" alt="" />
            <div className="hov-category">
              <p>Desserts</p>
            </div>
          </div>
          <div className="row hov-items">
            <img src="./assets/images/category/2.jpg" alt="" />
            <div className="hov-category">
              <p>Burger</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row hov-items">
            <img src="./assets/images/category/gallery-3.webp" alt="" />
            <div className="hov-category">
              <p>Appetizers</p>
            </div>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row hov-items">
                <img src="./assets/images/category/5.jpg" alt="" />
                <div className="hov-category">
                  <p>Burger</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row hov-items">
                <img src="./assets/images/category/4.jpg" alt="" />
                <div className="hov-category">
                  <p>Desserts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row hov-items">
            <img src="./assets/images/category/6.jpg" alt="" />
            <div className="hov-category">
              <p>Appetizers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
