const gameObj = {
  UltraInstinctTest: {
    svg: `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="padding: 20px;"
      >
        <path
          d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z"
          fill="currentcolor"
        />
      </svg>`,
    title: "Ultra Instict",
    description: "Test your visual instincts!",
  },
  SequenceSymphonyTest: {
    svg: 
    `<svg
    width="128"
     height="100"
     viewBox="0 0 128 128"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     style="padding: 20px"
   >
     <rect
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <rect
       x="70"
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <rect
       y="70"
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
       fill="currentcolor"
     ></path>
   </svg>`,
    title: "Sequence Symphony",
    description: "Remember and replicate a sequence  of flashing squares!",
  },
  TypingTest:{
    svg:
    `<svg
    width="100%"
    height="100%"
    viewBox="0 0 125 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="padding: 20px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.3278 2.28093C19.2495 0.858591 20.8289 0 22.5238 0H101.929C103.598 0 105.158 0.833566 106.086 2.22191L123.314 28.0032C124.413 29.6478 125 31.5813 125 33.5593V122C125 124.761 122.761 127 120 127H5C2.23858 127 0 124.761 0 122V33.5209C0 31.591 0.558439 29.7023 1.60795 28.0827L18.3278 2.28093ZM17.5238 21.9102V75.2696L10 94.9366V33.5208L17.5238 21.9102ZM12.2662 117H112.652L98.5261 81.1934H25.9644L12.2662 117ZM27.5238 71.1934H96.9286V10H27.5238V71.1934ZM106.929 21.4811L115 33.5593V95.7018L106.929 75.2428V21.4811Z"
      fill="currentcolor"
    ></path>
    <path
      d="M77.3883 53.2029C77.7091 55.1944 76.1711 57 74.1539 57V57C72.5085 57 71.1184 55.7796 70.9054 54.148L70.7384 52.8685C70.4298 50.505 68.416 48.737 66.0325 48.737H58.6308C56.9534 48.737 55.3877 49.5781 54.4617 50.9768L51.3823 55.628C50.8151 56.4848 49.856 57 48.8285 57V57C46.3613 57 44.9067 54.2318 46.3062 52.1999L64.2397 26.1637C65.1728 24.8091 66.7381 24 68.383 24V24C70.8375 24 72.9705 25.7815 73.3609 28.2047L77.3883 53.2029ZM62.3364 39.1553C60.6899 41.6312 62.4649 44.9433 65.4383 44.9433V44.9433C67.6795 44.9433 69.4133 42.9785 69.1345 40.7547V40.7547C68.705 37.3285 64.2485 36.28 62.3364 39.1553V39.1553Z"
      fill="currentcolor"
    ></path>
  </svg>`,
  title:"Typing Test",
  description:"How many words per minute can you type?"
  },
  DigitPlaybackTest:{
    svg:
    `<svg
    width="100%"
    height="100%"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="padding: 20px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 0C8.95431 0 0 8.95431 0 20V108C0 119.046 8.95431 128 20 128H108C119.046 128 128 119.046 128 108V20C128 8.95431 119.046 0 108 0H20ZM76.9347 58.1152C77.6244 58.8068 78.4359 59.1525 79.3691 59.1525H102.922C103.856 59.1525 104.647 58.8068 105.296 58.1152C105.986 57.4237 106.331 56.6102 106.331 55.6746V54.2712C106.331 53.3356 105.986 52.522 105.296 51.8305C104.647 51.139 103.856 50.7932 102.922 50.7932H89.5938C89.5532 50.7932 89.5329 50.7729 89.5329 50.7322C89.5329 50.6915 89.5532 50.6508 89.5938 50.6102C96.1262 45.078 100.508 40.7051 102.74 37.4915C105.012 34.2373 106.148 30.8203 106.148 27.2407C106.148 23.0915 104.809 19.8576 102.131 17.539C99.4938 15.1797 95.7204 14 90.811 14C87.4028 14 83.8525 14.4881 80.1603 15.4644C79.146 15.7491 78.3345 16.3186 77.7259 17.1729C77.1173 17.9864 76.813 18.922 76.813 19.9797V22.5424C76.813 23.3559 77.1578 23.9864 77.8476 24.4339C78.5374 24.8814 79.2677 24.9627 80.0386 24.678C83.6903 23.2949 86.7739 22.6034 89.2895 22.6034C93.428 22.6034 95.4973 24.4746 95.4973 28.2169C95.4973 30.9017 94.3815 33.6475 92.1499 36.4542C89.9589 39.261 85.4552 43.3491 78.6388 48.7186C76.813 50.1424 75.9 51.9932 75.9 54.2712V55.6746C75.9 56.6102 76.2449 57.4237 76.9347 58.1152ZM22.4066 32.6712C23.0557 32.9966 23.6643 32.9356 24.2324 32.4882L33.1181 26.0204H33.2398V55.6746C33.2398 56.6102 33.5847 57.4237 34.2744 58.1153C34.9642 58.8068 35.7757 59.1526 36.7089 59.1526H40.5431C41.4763 59.1526 42.2878 58.8068 42.9776 58.1153C43.6673 57.4237 44.0122 56.6102 44.0122 55.6746V18.0882C44.0122 17.1526 43.6673 16.339 42.9776 15.6475C42.2878 14.956 41.4763 14.6102 40.5431 14.6102H36.7089C34.3556 14.6102 32.266 15.2814 30.4402 16.6238L24.2932 21.139C22.4268 22.4814 21.4936 24.3119 21.4936 26.6305V31.0848C21.4936 31.817 21.7979 32.3458 22.4066 32.6712ZM24.4691 77.2068C23.5359 77.2068 22.7244 76.861 22.0346 76.1695C21.3449 75.478 21 74.6644 21 73.7288V72.3254C21 71.3898 21.3449 70.5763 22.0346 69.8848C22.7244 69.1932 23.5359 68.8475 24.4691 68.8475H47.1702C48.1034 68.8475 48.9149 69.1932 49.6047 69.8848C50.2944 70.5763 50.6393 71.3898 50.6393 72.3254V73.7288C50.6393 76.0475 49.7467 77.939 47.9614 79.4034L38.7714 87.0305V87.0915C38.7714 87.1322 38.7917 87.1526 38.8323 87.1526H39.5626C43.0925 87.1526 45.9124 88.2509 48.0223 90.4475C50.1727 92.6441 51.2479 95.6136 51.2479 99.3559C51.2479 104.075 49.8075 107.695 46.9268 110.217C44.046 112.739 39.9075 114 34.5111 114C31.2652 114 27.9787 113.614 24.6517 112.841C23.6779 112.597 22.8664 112.068 22.2172 111.254C21.6086 110.4 21.3043 109.444 21.3043 108.386V106.312C21.3043 105.498 21.6289 104.868 22.2781 104.42C22.9678 103.932 23.7185 103.81 24.5299 104.054C28.0193 105.193 31.0624 105.763 33.6591 105.763C36.0124 105.763 37.8382 105.214 39.1366 104.115C40.4349 103.017 41.0841 101.492 41.0841 99.539C41.0841 97.5458 40.3335 96.1424 38.8323 95.3288C37.331 94.5153 34.5314 94.0881 30.4335 94.0475C29.5003 94.0475 28.6888 93.722 27.999 93.0712C27.3093 92.3797 26.9644 91.5661 26.9644 90.6305V90.5085C26.9644 88.2305 27.8367 86.339 29.5814 84.8339L38.2237 77.3288V77.2678C38.2237 77.2271 38.2034 77.2068 38.1628 77.2068H24.4691ZM76.813 77.4508C77.5027 77.939 78.2533 78.0813 79.0648 77.8779C82.8788 76.9017 86.3884 76.4135 89.5938 76.4135C93.9757 76.4135 96.1667 77.7559 96.1667 80.4407C96.1667 81.2135 95.9233 81.9661 95.4364 82.6983C94.9495 83.4305 94.4221 84.0407 93.854 84.5288C93.3266 85.0169 92.5151 85.6678 91.4196 86.4813C90.0401 87.4983 88.9852 88.3322 88.2548 88.983C87.5245 89.5932 86.6927 90.5491 85.7595 91.8508C84.8263 93.1118 84.1771 94.4339 83.812 95.8169C83.5685 96.7118 83.7714 97.5051 84.4206 98.1966C85.0698 98.8881 85.8812 99.2339 86.855 99.2339H89.472C91.2167 99.2339 92.6571 98.1356 93.7932 95.939C94.1583 95.2474 94.6858 94.5559 95.3756 93.8644C96.0653 93.1322 96.6536 92.6034 97.1405 92.2779C97.6274 91.9118 98.3983 91.3424 99.4532 90.5695C100.711 89.7152 101.644 89.044 102.253 88.5559C102.902 88.0271 103.653 87.2746 104.505 86.2983C105.397 85.322 106.026 84.244 106.391 83.0644C106.797 81.8847 107 80.5424 107 79.0373C107 75.8237 105.6 73.2203 102.801 71.2271C100.001 69.2339 96.1059 68.2373 91.1153 68.2373C87.3013 68.2373 83.3048 68.6237 79.1257 69.3966C78.1519 69.5593 77.3404 70.0474 76.6912 70.861C76.0826 71.6339 75.7783 72.5288 75.7783 73.5457V75.3763C75.7783 76.2305 76.1232 76.922 76.813 77.4508ZM89.9589 104.237H86.3073C85.3741 104.237 84.5626 104.583 83.8728 105.275C83.2236 105.966 82.899 106.78 82.899 107.715V109.912C82.899 110.847 83.2236 111.661 83.8728 112.353C84.5626 113.044 85.3741 113.39 86.3073 113.39H89.9589C90.8921 113.39 91.7036 113.044 92.3934 112.353C93.0831 111.661 93.428 110.847 93.428 109.912V107.715C93.428 106.78 93.0831 105.966 92.3934 105.275C91.7036 104.583 90.8921 104.237 89.9589 104.237Z"
      fill="currentcolor"
    ></path>
  </svg>`,
  title:"Digit Playback",
  description:"how many digits can you remember?"
  },
  WorkingMemoryTest:{
    svg:
    `<svg fill="#000000" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 488 488" xml:space="preserve">
 <g transform="translate(0 -540.36)">
   <g>
     <g>
       <path d="M336.485,713.314c0.5-2.6,0.9-5.401,0.9-8.401c0-29.104-25.996-52.808-57.891-52.808
         c-13.898,0-27.696,5.101-37.994,13.602c-10.698-8.701-24.296-13.602-38.394-13.602c-15.098,0-29.395,5.301-40.094,15.102
         c-10.998,10.001-16.997,23.403-16.997,37.706c0,3.801,0.4,7.501,1.1,10.902c-15.898,9.601-25.796,26.104-25.796,44.106
         c0,9.601,2.3,18.203,7.099,26.104c-4.599,7.801-7.099,16.802-7.099,25.904c0,18.103,9.099,34.205,24.896,44.206
         c-0.2,2.7-0.2,5.301-0.2,7.801c0,14.302,6.099,27.704,16.997,37.706c10.698,9.701,24.896,15.102,40.094,15.102
         c14.098,0,27.596-4.901,38.394-13.602c10.398,8.601,24.096,13.602,37.994,13.602c31.895,0,57.891-23.703,57.891-52.708
         c0-1.8-0.1-3.601-0.3-5.301c18.497-9.201,30.395-27.104,30.395-46.707c0-9.101-2.5-18.003-7.099-25.904
         c4.799-7.901,7.099-16.502,7.099-26.104C367.481,740.118,355.183,722.015,336.485,713.314z M340.585,792.225
         c4.599,5.701,6.999,12.502,6.999,19.703c0,13.602-9.998,26.104-24.796,31.005c-4.799,1.6-7.699,6.501-6.699,11.502
         c0.6,3.401,1.3,6.701,1.3,9.501c0,18.103-16.997,32.805-37.894,32.805c-11.598,0-23.396-5.401-29.995-13.802
         c-1.8-2.3-4.599-3.701-7.599-3.801c-0.1,0-0.1,0-0.2,0l0,0c-2.9,0-5.699,1.2-7.399,3.701
         c-7.699,8.901-18.997,14.102-30.995,14.102c-20.497,0-37.094-14.702-37.094-32.805c0-3.6,0-7.301,0.8-9.301
         c2-4.901-0.2-10.502-4.999-12.802c-12.798-6.101-20.497-17.303-20.497-30.004c0-7.201,2.4-14.002,6.999-19.703
         c3-3.701,3-8.901,0-12.602c-4.799-5.901-6.999-12.202-6.999-19.703c0-12.702,8.399-24.404,21.497-29.704
         c2.5-1,4.499-3,5.499-5.501s1-5.301-0.1-7.801c-1.6-3.601-2.3-7.401-2.3-12.102c0-18.103,16.697-32.805,37.094-32.805
         c11.898,0,23.196,5.101,30.995,14.102c2,2.3,4.799,3.601,7.799,3.5c3-0.1,5.699-1.5,7.599-3.801
         c6.699-8.401,18.397-13.802,29.995-13.802c20.897,0,37.894,14.702,37.894,32.805c0,3.701-1.2,7.201-2.6,11.302
         c-0.8,2.6-0.6,5.501,0.7,7.901s3.499,4.201,6.199,4.901c15.198,4.101,25.796,16.802,25.796,30.905
         c0,7.501-2.2,13.702-6.999,19.703C337.585,783.324,337.585,788.525,340.585,792.225z"/>
       <path d="M261.797,767.122l-21.397,7.201l13.198-37.205c1.8-5.201-0.9-11.002-6.099-12.802c-5.199-1.8-10.998,0.9-12.798,6.101
         l-20.097,56.608c-1.3,3.701-0.4,7.701,2.3,10.401c2.7,2.8,6.699,3.701,10.298,2.5l21.297-7.201l-13.898,38.706
         c-1.9,5.201,0.8,10.902,5.999,12.802c1.1,0.4,2.3,0.6,3.399,0.6l0,0c4.099,0,7.899-2.6,9.599-6.701l20.797-58.109
         c1.3-3.601,0.4-7.701-2.3-10.402C269.396,766.822,265.397,765.922,261.797,767.122z"/>
       <polygon points="244,630.702 244,630.702 244,630.702 			"/>
       <path d="M227.603,597.897c3,2.5,7.099,3,10.598,1.3l1.3-0.6l-5.199,19.603c-1.4,5.301,1.8,10.802,7.099,12.202
         c0.9,0.2,1.7,0.3,2.6,0.3c4.399,0,8.499-3,9.498-7.501l10.798-40.506c1-3.801-0.3-7.801-3.299-10.302s-7.199-3-10.698-1.3
         l-1.6,0.8l4.799-19.103c1.4-5.301-1.8-10.702-7.199-12.102c-5.299-1.4-10.698,1.8-12.098,7.201l-9.998,39.806
         C223.303,591.496,224.603,595.397,227.603,597.897z"/>
       <path d="M53.43,609.199L71.327,620.5c-3.299,1.3-5.699,4.401-6.199,8.001c-0.5,3.901,1.3,7.701,4.599,9.801l35.494,22.203
         c1.7,1,3.499,1.5,5.299,1.5c3.299,0,6.599-1.7,8.499-4.701c2.9-4.701,1.5-10.902-3.199-13.802l-16.897-10.602
         c3.299-1.3,5.599-4.301,6.099-7.901c0.5-3.901-1.3-7.701-4.599-9.801l-36.294-22.903c-4.699-3-10.798-1.6-13.798,3.1
         C47.331,600.097,48.731,606.198,53.43,609.199z"/>
       <path d="M105.322,908.342l-36.294,22.903c-3.399,2.1-5.099,5.901-4.599,9.801c0.5,3.601,2.9,6.601,6.299,7.901L53.63,959.35
         c-4.699,2.8-6.199,9.001-3.299,13.702c1.8,3.1,5.099,4.801,8.499,4.801v0c1.7,0,3.499-0.4,5.299-1.3l36.294-22.203
         c3.399-2,5.199-5.901,4.699-9.801c-0.5-3.801-3.099-7.001-6.699-8.201l17.597-11.102c4.699-3,6.099-9.101,3.099-13.802
         C116.12,906.742,110.021,905.342,105.322,908.342z"/>
       <path d="M260.997,970.051c-3-2.5-7.199-3-10.698-1.3l-1.6,0.8l4.799-19.103c1.4-5.301-1.8-10.702-7.199-12.102
         c-5.299-1.4-10.698,1.8-12.098,7.201l-9.998,39.806c-0.9,3.801,0.4,7.701,3.399,10.202c3,2.5,7.099,3,10.598,1.3l1.3-0.6
         l-5.199,19.603c-1.4,5.301,1.8,10.802,7.099,12.202c0.9,0.2,1.7,0.3,2.6,0.3c4.399,0,8.499-3,9.498-7.501l10.798-40.506
         C265.297,976.552,263.997,972.552,260.997,970.051z"/>
       <polygon points="244,1028.36 244,1028.36 244,1028.36 			"/>
       <path d="M378.279,662.006L378.279,662.006c1.8,0,3.699-0.5,5.299-1.6l35.494-22.203c3.299-2,5.099-5.901,4.599-9.801
         c-0.5-3.801-3.099-6.901-6.699-8.101l17.597-11.002c4.699-3,6.099-9.101,3.099-13.802c-3-4.701-9.099-6.001-13.798-3.1
         l-36.294,22.903c-3.399,2.1-5.099,5.901-4.599,9.801c0.6,3.701,3.099,6.801,6.599,8.001l-16.597,10.401
         c-4.699,2.9-6.099,9.101-3.2,13.802C371.68,660.306,374.979,662.006,378.279,662.006z"/>
       <path d="M434.47,959.35l-16.597-10.401c3.499-1.2,6.099-4.301,6.599-8.001c0.5-3.901-1.3-7.701-4.599-9.801l-36.294-22.903
         c-4.699-3-10.798-1.6-13.798,3.1s-1.6,10.802,3.1,13.802l17.597,11.102c-3.599,1.2-6.199,4.301-6.699,8.101
         c-0.5,3.901,1.3,7.701,4.599,9.801l35.494,22.203c1.7,1,3.499,1.5,5.299,1.5l0,0c3.399,0,6.599-1.6,8.499-4.701
         C440.569,968.451,439.169,962.25,434.47,959.35z"/>
     </g>
   </g>
 </g>
 </svg>`,
 title:"Working Memory",
 description:"Test your brain's working memory"
  }
};

