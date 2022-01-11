export default function Carousel({
  initialState,
  data,
  $target,
  handleLeft,
  handleRight,
}) {
  this.state = {
    ...initialState,
  };

  const $imageBox = document.createElement('div');
  const $carousel = document.createElement('div');
  const $pagination = document.createElement('ul');
  $imageBox.id = 'image-box';
  $carousel.id = 'carousel';
  $pagination.id = 'pagination';
  $carousel.innerHTML = `
    ${data
      .map((src, idx) => `<img class="image" data-page=${idx} src=${src} />`)
      .join('')}
  `;
  $imageBox.innerHTML = `
    <button class="carousel-button" id="left"> ${'<'} </button>
    <button class="carousel-button" id="right"> ${'>'} </button>
  `;
  $pagination.innerHTML = `
    ${data
      .map(
        (_, idx) =>
          `<li class="page ${
            idx === this.state.index ? 'selected' : null
          }" data-page=${idx} /> `,
      )
      .join('')}
  `;
  $target.append($imageBox, $carousel, $pagination);

  this.state = {
    ...initialState,
  };

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    $pagination.innerHTML = `
    ${data
      .map(
        (_, idx) =>
          `<li class="page ${
            idx === this.state.index ? 'selected' : null
          }" data-page=${idx} /> `,
      )
      .join('')}
  `;
  };

  document.querySelector('#left').addEventListener('click', handleLeft);
  document.querySelector('#right').addEventListener('click', handleRight);
}
