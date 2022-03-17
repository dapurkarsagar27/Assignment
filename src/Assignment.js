import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AssignmentMain = () => {
  return (
    <>
      <div className="main-div">
        <div className="navbar">
          <nav>
            <a>
              <input
                type="search"
                name="search"
                placeholder="Search"
                id="search"
              ></input>
            </a>
            <a>
              <i
                class="fa fa-shopping-cart"
                aria-hidden="true"
                id="shop-icon"
              ></i>
            </a>
            <a>Contact Us</a>
            <a>Login / Sign Up</a>
          </nav>
        </div>

        <div className="main-page">
          <div className="first-row">
            <p>
              Home <span id="bold">/ Product detail page</span>
            </p>
            <p class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Navigation Category A
              </a>
            </p>
            <p>Navigation Item A</p>
          </div>

          <div className="second-row">
            <div id="items">
              <h5 id="tag">Tags:</h5>
              <div id="kit-item">
                <p>Kitchen</p>
                <p>L-Shape</p>
              </div>
              <p>Sustainable</p>
            </div>
            <div id="product-name">
              <h2>Product Name ABC</h2>
              <p id="pro-category">Product Category Name (Example:Plywood)</p>
              <div id="stars">
                <p id="star-icon">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </p>
                <p id="points">4.4</p>
                <p id="review">(328 reviews)</p>
              </div>
            </div>
            <div id="heart">
              <i class="fa fa-heart-o" aria-hidden="true" id="heart-icon"></i>
              <h3>
                <i class="fa fa-inr" aria-hidden="true"></i> 2110.00{" "}
                <span id="sheet-size">per sheet</span>
              </h3>
            </div>
          </div>

          <div className="third-row">
            <div id="pictures">
              <div id="small-pic">
                <div>
                  <img
                    src="https://picsum.photos/201/300"
                    alt=""
                    width="65"
                    height="65"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/200/301"
                    alt=""
                    width="65"
                    height="65"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/202/300"
                    alt=""
                    width="65"
                    height="65"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/200/302"
                    alt=""
                    width="65"
                    height="65"
                  />
                </div>
                <div>
                    <button id="arrow-btn"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                </div>
              </div>
              <div id="big-pic">
                <img
                  src="https://picsum.photos/203/300"
                  alt=""
                  width="360"
                  height="360"
                />
              </div>
            </div>

            <div id="para">
              <h3>Product Description</h3>
              <p>
                Lorem It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).Lorem It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout.
              </p>
               <div id="details"> 
              <h6>Available Online <span id="no-color">186</span></h6>
              <h6>Quantity <span id="color-sign">-</span> 1 <span id="color-sign">+</span></h6>
              <button>Add to Cart</button>
              </div>

              <table>
                  <tr id="main-row">
                      <th id="color-th">Product Specifications</th>
                      <th>Review</th>
                      <th>FAQs</th>
                  </tr>

                  <tr id="title">
                      <td>Category Title A</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>

                  <tr id="title">
                      <td>Category Title B</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>

                  <tr id="title">
                      <td>Category Title C</td>
                  </tr>

                  <tr id="fields">
                      <td>Field Names</td>
                      <td>Field Values</td>
                  </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentMain;
