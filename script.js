const app = document.querySelector('#app');
const news = [
  {
    header: 'Первая новость',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus delectus ipsam, nesciunt distinctio fugiat temporibus?',
    postDate: '2022-10-11'},
  {
    header: 'Вторая новость',
    content: 'Dignissimos sapiente temporibus quaerat omnis? Commodi exercitationem iure esse earum voluptatem neque, suscipit necessitatibus quis corrupti, nostrum sed similique,',
    postDate: '2022-12-14'},
]

news.forEach(element => {
  const newsEl = document.createElement('div');
  const headerEl=document.createElement('h2');
  const contentEl=document.createElement('p');
  const dateEl=document.createElement('p');
  newsEl.className = 'news';
  headerEl.className = 'news__header';
  contentEl.className = 'news__content';
  dateEl.className = 'news__date';
  headerEl.innerText=element.header;
  contentEl.innerText=element.content;
  dateEl.innerText=element.postDate;
  app.append(newsEl);
  newsEl.appendChild(headerEl);
  newsEl.appendChild(contentEl);
  newsEl.appendChild(dateEl);
});