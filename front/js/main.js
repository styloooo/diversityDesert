var people = [
  {
    title: 'test one',
    tag: 'test tag one',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    clip: 'some sound'
  },
  {
    title: 'test two',
    tag: 'test tag two',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    clip: 'some sound'
  },
  {
    title: 'test three',
    tag: 'test tag three',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    clip: 'some sound'
  }
];
var render = function(people){
  people.forEach(function(x){
    $(".parallax").append('<div class="layer top">\n' + x.title + '</div>')
  })
};

render(people);
