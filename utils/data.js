
module.exports = {
  today: today,
  mtData: mtData,
  searchmtdata: searchmtdata
}
var mt_data = mtData()
function searchmtdata(date) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    // 当前页
    var item = mt_data.list[i]
    if (item.date == date) {
      result = item
    }
  }
  return result || {}
}

function today(){
  var arr = {
    date: '2018-9-16',
    paragraph: '雅各书（James）2:14-26',
    pagesId: [
      '1yoLg0hnYkj-IDarVSz0XOiLgDJafg6J4',
      '1arlBTZZ0UgUeXQoAzGlcNL9MASFu0trg',
      '1RkejUjTN2gg7yTzOjkaqa2B_wCPyNSZU',
      '1xmoZQsr4i00Xy6Vyr3CT0kBBTFhl-HI0'
    ]
  }
  return arr
}

function mtData() {
  var arr = {
    list: [
      {
        date: '2018-9-16',
        paragraph: '雅各书（James）2:14-26',
        pagesId: [
          '1CVpVuzhve1F68muCONoCEw_8Hu8ufgHy',
          '1FO-FZmqSSPbDS6LahZSwpc1aaaSBzLWV',
          '14XqiLxPGQWQW47ff9UJucKpDreu_n0H1',
          '1tGZM8PWl9gTDM-5Dg_0jgMa0god4oT9e'
        ]
      },
      {
        date: '2018/9/15',
        paragraph: '创世纪（Genesis）12:1-7',
        pagesId: [
          '1--IhmJF2HWcUKTFZzcS5OHtHQyyHr4-a',
          '1NIElKu8WCxWuhPKDhLJxQRSCQFScBJTk',
          '1fAkIJH3E127NortdbE1jWHcVxgAGltw7',
          '1df4T6OYVYGuvHUVO5wMLgPmrfVIAbPkV'
        ]
      }
    ]
  }
  return arr
}