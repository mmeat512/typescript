export interface Imenu {
  type: string;
  img: string;
  name: string;
  price: string;
  description: string;
}

function menuArticle(obj: Imenu) {
  /**
     * 
     *  <article>
                <img src="/review/blank-profile.png"></img>
                <div class="information">
                    <span class="name">Buttermilk Pancakes</span>
                    <span class="price">15.99</span>
                </div>
                <div class="description">
                    I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
                </div>
            </article>
     */
  const articleEl = document.createElement('article');
  const imgEl = document.createElement('img');
  const informationEl = document.createElement('div');
  const nameEl = document.createElement('span');
  const priceEl = document.createElement('span');
  const descriptionEl = document.createElement('div');

  imgEl.setAttribute('src', `/menu/${obj.img}.jpeg`);
  articleEl.append(imgEl);

  informationEl.classList.add('information');
  nameEl.classList.add('name');
  nameEl.textContent = obj.name;
  informationEl.append(nameEl);
  priceEl.classList.add('price');
  priceEl.textContent = obj.price;
  informationEl.append(priceEl);

  articleEl.append(informationEl);

  descriptionEl.classList.add('description');
  descriptionEl.textContent = obj.description;
  articleEl.append(descriptionEl);

  return articleEl;
}

export default menuArticle;
