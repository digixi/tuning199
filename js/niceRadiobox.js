$(document).ready(function(){
  $('.rbox').mousedown(function(){
      changeCheck($(this));//функция выполняемая при нажатии кнопки мыши
    });
  $('.rbox').each(function(){
      changeCheckStart($(this));//функция выполняемая при загрузке страницы
    });
});
function changeCheck(el){
  var el=el, input=el.find('input').eq(0);
  if(!input.attr('checked')){
    $('.rbox').each(function(){
      cInput = $(this).find('input').eq(0);
      // удаляем класс active у остальных кнопок с тем же значением name
      if(cInput.attr('name') == input.attr('name')){
        $(this).removeClass('active');
        cInput.attr("checked", false);
      }
    });
    el.addClass('active');
    input.attr("checked", true);
  }
  return true;
}
function changeCheckStart(el){
  var el=el,input=el.find('input').eq(0);
  if(input.attr('checked')){
    el.addClass('active');
  }
  return true;
}