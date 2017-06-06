(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
      images: [
        {
          full: 'images/dodecahedron-full.jpg',
          thumb: 'images/dodecahedron-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Great product",
          author: "Bob@bob.com"
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
      images: [
        {
          full: 'images/pentagonal-full.jpg',
          thumb: 'images/pentagonal-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 1,
          body: "Rubbish",
          author: "John@bob.com"
        }
      ],
      canPurchase: true,
      soldOut: false
    }
  ]
})();
