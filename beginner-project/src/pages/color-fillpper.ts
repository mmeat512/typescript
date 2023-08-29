import '../css/color-fillpper.scss';
import '../ts/color-fillpper';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
    <p id="color" class="active">Color Fillpper</p>
    <p id="hex">Simple Hex</p>
</header>
<section>
    <div>
        <p>Background Color : <span>${'Red'}</span></p>
        <button>CLICK ME</button>
    </div>
   
</section>
`;
