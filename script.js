document.addEventListener('DOMContentLoaded', () => {
  const openModalCards = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.modal');

  // Open modal when card is clicked
  openModalCards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Close modal when close button is clicked
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Close modal when clicking outside of the modal content
  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// Menambahkan animasi klik pada kartu layanan
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('clicked'); // Tambahkan kelas animasi
    setTimeout(() => {
      card.classList.remove('clicked'); // Hapus kelas animasi setelah selesai
      window.location.href = card.href; // Arahkan ke halaman terkait
    }, 500); // Durasi animasi sesuai dengan CSS (0.5s)
  });
});
