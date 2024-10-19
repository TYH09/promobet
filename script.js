let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const promoCodes = ["PROMO2024", "PROMO2025", "PROMO2026"];
const promoCodeText = document.getElementById('promo-code');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    promoCodeText.textContent = "Code Promo : " + promoCodes[index];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de contact
    const form = document.querySelector('form');
    const notification = document.getElementById('notification');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();
      
      if (name === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs avant d\'envoyer le formulaire.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }
      
      // Afficher la notification de succès
      notification.textContent = 'Votre message a été envoyé avec succès !';
      notification.classList.remove('hidden');
      notification.classList.add('visible');
      
      // Cacher la notification après 3 secondes
      setTimeout(() => {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
      }, 3000);
      
      form.reset();
    });
  
    // Gestion des codes promo
    const promoList = document.getElementById('promo-list');
    const searchInput = document.getElementById('search');
  
    const codesPromo = [
      { titre: '10% de réduction sur vos paris 1xbet', code: 'SSi' },
      { titre: 'Bonus de 50€ sur votre premier dépôt 1xbet', code: 'No70' },
      { titre: '5€ gratuits après votre 5ème pari 1xbet', code: 'planbet' },
      { titre: 'Bonus de 200% sur premier dépôt melbet', code: 'melbet7788' },
      { titre: '10% de réduction sur vos paris melbet', code: 'melbet6060' },
      // Ajoutez d'autres codes ici
    ];
  
    function afficherCodes(codes) {
      promoList.innerHTML = '';
      codes.forEach(code => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${code.titre} :</strong> <em>${code.code}</em>`;
        promoList.appendChild(li);
      });
    }
  
    // Affiche tous les codes au chargement
    afficherCodes(codesPromo);
  
    // Filtrage en temps réel
    searchInput.addEventListener('input', function() {
      const recherche = this.value.toLowerCase();
      const codesFiltres = codesPromo.filter(code => 
        code.titre.toLowerCase().includes(recherche) || 
        code.code.toLowerCase().includes(recherche)
      );
      afficherCodes(codesFiltres);
    });
  });
  