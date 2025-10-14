// data.js

/**
 * Array de productos digitales (posts).
 * Aquí se define toda la información de tu marketplace estático.
 */
const posts = [
    {
        id: 1,
        title: "Ebook Avanzado de Marketing Digital 2024",
        description: "Guía completa para dominar estrategias SEO, redes sociales y publicidad PPC. Incluye plantillas descargables.",
        mediaUrl: "https://placehold.co/800x600/2C2E35/E5E5E5?text=Ebook+Cover",
        // NUEVO: Array para la galería de previsualización
        galleryUrls: [
            "https://placehold.co/800x600/2C2E35/E5E5E5?text=Vista+de+Cap%C3%ADtulo",
            "https://placehold.co/800x600/2C2E35/E5E5E5?text=Infograf%C3%ADa+Incluida",
            "https://placehold.co/800x600/2C2E35/E5E5E5?text=Testimonios"
        ],
        // NUEVO: Etiquetas para filtrado
        tags: ["Ebook", "Marketing", "PDF", "SEO"],
        price: 29.99,
        isFree: false,
        fileUrl: "URL_DEL_PRODUCTO_DESPUES_DE_PAGO", // URL a donde se redirige (ver nota importante)
        likes: 154,
        comments: 32,
        // NUEVO: Enlaces de pago estructurados
        paymentLinks: {
            paypal: "https://www.paypal.com/paypalme/TU_USUARIO",
            whatsapp: "https://wa.me/TUNUMERO?text=Quiero%20el%20Ebook%20de%20Marketing",
            telegram: "https://t.me/TU_USUARIO",
            donativo: "https://www.patreon.com/TU_PERFIL", // Usado como ejemplo
            cryptos: "DIRECCION_DE_WALLET_O_ENLACE_A_EXCHANGE",
            cuentaBancaria: "INFORMACION_DE_TU_CUENTA_MANUALMENTE" // Para mostrar como texto
        }
    },
    {
        id: 2,
        title: "Plantilla de Diseño Web Minimalista (Gratis)",
        description: "Plantilla HTML/CSS con Tailwind para proyectos personales. Ideal para portafolios.",
        mediaUrl: "https://placehold.co/800x600/E5E5E5/2C2E35?text=Plantilla+Web",
        galleryUrls: [], // No hay más imágenes
        tags: ["Diseño", "Plantilla", "Gratis", "HTML", "CSS"],
        price: 0.00,
        isFree: true,
        fileUrl: "https://github.com/TU_USUARIO/TU_REPOSITORIO/plantilla.zip", // URL de descarga directa
        likes: 98,
        comments: 15,
        // NUEVO: El campo fileUrl define el botón de descarga gratuita.
        paymentLinks: {}
    }
    // AÑADE MÁS PRODUCTOS AQUÍ
];

const paymentButtonsDelay = 5000; // Retraso en milisegundos (5 segundos)
const isAdmin = false; // Mantenido para pruebas de interfaz admin.
