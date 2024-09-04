var click = document.querySelector('.img');

    click.addEventListener('click', clicar);
    click.addEventListener('mouseout', sair);
    click.addEventListener('mouseenter', entrar);

    function entrar(){
        click.style.width = '298px';
        click.style.height = '338px';
        click.style.borderRadius='24px 0px';
        click.style.padding = '0px';
        click.style.transitionDuration = '0.5s';
    }
    
    function clicar(){
        click.style.width = '298px';
        click.style.height = '338px';
        click.style.borderRadius='24px 0px';
        click.style.padding = '0px';
        click.style.transitionDuration = '0.5s';
    }

    function sair(){
        click.style.width = '250px';
        click.style.height = '300px';
        click.style.padding = '10px';
        click.style.transitionDuration = '0.5s';
    }