
 
    document.addEventListener('DOMContentLoaded', () => {
        const aboutBtn = document.getElementById('about-btn');
        const aboutText = document.getElementById('about-text');
    
        let isClicked = false;
    
        aboutBtn.addEventListener('mouseover', () => {
        if (!isClicked) {
            aboutText.classList.remove('hide-text');
            aboutText.classList.add('show-text');
        }
        });
    
        aboutBtn.addEventListener('mouseout', () => {
        if (!isClicked) {
            aboutText.classList.remove('show-text');
            aboutText.classList.add('hide-text');
        }
        });
    
        aboutBtn.addEventListener('click', () => {
        isClicked = !isClicked;
        aboutText.classList.add('show-text');
        if (isClicked) {
            aboutBtn.classList.add('clicked');
          } else {
            aboutBtn.classList.remove('clicked');
          }
        
        });


        const textContainer = document.querySelector('.company-name');
        const responsiveText = document.querySelector('.comp-name-text');
        const maxWidth = parseInt(getComputedStyle(textContainer).maxHeight); // Get the maximum height in pixels

        function adjustFontSize() {
            const contentWidth = responsiveText.scrollHeight; // Get the actual height of the content

            if (contentWidth > maxWidth) {
                const scaleFactor = maxWidth/contentWidth ;
                const newFontSize = parseFloat(getComputedStyle(responsiveText).fontSize) * scaleFactor;
                responsiveText.style.fontSize = `${newFontSize}px`;
            }
            if (contentWidth < maxWidth) {
              const scaleFactor = contentWidth/maxWidth ;
              const newFontSize = parseFloat(getComputedStyle(responsiveText).fontSize) * scaleFactor;
              responsiveText.style.fontSize = `${newFontSize}px`;
          }   
      }
      

      // Run the function on page load and window resize
      window.addEventListener('load', adjustFontSize);
      window.addEventListener('resize', adjustFontSize);


    });

  $(document).ready(function() {
    $('a').attr('target', '_blank');
  });






  

