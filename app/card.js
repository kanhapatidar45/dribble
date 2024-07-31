"use client";

import React from 'react';

const Card = ({ title, description, imageUrl, skill1, skill2 }) => {
    return (
        <div className="card relative shadow-md rounded-3xl overflow-hidden w-60 h-80">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0  bg-opacity-50 w-full p-4">
                <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
                <p className="text-slate-200">{description}</p>
                <div class="flex space-x-2">
                    <div class="bg-transparent border border-white rounded-full w-14 h-8 p-2 flex items-center justify-center">
                        <p class="text-center text-white">{skill1}</p>
                    </div>

                    <div class="bg-transparent border border-white rounded-full w-14 h-8 p-2 flex items-center justify-center">
                        <p class="text-center text-white">{skill2}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;
