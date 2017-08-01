export class ChallengeServices {

  List() {

    let posts = [
      {
        title : 'this is testing title 1',
        url : 'post-url',
        image : 1,
        like : false,
        total : 10
      },
      {
        title : 'this is testing title 2',
        url : 'post-url-2',
        image : 2,
        like : true,
        total : 20
      },
      {
        title : 'this is testing title 3',
        url : 'post-url-3',
        image : 3,
        like : false,
        total : 30
      },
    ];
    return posts;
  }

}
