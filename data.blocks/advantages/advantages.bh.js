module.exports = (bh) => {
  bh.match('advantages', function (ctx, json) {
    ctx.param('title', 'Преимущества приложения');

    ctx.param('slogan', [
      'Устали от серости мегаполиса?',
      'Нам есть, что вам<span class="break break_mobile"></span> предложить!'
    ]);

    ctx.param('items', [
      {
        title: 'Поднимает настроение',
        text: 'Приложение позволит вам победить осеннюю хандру и&nbsp;депрессию буквально в несколько кликов!'
      },
      {
        title: 'Меняет мир вокруг',
        text: 'Сделайте снимок и украсьте&nbsp;его майликом или&nbsp;текстовой&nbsp;подписью, чтобы&nbsp;усилить&nbsp;эффект'
      },
      {
        title: 'Заводит новых&nbsp;друзей',
        text: 'Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и&nbsp;заводите новых'
      }
    ]);
})};
