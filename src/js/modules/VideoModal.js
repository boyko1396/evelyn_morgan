class VideoModal {
  constructor() {
    this.buttons = document.querySelectorAll('.js-video-modal');
    this.init();
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => this.showVideo(event));
    });
  }

  showVideo(event) {
    const button = event.currentTarget;
    const videoId = button.getAttribute('data-video');
    const videoContainer = button.nextElementSibling;

    if (videoContainer) {
      videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      `;
      button.classList.add('is-hidden');
    }
  }
}

export default VideoModal;