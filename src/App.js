import './App.css';
import img1 from './imgs/img-1.webp'
import img2 from './imgs/img-2.webp'
import img3 from './imgs/img-3.webp'
import img5 from './imgs/photo_2023-03-07_23-09-25.jpg'
import twitter from './imgs/twitter.png';
import facebook from './imgs/facebook.png'

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">

          <div className="logoDiv">
            <div className="logo">
              <a href="#">K. Griffith</a>
            </div>
          </div>

          <div className="linksDiv">
            <ul>
              <li><a href="#">APPEARANCES</a></li>
              <li><a href="#">BOOKS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>            
          </div>
        </div>

        <div className="container headerBottomSection">
          <div className="leftSection">
            <img src={img1} alt="hech nma topilamdi" />
          </div>
          <div className="rightSection">
            <div className="hederNameTitle">
              <h1>Kayla Griffith</h1>
              <p>Award Winning Author</p>
            </div>
          </div>
        </div>
      </header>

      <section className="imgSection">
        <div className="overlay"></div>
        <div className="container imgSectionContainer">

          <div className="mainSection">
            <div className="conatinersLeftSection">
              <div className="relace">New Relace</div>
              <div className="description">
                <div className="mainSectionTitle">
                  <h1>The Swan Isle </h1>
                  <h2>(2035)</h2>
                </div>
                <p>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                I’m a great place for you to tell a story and let your users know a little more about you.
                </p>

                <div className="order">Order Now</div>

                <div className="buttons">
                  <button>Amazon</button>
                  <button>Google</button>
                  <button>ibooks</button>
                </div>
              </div>
            </div>

            <div className="conatinersRightSection">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="descriptionSection">

          <div className="mainDescription">
            <div className="descriptionSectionTitle">Praise & Reviews</div>

            <div className="mainDescriptionsContainer">
              
              <div className="descriptionContainer">
                <div className="imgContainerr">
                  <img src={img5} alt="" />
                </div>
                <div className="descriptionMiddle">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or 
                    double click me to add your own content and make changes to the font. I’m a great place for you to 
                    tell a story and let your users 
                    know a little more about you.
                  </p>
                </div>

                <div className="descriptionBottom">
                  <p>
                  ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                  </p>
                </div>
              </div>

              <div className="descriptionContainer">
                <div className="imgContainerr">
                  <img src={img5} alt="" />
                </div>
                <div className="descriptionMiddle">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or 
                    double click me to add your own content and make changes to the font. I’m a great place for you to 
                    tell a story and let your users 
                    know a little more about you.
                  </p>
                </div>

                <div className="descriptionBottom">
                  <p>
                  ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                  </p>
                </div>
              </div>

              <div className="descriptionContainer">
                <div className="imgContainerr">
                  <img src={img5} alt="" />
                </div>
                <div className="descriptionMiddle">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or 
                    double click me to add your own content and make changes to the font. I’m a great place for you to 
                    tell a story and let your users 
                    know a little more about you.
                  </p>
                </div>

                <div className="descriptionBottom">
                  <p>
                  ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

        {/* icons */}
        <div className="icons">
          <div className="icon1 i"><img src={twitter}/></div>
          <div className="icon2 i"><img src={facebook}/></div>
        </div>

      <section className="skills">
        <div className="container">

          <div className="skillsTitle">
            <h1>See Upcoming Appearances</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
          </div>

          <div className="marginConatiner">
            <div className="skillsMainSection">
              <div className="par">
                <p>
                January 31st 2035, The Good Read
                Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST
                </p>
              </div>
              <div className="btn">
                <button><a href="#">Join</a></button>
              </div>
            </div>
          </div>
          <div className="marginConatiner">
            <div className="skillsMainSection">
              <div className="par">
                <p>
                March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST
                </p>
              </div>
              <div className="btn">
                <button><a href="#">Join</a></button>
              </div>
            </div>
          </div>
          <div className="marginConatiner marginBottom">
            <div className="skillsMainSection">
              <div className="par">
                <p>
                January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST
                </p>
              </div>
              <div className="btn">
                <button><a href="#">Join</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <div className="aboutImgContainer">
            <img src={img3} alt="" />
          </div>
          <div className="relaceImg"><div className="after"></div></div>

          <div className="aboutSectionDescription">
            <h1>About Kayla Griffith</h1>

            <div className="par abotPar">
              <p>
                I'm a paragraph. Click here to add your own text and
                edit me. It’s easy. Just click “Edit Text” or double
                click me to add your own content and make changes to
                the font. I’m a great place for you to tell a story
                and let your users know a little more about you.
              </p>
            </div>

            <div className="btn">
              <button><a href="#">Read More</a></button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
            © 2035 by K.Griffith. Powered and secured by <a href="#">Ilyos</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
