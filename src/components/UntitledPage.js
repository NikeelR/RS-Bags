import React from 'react';
import cn from 'classnames';
import Headroom from 'react-headroom';
import Header from 'components/Header';

import section2Styles from './UntitledPage_section2.module.scss';
import section3Styles from './UntitledPage_section3.module.scss';
import styles from './UntitledPage.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div
        className={section2Styles.content_box1}
        style={{ '--src': `url(${require('assets/7d5215a6cb1bfdd47d824ee105eeab5c.png')})` }}
      />

      <div className={section2Styles.group}>
        <h1 className={section2Styles.hero_title1}>
          Providing Best Sustainable <br />
          Solutions
        </h1>
        <img
          className={section2Styles.cover3}
          src={require('assets/c3d23106524e7b0084e1e0555bbad7fd.png')}
          alt="alt text"
        />

        <div className={section2Styles.group}>
          <div className={section2Styles.rect} />

          <div className={section2Styles.group}>
            <h1 className={section2Styles.title}>Contact Us </h1>

            <div className={section2Styles.group}>
              <img
                className={section2Styles.icon}
                src={require('assets/001fb25596516ee89afc9a939d975438.png')}
                alt="alt text"
              />

              <div className={section2Styles.group}>
                <div className={section2Styles.group1}>
                  <div className={section2Styles.box2} />
                  <div className={section2Styles.box21} />
                  <div className={section2Styles.box22} />
                </div>

                <div className={section2Styles.section2Content}>
                  <div className={section2Styles.group2}>
                    <h2 className={section2Styles.medium_title}>
                      Paper bags are commonly used as shopping carrier bags and for packaging of some consumer goods.
                      They carry a wide range of products from groceries, glass bottles, clothing, books, toiletries,
                      electronics and various other goods and can also function as means of transport in day-to-day
                      activities.
                    </h2>
                    <h1 className={section2Styles.hero_title}>About Us</h1>
                    <img
                      className={section2Styles.image1}
                      src={require('assets/a9849972955812e5e907b4e4a6eedc0b.png')}
                      alt="alt text"
                    />
                  </div>

                  <div className={section2Styles.group3}>
                    <div className={section2Styles.group4}>
                      <img
                        className={section2Styles.cover}
                        src={require('assets/edb39f31ca91f3d8373c1a1371b3d542.png')}
                        alt="alt text"
                      />

                      <div className={section2Styles.group5}>
                        <div className={section2Styles.group6}>
                          <img
                            className={section2Styles.cover1}
                            src={require('assets/c98b2fed13764b1edbaf6bd8bbc38f99.png')}
                            alt="alt text"
                          />
                          <h2 className={section2Styles.medium_title1}>Small 1kg    Medium 5kg    Large 10kg</h2>
                        </div>

                        <h1 className={section2Styles.hero_title2}>Special Kraft Paper Bag </h1>
                      </div>
                    </div>

                    <img
                      className={section2Styles.image}
                      src={require('assets/0a9530a195233a06b011edf54fa9240e.png')}
                      alt="alt text"
                    />
                    <h1 className={section2Styles.hero_title3}>OUR Special products </h1>
                  </div>

                  <div className={section2Styles.section2Content__item}>
                    <h2 className={section2Styles.medium_title11}>PRODUCT CATEGORIES</h2>
                  </div>

                  <div className={section2Styles.group7}>
                    <div className={section2Styles.text}>5 Items</div>

                    <div
                      className={section2Styles.box1}
                      style={{ '--src': `url(${require('assets/8aa52fcd07ae3ef61a266d97ae5f1b1f.png')})` }}>
                      <h5 className={section2Styles.highlights}>Printing</h5>
                    </div>

                    <div
                      className={section2Styles.box11}
                      style={{ '--src': `url(${require('assets/0af58e905a64b8755951e0559a39e798.png')})` }}>
                      <div className={section2Styles.flexCol}>
                        <div className={section2Styles.flexCol__item}>
                          <h5 className={section2Styles.highlights1}>Packaging</h5>
                        </div>
                        <div className={section2Styles.flexCol__item}>
                          <div className={section2Styles.text1}>5 Items</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={section2Styles.box12}
                      style={{ '--src': `url(${require('assets/cf33c589cab4614953f4d6f478c793ab.png')})` }}>
                      <div className={section2Styles.flexCol1}>
                        <div className={section2Styles.flexCol1__item}>
                          <h5 className={section2Styles.highlights2}>Post Press Finishing</h5>
                        </div>
                        <div className={section2Styles.flexCol1__item}>
                          <div className={section2Styles.text2}>5 Items</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={section2Styles.group8}>
                    <img
                      className={section2Styles.image6}
                      src={require('assets/17335d1212701b77ea74a88ea7a995da.png')}
                      alt="alt text"
                    />

                    <div
                      className={section2Styles.box12}
                      style={{ '--src': `url(${require('assets/a07fd5ff5439fb79c3683d528d844ae1.png')})` }}>
                      <div className={section2Styles.flexCol2}>
                        <div className={section2Styles.flexCol2__item}>
                          <h5 className={section2Styles.highlights3}>Food Packages</h5>
                        </div>
                        <div className={section2Styles.flexCol2__item}>
                          <div className={section2Styles.text3}>5 Items</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={section2Styles.section2Content__item}>
                    <h2 className={section2Styles.medium_title12}>Featured Products </h2>
                  </div>
                  <div className={section2Styles.section2Content__item}>
                    <div className={section2Styles.text11_box}>
                      <div className={section2Styles.text11}>
                        <span className={section2Styles.text11_span0}>some of our best</span>
                        <span className={section2Styles.text11_span1}> </span>
                        <span className={section2Styles.text11_span2}>Products </span>
                      </div>
                    </div>
                  </div>
                  <div className={section2Styles.section2Content__item}>
                    <img
                      className={section2Styles.image7}
                      src={require('assets/364b5f6ca73408c5c9ddc21d3ef20f04.png')}
                      alt="alt text"
                    />
                  </div>

                  <div
                    className={section2Styles.group9}
                    style={{ '--src': `url(${require('assets/8350dd51e3ed79eb8a5f1ab92514b630.png')})` }}>
                    <img
                      className={section2Styles.image9}
                      src={require('assets/bc72ad8b1d665848cf49abb8ade82b1f.png')}
                      alt="alt text"
                    />
                  </div>

                  <div className={section2Styles.section2Content__item}>
                    <h1 className={section2Styles.hero_title21}>Clients Testimonials</h1>
                  </div>
                  <div className={section2Styles.section2Content__item}>
                    <p className={section2Styles.text12}>
                      Problems trying to resolve the conflict between <br />
                      the two major realms of Classical physics: Newtonian mechanics{' '}
                    </p>
                  </div>

                  <div className={section2Styles.wrapper}>
                    <img
                      className={section2Styles.image8}
                      src={require('assets/5f43c52216e7f77329fe59b9aabaff3c.png')}
                      alt="alt text"
                    />
                    <div className={section2Styles.text31}>Designer</div>
                    <div className={section2Styles.text21}>Regina Miles</div>
                    <img
                      className={section2Styles.icon1}
                      src={require('assets/001fb25596516ee89afc9a939d975438.png')}
                      alt="alt text"
                    />
                    <p className={section2Styles.paragraph1}>
                      Slate helps you see how many <br />
                      more days you need to work to <br />
                      reach your financial goal.
                    </p>
                    <img
                      className={section2Styles.image81}
                      src={require('assets/5f43c52216e7f77329fe59b9aabaff3c.png')}
                      alt="alt text"
                    />
                    <h2 className={section2Styles.medium_title13}>Our Happy Customers</h2>

                    <div className={section2Styles.group10}>
                      <div className={section2Styles.group11}>
                        <div className={section2Styles.group11}>
                          <div className={section2Styles.group11}>
                            <div className={section2Styles.group11}>
                              <div className={section2Styles.group11}>
                                <div className={section2Styles.group11}>
                                  <div className={section2Styles.group11}>
                                    <div className={section2Styles.group11}>
                                      <img
                                        className={section2Styles.decorator}
                                        src={require('assets/b6f9a2904d47d51481a8160500210cb6.png')}
                                        alt="alt text"
                                      />
                                      <div className={section2Styles.text32}>Designer</div>
                                    </div>

                                    <div className={section2Styles.text22}>Regina Miles</div>
                                  </div>

                                  <img
                                    className={section2Styles.icon2}
                                    src={require('assets/001fb25596516ee89afc9a939d975438.png')}
                                    alt="alt text"
                                  />
                                </div>

                                <p className={section2Styles.paragraph11}>
                                  Slate helps you see how many <br />
                                  more days you need to work to <br />
                                  reach your financial goal.
                                </p>
                              </div>

                              <div className={section2Styles.text23}>Regina Miles</div>
                            </div>

                            <p className={section2Styles.paragraph12}>
                              Slate helps you see how many <br />
                              more days you need to work to <br />
                              reach your financial goal.
                            </p>
                          </div>

                          <img
                            className={section2Styles.image82}
                            src={require('assets/5f43c52216e7f77329fe59b9aabaff3c.png')}
                            alt="alt text"
                          />
                        </div>

                        <div className={section2Styles.text33}>Designer</div>
                      </div>

                      <div className={section2Styles.rect3} />
                    </div>
                  </div>

                  <div className={section2Styles.section2Content__item}>
                    <h2 className={section2Styles.medium_title14}>Gallery</h2>
                  </div>
                  <div className={section2Styles.section2Content__item}>
                    <img
                      className={section2Styles.image10}
                      src={require('assets/8804bb44a7d6233f8d6bb026ebf6960e.png')}
                      alt="alt text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div className={section3Styles.box}>
        <div className={section3Styles.group}>
          <div className={section3Styles.box1}>
            <img
              className={section3Styles.image2}
              src={require('assets/01c9aac0cc6b4c35fec65f3283425377.png')}
              alt="alt text"
            />
          </div>

          <img
            className={section3Styles.image21}
            src={require('assets/01c9aac0cc6b4c35fec65f3283425377.png')}
            alt="alt text"
          />
        </div>
      </div>

      <img
        className={section3Styles.image3}
        src={require('assets/2ce1097a44f01d708481237365d478a3.png')}
        alt="alt text"
      />
      <p className={section3Styles.paragraph}>Best Quality Paper Bag Manufacturers</p>
      <img
        className={section3Styles.image4}
        src={require('assets/7d44b7bb2197deaa9dfa7dec4f2a238a.png')}
        alt="alt text"
      />
    </section>
  );
}

export default function UntitledPage(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Header />
        </nav>
      </Headroom>

      <main className={cn(styles.main, 'untitled-page')}>
        <div className={styles.main__item}>{renderSection2(props)}</div>
        <div className={styles.main__item}>{renderSection3(props)}</div>
      </main>
    </React.Fragment>
  );
}

UntitledPage.inStorybook = true;
