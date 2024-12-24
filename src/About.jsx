import React from "react";
import { Link, NavLink } from 'react-router-dom';
import img from './assets/react.svg'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className="ml-20"
                            src="https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React is a JavaScript library developed by Meta for building dynamic
                            and interactive user interfaces. It uses a component-based architecture,
                            allowing developers to create reusable UI elements, making applications
                            more modular and maintainable.
                        </p>
                        <p className="mt-4 text-gray-600">

                            React’s key features include a virtual DOM for efficient updates, a declarative
                            syntax for seamless rendering, and hooks for managing state and lifecycle within
                            functional components. Widely adopted for web and mobile development,
                            React simplifies the creation of fast, scalable, and user-friendly applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-48 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    
                    <div className="md:7/12 ml-20 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React is a JavaScript library developed by Meta for building dynamic
                            and interactive user interfaces. It uses a component-based architecture,
                            allowing developers to create reusable UI elements, making applications
                            more modular and maintainable.
                        </p>
                        <p className="mt-4 text-gray-600">

                            React’s key features include a virtual DOM for efficient updates, a declarative
                            syntax for seamless rendering, and hooks for managing state and lifecycle within
                            functional components. Widely adopted for web and mobile development,
                            React simplifies the creation of fast, scalable, and user-friendly applications.
                        </p>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img className="ml-20"
                            src="https://images.unsplash.com/photo-1724166573009-4634b974ebb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}