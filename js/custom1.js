const tabButtons = document.querySelectorAll('#pills-tab button');
const tabPanes = document.querySelectorAll('#pills-tabContent .tab-pane');

function showTab(targetId) {
 
  tabButtons.forEach(button => {
    button.classList.remove('active', 'btn-order2');
    button.setAttribute('aria-selected', 'false');
  });
  

  tabPanes.forEach(pane => {
    pane.classList.remove('show', 'active');
    if (!pane.classList.contains('fade')) {
      pane.classList.add('fade');
    }
    pane.style.display = 'none'; 
  });
  
  
  const activeButton = document.querySelector(`button[data-bs-target="${targetId}"]`);
  if (activeButton) {
    activeButton.classList.add('active', 'btn-order2');
    activeButton.setAttribute('aria-selected', 'true');
  }
  
 
  const activePane = document.querySelector(targetId);
  if (activePane) {
    activePane.style.display = 'block'; // Explicitly show
    activePane.classList.add('show', 'active', 'fade');
  }
}

tabButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-bs-target');
    showTab(targetId);
  });
});

function showTabById(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    const targetId = button.getAttribute('data-bs-target');
    showTab(targetId);
  }
}