exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        {
          id: 1,
          name: "Puppies",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
          user_id: 1
        },
        {
          id: 2,
          name: "Architecture",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/fe0/architecture-1216049.jpg",
          user_id: 1
        },
        {
          id: 3,
          name: "Golf",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/e06/tee-time-1-1432569.jpg",
          user_id: 1
        },
        {
          id: 4,
          name: "Family",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/c59/playing-time-1246157.jpg",
          user_id: 1
        },
        {
          id: 5,
          name: "Sunsets",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/0ea/tropical-fiji-island-1-1408393.jpg",
          user_id: 1
        },
        {
          id: 6,
          name: "Forests",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/9b6/among-giants-1375605.jpg",
          user_id: 1
        },
        {
          id: 7,
          name: "Butterflies",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/f5d/butterfly-1378183.jpg",
          user_id: 1
        },
        {
          id: 8,
          name: "Flowers",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/157/young-and-old-1399297.jpg",
          user_id: 1
        },
        {
          id: 9,
          name: "Beer",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg",
          user_id: 1
        },
        {
          id: 10,
          name: "Subways",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/b85/bay-lrt-station-1626400.jpg",
          user_id: 2
        },
        {
          id: 11,
          name: "Farming",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/813/tractor-3-1386656.jpg",
          user_id: 2
        },
        {
          id: 12,
          name: "Dirt Roads",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/4a1/on-the-road-5-1384802.jpg",
          user_id: 2
        },
        {
          id: 13,
          name: "Thanksgiving",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/1d3/thanksgiving-table-1443940.jpg",
          user_id: 2
        },
        {
          id: 14,
          name: "Cows",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/981/cow-1380252.jpg",
          user_id: 2
        },
        {
          id: 15,
          name: "Rock Formations",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/68c/delicate-arch-2-1391623.jpg",
          user_id: 2
        },
        {
          id: 16,
          name: "Cats",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/389/mitze-1380778.jpg",
          user_id: 2
        },
        {
          id: 17,
          name: "Pugs",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/20c/my-puppy-maggie-1362787.jpg",
          user_id: 2
        },
        {
          id: 18,
          name: "Drumming",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/4ad/snare-drum-second-take-1-1564542.jpg",
          user_id: 2
        },
        {
          id: 19,
          name: "Orange",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/e7e/orange-portocaliu-1518994.jpg",
          user_id: 3
        },
        {
          id: 20,
          name: "Surfing",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/6f9/sunset-surfer-1517584.jpg",
          user_id: 3
        },
        {
          id: 21,
          name: "Lakes",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/cb6/queenstown-lake-1640396.jpg",
          user_id: 3
        },
        {
          id: 22,
          name: "Beaches",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/bff/playa-de-portimao-1640388.jpg",
          user_id: 3
        },
        {
          id: 23,
          name: "Stars",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/217/circumpolar-dehesa-valme-1640386.jpg",
          user_id: 3
        },
        {
          id: 24,
          name: "Cherries",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/fa7/kiraz-polis-1640374.jpg",
          user_id: 3
        },
        {
          id: 25,
          name: "Lighthouses",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/151/a-lighthouse-and-sunset-1640355.jpg",
          user_id: 3
        },
        {
          id: 26,
          name: "Bridges",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/bec/bridge-dom-luis-i-1640349.jpg",
          user_id: 3
        },
        {
          id: 27,
          name: "Sheep",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/ee6/sheep-eating-grass-in-springtime-1640335.jpg",
          user_id: 3
        },
        {
          id: 28,
          name: "Cooking",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/768/sweet-potato-fries-and-fried-vegetables-1640316.jpg",
          user_id: 4
        },
        {
          id: 29,
          name: "Benches",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/948/park-benches-1640297.jpg",
          user_id: 4
        },
        {
          id: 30,
          name: "Cake",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/1bd/slices-of-cakes-1640292.jpg",
          user_id: 4
        },
        {
          id: 31,
          name: "Coyotes",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/a21/wild-coyote-in-a-field-1640198.jpg",
          user_id: 4
        },
        {
          id: 32,
          name: "Aerial Photography",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/97a/mississippi-river-1640208.jpg",
          user_id: 4
        },
        {
          id: 33,
          name: "Autumn",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/cf9/autumn-in-the-city-yellow-leaves-the-park-1639380.jpg",
          user_id: 4
        },
        {
          id: 34,
          name: "Blackjack",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/b18/queen-ten-1640103.jpg",
          user_id: 4
        },
        {
          id: 35,
          name: "Elk",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/11f/elk-on-the-tundra-in-the-rocky-mountains-1640110.jpg",
          user_id: 4
        },
        {
          id: 36,
          name: "Kimchi",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/8a6/tofu-with-kimchi-2-1640096.jpg",
          user_id: 4
        },
        {
          id: 37,
          name: "Tom",
          imageUrl:
            "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
          user_id: 5
        },
        {
          id: 38,
          name: "Brick",
          imageUrl:
            "https://images.unsplash.com/photo-1570169797761-ee4ac3ef69a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          user_id: 5
        },
        {
          id: 39,
          name: "Eiffel Tower",
          imageUrl:
            "https://images.unsplash.com/photo-1570115466660-840b6734c9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
          user_id: 5
        },
        {
          id: 40,
          name: "Reading",
          imageUrl:
            "https://images.unsplash.com/photo-1570109621602-f50a75aa70d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
          user_id: 5
        },
        {
          id: 41,
          name: "Deer",
          imageUrl:
            "https://images.unsplash.com/photo-1559617104-b1de4ffa4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          user_id: 5
        },
        {
          id: 42,
          name: "Pumpkin",
          imageUrl:
            "https://images.unsplash.com/photo-1570107786026-f46e8c46f45a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          user_id: 5
        },
        {
          id: 43,
          name: "Bus",
          imageUrl:
            "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          user_id: 5
        },
        {
          id: 44,
          name: "Lattern",
          imageUrl:
            "https://images.unsplash.com/photo-1570133435515-6cc11ee03072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=339&q=80",
          user_id: 5
        },
        {
          id: 45,
          name: "San Francisco",
          imageUrl:
            "https://images.unsplash.com/photo-1570133103227-96458ed32d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=334&q=80",
          user_id: 5
        }
      ]);
    });
};
