function burger(){
    var more = document.getElementById('moreboringtxt');
    var title = document.getElementById('maintitle');
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
    maintitle.style.display = 'none';
    moreboringtxt.style.display = 'none';
  }
  
  function quit(){
    var more = document.getElementById('moreboringtxt');
    var title = document.getElementById('maintitle');
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
    maintitle.style.display = 'block';
    moreboringtxt.style.display = 'block';
  }