import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const brains = document.querySelector('link[href="/commons.css"]');
    if (brains) {
      brains.remove();
    }
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              min-height: 100%;
              color: #333;
              background-color: #fff;
              margin: 0;
              font-family: Arial, sans-serif;
              font-size: 14px !important;
              line-height: 20px;
            }
          `,
        }}
      />
      <header id="Top-Navigation" className="top-navigation">
        <div className="logo">
          <img
            src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642c3a0dc2a49420b5205e78_Vectors-Wrapper.svg"
            loading="lazy"
            width="51.41145324707031"
            height="37"
            alt=""
            className="vectors-wrapper"
          />
          <div className="text">TeamSync</div>
        </div>
        <div className="menu-items">
          <a href="#" className="link-2">
            Resources
          </a>
          <a href="#" className="link-2">
            Enterprise
          </a>
          <a href="#" className="link-2">
            Features
          </a>
          <a href="#" className="link-2">
            Articles
          </a>
        </div>
        <div className="actions">
          <a href="#" className="link">
            Log in
          </a>
          <a href="#" className="button w-button">
            Request a demo
          </a>
        </div>
      </header>

      <main id="Hero" className="frame-13874">
        <img
          src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1.png"
          loading="lazy"
          width="764"
          height="634"
          alt="This is a 📷 of two people talking"
          srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1-p-800.png 800w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1-p-1080.png 1080w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d86886e0fd8482a47d321_Image-1.png 1528w"
          sizes="(max-width: 767px) 100vw, 764px"
          className="image-1"
        />
        <div className="content-2">
          <div className="headline">
            <h1 className="heading">Supercharge Team Work</h1>
            <div className="body">
              With our project management, communication, and file sharing
              tools, you can work together seamlessly from anywhere in the
              world.
            </div>
          </div>
          <div className="buttons">
            <a href="#" className="button w-button">
              Try TeamSync
            </a>
            <a href="#" className="button-2 w-button">
              Request a demo
            </a>
          </div>
        </div>
      </main>

      <section id="Value-prop-1" className="value-prop-1-2">
        <img
          src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8710706a641fa29d6e9c_Illustration-1.png"
          loading="lazy"
          width="528"
          height="423.5"
          alt="Pieces of pieces user interface, pieces of pieces, pieces of pieces"
          srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8710706a641fa29d6e9c_Illustration-1-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8710706a641fa29d6e9c_Illustration-1-p-800.png 800w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8710706a641fa29d6e9c_Illustration-1.png 1056w"
          sizes="(max-width: 479px) 195px, (max-width: 991px) 63vw, 528px"
          className="illustration-2"
        />
        <div className="content-6">
          <h1 className="heading-2">
            Streamline your work processes &amp; boost productivity
          </h1>
          <div className="body">
            With features like project management, task delegation,
            collaboration, and real-time notifications, you'll have everything
            you need to stay on top of your work.
          </div>
        </div>
      </section>

      <section id="Value-prop-2" className="value-prop-2">
        <div className="content-3">
          <div className="heading-2">Access to your team on the go</div>
          <div className="body">
            Communicate in real-time with team members through our chat, video,
            and voice call features. Keep everyone up-to-date on project
            progress and updates.
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1.png"
          loading="lazy"
          width="564.5"
          height="713.5"
          alt="Picture of an iPhone showing Teamsync"
          srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1-p-800.png 800w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1-p-1080.png 1080w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8807395e19c98865b100_Illustration-1-1.png 1129w"
          sizes="(max-width: 479px) 223px, (max-width: 991px) 67vw, 564.5px"
          className="illustration-1-1"
        />
      </section>

      <section id="Pricing" className="pricing-2">
        <div className="pricing-3">
          <div className="headline-10">
            <h2 className="heading-3">Pricing</h2>
            <div className="body-3">
              Find a plan that fits all of your needs and more.
            </div>
          </div>
          <div className="frame-13900">
            <div className="basic-3">
              <div className="frame-13901">
                <div className="tier-name-7">
                  <div className="text-14">Enterprise</div>
                  <div className="text-15">Reach out</div>
                </div>
                <div className="bullets-6">
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-3">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">
                      Access to all of Pro features
                    </div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Premium support</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">
                      Access to early bird feature releases
                    </div>
                  </div>
                </div>
              </div>
              <div className="tier-basic-3">
                <a href="#" className="button-3 w-button">
                  Download
                </a>
              </div>
            </div>
            <div className="pro-4">
              <div className="frame-13902">
                <div className="tier-name-7">
                  <div className="text-14">Enterprise</div>
                  <div className="text-15">Reach out</div>
                </div>
                <div className="bullets-6">
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-3">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Limited to 10 teammates</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Unlimited teams</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Unlimited storage space</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Customized integrations</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">
                      Access to advanced analytics
                    </div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Access to beta features</div>
                  </div>
                </div>
              </div>
              <div className="tier-basic-3">
                <a href="#" className="button-4 w-button">
                  Subscribe for $20/month
                </a>
              </div>
            </div>
            <div className="basic-3">
              <div className="frame-13901">
                <div className="tier-name-7">
                  <div className="text-14">Enterprise</div>
                  <div className="text-15">Reach out</div>
                </div>
                <div className="bullets-6">
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-3">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">
                      Access to all of Pro features
                    </div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">Premium support</div>
                  </div>
                  <div className="bullets-7">
                    <div className="bullet-point-wrapper-4">
                      <img
                        src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642da3e48227ee20d757fb21_Vectors-Wrapper.svg"
                        loading="lazy"
                        width="8"
                        height="8"
                        alt=""
                        className="vectors-wrapper-11"
                      />
                    </div>
                    <div className="feature-2">
                      Access to early bird feature releases
                    </div>
                  </div>
                </div>
              </div>
              <div className="tier-basic-3"></div>
              <a href="#" className="button-3 w-button">
                Reach out
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="Value-prop-3" className="frame-13877">
        <img
          src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1.png"
          loading="lazy"
          width="738"
          height="586.5"
          srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1-p-800.png 800w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1-p-1080.png 1080w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8a463370c853bc38e3d7_Illustration-2-1.png 1476w"
          sizes="(max-width: 479px) 223px, (max-width: 767px) 67vw, 74vw"
          className="illustration-2-1"
        />
        <div className="content-3">
          <div className="heading-2">
            Easily manage workflows for projects of any size
          </div>
          <div className="body">
            Stay organized and on track with our powerful project management
            tools. Assign tasks, set deadlines, and track progress in real-time.
          </div>
        </div>
      </section>

      <section id="Articles" className="articles">
        <div className="articles-2">
          <div className="headline-6">Latest articles</div>
          <div className="articles-3">
            <div className="article">
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad63cfd70a55e5a9663_Image.png"
                loading="lazy"
                width="300"
                height="209"
                alt="People in an office working. One person is pointing at a monitor while the others watch them."
                srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad63cfd70a55e5a9663_Image-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad63cfd70a55e5a9663_Image.png 600w"
                sizes="(max-width: 991px) 290px, 29vw"
                className="image"
              />
              <div className="content-4">
                <div className="copy">
                  <div className="headline-7">
                    <div className="text-2">Time managament</div>
                    <div className="text-3">Jan 22, 2023</div>
                  </div>
                  <div className="body-2">
                    Mastering time management: Tips and strategies for a more...
                  </div>
                </div>
                <div className="author">
                  <img
                    src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad7cbe8b7e2852ec2ee_Ellipse-10.png"
                    loading="lazy"
                    width="44"
                    height="44"
                    alt=""
                    className="ellipse-10"
                  />
                  <div className="text-4">Kate Vesa</div>
                </div>
              </div>
            </div>
            <div className="article">
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad8ae3cee8e90db4445_Image.png"
                loading="lazy"
                width="300"
                height="209"
                alt="Two people looking at a computer while sitting and smiling at each other."
                srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad8ae3cee8e90db4445_Image-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad8ae3cee8e90db4445_Image.png 600w"
                sizes="(max-width: 991px) 290px, 29vw"
                className="image"
              />
              <div className="content-5">
                <div className="copy">
                  <div className="headline-7">
                    <div className="text-2">Collaboration</div>
                    <div className="text-3">Feb 10, 2023</div>
                  </div>
                  <div className="body-2">
                    The Power of Collaboration: Why Working Together is Key to
                    Success...
                  </div>
                </div>
                <div className="author">
                  <img
                    src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad99e34f96204bec944_Ellipse-10.png"
                    loading="lazy"
                    width="44"
                    height="44"
                    alt=""
                    className="ellipse-10"
                  />
                  <div className="text-4">Tony Wilson</div>
                </div>
              </div>
            </div>
            <div className="article">
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adacf44064d6fda226a_Image.png"
                loading="lazy"
                width="300"
                height="209"
                alt="On person looking at a computer screen with another person on it. They are in a web call."
                srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adacf44064d6fda226a_Image-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adacf44064d6fda226a_Image.png 600w"
                sizes="(max-width: 991px) 290px, 29vw"
                className="image"
              />
              <div className="content-5">
                <div className="copy">
                  <div className="headline-7">
                    <div className="text-2">Meetings</div>
                    <div className="text-3">March 1, 2023</div>
                  </div>
                  <div className="body-2">
                    Maximizing Productivity: How to Make Your Meetings More
                    Effective...
                  </div>
                </div>
                <div className="author">
                  <img
                    src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adbae3cee85d1db4446_Ellipse-10.png"
                    loading="lazy"
                    width="44"
                    height="44"
                    alt=""
                    className="ellipse-10"
                  />
                  <div className="text-4">Rita Verna</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Value-prop-4" className="value-prop-4">
        <div className="content-3">
          <div className="heading-2">Stay on track and never miss a beat</div>
          <div className="body">
            Get instant alerts and notifications about upcoming deadlines. Our
            chat feature allows you to quickly communicate with your team and
            get the support you need to meet all project requirements.
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8b39395e193e8d682919_Illustration-3-1.png"
          loading="lazy"
          width="516"
          height="388.5"
          alt="A conversation between two teammates about scheduling a meeting"
          srcSet="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8b39395e193e8d682919_Illustration-3-1-p-500.png 500w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8b39395e193e8d682919_Illustration-3-1-p-800.png 800w, https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8b39395e193e8d682919_Illustration-3-1.png 1032w"
          sizes="(max-width: 479px) 223px, (max-width: 991px) 67vw, 516px"
          className="illustration-3-1"
        />
      </section>

      <footer id="Footer" className="footer-2">
        <div className="frame-13896">
          <div className="frame-13895">
            <div className="logo-2">TeamSync</div>
            <div className="frame-13897">
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ca18ccd95fae059c22_Vectors-Wrapper.svg"
                loading="lazy"
                width="29.01435661315918"
                height="29.01435661315918"
                alt="Instagram logo"
                className="vectors-wrapper-10"
              />
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cb558a0c66d611e182_Vectors-Wrapper.svg"
                loading="lazy"
                width="29.01435661315918"
                height="29.01435661315918"
                alt="Whatsapp logo"
                className="vectors-wrapper-10"
              />
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ccc3503bd0b5e70831_Vectors-Wrapper.svg"
                loading="lazy"
                width="29.01435661315918"
                height="29.01435661315918"
                alt="Twitter logo"
                className="vectors-wrapper-10"
              />
              <img
                src="https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cc962ed90d4b8a8cf8_Vectors-Wrapper.svg"
                loading="lazy"
                width="29.01435661315918"
                height="29.01435661315918"
                alt="Facebook logo"
                className="vectors-wrapper-10"
              />
            </div>
          </div>
          <div className="frame-13898">
            <a href="#" className="link-6">
              Features
            </a>
            <a href="#" className="link-7">
              Resources
            </a>
            <a href="#" className="link-7">
              Articles
            </a>
          </div>
          <div className="frame-13898">
            <a href="#" className="link-7">
              FAQs
            </a>
            <a href="#" className="link-7">
              Blogs
            </a>
            <a href="#" className="link-7">
              Support
            </a>
          </div>
          <div className="frame-13899">
            <a href="#" className="link-8">
              Careers
            </a>
            <a href="#" className="link-8">
              Terms of Service
            </a>
            <a href="#" className="link-8">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
