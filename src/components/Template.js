import React from 'react'

const Template = props => {
  return (
    <div className="flex justify-center">
      <div class="container m-6 max-w-3xl rounded overflow-hidden shadow-lg">
        {props.children}
        <div class="px-6 py-4 bg-green-500">
          <div class="font-bold text-xl mb-2 text-center">
            Under Construction
          </div>
          <p class="text-gray-100 text-base text-center">
            Hi, welcome to my portfolio. <br />
            I'm working on my new page, I hope you come back soon!
          </p>
        </div>
        <div class="bg-green-100 px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #software
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #blog
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #porfolio
          </span>
        </div>
      </div>
    </div>
  )
}

export default Template
