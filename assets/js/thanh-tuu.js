document.addEventListener('DOMContentLoaded', () => {
      const carouselCards = Array.from(document.querySelectorAll('.honors-carousel > div'));
      const btnPrev = document.getElementById('btn-prev');
      const btnNext = document.getElementById('btn-next');
      
      if(!carouselCards.length || !btnPrev || !btnNext) return;

      const positions = [
          'honor-card-main',
          'honor-card-side right-near',
          'honor-card-side right-mid',
          'honor-card-side right-far',
          'honor-card-side right-extra',
          'honor-card-side right-extra',
          'honor-card-side left-extra',
          'honor-card-side left-far',
          'honor-card-side left-mid',
          'honor-card-side left-near'
      ];

      let currentIndex = 0;

      function updateCards() {
          carouselCards.forEach((card, i) => {
              let posIndex = (i - currentIndex) % carouselCards.length;
              if (posIndex < 0) posIndex += carouselCards.length;
              
              const posClass = positions[posIndex];
              card.className = posClass + ' transition-all duration-700';
              
              if (posClass === 'honor-card-main' || posClass.includes('near') || posClass.includes('mid') || posClass.includes('far')) {
                  card.style.pointerEvents = 'auto';
              } else {
                  card.style.pointerEvents = 'none';
              }
          });
      }

      btnNext.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % carouselCards.length;
          updateCards();
      });

      btnPrev.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
          updateCards();
      });

      carouselCards.forEach((card, i) => {
          card.addEventListener('click', () => {
              let posIndex = (i - currentIndex) % carouselCards.length;
              if (posIndex < 0) posIndex += carouselCards.length;

              if (posIndex === 0) return;
              
              if (posIndex > 0 && posIndex <= 4) {
                  currentIndex = (currentIndex + posIndex) % carouselCards.length;
              } else if (posIndex > 5) {
                  let leftOffset = carouselCards.length - posIndex;
                  currentIndex = (currentIndex - leftOffset + carouselCards.length) % carouselCards.length;
              }
              updateCards();
          });
      });
  });