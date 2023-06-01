/**
 * Created by Yo on 07/06/2020.
 */

var personas = [
        {
            nombre:"maria Cristina", foto: 'Criz', ref: ""
        },{
            nombre:"Yenedis", foto: 'Yen', ref: ""
        },{
            nombre:"Un amigo", foto: 'Fueg', ref: ""
        }
]
;
var loadLiders = function () {

    personas.forEach(
        (elem) =>{
        var div_2_Clone =
            '<li><div class="product-item">' +
            '<div class="pi-img-wrapper">' +
            '<img src="customesfiles/liders/' + elem.foto + '.jpg" class="img-responsive"  alt="'+elem.nombre+'">' +
            '<div>' +
            '<a href="customesfiles/liders/' +  elem.foto + '.jpg" class="btn btn-default fancybox-button">Zoom</a>' +
            '<a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>' +
            '</div>' +
            '</div>' +
            '<h3><a href="'+elem.ref+'">'+elem.nombre+'</a></h3>' +
            //'<div class="pi-price">$29.00</div>' +
            //'<a href="#" class="btn btn-default add2cart">Add to cart</a>' +
            '</div></li>';

    }    );

getFrm('PerfilesUl').appendChild(div_2_Clone);
}();
/**
 * Devuelve el elemento nombrado
 * @param id_elto
 * @returns {Element}
 */
function getFrm(id_elto) {
    return document.getElementById(id_elto);
}