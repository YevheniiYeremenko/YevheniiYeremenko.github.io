import "./App.css";
import {
  AlternateEmail,
  Badge,
  Business,
  CalendarMonth,
  GitHub,
  LinkedIn,
  LocationOn,
  PermContactCalendar,
  Person,
  Phone,
  Telegram,
  Work,
} from "@mui/icons-material";
function App() {
  return (
    <div className="App bg-gray-200">
      <div className="w-full xl:w-9/12 2xl:w-8/12 mx-auto p-2 md:p-6 xl:px-0 space-y-6 mb-8 md:mb-0">
        {/* <p className="text-4xl md:text-7xl text-center">Yevhenii Yeremenko</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          <div className="font-sans">
            <p className="text-3xl font-bold mb-2 md:mb-6">about me</p>
            <div className="space-y-2">
              <p className="text-xl">
                <Work className="inline me-4 text-xs md:text-base align-text-bottom" />
                Junior JavaScript Developer
              </p>
              <p className="text-xl">
                <Person className="inline me-4 text-xs md:text-base align-text-bottom" />
                Yevhenii Yeremenko
              </p>
              <p className="text-xl">
                <LocationOn className="inline me-4 align-text-bottom" />
                Ukraine, Nikopol
              </p>
              <p className="text-xl">
                <CalendarMonth className="inline me-4 align-text-bottom" />
                24 Years old
              </p>
              <p className="text-xl">
                <Business className="inline me-4 align-text-bottom" />6 Month of
                experience
              </p>
              <p className="max-[320px]:text-base text-xl">
                <GitHub className="inline me-4 align-text-bottom" />
                <a href="https://github.com/YevheniiYeremenko" target="_blank">
                  github.com/YevheniiYeremenko
                </a>
              </p>
            </div>
          </div>

          <div className="font-sans">
            <p className="text-3xl font-bold mb-2 md:mb-6">contacts</p>
            <div className="space-y-2">
              <p className="max-[372px]:text-base text-xl">
                <AlternateEmail className="inline me-4 text-xs md:text-base align-text-bottom" />
                <a href="mailto:YevheniiYeremenkoDev@gmail.com">
                  YevheniiYeremenkoDev@gmail.com
                </a>
              </p>
              <p className="text-xl">
                <Telegram className="inline me-4 align-text-bottom" />
                <a href="https://t.me/SayNeroDev" target="_blank">
                  @SayNeroDev
                </a>
              </p>
              <p className="text-xl">
                <LinkedIn className="inline me-4 align-text-bottom" />
                <a
                  href="https://www.linkedin.com/in/yevhenii-yeremenko/"
                  target="_blank"
                >
                  linkedin.com/in/yevhenii-yeremenko/
                </a>
              </p>
              <p className="text-xl">
                <Phone className="inline me-4 align-text-bottom" />
                <a href="tel:+380989412816" target="">
                  +380 (98) 941 28 16
                </a>
              </p>
            </div>
          </div>

          <div className="font-sans flex flex-col justify-between">
            <h2 className="text-3xl font-bold mb-2 md:mb-0">education</h2>
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 text-lg font-bold">
                  2022 - 2024
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    CLASSIC PRIVATE UNIVERSITY
                  </h3>
                  <p>SOFTWARE DEVELOPMENT</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-lg font-bold">
                  2019 - 2023
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">ITSTEP ACADEMY</h3>
                  <p>SOFTWARE DEVELOPMENT</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-purple-500 text-lg font-bold">
                  2019 - 2022
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    CLASSIC PRIVATE UNIVERSITY
                  </h3>
                  <p>ECONOMIC CYBERNETICS</p>
                </div>
            </div>
          </div>

          <div className="font-sans">
            <p className="text-3xl font-bold mb-2 md:mb-6">skills</p>
            <div className="grid grid-cols-4 lg:grid-cols-5 text-center md:text-xl gap-5 md:gap-2 lg:gap-5">
              <div className="">
                <img src="react.webp" className="w-12 md:w-16 mx-auto" alt="" />
                <p>React</p>
              </div>
              <div className="">
                <img src="node.webp" className="w-12 md:w-16 mx-auto" alt="" />
                <p>Node.js</p>
              </div>
              <div className="">
                <img
                  src="next-js-logo.webp"
                  className="w-12 md:w-16 mx-auto"
                  alt=""
                />
                <p>Next.js</p>
              </div>
              <div className="">
                <img
                  src="mongodb.webp"
                  className="w-12 md:w-16 mx-auto"
                  alt=""
                />
                <p>MongoDB</p>
              </div>
              <div className="">
                <img src="sql.webp" className="w-12 md:w-16 mx-auto" alt="" />
                <p>SQL</p>
              </div>
              <div className="">
                <img
                  src="firebase.webp"
                  className="w-12 md:w-16 mx-auto"
                  alt=""
                />
                <p>Firebase</p>
              </div>
              <div className="">
                <img
                  src="tailwind-logo.webp"
                  className="w-12 md:w-16 mx-auto"
                  alt=""
                />
                <p>Tailwind</p>
              </div>
              <div className="">
                <img src="js.webp" className="w-12 md:w-16 mx-auto" alt="" />
                <p>JavaScript</p>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <img src="html.webp" className="w-12 md:w-16 mx-auto" alt="" />
                <p>HTML5</p>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <img src="css.svg" className="w-12 md:w-16 mx-auto" alt="" />
                <p>CSS3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-blue-950 text-3xl lg:text-7xl font-light">
        MY LATEST PROJECTS:
      </p>
      <div className="relative overflow-hidden">
        <img
          src="/headphones.webp"
          className="w-4/5 md:w-1/3 mt-24 lg:mt-0 z-20 absolute inset-y-1/4 md:inset-y-0 -left-48 sm:-left-18 xl:-left-36 rotate-3 lg:rotate-12"
          alt=""
        />
        <img
          src="/sticker1.webp"
          className="w-4/5 sm:w-1/5 absolute -left-20 md:-left-20 lg:-left-12 xl:-left-9 bottom-6 rotate-6 drop-shadow-2xl"
          alt=""
        />
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-2">
          <div className="col-span-2 grid grid-cols-3 gap-4 mt-10">
            <div className="col-start-1 col-span-3 lg:col-start-2 lg:col-span-2 flex flex-col justify-center">
              <div>
                <img
                  src="./cg_logo.webp"
                  className="w-3/4 -rotate-3 inline"
                  alt=""
                />
                <img
                  src="./sticker3.webp"
                  className="float-end inline h-14 w-14 md:h-20 md:w-20 mt-3 drop-shadow-2xl"
                  alt=""
                />
              </div>
              <p className="edu text-2xl mt-3 font-bold text-red-600 text-center rotate-1">
                A website for a Latvian company that designs and manufactures
                unique musical instruments, specifically a hybrid of a bass and
                a guitar.
              </p>
              <div className="flex flex-col md:flex-row gap-x-10 my-10 ps-2">
                <div className="">
                  <p className="edu font-bold text-red-600 text-3xl my-3">
                    technologies
                  </p>
                  <div className="flex gap-4">
                    <div className="relative">
                      {/* <img src="./clear-tape-01.webp" className="w-24 absolute z-10 -left-1 top-2 -rotate-6" alt="" title="Next.js"/> */}
                      <img
                        src="next-js-logo.webp"
                        className="w-16 drop-shadow-2xl"
                        alt="Next.js"
                        title="Next.js"
                      />
                    </div>
                    <div className="relative">
                      {/* <img src="./clear-tape-07.webp" className="w-24 absolute z-10 top-2 -rotate-6" alt="" title="Next.js"/> */}
                      <img
                        src="tailwind-pin.webp"
                        className="w-36 rotate-6 mt-1 drop-shadow-2xl"
                        alt="Tailwind"
                        title="Tailwind"
                      />
                    </div>
                  </div>

                  {/* <span className="rounded-full px-4 py-1 bg-red-200 text-red-800 text-xl font-bold ms-4">
                    Tailwind
                  </span> */}
                </div>
                <div className="mx-auto md:mx-0">
                  <p className="edu font-bold text-red-600 text-3xl mt-3">
                    website
                  </p>
                  <img
                    src="./arrow.webp"
                    className="h-8 w-8 inline mx-5"
                    alt=""
                  />
                  <a
                    target="blank_"
                    href="https://contraguitar.com"
                    className="edu font-bold text-red-600 hover:text-red-700 text-3xl inline underline underline-offset-4 align-bottom"
                  >
                    link
                  </a>
                </div>
              </div>
              <img
                src="./sticker2.webp"
                className="ms-20 lg:mt-4 w-28 -rotate-12 drop-shadow-xl"
                alt=""
              />
              <img
                src="./sticker4.webp"
                className="ms-auto lg:me-20 w-20 drop-shadow-xl"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="max-h-screen xl:max-h-none xl:h-screen px-6 md:px-0">
              <img
                src="./phone_cg.webp"
                className="mx-auto md:w-3/4 max-h-screen xl:max-h-none z-20 -rotate-12 -mt-40 md:-mt-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          src="/guitar.webp"
          className="h-1/3 md:h-full xl:h-full md:max-h-screen xl:h-screen absolute inset-y-0 -right-28 sm:-right-32 md:-right-20 lg:-right-32 rotate-[20deg] z-10"
          alt=""
        />
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto grid grid-cols-12 px-4 relative">
          <div className="hidden max-h-screen lg:flex sm:col-span-4 md:col-span-3 flex-col justify-around">
            <img src="./daisies.webp" className="w-4/5" alt="" />
            <img
              src="./nirvana-diary.webp"
              className="w-10/12 rotate-6"
              alt=""
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="text-center text-blue-950">
              <p className="text-5xl sm:text-6xl font-bold">Nirvana AI</p>
              <p className="text-2xl sm:text-3xl font-semibold">
                Mood diary{" "}
                <span className="text-sky-600 underline underline-offset-4">
                  Telegram
                </span>{" "}
                bot
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 pt-10 gap-y-4">
                <div className="relative drop-shadow-lg">
                  <img
                    src="./pin1.webp"
                    className="absolute mx-auto inset-x-0 -top-6 w-8 drop-shadow-lg"
                    alt=""
                  />
                  <p className="paper edu text-blue-800 text-xl font-semibold p-4">
                    My pet project is a mood diary with AI capabilities{" "}
                    <span className="text-sm font-bold">(GPT-4)</span>. It
                    allows users to track their mood, leave notes, chat with an
                    AI psychologist, review and analyze their statistics using
                    AI.
                  </p>
                  <img
                    src="./paper-2.webp"
                    className="w-auto rotate-180"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="edu text-3xl text-blue-800">technologies:</p>
                  <div className="flex justify-around gap-x-2">
                    <img
                      src="./telegraf-sticker.webp"
                      className="w-32 rotate-6"
                      alt=""
                      title="telegraf.js"
                    />
                    <img
                      src="./firebase-sticker.webp"
                      className="w-32"
                      alt=""
                      title="firebase"
                    />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="./petals.webp"
                    className="absolute -right-3 lg:-right-12 top-0 w-28 lg:w-32"
                    alt=""
                  />
                  <p className="edu text-3xl text-blue-800">bot:</p>
                  <div className="text-center hidden lg:block">
                    <a
                      href=""
                      className="inline-block relative p-5 bg-zinc-50 rounded-full drop-shadow-md"
                    >
                      <img src="./Nirvana-QR.webp" className="w-24" alt="" />
                      <img
                        src="./pointer.webp"
                        className="w-4 absolute bottom-1 right-3 -rotate-12"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="" className="inline-block ms-8 lg:hidden">
                    <p className="text-3xl edu font-medium text-blue-800 underline underline-offset-4">
                      open in telegram
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex relative max-h-screen">
                <div className="flex-1 hidden sm:block md:hidden">
                  <img src="./daisies.webp" className="w-4/5" alt="" />
                  <img src="./nirvana-diary.webp" className="rotate-6" alt="" />
                </div>
                <div className="flex-1">
                  <img
                    src="./phone-bot.webp"
                    className="w-auto h-auto xl:max-h-[85%] max-h-full mx-auto lg:mx-0 lg:ms-auto rotate-3 lg:-rotate-3"
                    alt=""
                  />
                </div>
                <img
                  src="./flower.webp"
                  className="w-auto max-h-[85%] z-10 absolute -right-36 bottom-10 lg:hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-col justify-center hidden lg:flex col-span-2 lg:col-span-2">
            <img
              src="./flower.webp"
              className="w-10/12 lg:w-[110%] ms-auto"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-20 xl:-mt-20">
        <p className="md:hidden text-5xl text-center text-blue-950 font-bold">
          Nirvana CRM
        </p>
        <img
          src="./phone-crm.webp"
          className="w-full mx-auto md:hidden -mt-10"
          alt=""
        />
        <img
          src="./nirvana-dashboard-paper.webp"
          className="w-full md:w-11/12 mx-auto hidden md:block"
          alt=""
        />
        <img
          src="./coffee-cup.webp"
          className="hidden lg:block lg:w-72 xl:w-80 absolute -right-20 lg:top-40 xl:top-48 z-20 rotate-45"
          alt=""
        />
        <div className="w-11/12 md:w-3/4 lg:w-2/6 lg:absolute z-10 lg:left-10 lg:bottom-20 mx-auto bg-white -rotate-3 drop-shadow-2xl px-5 pb-8 relative">
          <img
            src="./spiral-notebook-2.webp"
            className="w-11/12 absolute inset-x-0 -top-4 lg:-top-5 mx-auto"
            alt=""
          />
          <p className="edu text-blue-800 text-xl py-7 font-medium">
            The CRM provides access to statistics, user and order management,
            email campaigns, and technical support for users.
          </p>
          <p className="edu text-3xl text-blue-800 mb-2">technologies:</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <img
                src="./react-sticker.webp"
                className="w-auto -rotate-6"
                alt=""
              />
            </div>
            <div className="flex-1">
              <img src="./tailwind-sticker.webp" className="w-auto" alt="" />
            </div>
            <div className="flex-1">
              <img src="./firebase-sticker.webp" className="w-auto" alt="" />
            </div>
            <div className="flex-1">
              <img
                src="./mui-sticker.webp"
                className="w-auto -rotate-12"
                alt=""
              />
            </div>
          </div>
          <img
          src="./coffee-cup.webp"
          className="lg:hidden w-72 sm:w-48 absolute -right-52 -bottom-20 z-20 rotate-45"
          alt=""
        />
        </div>
      </div>

      <div className="py-14 overflow-hidden mb-10 -mt-20">
        <p className="text-center text-blue-950 text-5xl sm:text-6xl font-bold mb-2">
          Weather App
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="./weather-app-2.webp"
          className="rotate-6 bg-white p-2 pb-6 lg:p-3 lg:pb-8 drop-shadow-2xl"
          alt=""
        />
        <img
          src="./weather-app-3.webp"
          className="-rotate-3 bg-white p-2 pb-6 lg:p-3 lg:pb-8 drop-shadow-2xl z-10"
          alt=""
        />
        <img
          src="./weather-app.webp"
          className="rotate-2 bg-white p-2 pb-6 lg:p-3 lg:pb-8 drop-shadow-2xl"
          alt=""
        />
         <div className="flex flex-col justify-center text-center text-blue-950 text-2xl edu font-medium py-10">
          <p>A simple React application that uses the OpenWeather API.</p>{" "}
          <div className="flex justify-evenly mt-5 text-3xl ">
          <div className="">
            <p>website: <a href="" className="inline underline underline-offset-4">link</a></p>
          </div>
          <div className="">
            <p>github: <a href="" className="inline underline underline-offset-4">link</a></p>
          </div>
          </div>
        </div>
        </div>
      </div>

      <footer className="text-center py-8 bg-black text-gray-200 space-y-5">
        <div className="space-x-5">
          <a href="https://www.t.me/SayNeroDev" target="_blank">
            <Telegram className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/yevhenii-yeremenko/"
            target="_blank"
          >
            <LinkedIn className="" />
          </a>
        </div>
        <p>2024</p>
      </footer>
    </div>
  );
}

export default App;
