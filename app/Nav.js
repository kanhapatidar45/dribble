import React from 'react'

const Nav = () => {
  return (


      <nav class="navbackground border-gray-200 dark:border-gray-600 ">
          <div class="flex flex-wrap justify-start mx-auto max-w-screen-xl p-4">

            
              
              <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse pr-6 pt-1">
                  
                  <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Frame" clip-path="url(#clip0_1_4)">
                          <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M88.5523 19.0544C88.7421 18.8302 89.0786 18.8404 89.2513 19.0796H89.25L89.9074 19.9905C90.0321 20.1655 90.0313 20.407 89.901 20.5774C88.7597 22.0776 86.76 23.5216 84.3471 23.6613C82.4426 23.7711 80.8719 23.0399 80.0169 21.6576C79.8476 21.3842 79.4743 21.3682 79.2844 21.6268C78.27 23.0067 77.0426 24.0858 75.7637 24.1601C73.4859 24.2918 72.8426 22.7436 73.4057 19.3302C73.4623 18.9904 73.1683 18.7032 72.8516 18.7878C72.3793 18.9148 71.8779 18.9709 71.3691 18.9263C71.1574 18.908 70.959 19.0385 70.8951 19.2512C70.0521 22.057 68.046 24.6671 65.4493 24.8182C63.7916 24.9143 61.3153 23.9519 61.563 19.9309C61.5836 19.6037 61.2939 19.3462 60.9956 19.4377C60.4757 19.598 59.916 19.6735 59.346 19.6243C59.1347 19.6059 58.9371 19.7364 58.8733 19.9493C58.0303 22.755 56.0241 25.3651 53.4274 25.5161C51.7697 25.6122 49.2934 24.65 49.5411 20.629C49.5617 20.3016 49.272 20.0442 48.9737 20.1358C48.4539 20.296 47.8941 20.3727 47.3241 20.3223C47.1129 20.304 46.9153 20.4345 46.8514 20.6472C46.008 23.4531 44.0023 26.0631 41.4057 26.2142C40.2263 26.2828 38.6313 25.8148 37.8989 24.0915C37.7578 23.7586 37.3347 23.7082 37.1253 23.9977C36.1 25.4155 34.8511 26.5346 33.5469 26.6101C32.2102 26.6879 31.479 26.1444 31.161 25.1751C31.0482 24.833 30.6261 24.7517 30.3983 25.0229C29.4858 26.11 28.4464 26.9064 27.395 26.9671C25.774 27.0621 24.8408 25.8445 24.7638 24.3695C24.6749 22.6486 25.4094 20.6335 26.2296 18.4342C26.3436 18.1287 26.1374 17.798 25.8261 17.7842C25.353 17.7637 24.8127 17.7133 24.3048 17.6172C24.0759 17.5726 23.8536 17.7168 23.7884 17.9525C22.8184 21.462 21.333 24.9017 20.0798 26.935C19.9398 27.1627 19.6502 27.2234 19.4397 27.0666L18.4827 26.3527C18.2864 26.205 18.2332 25.9212 18.3645 25.7073C20.1754 22.7676 21.7833 18.1653 22.3378 14.7611C22.3725 14.5437 22.5471 14.3824 22.7565 14.3698L24.0293 14.2954C24.3211 14.2783 24.5512 14.554 24.498 14.8572L24.4926 14.8893C24.4448 15.1593 24.6228 15.4134 24.8799 15.4489C26.0213 15.608 27.727 15.6273 28.8846 15.5816C29.2101 15.569 29.4402 15.91 29.3219 16.2292C28.3932 18.7329 27.1487 22.2024 27.2202 23.5754C27.2528 24.1956 27.523 24.5343 27.9982 24.5069C28.9075 24.4543 30.306 22.6016 31.3661 20.5386C31.3856 20.5019 31.3997 20.462 31.4084 20.4208C31.7655 18.8053 32.2956 17.0041 32.8312 15.1842L32.8644 15.0712C32.9198 14.8813 33.0815 14.7485 33.2703 14.7371L34.7947 14.649C35.1094 14.6307 35.3448 14.9511 35.2494 15.268C35.1709 15.5294 35.0927 15.7891 35.0153 16.0463C33.6738 20.5016 32.5473 24.2432 34.0645 24.1557C35.0562 24.0983 36.4613 22.3934 37.67 19.9664C37.6895 19.9263 37.7036 19.884 37.7123 19.8394C37.7731 19.5224 37.8468 19.1906 37.9369 18.8439C38.6417 15.9916 39.4408 13.166 40.2409 10.337C40.4879 9.46394 40.7349 8.59051 40.9792 7.71588C41.0335 7.5225 41.1962 7.38633 41.3871 7.37488L42.9519 7.28448C43.2699 7.26618 43.5051 7.59001 43.4053 7.90926C42.7803 9.89571 42.1272 12.0115 41.5066 14.0483C41.3763 14.4774 41.8299 14.8344 42.188 14.5872C42.8053 14.1593 43.5193 13.8755 44.2106 13.8354C45.9716 13.7336 47.1703 15.2017 47.2851 17.4135C47.2916 17.5303 47.2984 17.6561 47.3014 17.7842C47.3079 18.0292 47.4891 18.2271 47.7206 18.2477C48.5494 18.3221 49.3967 18.0727 50.0511 17.4811C50.1184 17.4204 50.1639 17.338 50.1866 17.2487C50.8354 14.6958 51.5516 12.1618 52.2681 9.62467C52.5137 8.75603 52.7593 7.88702 53.0023 7.01672C53.0563 6.82334 53.2191 6.68717 53.4103 6.67573L54.9746 6.58533C55.2926 6.56703 55.5283 6.89085 55.4284 7.2101C54.8031 9.19656 54.15 11.3123 53.5294 13.3491C53.3991 13.7782 53.853 14.1352 54.2109 13.8881C54.8284 13.4601 55.5424 13.1763 56.2333 13.1363C57.9943 13.0345 59.193 14.5025 59.3083 16.7145C59.3147 16.8311 59.3211 16.9571 59.3246 17.0852C59.3297 17.33 59.5123 17.528 59.7433 17.5486C60.5721 17.623 61.4194 17.3735 62.0739 16.7819C62.1411 16.7213 62.1866 16.6389 62.2097 16.5497C62.8586 13.9967 63.5743 11.4627 64.2913 8.92564C64.5369 8.05696 64.782 7.1879 65.025 6.31758C65.0794 6.12419 65.2423 5.98803 65.433 5.97658L66.9977 5.88619C67.3157 5.86788 67.551 6.19171 67.4511 6.51096C66.8263 8.4974 66.1731 10.6131 65.5526 12.6499C65.4223 13.0791 65.8757 13.4361 66.234 13.1889C66.8511 12.761 67.5651 12.4772 68.2564 12.4371C70.0174 12.3353 71.2161 13.8034 71.3314 16.0153C71.3379 16.1331 71.3443 16.2579 71.3473 16.386C71.3541 16.6297 71.5341 16.8288 71.7651 16.8494C72.567 16.9215 73.3873 16.6904 74.0319 16.14C74.1034 16.0793 74.1531 15.9935 74.1771 15.8997C74.916 13.0138 76.0011 9.23318 77.0473 5.61499C77.1026 5.4239 77.265 5.29117 77.454 5.27972L79.0046 5.18933C79.3191 5.17102 79.5544 5.48913 79.4601 5.80609C78.0201 10.6509 76.8463 14.8893 76.1987 17.3896C75.3381 20.7811 75.3047 21.7595 76.2831 21.7023C77.1047 21.6542 78.2113 20.4733 79.2549 18.6882C79.2964 18.6184 79.3179 18.5384 79.3213 18.4571C79.458 14.8836 81.6201 11.6327 84.834 11.4462C86.9867 11.3215 88.1661 12.9692 88.2506 14.5906C88.4113 17.6859 85.392 19.6644 82.4657 19.4812C82.125 19.4595 81.8773 19.8303 82.0273 20.1529C82.4361 21.0386 83.2967 21.533 84.7659 21.4471C86.1634 21.3671 87.6291 20.1449 88.5523 19.0544ZM40.1806 19.9229C39.4862 22.7436 40.3293 23.8477 41.4197 23.7848C43.2099 23.6807 44.9417 20.3566 44.8084 17.7911C44.7497 16.6709 44.103 16.0873 43.3479 16.1309C42.0903 16.2041 40.7362 17.6721 40.1806 19.9229ZM52.2034 19.225C51.5091 22.0455 52.3521 23.1498 53.4429 23.0868H53.4416C55.2317 22.9827 56.9644 19.6586 56.8311 17.0932C56.7737 15.9729 56.1257 15.3893 55.3706 15.4328C54.1131 15.5061 52.7593 16.9742 52.2034 19.225ZM64.2266 18.5269C63.5323 21.3476 64.3753 22.4518 65.4656 22.3889H65.4647C67.2536 22.2847 68.9876 18.9606 68.8543 16.3952C68.7964 15.2749 68.1489 14.6914 67.3937 14.7348C66.1363 14.808 64.782 16.2762 64.2266 18.5269ZM85.9646 14.8401C85.9539 14.1009 85.5056 13.5654 84.7787 13.6077H84.7779C83.3499 13.6912 82.2321 15.2577 81.8764 17.1584C81.8199 17.4605 82.038 17.7419 82.3299 17.735C84.1744 17.6882 86.0233 16.4546 85.9646 14.8401ZM19.0082 16.2123C18.8216 10.4852 15.1467 6.7057 9.71623 6.90252C7.38459 7.01008 4.71651 7.90604 2.70927 9.50802C2.52048 9.65907 2.47165 9.93597 2.59968 10.1465L3.45142 11.5517C3.5968 11.792 3.90603 11.8412 4.11761 11.6627C5.64531 10.3765 7.7307 9.53321 9.73684 9.44394C13.4584 9.28717 16.1926 11.7016 16.3522 16.3657C16.5518 21.7964 12.9496 28.0086 7.16104 28.345C6.95923 28.3565 6.74876 28.3611 6.53824 28.3611C6.24313 28.3611 6.02507 28.0693 6.09883 27.7671C7.2153 23.2003 8.51841 18.3029 9.84754 13.7453C9.93977 13.4283 9.70539 13.1125 9.39184 13.1308L7.6992 13.2292C7.50934 13.2406 7.34657 13.3745 7.29124 13.5667C6.01419 18.0454 4.73606 22.9029 3.58596 27.4605C3.51977 27.7237 3.25612 27.8747 3.0109 27.79C2.4109 27.5829 1.86297 27.3472 1.39641 27.0714C1.1729 26.9387 0.889719 27.0326 0.774707 27.2751L0.0477515 28.8153C-0.059664 29.0431 0.0195415 29.3222 0.231118 29.4446C1.87924 30.3921 4.38129 30.9333 6.89631 30.7881C15.1728 30.3074 19.2274 22.5607 19.0082 16.2146V16.2123ZM35.2733 9.17567C34.2664 9.23402 33.3734 10.3806 33.4364 11.5889C33.4776 12.3853 33.9822 12.9174 34.7655 12.8728C35.7724 12.8145 36.6903 11.6072 36.6306 10.4572C36.5895 9.66085 36.0002 9.13333 35.2733 9.17567Z" fill="black" />
                      </g>
                      <defs>
                          <clipPath id="clip0_1_4">
                              <rect width="90" height="36" fill="white" />
                          </clipPath>
                      </defs>
                  </svg>


                 

              </a>


              

             
              <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                  <ul class=" list flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                      
                      <li>
                          <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Find designers<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                          </svg></button>
                      </li>

                      <li>
                          <a href="#" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inspiration</a>
                      </li>

                      <li>
                          <a href="#" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Jobs</a>
                      </li>

                      <li>
                          <a href="#" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Go pro</a>
                      </li>


                     <div className='searchBar'>
                        <div  class="bg-white rounded-full w-40 h-9 flex flex-row justify-center pt-1">
                              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 mt-1 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />

                              </svg>
                             
                              <span class='text-gray-400'>Search...</span>

                        </div>
                         

                          
                     </div>


                     <button>Log in</button>
                     
                     <div class='bg-black rounded-full w-20 text-white text-center pt-2' >
                        <button>Sign Up </button>
                     </div>
                         

                     
                      
                     
                  </ul>
              </div>


             

          </div>
   

         <div>
            <div class='container  '>

                  <div class='nav-sec1 bg-blue-400  w-80 h-9 text-center rounded-full'>

                      <span class='text-center text-black text-sm'>Over 3 million ready-to-work creatives!</span>



                  </div>

            </div>
           
           
           
            <div class=' sec2 nav-sec1  text-5xl  '>

                 <div class=' text-center'>
                      The world’s destination <br/> for design
                 </div>

           </div>

            <div class=' sec3 nav-sec1  text-xl  '>

                  <div class=' text-center'>
                      Get inspired by the work of millions of top-rated designers & <br /> agencies around the world.
                  </div>

            </div>


            <div class='sec4 rounded-full mt-8'>
                <button class='text-white mt-2.5 ml-2.5' >Get started</button>
            </div>
              
              
         </div>
    
      </nav>

  )
}

export default Nav