const gameArr = [
  {
    svg: 
    `<svg
    width="128"
     height="100"
     viewBox="0 0 128 128"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     style="padding: 20px"
   >
     <rect
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <rect
       x="70"
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <rect
       y="70"
       width="58"
       height="58"
       rx="10"
       fill="currentcolor"
     ></rect>
     <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
       fill="currentcolor"
     ></path>
   </svg>`,
    title: "Sequence Symphony",
    description: "Remember and replicate a sequence  of flashing squares!",
    path:'/tests/sequence',
  },
  {
    svg:
    `<svg fill="#000000" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 488 488" xml:space="preserve">
 <g transform="translate(0 -540.36)">
   <g>
     <g>
       <path d="M336.485,713.314c0.5-2.6,0.9-5.401,0.9-8.401c0-29.104-25.996-52.808-57.891-52.808
         c-13.898,0-27.696,5.101-37.994,13.602c-10.698-8.701-24.296-13.602-38.394-13.602c-15.098,0-29.395,5.301-40.094,15.102
         c-10.998,10.001-16.997,23.403-16.997,37.706c0,3.801,0.4,7.501,1.1,10.902c-15.898,9.601-25.796,26.104-25.796,44.106
         c0,9.601,2.3,18.203,7.099,26.104c-4.599,7.801-7.099,16.802-7.099,25.904c0,18.103,9.099,34.205,24.896,44.206
         c-0.2,2.7-0.2,5.301-0.2,7.801c0,14.302,6.099,27.704,16.997,37.706c10.698,9.701,24.896,15.102,40.094,15.102
         c14.098,0,27.596-4.901,38.394-13.602c10.398,8.601,24.096,13.602,37.994,13.602c31.895,0,57.891-23.703,57.891-52.708
         c0-1.8-0.1-3.601-0.3-5.301c18.497-9.201,30.395-27.104,30.395-46.707c0-9.101-2.5-18.003-7.099-25.904
         c4.799-7.901,7.099-16.502,7.099-26.104C367.481,740.118,355.183,722.015,336.485,713.314z M340.585,792.225
         c4.599,5.701,6.999,12.502,6.999,19.703c0,13.602-9.998,26.104-24.796,31.005c-4.799,1.6-7.699,6.501-6.699,11.502
         c0.6,3.401,1.3,6.701,1.3,9.501c0,18.103-16.997,32.805-37.894,32.805c-11.598,0-23.396-5.401-29.995-13.802
         c-1.8-2.3-4.599-3.701-7.599-3.801c-0.1,0-0.1,0-0.2,0l0,0c-2.9,0-5.699,1.2-7.399,3.701
         c-7.699,8.901-18.997,14.102-30.995,14.102c-20.497,0-37.094-14.702-37.094-32.805c0-3.6,0-7.301,0.8-9.301
         c2-4.901-0.2-10.502-4.999-12.802c-12.798-6.101-20.497-17.303-20.497-30.004c0-7.201,2.4-14.002,6.999-19.703
         c3-3.701,3-8.901,0-12.602c-4.799-5.901-6.999-12.202-6.999-19.703c0-12.702,8.399-24.404,21.497-29.704
         c2.5-1,4.499-3,5.499-5.501s1-5.301-0.1-7.801c-1.6-3.601-2.3-7.401-2.3-12.102c0-18.103,16.697-32.805,37.094-32.805
         c11.898,0,23.196,5.101,30.995,14.102c2,2.3,4.799,3.601,7.799,3.5c3-0.1,5.699-1.5,7.599-3.801
         c6.699-8.401,18.397-13.802,29.995-13.802c20.897,0,37.894,14.702,37.894,32.805c0,3.701-1.2,7.201-2.6,11.302
         c-0.8,2.6-0.6,5.501,0.7,7.901s3.499,4.201,6.199,4.901c15.198,4.101,25.796,16.802,25.796,30.905
         c0,7.501-2.2,13.702-6.999,19.703C337.585,783.324,337.585,788.525,340.585,792.225z"/>
       <path d="M261.797,767.122l-21.397,7.201l13.198-37.205c1.8-5.201-0.9-11.002-6.099-12.802c-5.199-1.8-10.998,0.9-12.798,6.101
         l-20.097,56.608c-1.3,3.701-0.4,7.701,2.3,10.401c2.7,2.8,6.699,3.701,10.298,2.5l21.297-7.201l-13.898,38.706
         c-1.9,5.201,0.8,10.902,5.999,12.802c1.1,0.4,2.3,0.6,3.399,0.6l0,0c4.099,0,7.899-2.6,9.599-6.701l20.797-58.109
         c1.3-3.601,0.4-7.701-2.3-10.402C269.396,766.822,265.397,765.922,261.797,767.122z"/>
       <polygon points="244,630.702 244,630.702 244,630.702 			"/>
       <path d="M227.603,597.897c3,2.5,7.099,3,10.598,1.3l1.3-0.6l-5.199,19.603c-1.4,5.301,1.8,10.802,7.099,12.202
         c0.9,0.2,1.7,0.3,2.6,0.3c4.399,0,8.499-3,9.498-7.501l10.798-40.506c1-3.801-0.3-7.801-3.299-10.302s-7.199-3-10.698-1.3
         l-1.6,0.8l4.799-19.103c1.4-5.301-1.8-10.702-7.199-12.102c-5.299-1.4-10.698,1.8-12.098,7.201l-9.998,39.806
         C223.303,591.496,224.603,595.397,227.603,597.897z"/>
       <path d="M53.43,609.199L71.327,620.5c-3.299,1.3-5.699,4.401-6.199,8.001c-0.5,3.901,1.3,7.701,4.599,9.801l35.494,22.203
         c1.7,1,3.499,1.5,5.299,1.5c3.299,0,6.599-1.7,8.499-4.701c2.9-4.701,1.5-10.902-3.199-13.802l-16.897-10.602
         c3.299-1.3,5.599-4.301,6.099-7.901c0.5-3.901-1.3-7.701-4.599-9.801l-36.294-22.903c-4.699-3-10.798-1.6-13.798,3.1
         C47.331,600.097,48.731,606.198,53.43,609.199z"/>
       <path d="M105.322,908.342l-36.294,22.903c-3.399,2.1-5.099,5.901-4.599,9.801c0.5,3.601,2.9,6.601,6.299,7.901L53.63,959.35
         c-4.699,2.8-6.199,9.001-3.299,13.702c1.8,3.1,5.099,4.801,8.499,4.801v0c1.7,0,3.499-0.4,5.299-1.3l36.294-22.203
         c3.399-2,5.199-5.901,4.699-9.801c-0.5-3.801-3.099-7.001-6.699-8.201l17.597-11.102c4.699-3,6.099-9.101,3.099-13.802
         C116.12,906.742,110.021,905.342,105.322,908.342z"/>
       <path d="M260.997,970.051c-3-2.5-7.199-3-10.698-1.3l-1.6,0.8l4.799-19.103c1.4-5.301-1.8-10.702-7.199-12.102
         c-5.299-1.4-10.698,1.8-12.098,7.201l-9.998,39.806c-0.9,3.801,0.4,7.701,3.399,10.202c3,2.5,7.099,3,10.598,1.3l1.3-0.6
         l-5.199,19.603c-1.4,5.301,1.8,10.802,7.099,12.202c0.9,0.2,1.7,0.3,2.6,0.3c4.399,0,8.499-3,9.498-7.501l10.798-40.506
         C265.297,976.552,263.997,972.552,260.997,970.051z"/>
       <polygon points="244,1028.36 244,1028.36 244,1028.36 			"/>
       <path d="M378.279,662.006L378.279,662.006c1.8,0,3.699-0.5,5.299-1.6l35.494-22.203c3.299-2,5.099-5.901,4.599-9.801
         c-0.5-3.801-3.099-6.901-6.699-8.101l17.597-11.002c4.699-3,6.099-9.101,3.099-13.802c-3-4.701-9.099-6.001-13.798-3.1
         l-36.294,22.903c-3.399,2.1-5.099,5.901-4.599,9.801c0.6,3.701,3.099,6.801,6.599,8.001l-16.597,10.401
         c-4.699,2.9-6.099,9.101-3.2,13.802C371.68,660.306,374.979,662.006,378.279,662.006z"/>
       <path d="M434.47,959.35l-16.597-10.401c3.499-1.2,6.099-4.301,6.599-8.001c0.5-3.901-1.3-7.701-4.599-9.801l-36.294-22.903
         c-4.699-3-10.798-1.6-13.798,3.1s-1.6,10.802,3.1,13.802l17.597,11.102c-3.599,1.2-6.199,4.301-6.699,8.101
         c-0.5,3.901,1.3,7.701,4.599,9.801l35.494,22.203c1.7,1,3.499,1.5,5.299,1.5l0,0c3.399,0,6.599-1.6,8.499-4.701
         C440.569,968.451,439.169,962.25,434.47,959.35z"/>
     </g>
   </g>
 </g>
 </svg>`,
 title:"Working Memory",
 description:"Test your brain's working memory",
 path:'/tests/working-memory',
  },
  {
    svg:
    `<svg
    width="125"
    height="100"
    viewBox="0 0 125 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="padding: 20px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.3278 2.28093C19.2495 0.858591 20.8289 0 22.5238 0H101.929C103.598 0 105.158 0.833566 106.086 2.22191L123.314 28.0032C124.413 29.6478 125 31.5813 125 33.5593V122C125 124.761 122.761 127 120 127H5C2.23858 127 0 124.761 0 122V33.5209C0 31.591 0.558439 29.7023 1.60795 28.0827L18.3278 2.28093ZM17.5238 21.9102V75.2696L10 94.9366V33.5208L17.5238 21.9102ZM12.2662 117H112.652L98.5261 81.1934H25.9644L12.2662 117ZM27.5238 71.1934H96.9286V10H27.5238V71.1934ZM106.929 21.4811L115 33.5593V95.7018L106.929 75.2428V21.4811Z"
      fill="currentcolor"
    ></path>
    <path
      d="M77.3883 53.2029C77.7091 55.1944 76.1711 57 74.1539 57V57C72.5085 57 71.1184 55.7796 70.9054 54.148L70.7384 52.8685C70.4298 50.505 68.416 48.737 66.0325 48.737H58.6308C56.9534 48.737 55.3877 49.5781 54.4617 50.9768L51.3823 55.628C50.8151 56.4848 49.856 57 48.8285 57V57C46.3613 57 44.9067 54.2318 46.3062 52.1999L64.2397 26.1637C65.1728 24.8091 66.7381 24 68.383 24V24C70.8375 24 72.9705 25.7815 73.3609 28.2047L77.3883 53.2029ZM62.3364 39.1553C60.6899 41.6312 62.4649 44.9433 65.4383 44.9433V44.9433C67.6795 44.9433 69.4133 42.9785 69.1345 40.7547V40.7547C68.705 37.3285 64.2485 36.28 62.3364 39.1553V39.1553Z"
      fill="currentcolor"
    ></path>
  </svg>`,
  title:"Typing Test",
  description:"How many words per minute can you type?",
  path:'/tests/typing',
  },
  {
    svg:
    `<svg
    width="128"
    height="100"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="padding: 20px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 0C8.95431 0 0 8.95431 0 20V108C0 119.046 8.95431 128 20 128H108C119.046 128 128 119.046 128 108V20C128 8.95431 119.046 0 108 0H20ZM76.9347 58.1152C77.6244 58.8068 78.4359 59.1525 79.3691 59.1525H102.922C103.856 59.1525 104.647 58.8068 105.296 58.1152C105.986 57.4237 106.331 56.6102 106.331 55.6746V54.2712C106.331 53.3356 105.986 52.522 105.296 51.8305C104.647 51.139 103.856 50.7932 102.922 50.7932H89.5938C89.5532 50.7932 89.5329 50.7729 89.5329 50.7322C89.5329 50.6915 89.5532 50.6508 89.5938 50.6102C96.1262 45.078 100.508 40.7051 102.74 37.4915C105.012 34.2373 106.148 30.8203 106.148 27.2407C106.148 23.0915 104.809 19.8576 102.131 17.539C99.4938 15.1797 95.7204 14 90.811 14C87.4028 14 83.8525 14.4881 80.1603 15.4644C79.146 15.7491 78.3345 16.3186 77.7259 17.1729C77.1173 17.9864 76.813 18.922 76.813 19.9797V22.5424C76.813 23.3559 77.1578 23.9864 77.8476 24.4339C78.5374 24.8814 79.2677 24.9627 80.0386 24.678C83.6903 23.2949 86.7739 22.6034 89.2895 22.6034C93.428 22.6034 95.4973 24.4746 95.4973 28.2169C95.4973 30.9017 94.3815 33.6475 92.1499 36.4542C89.9589 39.261 85.4552 43.3491 78.6388 48.7186C76.813 50.1424 75.9 51.9932 75.9 54.2712V55.6746C75.9 56.6102 76.2449 57.4237 76.9347 58.1152ZM22.4066 32.6712C23.0557 32.9966 23.6643 32.9356 24.2324 32.4882L33.1181 26.0204H33.2398V55.6746C33.2398 56.6102 33.5847 57.4237 34.2744 58.1153C34.9642 58.8068 35.7757 59.1526 36.7089 59.1526H40.5431C41.4763 59.1526 42.2878 58.8068 42.9776 58.1153C43.6673 57.4237 44.0122 56.6102 44.0122 55.6746V18.0882C44.0122 17.1526 43.6673 16.339 42.9776 15.6475C42.2878 14.956 41.4763 14.6102 40.5431 14.6102H36.7089C34.3556 14.6102 32.266 15.2814 30.4402 16.6238L24.2932 21.139C22.4268 22.4814 21.4936 24.3119 21.4936 26.6305V31.0848C21.4936 31.817 21.7979 32.3458 22.4066 32.6712ZM24.4691 77.2068C23.5359 77.2068 22.7244 76.861 22.0346 76.1695C21.3449 75.478 21 74.6644 21 73.7288V72.3254C21 71.3898 21.3449 70.5763 22.0346 69.8848C22.7244 69.1932 23.5359 68.8475 24.4691 68.8475H47.1702C48.1034 68.8475 48.9149 69.1932 49.6047 69.8848C50.2944 70.5763 50.6393 71.3898 50.6393 72.3254V73.7288C50.6393 76.0475 49.7467 77.939 47.9614 79.4034L38.7714 87.0305V87.0915C38.7714 87.1322 38.7917 87.1526 38.8323 87.1526H39.5626C43.0925 87.1526 45.9124 88.2509 48.0223 90.4475C50.1727 92.6441 51.2479 95.6136 51.2479 99.3559C51.2479 104.075 49.8075 107.695 46.9268 110.217C44.046 112.739 39.9075 114 34.5111 114C31.2652 114 27.9787 113.614 24.6517 112.841C23.6779 112.597 22.8664 112.068 22.2172 111.254C21.6086 110.4 21.3043 109.444 21.3043 108.386V106.312C21.3043 105.498 21.6289 104.868 22.2781 104.42C22.9678 103.932 23.7185 103.81 24.5299 104.054C28.0193 105.193 31.0624 105.763 33.6591 105.763C36.0124 105.763 37.8382 105.214 39.1366 104.115C40.4349 103.017 41.0841 101.492 41.0841 99.539C41.0841 97.5458 40.3335 96.1424 38.8323 95.3288C37.331 94.5153 34.5314 94.0881 30.4335 94.0475C29.5003 94.0475 28.6888 93.722 27.999 93.0712C27.3093 92.3797 26.9644 91.5661 26.9644 90.6305V90.5085C26.9644 88.2305 27.8367 86.339 29.5814 84.8339L38.2237 77.3288V77.2678C38.2237 77.2271 38.2034 77.2068 38.1628 77.2068H24.4691ZM76.813 77.4508C77.5027 77.939 78.2533 78.0813 79.0648 77.8779C82.8788 76.9017 86.3884 76.4135 89.5938 76.4135C93.9757 76.4135 96.1667 77.7559 96.1667 80.4407C96.1667 81.2135 95.9233 81.9661 95.4364 82.6983C94.9495 83.4305 94.4221 84.0407 93.854 84.5288C93.3266 85.0169 92.5151 85.6678 91.4196 86.4813C90.0401 87.4983 88.9852 88.3322 88.2548 88.983C87.5245 89.5932 86.6927 90.5491 85.7595 91.8508C84.8263 93.1118 84.1771 94.4339 83.812 95.8169C83.5685 96.7118 83.7714 97.5051 84.4206 98.1966C85.0698 98.8881 85.8812 99.2339 86.855 99.2339H89.472C91.2167 99.2339 92.6571 98.1356 93.7932 95.939C94.1583 95.2474 94.6858 94.5559 95.3756 93.8644C96.0653 93.1322 96.6536 92.6034 97.1405 92.2779C97.6274 91.9118 98.3983 91.3424 99.4532 90.5695C100.711 89.7152 101.644 89.044 102.253 88.5559C102.902 88.0271 103.653 87.2746 104.505 86.2983C105.397 85.322 106.026 84.244 106.391 83.0644C106.797 81.8847 107 80.5424 107 79.0373C107 75.8237 105.6 73.2203 102.801 71.2271C100.001 69.2339 96.1059 68.2373 91.1153 68.2373C87.3013 68.2373 83.3048 68.6237 79.1257 69.3966C78.1519 69.5593 77.3404 70.0474 76.6912 70.861C76.0826 71.6339 75.7783 72.5288 75.7783 73.5457V75.3763C75.7783 76.2305 76.1232 76.922 76.813 77.4508ZM89.9589 104.237H86.3073C85.3741 104.237 84.5626 104.583 83.8728 105.275C83.2236 105.966 82.899 106.78 82.899 107.715V109.912C82.899 110.847 83.2236 111.661 83.8728 112.353C84.5626 113.044 85.3741 113.39 86.3073 113.39H89.9589C90.8921 113.39 91.7036 113.044 92.3934 112.353C93.0831 111.661 93.428 110.847 93.428 109.912V107.715C93.428 106.78 93.0831 105.966 92.3934 105.275C91.7036 104.583 90.8921 104.237 89.9589 104.237Z"
      fill="currentcolor"
    ></path>
  </svg>`,
  title:"Digit Playback",
  description:"how many digits can you remember?",
  path:'/tests/digit-playback',
  },
  {
    svg: `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="padding: 20px;"
      >
        <path
          d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z"
          fill="currentcolor"
        />
      </svg>`,
    title: "Ultra Instict",
    description: "Test your visual instincts!",
    path:'/tests/ultra-instinct',
  }
];

export {gameObj,gameArr};
