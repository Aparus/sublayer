const movieData = {
  /*INFO FOR WHOLE VIDEO */
  title: "Silycon Valley, E01S03",
  description: "This episode is about...",
  cover: "https://cdn-images-1.medium.com/max/1600/1*qU55mOrCLzBJAx2TwoWd8Q.jpeg",
  actors: {
    Dinesh: {
      name: "Dinesh",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    Jared: {
      name: "Jared",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    Richard: {
      name: "Richard",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    Erlick: {
      name: "Erlick",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    Gilfoyl: {
      name: "Gilfoyl",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    Monica: {
      name: "Monica",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    }
  },
  scenes: {
    /* INFO FOR ONE SCENE */
    0: {
      title: "Scene 1 title",
      description: "Scene 1 description",
      cover: "https://st.kp.yandex.net/im/kadr/2/4/9/kinopoisk.ru-Silicon-Valley-2495782.jpg",
      actors: ["Dinesh", "Jared", "Richard", "Monica"], // [actorId] this list can be auto generated from Phrases below
      phrases: {
        0: { actor: "Dinesh", timeStart: 0, timeEnd: 3, text: "I'm Dinesh" },
        1: { actor: "Jared", timeStart: 3, timeEnd: 6, text: "I'm Jared" },
        2: { actor: "Richard", timeStart: 6, timeEnd: 9, text: "I'm Richard" },
        3: { actor: "Monica", timeStart: 9, timeEnd: 12, text: "I'm Monica" }
      }
    },
    /* INFO FOR ONE SCENE */
    1: {
      title: "Scene 2 title",
      description: "Scene 2 description",
      cover: "https://st.kp.yandex.net/im/kadr/2/4/9/kinopoisk.ru-Silicon-Valley-2495368.jpg",
      actors: ["Dinesh", "Jared"], // this list can be auto generated from Phrases below
      phrases: {
        4: { actor: "Dinesh", timeStart: 0, timeEnd: 3, text: "Scene 2, phrase 1" },
        5: { actor: "Jared", timeStart: 3, timeEnd: 6, text: "phrase 2" },
        6: { actor: "Dinesh", timeStart: 6, timeEnd: 9, text: "phrase 3" },
        7: { actor: "Jared", timeStart: 9, timeEnd: 12, text: "phrase 4" }
      }
    },
    /* INFO FOR ONE SCENE */
    2: {
      title: "Scene 3 title",
      description: "Scene 3 description",
      cover: "https://st.kp.yandex.net/im/kadr/2/4/9/kinopoisk.ru-Silicon-Valley-2495364.jpg",
      actors: ["Gilfoyl", "Erlich"], // this list can be auto generated from Phrases below
      phrases: {
        8: { actor: "Gilfoyl", timeStart: 0, timeEnd: 3, text: "I'm Gilfoyl" },
        9: { actor: "Erlich", timeStart: 3, timeEnd: 6, text: "I'm Erlich" },
        10: { actor: "Gilfoyl", timeStart: 6, timeEnd: 9, text: "How are you?" },
        11: { actor: "Erlich", timeStart: 9, timeEnd: 12, text: "I'm fine, thanks" }
      }
    }
  }
};

export default movieData;
