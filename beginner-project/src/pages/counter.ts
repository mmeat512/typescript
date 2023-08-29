import '../css/counter.scss';
import '../ts/counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section>
  <div>
    <div class="title">Counter</div>
    <div class="number">0</div>
    <div class="button-group">
      <button id="decrease">DECREASE</button>
      <button id="reset">RESET</button>
      <button id="increase">INCREASE</button>
    </div>
  </div>  
</section>
`;
