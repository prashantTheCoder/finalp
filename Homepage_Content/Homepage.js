

  
const show_more_container_ele=document.querySelector('.show-more-description');
const show_more_btn_ele=document.querySelector('.show-more-btn');

function show_more(){
    show_more_container_ele.innerHTML=`<h1>Sports Facilities</h1>
        <p>The complex features a large stadium seating 8,000–10,000 spectators and includes facilities for cricket, hockey, and other sports. The hockey field is designed to match international specifications, similar to those used in the Paris Olympics. The complex also houses three Centers of Excellence for wrestling, weightlifting, and athletics.
          The Rajgir Sports Complex is an ultra-modern facility in Bihar that offers a wide range of sports amenities.
         
       <ul>
        <h3>1.Outdoor Sports Facilities</h3>
        <li><h4>Cricket Ground: </h4>
        <p> Equipped with modern pitches and a seating capacity of 8,000–10,000 spectators. It supports international-standard matches.</p>

        <h4>Hockey Field: </h4>
        <p>Built to international specifications, similar to those used in global tournaments like the Olympics.</p>

        <h4>Football Ground: </h4>
        <p>Designed for competitive matches with premium turf and seating arrangements.</p>

        <h4>Athletics Track: </h4>
        <p> Includes tracks meeting international standards for running and field events.</p>
        </li>


        <div class="show-more-img">
          <div class="image">
            <img src="images/Rajgir-Sports2.webp" alt="">
          </div>

          <div class="image">
            <img src="images/Rajgir-Sports3.webp" alt="">
          </div>

          <div class="image">
            <img src="images/Rajgir-Sports4.webp" alt="">
          </div>
          
        </div>
        
        <h3>2. Indoor Sports Facilities</h3>
        <li>
        <p> A large indoor arena supports multiple sports, including:
          <ul>
            <li>Wrestling</li>
            <li>Kabaddi</li>
            <li>Weightlifting</li>
            <li>Badminton</li>
            <li>Table Tennis</li>
          </ul>
        
          The indoor facilities feature professional-grade equipment and ample seating for spectators.</p>
        </li>

        <h3>3.Centers of Excellence</h3>
        To nurture talent, three specialized centers are established:
        <ul>
          <li><h5>Wrestling:</h5> Advanced training facilities with mats and dedicated coaching staff.</li>
          <li><h5> Weightlifting:</h5> World-class equipment for strength training and competitions.</li>
          <li><h5> Athletics: </h5>Facilities to hone skills in various track and field events.</li>
        </ul>

        <h3>4.Sports University</h3>
        <p>Alongside the complex, the newly established university offers undergraduate and postgraduate programs in sports management, nutrition, and science. It also includes a vast library, one of the largest after the National Institute of Sports, Patiala​.

          <h4>Events:</h4>
          <p>The Rajgir Sports Complex recently hosted the Women’s Asian Hockey Champions Trophy in November 2024, marking a milestone in Bihar’s journey toward becoming a major sports hub</p>
        </p>

        <h4>Architectural Design:</h4>
        <p>The complex incorporates traditional elements with modern architecture, featuring murals that reflect the heritage of Nalanda and Bihar​
          The complex blends traditional architectural elements with modern infrastructure, reflecting Bihar’s cultural heritage.
Advanced spectator seating, parking spaces, and event management facilities enhance the user experience.
        </p>



      </div>
       </ul>
        </p>
      </div>`
}
show_more_btn_ele.addEventListener('click',show_more);


