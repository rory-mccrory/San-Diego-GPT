"use client";
import { useEffect } from "react";
export default function Navbar() {
    // On mount, set theme from localStorage if available
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
        document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    return (
        <div className="navbar bg-base-100 shadow-sm text-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-base-content">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base-content">
                        <li><a className="text-base-content">Homepage</a></li>
                        <li><a className="text-base-content">GitHub</a></li>
                        <li><a className="text-base-content">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl text-base-content">San Diego GPT</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle text-base-content">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle text-base-content">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <label className="swap swap-rotate text-base-content">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={toggleTheme} />
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64 17.657l-1.414 1.414-1.414-1.414 1.414-1.414zm12.02 0l1.414 1.414-1.414 1.414-1.414-1.414zm1.414-12.02l1.414 1.414-1.414 1.414-1.414-1.414zm-12.02 0l-1.414-1.414 1.414-1.414 1.414 1.414zm6.364-2.121V1h-2v2.121zm0 18.364V23h-2v-2.121zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64 13.64A9 9 0 1110.36 2.36a7 7 0 1011.28 11.28z"/></svg>
                </label>
            </div>
        </div>
    );
}