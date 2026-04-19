document.getElementById('year').textContent = new Date().getFullYear();
 
    function sendMessage(e) {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.style.display = 'block';
      e.target.reset();
      setTimeout(() => msg.style.display = 'none', 5000);
    }
 
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
      });
    });