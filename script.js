// Images and descriptions
const artworks = [
    {
        src: 'images/art1.jpg',
        shortDescription: 'A serene landscape with vibrant colors.',
        fullDescription: 'This artwork represents the peaceful harmony of nature, combining vibrant hues to evoke a sense of calm and wonder.'
    },
    {
        src: 'images/art2.jpg',
        shortDescription: 'Abstract art with bold strokes.',
        fullDescription: 'This abstract piece uses bold strokes and a vivid color palette to express raw emotions and creativity.'
    },
    {
        src: 'images/art3.jpg',
        shortDescription: 'Portrait of a mysterious figure.',
        fullDescription: 'A captivating portrait of a mysterious figure, blending traditional and modern styles to evoke curiosity.'
    },
    {
        src: 'images/art4.jpg',
        shortDescription: 'A beautiful cityscape at dusk.',
        fullDescription: 'This cityscape captures the essence of urban life at dusk, with warm lights and a tranquil ambiance.'
    },
    {
        src: 'images/art5.jpg',
        shortDescription: 'A beautiful cityscape at dusk.',
        fullDescription: 'This cityscape captures the essence of urban life at dusk, with warm lights and a tranquil ambiance.'
    }
];

// Load gallery
const gallery = document.getElementById('gallery');
artworks.forEach((artwork, index) => {
    const imageCard = document.createElement('div');
    imageCard.className = 'bg-white rounded-lg shadow-md overflow-hidden';

    imageCard.innerHTML = `
        <img src="${artwork.src}" alt="Artwork ${index + 1}" class="w-full h-48 object-cover cursor-pointer" data-index="${index}">
        <div class="p-4">
            <p class="text-gray-600">${artwork.shortDescription}</p>
        </div>
    `;

    gallery.appendChild(imageCard);
});

// Modal handling
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

gallery.addEventListener('click', (event) => {
    const image = event.target.closest('img');
    if (!image) return;

    const index = parseInt(image.getAttribute('data-index'));
    const artwork = artworks[index];

    modalImage.src = artwork.src;
    modalTitle.textContent = `Artwork ${index + 1}`;
    modalDescription.textContent = artwork.fullDescription;

    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});
