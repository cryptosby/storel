// =================================================================
// LÓGICA DE MODO NOCTURNO (CORREGIDA)
// =================================================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body; // Referencia directa al body

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
    }
}

// Inicialización del Modo Nocturno
function initializeTheme() {
    // 1. Verificar si el usuario ha preferido el modo oscuro
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // 2. Obtener la preferencia guardada, o usar la preferencia del sistema
    const storedTheme = localStorage.getItem('theme');
    
    let isDark = false;

    if (storedTheme === 'dark') {
        isDark = true;
    } else if (storedTheme === 'light') {
        isDark = false;
    } else if (prefersDark) {
        isDark = true;
    }

    applyTheme(isDark);

    // 3. Configurar el evento de clic
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentIsDark = body.classList.contains('dark');
            applyTheme(!currentIsDark); // Cambiar al tema opuesto
        });
    }
}

// =================================================================
// CARGA INICIAL
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme(); // Inicializa el modo nocturno primero
    renderAllPosts(); 
});
// ... (El resto del código JavaScript para renderAllPosts, filterPosts, etc. se mantiene igual que en la versión anterior para conservar la funcionalidad y los comentarios).
