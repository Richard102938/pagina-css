(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const button_next = document.querySelector('#next');
    const button_before = document.querySelector('#before');
    let value;

    button_next.addEventListener('click', ()=>{
        change_position(1);
    });

    button_before.addEventListener('click', ()=>{
        change_position(-1);
    });

    const change_position = (add)=>{
        const current_testimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(current_testimony);
        value += add;

        sliders[Number(current_testimony) - 1].classList.remove('testimony__body--show')
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show')


    }

})();