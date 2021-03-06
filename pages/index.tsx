import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    {/*<Services />*/}
    <Processes />
    <Featured />
    {/*<Team />*/}
    {/*<Finisher />*/}
    <Call />
    <Contact />
  </Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
  <div
    className="relative py-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh",
    }}
  >
    <div className="container relative max-w-screen-xlg mx-auto">
      <div className="items-center flex flex-wrap p-28">
        <div className="w-full lg:w-6/12 ml-auto mr-auto  text-center">
          <div className="">
            <h1 className=" font-semibold text-5xl">
              Prospecting-as-a-Service
            </h1>

            <p className="mt-4 text-lg">
              <b className="text-blue-500">Email prospecting isn't fun. </b>
              Especially when you have products to build and teams to scale. We
              prospect for your business, so you can spend more time closing.
            </p>
          </div>
          <div className="flex max-w-xs my-24  mx-auto items-center w-full">
            <button
              className="flex-1 bg-blue-100 text-blue-500 my-auto active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Let's chat
            </button>

            <button
              className="flex-1 bg-blue-100 text-blue-500 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Learn More
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
          <video
            className="rounded"
            src="https://cdn.dribbble.com/users/442243/screenshots/8283178/media/3c48837195647e42b83e1ef6a7c38ef8.mp4"
            muted={true}
            preload="auto"
            loop={true}
            playsInline={true}
          ></video>
        </div>
      </div>
    </div>
  </div>
);

const Processes = () => (
  <section className="pb-20 mt-12">
    <div className="container lg:w-6/12 mx-auto">
      <div className="flex ">
        <div className="mr-16">
          {" "}
          <h3 className="text-3xl font-semibold">Our process</h3>
        </div>
        <div className="pr-18 ">
          <div className="flex mr-48 mb-4 py-4 pl-4  rounded-lg border-2 border-gray-100 items-center shadow">
            <div className="text-center">
              <h1 className=" rounded-full w-10 h-10 bg-blue-100 text-2xl text-blue-500">
                <b>1.</b>
              </h1>
            </div>
            <div className="px-6">
              We hop on a quick call to make sure we're on the same wavelength
              about your sales priorities.
            </div>
          </div>
          <div className="flex ml-48 mb-4 py-4 pl-4 rounded-lg border-2 border-gray-100 items-center shadow">
            <div className="text-center">
              <h1 className="rounded-full w-10 h-10 bg-blue-100 text-2xl text-blue-500">
                <b>2.</b>
              </h1>
            </div>
            <div className="px-6">
              According to our plan, we populate and vet our list of prospects.
              This means weeding out bounced emails and making sure the lead's
              titles match.
            </div>
          </div>
          <div className="flex mr-48 mb-4 py-4 pl-4 rounded-lg border-2 border-gray-100 items-center shadow">
            <div className=" text-center">
              <h1 className="rounded-full w-10 h-10 bg-blue-100 text-2xl text-blue-500">
                <b>3.</b>
              </h1>
            </div>
            <div className="px-6">
              Our specialists craft high-touch, high-converting emails that
              resignate with your target audience (with the goal of booking
              meetings in mind!)
            </div>
          </div>
          <div className="flex ml-48 mb-4 py-4 pl-4 rounded-lg border-2 border-gray-100 items-center shadow">
            <div className=" text-center">
              <h1 className="rounded-full w-10 h-10 bg-blue-100 text-2xl text-blue-500">
                <b>4.</b>
              </h1>
            </div>
            <div className="px-6">
              We hand the leads and meetings off to you, directly to your inbox.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const Call = () => (
  <section className="pb-20 mt-12">
    <div className="flex flex-col container items-center lg:w-6/12 mx-auto">
      <h1 className="text-5xl font-bold mb-8">Prospecting automated</h1>
      <p className="text-lg mb-8">Get in touch, and let's start sending!</p>
      <button
        className="flex-1 bg-blue-100 text-blue-500 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        type="button"
        style={{ transition: "all .15s ease" }}
      >
        Chat with us
      </button>
    </div>
  </section>
);

const Featured = () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "80px", transform: "translateZ(0)" }}
    ></div>

    <div className="container max-w-screen-lg mx-auto px-4">
      <div className="items-center flex flex-nowrap">
        <div className="w-1/3 md:w-5/12 ml-auto mr-auto">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">Prospecting Research</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              As an owner, you know your audience and business inside and out.
              We find out what "sticks" with your sales campaign, and hone the
              craft of cold outreach.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Target audience messaging</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 md:w-5/12 ml-auto mr-auto">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">A growing company</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 md:w-5/12 ml-auto mr-auto">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">Sales insights</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The best processes are scalable and repeatable, so while our
              campaigns are running, we deliver insights.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      A/B testing to show what works and doesn't
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      High-level insights into open-rates, best days and times
                      to send emails, and best titles
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

