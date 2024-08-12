const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');

    logo.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; 

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index if greater than total slides
    }

    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var emailModal = document.getElementById('emailModal');
    var emailIcon = document.querySelector('.email-icon');
    var closeModal = document.querySelector('#emailModal .close');
    var emailForm = document.getElementById('emailForm');
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var successMessage = document.getElementById('successMessage');

    emailIcon.addEventListener('click', function() {
        emailModal.style.display = 'flex';
        successMessage.style.display = 'none';
        emailForm.style.display = 'block';
    });
    

    closeModal.addEventListener('click', function() {
        console.log('Close button clicked');
        emailModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == emailModal) {
            emailModal.style.display = 'none';
        }
    });
    
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var email = emailInput.value;
        if (validateEmail(email)) {
            setTimeout(function() {
                location.reload(); // Refresh the page after 1 second
            }, 1500);
            successMessage.style.display = 'block';
            emailForm.style.display = 'none';
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var newsletterInput = document.getElementById('newsletterFormInput');
    var submitButton = document.getElementById('submit-button');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default form submission
        
        var email = newsletterInput.value;
        if (validateEmail(email)) {
            // Redirect to the home page after 1.5 seconds
            setTimeout(function() {
                window.location.href = 'index.html'; // Adjust this if your home page has a different name
            }, 1500);
        } else {
            var emailError = document.getElementById('emailError'); // Assuming you have an element with this ID for error messages
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Get the modal elements
var searchModal = document.getElementById("searchModal");
var quickViewModal = document.getElementById("quick-view-modal");
var inquiriesModal = document.getElementById("inquiries-modal");

// Get the button and close elements
var searchIcon = document.querySelector(".search-icon");
var closeSearch = document.querySelector("#searchModal .close-search");

// Function to disable background scrolling
function disableScroll() {
    document.body.classList.add("no-scroll");
}

// Function to enable background scrolling
function enableScroll() {
    document.body.classList.remove("no-scroll");
}

// When the user clicks the search icon, open the search modal
searchIcon.onclick = function() {
    searchModal.style.display = "flex";
    disableScroll();
}

// When the user clicks on <span> (x), close the search modal
closeSearch.onclick = function() {
    searchModal.style.display = "none";
    enableScroll();
}

// When the user clicks anywhere outside of the search modal, close it
window.onclick = function(event) {
    if (event.target == searchModal) {
        searchModal.style.display = "none";
        enableScroll();
    }
}


// Open the quick view modal
function openQuickView(imageSrc) {
    quickViewModal.style.display = "block";
    disableScroll();
    var modalImg = document.getElementById("modal-image");
    modalImg.src = imageSrc;
}

// Close the quick view modal
function closeQuickView() {
    quickViewModal.style.display = "none";
    enableScroll();
}

// Open the inquiries modal
function openInquiriesModal() {
    inquiriesModal.style.display = "block";
    disableScroll();
}

// Close the inquiries modal
function closeInquiriesModal() {
    inquiriesModal.style.display = "none";
    enableScroll();
}

 
 

  // Intersection Observer setup for animations (if needed)
  
  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once the animation is done
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.02}s`; // Add delay for each item
      observer.observe(item);
    });
  }); 
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm'); // Ensure the correct ID
    const submitButton = document.getElementById('submit-button');

    if (form && submitButton) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            window.location.reload();
        });

        submitButton.addEventListener('click', function(event) {
            console.log('Submit button clicked'); 
            event.preventDefault(); 
            window.location.reload();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const nothingFoundModal = document.getElementById('nothingFoundModal');
    const closeNothingFound = nothingFoundModal.querySelector('.close');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const searchTerm = searchInput.value.trim().toLowerCase();
        let found = false;

        // Use fetch to check if store page exists and then redirect
        fetch('Store.html')
            .then(response => {
                if (!response.ok) throw new Error('Store page not found');
                return response.text();
            })
            .then(text => {
                // Create a temporary DOM to parse the store page content
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const locations = doc.querySelectorAll('.location h2');

                locations.forEach(location => {
                    if (location.textContent.trim().toLowerCase() === searchTerm) {
                        // Redirect to store page and scroll to the matching location
                        window.location.href = 'Store.html#' + location.id;
                        found = true;
                    }
                });

                if (!found) {
                    // Show nothing found modal
                    nothingFoundModal.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                nothingFoundModal.style.display = 'block'; // Show modal in case of fetch error
            });
    });

    // Close nothing found modal
    closeNothingFound.addEventListener('click', () => {
        nothingFoundModal.style.display = 'none';
    });

    // Close nothing found modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === nothingFoundModal) {
            nothingFoundModal.style.display = 'none';
        }
    });

    // Scroll to the target element if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

var loader = document.getElementById("preloader");
window.addEventListener("load",function (){
loader.style.display = "none";
})

document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });
});