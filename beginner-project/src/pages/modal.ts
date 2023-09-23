import { close } from './icon';

export const modal = `
    <div class="banner">
        <h2>Modal Project</h2>
        <button class="toggle-btn">
            OPEN MODAL
        </button>
    </div>
    <div class="modal-inner">
        <div class="modal-content">
            <button class="close-btn">
                ${close('30', '30')}
            </button>
            <div class="content">
                Modal Content
            </div>
        </div>
    </div>
`;
