/*--------------------------------------------------------------------------------------
    Template Name: CardWizards - Multipurpose Tailwind CSS Card Layouts Html Template
    Author: MKTemplateWizard
    Version: 1.0.0
    
    
    TABLE OF CONTENT
----------------------------------------------------------------------------------------
========================================================================================
    1. TOGGLE LIGHT AND DARK MODE
    2. MOBILE MENU
    3. TOGGLE PASSWORD VISIBILITY
   
----------------------------------------------------------------------------------------*/

'use strict';

/*===========================================
 TOGGLE LIGHT AND DARK MODE
======================================*/
const sunIcon = document.getElementById('sunIcon'),
  moonIcon = document.getElementById('moonIcon'),
  userTheme = localStorage.getItem('theme'),
  toggleBtn = document.getElementById('light__to--dark');

// TOGGLING BTN ACTIVE CLASS
const btnToggle = () => {
  moonIcon?.classList.toggle('hidden');
  sunIcon?.classList.toggle('hidden');
};

// CHECKING SYSTEM & LOCALSTORAGE THEME
const themeCheck = () => {
  if (userTheme === 'dark') {
    document.documentElement.classList.add('dark');
    moonIcon?.classList.add('hidden');
    return;
  }
  sunIcon?.classList.add('hidden');
};

// SWITCHING THEME CONDITIONALLY
const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    btnToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  btnToggle();
};

// MANUALLY SWITCHING THEME
toggleBtn?.addEventListener('click', themeSwitch);

// WINDOW RELOAD THEME CHECK
themeCheck();
/*===========================================
 TOGGLE LIGHT AND DARK MODE
======================================*/

/*===========================================
 MOBILE MENU
======================================*/
const menuButton = document.getElementById('menuButton'),
  mobileMenu = document.getElementById('mobileMenu'),
  menuIcon = document.getElementById('menuIcon');

menuButton?.addEventListener('click', function () {
  // Toggle the "hidden" class on the mobile menu
  mobileMenu.classList.toggle('show');

  // Toggle the icon class between fa-bars and fa-xmark
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});
/*===========================================
 MOBILE MENU
======================================*/

/*===========================================
 TOGGLE PASSWORD VISIBILITY
======================================*/
// Get references to all toggle buttons
const toggleButtons = document.querySelectorAll('.showPassword');

// Function to toggle password visibility
function togglePasswordVisibility(event) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);

  if (!targetInputId) return;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    event.target.classList.remove('fa-eye');
    event.target.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    event.target.classList.remove('fa-eye-slash');
    event.target.classList.add('fa-eye');
  }
}

// Add a click event listener to each toggle button
toggleButtons.forEach((button) => {
  button.addEventListener('click', togglePasswordVisibility);
});
/*===========================================
 TOGGLE PASSWORD VISIBILITY
======================================*/