//const Finisher = () => (
//  <section className="pb-20 relative block ">
//    <div
//      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
//      style={{ height: "80px", transform: "translateZ(0)" }}
//    ></div>

//    <div className="container max-w-screen-lg mx-auto px-4 lg:pt-24 lg:pb-64">
//      <div className="flex flex-wrap text-center justify-center">
//        <div className="w-full lg:w-6/12 px-4">
//          <h2 className="text-4xl font-semibold ">Build something</h2>
//          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
//            Put the potentially record low maximum sea ice extent tihs year down
//            to low ice. According to the National Oceanic and Atmospheric
//            Administration, Ted, Scambos.
//          </p>
//        </div>
//      </div>
//      <div className="flex flex-wrap mt-12 justify-center">
//        <div className="w-full lg:w-3/12 px-4 text-center">
//          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
//            <i className="fas fa-medal text-xl"></i>
//          </div>
//          <h6 className="text-xl mt-5 font-semibold ">Excelent Services</h6>
//          <p className="mt-2 mb-4 text-gray-500">
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </p>
//        </div>
//        <div className="w-full lg:w-3/12 px-4 text-center">
//          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
//            <i className="fas fa-poll text-xl"></i>
//          </div>
//          <h5 className="text-xl mt-5 font-semibold ">Grow your market</h5>
//          <p className="mt-2 mb-4 text-gray-500">
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </p>
//        </div>
//        <div className="w-full lg:w-3/12 px-4 text-center">
//          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
//            <i className="fas fa-lightbulb text-xl"></i>
//          </div>
//          <h5 className="text-xl mt-5 font-semibold ">Launch time</h5>
//          <p className="mt-2 mb-4 text-gray-500">
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </p>
//        </div>
//      </div>
//    </div>
//  </section>
//);

