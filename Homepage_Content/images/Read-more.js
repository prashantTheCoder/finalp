const show_more_container_ele=document.querySelector('.show-more-container');
const show_more_btn_ele=document.querySelector('.show-more-btn');

function show_more(){
    show_more_container_ele.innerHTML=` <div class="show-more-content">
            <div class="show-more-image">
                <img src="golghar (1).jpg" alt="golghar">
            </div>
            <div class="show-more-description">

                <h1>Golghar: A Glimpse into Bihar’s Heritage</h1>
                <p>
                <h2>Introduction</h2>
                The Golghar in Patna, Bihar, is an iconic historical structure with a fascinating past and distinct
                architectural style. Built in 1786 by Captain John Garstin, an engineer of the British East India
                Company, the structure served a crucial purpose as a granary.
                </p>


                <h2>Historical Significance</h2>
                <p>The Golghar was commissioned after the devastating 1770 Bengal Famine, which affected regions under
                    British rule, including Bihar. The famine highlighted the urgent need for food storage facilities.
                    Designed to act as a granary to prevent such disasters in the future, the Golghar could store over
                    140,000 tons of grain.
                    While it was meant to serve as a reliable food bank, Golghar never fully served its original purpose
                    due to practical design issues, such as the absence of a direct unloading mechanism. Nevertheless,
                    it remains a historical landmark and symbol of resilience.</p>


                <h2>Architecture</h2>
                <p>The Golghar has a unique stupa-like appearance, with no pillars supporting the dome. This
                    construction makes it quite distinct from other colonial buildings of the time.
                    Its walls have a thickness of about 3.6 meters (12 feet) at the base, tapering upwards to a height
                    of 29 meters (95 feet).
                    The spiral staircase is a prominent feature, with 145 steps that wind around the structure’s
                    exterior. This stairway was designed for laborers to carry loads of grain to the top of the granary.
                    Due to its rounded, pillar-less architecture, Golghar is often compared to Buddhist stupas and has a
                    fusion of Indian and British design elements.</p>

                <h2>Tourist Attraction</h2>
                <p>Golghar offers a panoramic view of Patna and the Ganges River from its summit, making it a popular
                    spot for both tourists and locals.
                    Surrounded by a garden and a small park, the site is ideal for leisure visits and educational trips.
                    Lighting and landscaping upgrades have made it a visually appealing landmark, especially in the
                    evenings when the building is illuminated.</p>

                <h2>Modern Relevance and Cultural Importance</h2>
                <p>Although no longer a functional granary, Golghar remains a cultural icon in Bihar and is often associated with the city of Patna itself.
                    It has undergone preservation and maintenance efforts to sustain its historical and tourism value.
                    It’s featured prominently in local festivals, photography, and even in modern media as a symbol of Patna’s rich history.</p>

                    <h2>Fun Fact</h2>
                    <p>A peculiar architectural flaw prevents Golghar’s door from being fully closed when filled to capacity, a unique quirk that highlights challenges in colonial-era engineering.</p>


            </div>
`
}
show_more_btn_ele.addEventListener('click',show_more);
