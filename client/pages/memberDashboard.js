import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const initialNavigation = [
    { name: 'Member', href: '#', current: true },
    { name: 'Team', href: '/team', current: false },
    // Update href values for the remaining links
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
];

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const [navigation, setNavigation] = useState(initialNavigation);
    const router = useRouter();

    useEffect(() => {
        updateCurrentPage(router.pathname);

        const handleRouteChange = (url) => {
            updateCurrentPage(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, []);

    const updateCurrentPage = (path) => {
        const updatedNavigation = navigation.map((item) => ({
            ...item,
            current: item.href === path,
        }));
        setNavigation(updatedNavigation);
    };

    return (
        <>
            <div className="min-h-full">
                <div className="bg-gray-800 pb-32">
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="border-b border-gray-700">
                                        <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-8 w-8"
                                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                        alt="Your Company"
                                                    />
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    <div className="absolute inset-y-0 right-0 mr-3 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                                        <ConnectWallet showBalance={{ smallScreen: true, largeScreen: false }} />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                    >
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">View notifications</span>
                                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>

                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="absolute -inset-1.5" />
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-gray-700 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    {userNavigation.map((item) => (
                                                                        <Disclosure.Button
                                                                            key={item.name}
                                                                            as="a"
                                                                            href={item.href}
                                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                                                        >
                                                                            {item.name}
                                                                        </Disclosure.Button>
                                                                    ))}
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <div className="flex md:hidden">
                                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome to your Dashboard</h1>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}
