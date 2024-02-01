import React, { useState, useEffect } from "react";
import "../SASS/blog_details.scss";
import {
  Instagram_Post,
  Present,
  Logo_Buttons,
  Recent_Blogs,
} from "./Components";

export default function BlogDetails() {
  return (
    <div id="blog_details">
      <Present title="Blog Details" src="bg.png" head_color="#000" />
      <BlogContent />
      <Recent_Blogs />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function BlogContent() {
  return (
    <div id="blogcontent_container">
      <div id="title_category">
        <p>
          <span>Fashion</span> / jul 11, 2022
        </p>
        <h2>Feel cool while walking on the streets</h2>
      </div>
      <img src="./blog-detail.png" />
      <div id="pharagraphs">
        <div>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            facilisis vivamus massa magna. Blandit mauris libero condimentum
            commodo morbi consectetur sociis convallis sit. Magna diam amet
            justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio
            elementum egestas neque. Adipiscing purus euismod orci sem amet, et.
            Turpis erat ornare nisi laoreet est euismod.
          </h4>
          <p>
            Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
            Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
            aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu
            amet, nulla fermentum vitae mattis arcu mi convallis. Urna in
            sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum
            eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor
            elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget
            ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc
            integer sit.
          </p>
        </div>
        <div>
          <h3>
            “Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
            Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
            aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.“
          </h3>{" "}
          <h3>Consectetur facilisis vivamus</h3>{" "}
          <ul>
            <li>
              Blandit mauris libero condimentum commodo sociis convallis sit.{" "}
            </li>
            <li>Magna diam amet justo sed vel dolor et volutpat integer. </li>
            <li>Laculis sit sapien hac odio elementum egestas neque. </li>
          </ul>
          <p>
            Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis.
            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue
            ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque
            bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis
            porttitor elit tincidunt tellus sit ornare. Purus ut ipsum, enim
            lacus.{" "}
          </p>
          <p>
            Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et
            eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur
            libero elementum adipiscing mauris maecenas et magna. Etiam nec,
            rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra
            donec pellentesque. Odio mi consequat libero dolor. Porta ut diam
            lobortis eget leo, lectus. Nunc tempus feugiat massa laoreet
            ultrices diam magna quam. Congue auctor auctor luctus neque. Enim
            lorem ultrices diam donec. Sed id placerat consectetur faucibus.
          </p>
        </div>
        <div className="p_i">
          <img id="blog_photo1" src="./blog-photo1.png" />
          <div id="clearfix">
            <h3>Velit, praesent pharetra malesuada </h3>
            <p>
              Id pulvinar amet. Consequat potenti mollis massa iaculis et,
              dolor, eget lectus. Aliquam pellentesque molestie felis fames sed
              eget non euismod eget. Et eget ullamcorper urna, elit ac diam
              tellus viverra lacus. Cras sagittis tellus nunc integer vitae
              neque bibendum eget. Tempus malesuada et pellentesque maecenas.{" "}
              <br /> <br />
              Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et
              eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur
              libero elementum adipiscing mauris maecenas et magna. Etiam nec,
              rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
              viverra donec pellentesque. Odio mi consequat libero dolor. Porta
              ut diam lobortis eget leo, lectus. Urna in sollicitudin in
              vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras
              sagittis tellus nunc integer vitae neque bibendum eget. Tempus
              malesuada et pellentesque maecenas. Sociis porttitor elit
              tincidunt tellus sit ornare. Purus ut quis sed venenatis eget ut
              ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc
              integer sit.
            </p>
          </div>
        </div>
        <div>
          <p>
            Velit, praesent pharetra malesuada id pulvinar amet. Consequat
            potenti mollis massa iaculis et, dolor, eget lectus. Aliquam
            pellentesque molestie felis fames sed eget non euismod eget. Et eget
            ullamcorper urna, elit ac diam tellus viverra lacus. <br /> <br />{" "}
            Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et
            eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur
            libero elementum adipiscing mauris maecenas et magna. Etiam nec,
            rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra
            donec pellentesque. Odio mi consequat libero dolor. Porta ut diam
            lobortis eget leo, lectus.
          </p>
        </div>
        <div id="linkie">
          <div>
            <a>Clothing</a>
            <a>Denim</a>
            <a>Trending</a>
          </div>
          <div>
            <h3>
              <span>Share:</span>
              <a>
                <svg
                  width="12"
                  height="22"
                  viewBox="0 0 12 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0032 0.5C5.8496 0.5 4 2.0615 4 5.6195V8.75H0V12.5H4V21.5H8V12.5H11.2L12 8.75H8V6.254C8 4.91375 8.4664 4.25 9.808 4.25H12V0.65375C11.6208 0.60575 10.516 0.5 9.0032 0.5Z"
                    fill="#C0BAB9"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.29282 0.5C2.38745 0.5 0 3.01664 0 6.08686V13.9131C0 16.9799 2.38418 19.5 5.29282 19.5H12.7072C15.6125 19.5 18 16.9834 18 13.9131V6.08773C18 3.02009 15.6158 0.5 12.7072 0.5H5.29282ZM5.29282 2.22727H12.7072C13.1875 2.22659 13.6633 2.32596 14.1072 2.51968C14.5511 2.7134 14.9545 2.99767 15.2941 3.3562C15.6338 3.71473 15.9031 4.14048 16.0866 4.60906C16.2701 5.07763 16.3643 5.57982 16.3636 6.08686V13.9131C16.3643 14.4202 16.2701 14.9224 16.0866 15.3909C15.9031 15.8595 15.6338 16.2853 15.2941 16.6438C14.9545 17.0023 14.5511 17.2866 14.1072 17.4803C13.6633 17.674 13.1875 17.7734 12.7072 17.7727H5.29364C4.81321 17.7735 4.33736 17.6742 3.89336 17.4806C3.44935 17.2869 3.04591 17.0027 2.70616 16.6441C2.36641 16.2856 2.09703 15.8598 1.91346 15.3911C1.72988 14.9225 1.63572 14.4202 1.63636 13.9131V6.08773C1.63561 5.58061 1.72967 5.07833 1.91314 4.60965C2.09662 4.14098 2.36591 3.71513 2.70558 3.3565C3.04526 2.99788 3.44863 2.71353 3.8926 2.51976C4.33657 2.32598 4.8124 2.22659 5.29282 2.22727ZM13.8322 4.11691C13.7347 4.11645 13.6381 4.13638 13.548 4.17554C13.4579 4.2147 13.376 4.27232 13.3071 4.34507C13.2381 4.41781 13.1836 4.50425 13.1465 4.59939C13.1094 4.69453 13.0905 4.79648 13.0909 4.89936C13.0909 5.33464 13.4198 5.68182 13.8322 5.68182C13.9297 5.68239 14.0264 5.66255 14.1166 5.62344C14.2068 5.58433 14.2888 5.52673 14.3578 5.45397C14.4268 5.38121 14.4815 5.29473 14.5187 5.19954C14.5558 5.10434 14.5747 5.00232 14.5743 4.89936C14.5747 4.79641 14.5558 4.69439 14.5187 4.59919C14.4815 4.50399 14.4268 4.41752 14.3578 4.34476C14.2888 4.272 14.2068 4.2144 14.1166 4.17529C14.0264 4.13618 13.9297 4.11634 13.8322 4.11691ZM9 4.81818C6.3 4.81818 4.09091 7.15 4.09091 10C4.09091 12.85 6.3 15.1818 9 15.1818C11.7 15.1818 13.9091 12.85 13.9091 10C13.9091 7.15 11.7 4.81818 9 4.81818ZM9 6.54545C10.8188 6.54545 12.2727 8.08014 12.2727 10C12.2727 11.9199 10.8188 13.4545 9 13.4545C7.18118 13.4545 5.72727 11.9199 5.72727 10C5.72727 8.08014 7.18118 6.54545 9 6.54545Z"
                    fill="#C0BAB9"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2.27938C17.326 2.58525 16.611 2.78559 15.879 2.87371C16.6497 2.40061 17.2265 1.65659 17.502 0.78009C16.7772 1.22045 15.9847 1.53139 15.1583 1.69965C14.652 1.1448 13.9946 0.758944 13.2715 0.592249C12.5485 0.425555 11.7932 0.485736 11.104 0.764968C10.4147 1.0442 9.82337 1.52956 9.40681 2.15795C8.99025 2.78633 8.76775 3.52866 8.76825 4.28842C8.76825 4.58597 8.8005 4.87429 8.86575 5.15031C7.39688 5.0762 5.95974 4.68562 4.64796 4.00403C3.33619 3.32244 2.17924 2.36513 1.2525 1.19451C0.923233 1.77231 0.750528 2.42981 0.75225 3.09898C0.75225 4.41144 1.4025 5.57088 2.3955 6.24979C1.80897 6.23071 1.23544 6.06777 0.723 5.77463V5.82307C0.722492 6.6974 1.01732 7.54494 1.55738 8.22165C2.09744 8.89836 2.84942 9.36248 3.6855 9.53515C3.1418 9.688 2.57109 9.71063 2.0175 9.60127C2.25331 10.3535 2.7124 11.0113 3.33066 11.4831C3.94892 11.9548 4.69546 12.2167 5.466 12.2323C4.69998 12.8487 3.82291 13.3042 2.88499 13.5726C1.94706 13.8411 0.966695 13.9174 0 13.797C1.68789 14.9105 3.65306 15.5018 5.66025 15.5C12.4537 15.5 16.1693 9.73044 16.1693 4.72667C16.1693 4.56521 16.1632 4.39913 16.1572 4.2369C16.8792 3.70105 17.503 3.03861 18 2.28014V2.27938Z"
                    fill="#C0BAB9"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.26543 0.500001C1.96808 0.499774 1.6736 0.558574 1.39881 0.673042C1.12403 0.787511 0.874311 0.955405 0.663936 1.16713C0.45356 1.37886 0.286645 1.63028 0.172725 1.90702C0.058805 2.18376 0.000112504 2.4804 0 2.78C0 4.04091 1.014 5.08591 2.26286 5.08591C3.51343 5.08591 4.52829 4.04091 4.52829 2.78173C4.52851 2.48217 4.47015 2.1855 4.35653 1.90868C4.24291 1.63186 4.07626 1.38031 3.86612 1.16841C3.65597 0.956507 3.40644 0.788409 3.13178 0.67372C2.85713 0.559032 2.56274 0.500001 2.26543 0.500001ZM13.3157 6.54546C11.4137 6.54546 10.326 7.54727 9.80314 8.54391H9.74829V6.81405H6V19.5H9.906V13.2205C9.906 11.5658 10.0294 9.96632 12.0617 9.96632C14.0649 9.96632 14.094 11.8534 14.094 13.325V19.5H18V12.5322C18 9.12255 17.2723 6.54546 13.3157 6.54546ZM0.311143 6.81318V19.5H4.21971V6.81318H0.311143Z"
                    fill="#C0BAB9"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5359 2.84184C21.4107 2.38881 21.1655 1.97575 20.825 1.64401C20.4844 1.31226 20.0603 1.07347 19.5953 0.951531C17.8825 0.5 11 0.5 11 0.5C11 0.5 4.11751 0.5 2.40475 0.951531C1.93966 1.07347 1.51561 1.31226 1.17504 1.64401C0.83447 1.97575 0.589324 2.38881 0.464138 2.84184C0.144326 4.54332 -0.0108694 6.27027 0.000591168 8C-0.0108694 9.72973 0.144326 11.4567 0.464138 13.1582C0.589324 13.6112 0.83447 14.0243 1.17504 14.356C1.51561 14.6877 1.93966 14.9265 2.40475 15.0485C4.11751 15.5 11 15.5 11 15.5C11 15.5 17.8825 15.5 19.5953 15.0485C20.0603 14.9265 20.4844 14.6877 20.825 14.356C21.1655 14.0243 21.4107 13.6112 21.5359 13.1582C21.8557 11.4567 22.0109 9.72973 21.9994 8C22.0109 6.27027 21.8557 4.54332 21.5359 2.84184ZM8.80012 11.2143V4.78572L14.512 8L8.80012 11.2143Z"
                    fill="#C0BAB9"
                  />
                </svg>
              </a>
            </h3>
          </div>
        </div>
        <div id="author">
          <img src="./author.png" alt="" />
          <div>
            <h2>Marie Wilson</h2>
            <p>Author, Illustrator and Designer.</p>
            <p>
              Nascetur libero elementum adipiscing mauris maecenas et magna.
              Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis
              pulvinar non viverra donec pellentesque. Odio mi consequat libero
              dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam
              dignissim amet, in interdum aliquet. Magnis dictum et eros purus
              fermentum, massa ullamcorper sit sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
