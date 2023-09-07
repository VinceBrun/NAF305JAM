import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Benefits",
  desc: "Embrace the vibrant spirit of community and camaraderie at the Joint Airmen Mess of the 305 Special Mobility Group, Nigerian Air Force, where members can relish a range of exceptional benefits",
  image: benefitOneImg,
  bullets: [
    {
      title: "Recreational Amenities",
      desc: "The mess feature recreational facilities such as lounge areas, game rooms, and entertainment centers. These amenities provide opportunities for relaxation and leisure activities during leisure hours.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Events and Celebrations",
      desc: "The Joint Airmen Mess often hosts events, parties, and celebrations to mark special occasions, holidays, and milestones. These events are designed to bring the community together in a festive and enjoyable atmosphere.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Networking and Bonding",
      desc: "A key aspect of the mess is to encourage networking and bonding amongst members. It's a space where honourable men and women from different works of life and backgrounds can connect, share stories, and forge lasting friendships.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "How to gain benefits",
  desc: "Honourable men and woman can benefit from the benevolence of the Nigerian Airforce as long as you are willing to adhere to the mess's rules and regulations.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Membership Intent Form",
      desc: "To express your interest in becoming a member of the Joint Airmen Mess at the 305 Special Mobility Group, Nigerian Air Force, you can fill out a Membership Intent Form.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Screening for Eligibility",
      desc: "Screening for eligibility to become a member of the Joint Airmen Mess at the 305 Special Mobility Group, Nigerian Air Force, ensures that potential members meet the specified criteria for membership.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Induction",
      desc: "The induction process for the Joint Airmen Mess at the 305 Special Mobility Group, Nigerian Air Force, involves formally welcoming new members into the mess community. During the induction ceremony, new members may take an oath of allegiance, receive an introduction to the mess's culture and traditions, and gain an understanding of their roles and responsibilities as mess members. ",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
