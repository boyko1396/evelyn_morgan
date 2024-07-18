class ShowMoreToggle {
  constructor() {
    this.showMoreButton = document.querySelector('.js-students-show-more');
    this.hiddenColumns = document.querySelectorAll('.students__list-col.is-hidden');
    
    if (this.showMoreButton) {
      this.showMoreButton.addEventListener('click', () => this.showMore());
    }
  }
  
  showMore() {
    this.hiddenColumns.forEach(column => {
      column.classList.remove('is-hidden');
    });
    this.showMoreButton.classList.add('is-hidden');
  }
}

export default ShowMoreToggle;