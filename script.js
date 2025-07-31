// header slide show  
  const images = [
            'images/1.jpeg',
            'images/2.jpeg',
            'images/3.jpeg',
            'images/4.jpeg',
            'images/5.jpeg'
        ];
    
        let current = 0;
        const header = document.getElementById('header');
    
        function changeBackground() {
            header.style.backgroundImage = `url(${images[current]})`;
            current = (current + 1) % images.length;
        }
    
        changeBackground(); // initial image
        setInterval(changeBackground, 5000); // change every 5 seconds


        // end header slide show  


        // logo slide show

        document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.clients-grid');
  const cards = document.querySelectorAll('.client-card');
  let index = 0;

  // Function to scroll the clients container smoothly
  const scrollClients = () => {
    if (window.innerWidth > 768) return; // Only auto-scroll on mobile

    // Scroll to the next card (right)
    index = (index + 1) % cards.length; // Update index for the next card
    const scrollAmount = cards[index].offsetLeft; // Get the offset position of the next card
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' }); // Scroll to the next card
  };

  // Start auto-scrolling every 3 seconds
  setInterval(scrollClients, 3000); // Change slide every 3s

  // Optional: Add event listener for manual scroll (swipe)
  container.addEventListener("wheel", (event) => {
    if (event.deltaX !== 0) {
      // Check if it's scrolling horizontally
      container.scrollLeft += event.deltaX;  // Scroll left or right based on wheel movement
    }
  });
});
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX; // Record initial touch position
});

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX; // Record end position
  if (touchStartX - touchEndX > 50) {
    container.scrollLeft += 200; // Swipe right (scroll to the right)
  }
  if (touchEndX - touchStartX > 50) {
    container.scrollLeft -= 200; // Swipe left (scroll to the left)
  }
});


 // Modal functionality
    const faqBtn = document.getElementById('faqBtn');
    const faqModal = document.getElementById('faqModal');
    const closeFaq = document.querySelector('.close-faq');

    faqBtn.addEventListener('click', function() {
        faqModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeFaq.addEventListener('click', function() {
        faqModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    window.addEventListener('click', function(event) {
        if (event.target === faqModal) {
            faqModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // FAQ functionality
    document.addEventListener('DOMContentLoaded', function() {
        const questions = document.querySelectorAll('.faq-question');
        const searchInput = document.getElementById('faq-search');
        const noResults = document.querySelector('.no-results');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const faqItems = document.querySelectorAll('.faq-item');
        
        // Toggle FAQ answers
        questions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class on question
                this.classList.toggle('active');
                
                // Get the answer element
                const answer = this.nextElementSibling;
                
                // Toggle show class on answer
                answer.classList.toggle('show');
                
                // Close other open answers if this is opening
                if (this.classList.contains('active')) {
                    questions.forEach(q => {
                        if (q !== this && q.classList.contains('active')) {
                            q.classList.remove('active');
                            q.nextElementSibling.classList.remove('show');
                        }
                    });
                }
            });
        });
        
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let hasResults = false;
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                const isVisible = item.style.display !== 'none';
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = '';
                    hasResults = true;
                    
                    // Highlight matching text
                    if (searchTerm.length > 2) {
                        highlightText(item, searchTerm);
                    }
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide no results message
            noResults.style.display = hasResults || searchTerm === '' ? 'none' : 'block';
        });
        
        // Category filter
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Filter items
                faqItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Reset search
                searchInput.value = '';
                noResults.style.display = 'none';
            });
        });
        
        // Highlight matching text
        function highlightText(element, searchTerm) {
            const question = element.querySelector('.faq-question');
            const answer = element.querySelector('.faq-answer');
            
            // Remove previous highlights
            question.innerHTML = question.textContent;
            answer.innerHTML = answer.textContent;
            
            // Highlight in question
            if (question.textContent.toLowerCase().includes(searchTerm)) {
                const regex = new RegExp(searchTerm, 'gi');
                question.innerHTML = question.textContent.replace(regex, 
                    match => `<span class="highlight">${match}</span>`);
            }
            
            // Highlight in answer
            if (answer.textContent.toLowerCase().includes(searchTerm)) {
                const regex = new RegExp(searchTerm, 'gi');
                answer.innerHTML = answer.textContent.replace(regex, 
                    match => `<span class="highlight">${match}</span>`);
                
                // Ensure answer is visible when search matches
                if (!answer.classList.contains('show')) {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            }
            
            // Add animation
            element.classList.add('highlight');
            setTimeout(() => {
                element.classList.remove('highlight');
            }, 1500);
        }
    });

     // Privacy Modal functionality
    const privacyBtn = document.getElementById('privacyBtn');
    const privacyModal = document.getElementById('privacyModal');
    const closePrivacy = document.querySelector('.close-privacy');

    privacyBtn.addEventListener('click', function() {
        privacyModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closePrivacy.addEventListener('click', function() {
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === privacyModal) {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });


     // Get the modal and the button
    var modal = document.getElementById("termsModal");
    var btn = document.getElementById("termsBtn");
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }



      var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }

            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }



        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }



        const scriptURL = 'https://script.google.com/macros/s/AKfycby8uUyexK75R3iX1CofXcL4RnIIeFEsDZmXvejGVoXjs4uIjRej-aQZN4JKqMEIe8TdVQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message Sent Successfully"
                    setTimeout(function () {
                        msg.innerHTML = "";
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })

  // Show the button after scrolling down 100px
  window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


 
    // // Coordinates for your location
    // let lat = 18.9754266447869;  // Latitude
    // let lng = 73.03007370376548; // Longitude

    // // Initialize the map
    // const map = L.map('map').setView([lat, lng], 13);

    // // Add OpenStreetMap tiles to the map
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; OpenStreetMap contributors'
    // }).addTo(map);

    // // Add a draggable marker at the specified location
    // const marker = L.marker([lat, lng], { draggable: true }).addTo(map);

    // // Function to update address from latitude and longitude using Nominatim API
    // function updateAddress(lat, lng) {
    //     fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             document.getElementById('map-address').textContent = 'Address: ' + (data.display_name || 'Not found');
    //         })
    //         .catch(() => {
    //             document.getElementById('map-address').textContent = 'Address: Unable to retrieve';
    //         });
    // }

    // // When the marker is dragged, update the address
    // marker.on('dragend', function (e) {
    //     const position = marker.getLatLng();
    //     updateAddress(position.lat, position.lng);
    // });

    // // Update address on initial load
    // updateAddress(lat, lng);
