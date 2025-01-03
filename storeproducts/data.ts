interface Product {
    id?: number;
    title: string;
    price: number;
    description: string;
    category?: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

const ProductData:Product[] = [
    {
        "id": 1,
        "title": "Women's Casual T-Shirt",
        "price": 19.99,
        "description": "Comfortable T-shirt for women, ideal for everyday wear.",
        "category": "women's clothing",
        "image": "/images/product.webp",
        "rating": { "rate": 4.3, "count": 150 }
      },
      {
        "id": 2,
        "title": "Women's Party Dress",
        "price": 69.99,
        "description": "Elegant dress perfect for parties and special occasions.",
        "category": "women's clothing",
        "image": "/images/product2.webp",
        "rating": { "rate": 4.5, "count": 100 }
      },
      {
        "id": 3,
        "title": "Women's Skinny Jeans",
        "price": 49.99,
        "description": "Trendy skinny jeans for a modern look.",
        "category": "women's clothing",
        "image": "/images/product3.webp",
        "rating": { "rate": 4.1, "count": 140 }
      },
      {
        "id": 4,
        "title": "Women's Leather Jacket",
        "price": 99.99,
        "description": "Stylish leather jacket for a bold statement.",
        "category": "women's clothing",
        "image": "/images/product4.webp",
        "rating": { "rate": 4.6, "count": 80 }
      },
      {
        "id": 5,
        "title": "Women's Maxi Skirt",
        "price": 39.99,
        "description": "Flowy maxi skirt for casual and semi-formal settings.",
        "category": "women's clothing",
        "image": "/images/product5.webp",
        "rating": { "rate": 4.0, "count": 90 }
      }, {
        "id": 6,
        "title": "Men's Denim Shirt",
        "price": 39.99,
        "description": "Classic denim shirt for a rugged look.",
        "category": "men's clothing",
        "image": "/images/product6.webp",
        "rating": { "rate": 4.3, "count": 110 }
      },
      {
        "id": 7,
        "title": "Men's V-Neck Sweater",
        "price": 49.99,
        "description": "Soft and comfortable V-neck sweater for chilly weather.",
        "category": "men's clothing",
        "image": "/images/product7.webp",
        "rating": { "rate": 4.4, "count": 70 }
      },
      {
        "id": 8,
        "title": "Men's Graphic T-Shirt",
        "price": 24.99,
        "description": "Trendy graphic T-shirt for casual wear.",
        "category": "men's clothing",
        "image": "/images/product8.webp",
        "rating": { "rate": 4.0, "count": 130 }
      },
      {
        "id": 9,
        "title": "Men's Bomber Jacket",
        "price": 89.99,
        "description": "Stylish bomber jacket for a modern look.",
        "category": "men's clothing",
        "image": "/images/product9.webp",
        "rating": { "rate": 4.7, "count": 60 }
      },
      {
        "id": 10,
        "title": "Men's Wool Coat",
        "price": 119.99,
        "description": "Elegant wool coat for winter fashion.",
        "category": "men's clothing",
        "image": "/images/product10.webp",
        "rating": { "rate": 4.8, "count": 40 }
      },
      {
        "id": 11,
        "title": "Matte Liquid Lipstick",
        "price": 12.99,
        "description": "Long-lasting matte liquid lipstick available in vibrant shades.",
        "category": "makeup",
        "image": "/images/product11.webp",
        "rating": { "rate": 4.5, "count": 200 }
      },
      {
        "id": 12,
        "title": "Waterproof Eyeliner Pen",
        "price": 9.99,
        "description": "Precise waterproof eyeliner pen for smudge-free lines.",
        "category": "makeup",
        "image": "/images/product12.webp",
        "rating": { "rate": 4.7, "count": 150 }
      },
      {
        "id": 13,
        "title": "Volumizing Mascara",
        "price": 14.99,
        "description": "Volumizing mascara for fuller, thicker lashes.",
        "category": "makeup",
        "image": "/images/product13.webp",
        "rating": { "rate": 4.6, "count": 180 }
      },
      {
        "id": 14,
        "title": "Liquid Foundation",
        "price": 19.99,
        "description": "Lightweight liquid foundation for a flawless complexion.",
        "category": "makeup",
        "image": "/images/product14.webp",
        "rating": { "rate": 4.4, "count": 140 }
      },
      {
        "id": 15,
        "title": "Blush Palette",
        "price": 16.99,
        "description": "Multi-shade blush palette for a natural glow.",
        "category": "makeup",
        "image": "/images/product15.webp",
        "rating": { "rate": 4.3, "count": 100 }
      },
      {
        "id": 16,
        "title": "Creamy Concealer Stick",
        "price": 10.99,
        "description": "High-coverage creamy concealer stick to hide blemishes.",
        "category": "makeup",
        "image": "/images/product16.webp",
        "rating": { "rate": 4.5, "count": 120 }
      },
      {
        "id": 17,
        "title": "Shimmer Eyeshadow Palette",
        "price": 22.99,
        "description": "12-color shimmer eyeshadow palette for stunning eye looks.",
        "category": "makeup",
        "image": "/images/product17.webp",
        "rating": { "rate": 4.6, "count": 160 }
      },
      {
        "id": 18,
        "title": "Matte Compact Powder",
        "price": 11.99,
        "description": "Matte compact powder to control oil and shine.",
        "category": "makeup",
        "image": "/images/product18.webp",
        "rating": { "rate": 4.4, "count": 130 }
      },
      {
        "id": 19,
        "title": "Dual-Ended Eyeshadow Stick",
        "price": 10.99,
        "description": "A convenient dual-ended eyeshadow stick with shimmer and matte shades.",
        "category": "makeup",
        "image": "/images/product19.webp",
        "rating": { "rate": 4.6, "count": 120 }
      },
      {
        "id": 20,
        "title": "Makeup Fixing Spray",
        "price": 18.99,
        "description": "Lightweight makeup fixing spray to keep your look fresh all day.",
        "category": "makeup",
        "image": "/images/product20.webp",
        "rating": { "rate": 4.7, "count": 150 }
      },{
        "id": 21,
        "title": "Leather Tote Bag",
        "price": 49.99,
        "description": "Stylish leather tote bag with ample space for daily essentials.",
        "category": "bags",
        "image": "/images/product21.webp",
        "rating": { "rate": 4.6, "count": 200 }
      },
      {
        "id": 22,
        "title": "Canvas Backpack",
        "price": 39.99,
        "description": "Durable canvas backpack perfect for work or casual outings.",
        "category": "bags",
        "image": "/images/product22.webp",
        "rating": { "rate": 4.5, "count": 150 }
      },
      {
        "id": 23,
        "title": "Crossbody Sling Bag",
        "price": 29.99,
        "description": "Compact crossbody sling bag with adjustable straps for convenience.",
        "category": "bags",
        "image": "/images/product23.webp",
        "rating": { "rate": 4.7, "count": 120 }
      },
      {
        "id": 24,
        "title": "Vintage Messenger Bag",
        "price": 59.99,
        "description": "Classic vintage-style messenger bag made of premium material.",
        "category": "bags",
        "image": "/images/product24.webp",
        "rating": { "rate": 4.4, "count": 90 }
      }, {
        "id": 25,
        "title": "Heart Pendant Neecklac",
        "price": 79.99,
        "description": "A romantic heart-shaped pendant necklace with cubic zirconia accents.",
        "category": "jewelry",
        "image": "/images/product25.webp",
        "rating": { "rate": 4.7, "count": 150 }
      },
      {
        "id": 26,
        "title": "Gold Plated Chain Necklace",
        "price": 59.99,
        "description": "Simple and versatile gold-plated chain necklace for everyday wear.",
        "category": "jewelry",
        "image": "/images/product26.webp",
        "rating": { "rate": 4.5, "count": 130 }
      },
      {
        "id": 27,
        "title": "Silver Infinity Necklace",
        "price": 69.99,
        "description": "Sterling silver infinity symbol necklace with a sleek design.",
        "category": "jewelry",
        "image": "/images/product27.webp",
        "rating": { "rate": 4.8, "count": 110 }
      },
      {
        "id": 28,
        "title": "Crystal Statement Necklace",
        "price": 99.99,
        "description": "Bold crystal statement necklace for formal occasions.",
        "category": "jewelry",
        "image": "/images/product28.webp",
        "rating": { "rate": 4.6, "count": 140 }
      }
      
]

export default ProductData;