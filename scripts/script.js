//SCRIPT LANDING PAGE PET WORLD


/* Função Alterna Imagem */

const alternaImg = (img) => {

    const imgElement = document.querySelector(".image_animal").src = img; // Retorna a referência do componente em que possui a classe em específico (".image_animal"). Com isso será possível manipular as propriedades desse elemento, como por exemplo o source neste caso.
    imgElement.src = img; //Altera a imagem;
    
}

const pressMenu = () => 
{
    const menuReference = document.querySelector('.menu');
    const navigation = document.querySelector('.menu_navigation');
    const menuItems = navigation.querySelectorAll('.li_menu');
    
    navigation.classList.toggle('on');
    menuReference.classList.toggle('on');

    if(navigation.classList.contains('on'))
    {
        setTimeout(() => {
            menuItems.forEach((items, index) => 
            {
                setTimeout(() =>
                {
                    items.classList.add('show');
                }, index * 100);
            });
        }, 150);
    }
    else
    {
        menuItems.forEach(item => {
            item.classList.remove('show');
        })

    }



}

