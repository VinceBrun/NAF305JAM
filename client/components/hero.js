import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/305LOGO.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              NIGERIAN AIRFORCE JOINT AIRMEN MESS
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-lg dark:text-gray-300">
              The Joint Airmen Mess Nigerian Air Force 305 Special Mobility Group Calabar plays a pivotal role in
              fostering a sense of community and unity among the members.
              It provides a welcoming and comfortable atmosphere where members can relax, socialize,
              and strengthen their relationships. The mess is designed to create a
              sense of home away from home, offering a space for members to unwind, share experiences,
              and engage in meaningful conversations.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Hero;