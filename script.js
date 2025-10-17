// =================================================================
// CONFIGURACIÓN Y DATA ESTATICA (SOLO UN POST)
// =================================================================

const paymentButtonsConfig = [
    { id: 'whatsapp', show: true, delay: 5000, icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { id: 'telegram', show: true, delay: 10000, icon: 'fab fa-telegram-plane', label: 'Telegram', color: 'hover:bg-blue-500' },
    { id: 'paypal', show: true, delay: 15000, icon: 'fab fa-paypal', label: 'Paypal', color: 'hover:bg-blue-600' },
    { id: 'bank', show: false, delay: 20000, icon: 'fas fa-university', label: 'Bank', color: 'hover:bg-gray-600' },
    { id: 'donate', show: true, delay: 25000, icon: 'fas fa-gift', label: 'Gracias', color: 'hover:bg-orange-500' },
    { id: 'crypto', show: false, delay: 30000, icon: 'fas fa-bitcoin', label: 'Crypto', color: 'hover:bg-yellow-500' }
];

// Solo queda el Post principal para enfocarse en la compra
let posts = JSON.parse(localStorage.getItem('storelPosts')) || [
    {
        id: 1,
        user: 'Pro User',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=U',
        title: 'Creative Photography "Inner Cosmos"',
        description: 'Un viaje visual a través de la galaxia. Perfecto para fondos de pantalla o impresiones de alta calidad. Archivo PNG.',
        mediaUrl: 'https://placehold.co/800x600/1e293b/d4d4d8?text=Inner+Cosmos', // <-- URL de IMAGEN/VIDEO
        tags: ['foto', 'cosmos', 'galaxia', 'png', 'wallpaper', 'arte'], 
        fileUrl: 'https://enlace.seguro.de/tuproducto', // <-- ENLACE DE PAGO/DESCARGA FINAL
        fileType: 'image',
        fileSize: '2.4 MB',
        price: '20',
        isFree: false,
        showFileInfo: true,
        likes: 124,
        comments: [
            { id: 101, user: 'Ana G.', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=A', text: '¡Increíble! Amo la profundidad de los colores.', date: '2024-09-05', replies: [] }
        ]
    }
];

const productFeed = document.getElementById('product-feed');
const noResultsMessage = document.getElementById('no-results');

function savePostsToStorage() {
    localStorage.setItem('infinityScrollPosts', JSON.stringify(posts));
}

// =================================================================
// LÓGICA DE RENDERIZADO (Se mantiene la función para mostrar todos/filtrados)
// =================================================================

function renderAllPosts(filteredPosts = posts) {
    if (!productFeed) return;
    
    productFeed.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    } else {
        noResultsMessage.classList.add('hidden');
    }

    // Se mantiene la lógica de renderizado, enfocada ahora en un solo post
    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // ... (Contenido del post HTML y JS omitido por ser el mismo que el anterior)
        // Solo se asegura que los enlaces de botones de pago usen post.fileUrl
        
        // Contenido del post (simplificado para mostrar estructura)
        card.innerHTML = `
            ${postContent}
            
            <div id="payment-buttons-container-${post.id}" class="payment-buttons-container flex justify-center space-x-2 my-4 flex-wrap gap-2">
                ${paymentButtonsConfig.filter(btn => btn.show).map(btn => `
                    <button onclick="window.open('${post.fileUrl}', '_blank')" 
                            class="buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white"
                            id="${btn.id}-button-${post.id}">
                        <i class="${btn.icon} text-lg"></i>
                        <span>${btn.label}</span>
                        <span class="text-xs">${btn.label === 'Gracias' ? 'Donativo' : 'Comprar Ahora'}</span>
                    </button>
                `).join('')}
            </div>
            
            `;

        productFeed.appendChild(card);
        initializePaymentButtons(post.id); // Llama a la función que mostrará los botones
    });
}

// ... (El código de filterPosts se mantiene igual)

// =================================================================
// CORRECCIÓN CLAVE: INICIALIZACIÓN DE BOTONES DE PAGO
// =================================================================

function initializePaymentButtons(postId) {
    // Asegura que el contenedor de los botones esté visible después del primer botón
    const container = document.getElementById(`payment-buttons-container-${postId}`);
    if (container) {
        container.classList.add('visible');
    }

    // Lógica para mostrar cada botón con su retraso
    paymentButtonsConfig.forEach(buttonConfig => {
        if (buttonConfig.show) {
            setTimeout(() => {
                const button = document.getElementById(`${buttonConfig.id}-button-${postId}`);
                if (button) {
                    button.classList.remove('hidden'); // Asegura que se remueva la clase
                }
            }, buttonConfig.delay);
        }
    });
}

// =================================================================
// CORRECCIÓN CLAVE: MODO NOCTURNO
// =================================================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon'); // Se agregó un ID al icono en HTML

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        
        // Alterna entre los iconos de luna y sol
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Lógica para mantener el modo oscuro al recargar
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    renderAllPosts();
});
// ... (El resto de funciones se mantiene igual)
