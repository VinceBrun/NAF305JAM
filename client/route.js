import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import Sidebar from './pages/sidebar';

export default [
    {
        to: '/',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '/team',
        name: 'Team',
        Icon: BiUserCircle
    },
    {
        to: '/dashboard',
        name: 'Dashboard',
        Icon: BsSpeedometer2
    },
    {
        to: '/test-components',
        name: 'Test Components',
        Icon: IoGridOutline
    },
    {
        to: '/statistics',
        name: 'Statistics',
        Icon: AiOutlineBarChart
    }
    
];