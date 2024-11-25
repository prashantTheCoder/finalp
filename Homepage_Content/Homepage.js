

  
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


// 1st
show_more_btn_ele.addEventListener('click',show_more);
document.addEventListener('DOMContentLoaded', () => {
  // Select all top attractions images
  const attractionImages = document.querySelectorAll('.attraction-image');

  // Add event listener for each image
  attractionImages.forEach(image => {
    image.addEventListener('onclick', () => {
      // Programmatically trigger the modal
      const modal = new bootstrap.Modal(document.getElementById('topattractions1Modal'));
      modal.show();
    });
  });
});

const attractions = {
  "Mahabodhi Temple": { lat: 24.6951, lng: 84.9913 },
  "Gurpa Hill": { lat: 24.5877, lng: 85.0046 },
  "Nature Safari": { lat: 25.0078, lng: 85.4199 },
  "Kaimur Waterfall": { lat: 24.6291, lng: 83.6218 },
};

document.querySelectorAll('.attraction-image').forEach(item => {
  item.addEventListener('click', event => {
    const attractionName = item.querySelector('h1').innerText;
    const coordinates = attractions[attractionName];

    // Update modal image
    const modalImage = document.getElementById('attraction-image');
    modalImage.src = item.querySelector('img').src;

    // Update modal title
    document.getElementById('topattractions1ModalLabel').innerText = attractionName;

    // Initialize map
    setTimeout(() => {
      initMap(coordinates.lat, coordinates.lng);
    }, 200); // Ensure the modal is fully rendered before initializing the map
  });
});

function initMap(lat, lng) {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 14,
  });

  new google.maps.Marker({
    position: { lat, lng },
    map: map,
    title: "Attraction Location",
  });
}





