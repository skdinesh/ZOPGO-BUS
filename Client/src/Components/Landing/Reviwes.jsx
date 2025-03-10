import styles from "../../Styles/landing.module.css";
function Reviews() {
  return (
    <>
      <h2
        style={{
          marginBottom: "28px",
          color: "#4a4a4a",
          textAlign: "center",
          fontWeight: 800,
          fontSize:"30px",
        }}
      >
        Customer Reviews
      </h2>
      <div className={styles.reviewmain}>
        <div className="card">
          <img
            src={require("../../Images/profile 2.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Thenmozhi</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../Images/profile.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Balachander</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../Images/profile 1.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Vasuki Ram</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