const Contact = () => (
  <section className="relative block py-24 bg-blue-300 rounded lg:pt-24 ">
    <div className="container max-w-screen-lg mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">Ready to get started?</h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                Fill out the information below and let's hop on a call!
              </p>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Full Name"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Company
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Full Name"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Phone Number"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className=" active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
//const Team = () => (
//  <section className="pt-20 pb-48">
//    <div className="container max-w-screen-lg mx-auto px-4">
//      <div className="flex flex-wrap justify-center text-center mb-24">
//        <div className="w-full lg:w-6/12 px-4">
//          <h2 className="text-4xl font-semibold">We know lead generation</h2>
//          <p className="text-lg leading-relaxed m-4 text-gray-600">
//            According to the National Oceanic and Atmospheric Administration,
//            Ted, Scambos, NSIDClead scentist, puts the potentially record
//            maximum.
//          </p>
//        </div>
//      </div>
//      <div className="flex flex-wrap">
//        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//          <div className="px-6">
//            <img
//              alt="..."
//              src={require("../assets/img/team-1-800x800.jpg")}
//              className="shadow-lg rounded-full max-w-full mx-auto"
//              style={{ maxWidth: "120px" }}
//            />
//            <div className="pt-6 text-center">
//              <h5 className="text-xl font-bold">Ryan Tompson</h5>
//              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
//                Web Developer
//              </p>
//              <div className="mt-6">
//                <button
//                  className="bg-blue-400  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-twitter"></i>
//                </button>
//                <button
//                  className="bg-blue-600  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-facebook-f"></i>
//                </button>
//                <button
//                  className="bg-pink-500  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-dribbble"></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//          <div className="px-6">
//            <img
//              alt="..."
//              src={require("../assets/img/team-2-800x800.jpg")}
//              className="shadow-lg rounded-full max-w-full mx-auto"
//              style={{ maxWidth: "120px" }}
//            />
//            <div className="pt-6 text-center">
//              <h5 className="text-xl font-bold">Romina Hadid</h5>
//              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
//                Marketing Specialist
//              </p>
//              <div className="mt-6">
//                <button
//                  className="bg-red-600  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-google"></i>
//                </button>
//                <button
//                  className="bg-blue-600  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-facebook-f"></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//          <div className="px-6">
//            <img
//              alt="..."
//              src={require("../assets/img/team-3-800x800.jpg")}
//              className="shadow-lg rounded-full max-w-full mx-auto"
//              style={{ maxWidth: "120px" }}
//            />
//            <div className="pt-6 text-center">
//              <h5 className="text-xl font-bold">Alexa Smith</h5>
//              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
//                UI/UX Designer
//              </p>
//              <div className="mt-6">
//                <button
//                  className="bg-red-600  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-google"></i>
//                </button>
//                <button
//                  className="bg-blue-400  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-twitter"></i>
//                </button>
//                <button
//                  className="bg-gray-800  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-instagram"></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//          <div className="px-6">
//            <img
//              alt="..."
//              src={require("../assets/img/team-4-470x470.png")}
//              className="shadow-lg rounded-full max-w-full mx-auto"
//              style={{ maxWidth: "120px" }}
//            />
//            <div className="pt-6 text-center">
//              <h5 className="text-xl font-bold">Jenna Kardi</h5>
//              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
//                Founder and CEO
//              </p>
//              <div className="mt-6">
//                <button
//                  className="bg-pink-500  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-dribbble"></i>
//                </button>
//                <button
//                  className="bg-red-600  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-google"></i>
//                </button>
//                <button
//                  className="bg-blue-400  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-twitter"></i>
//                </button>
//                <button
//                  className="bg-gray-800  w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
//                  type="button"
//                >
//                  <i className="fab fa-instagram"></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </section>
//);

//const Services = () => (
//  <section className="pb-20 -mt-24">
//    <div className="container max-w-screen-lg mx-auto px-4">
//      <div className="flex flex-wrap">
//        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//            <div className="px-4 py-5 flex-auto">
//              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                <i className="fas fa-award"></i>
//              </div>
//              <h6 className="text-xl font-semibold">Awarded Agency</h6>
//              <p className="mt-2 mb-4 text-gray-600">
//                Divide details about your product or agency work into parts. A
//                paragraph describing a feature will be enough.
//              </p>
//            </div>
//          </div>
//        </div>

//        <div className="w-full md:w-4/12 px-4 text-center">
//          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//            <div className="px-4 py-5 flex-auto">
//              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
//                <i className="fas fa-retweet"></i>
//              </div>
//              <h6 className="text-xl font-semibold">Free Revisions</h6>
//              <p className="mt-2 mb-4 text-gray-600">
//                Keep you user engaged by providing meaningful information.
//                Remember that by this time, the user is curious.
//              </p>
//            </div>
//          </div>
//        </div>

//        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
//          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//            <div className="px-4 py-5 flex-auto">
//              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
//                <i className="fas fa-fingerprint"></i>
//              </div>
//              <h6 className="text-xl font-semibold">Verified Company</h6>
//              <p className="mt-2 mb-4 text-gray-600">
//                Write a few lines about each one. A paragraph describing a
//                feature will be enough. Keep you user engaged!
//              </p>
//            </div>
//          </div>
//        </div>
//      </div>

//      <div className="flex flex-wrap items-center mt-32">
//        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
//          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
//            <i className="fas fa-user-friends text-xl"></i>
//          </div>
//          <h3 className="text-3xl mb-2 font-semibold leading-normal">
//            Working with us is a pleasure
//          </h3>
//          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
//            Don't let your uses guess by attaching tooltips and popoves to any
//            element. Just make sure you enable them first via JavaScript.
//          </p>
//          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
//            The kit comes with three pre-built pages to help you get started
//            faster. You can change the text and images and you're good to go.
//            Just make sure you enable them first via JavaScript.
//          </p>
//          <a
//            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
//            className="font-bold text-gray-800 mt-8"
//          >
//            Check Tailwind Starter Kit!
//          </a>
//        </div>

//        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
//          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
//            <img
//              alt="..."
//              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
//              className="w-full align-middle rounded-t-lg"
//            />
//            <blockquote className="relative p-8 mb-4">
//              <h4 className="text-xl font-bold ">Top Notch Services</h4>
//              <p className="text-md font-light mt-2 ">
//                The Arctic Ocean freezes every winter and much of the sea-ice
//                then thaws every summer, and that process will continue whatever
//                happens.
//              </p>
//            </blockquote>
//          </div>
//        </div>
//      </div>
//    </div>
//  </section>
//);
