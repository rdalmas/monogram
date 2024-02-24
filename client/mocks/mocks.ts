import { ConfigProvider, Layer } from "effect";
 
const configProviderMock = ConfigProvider.fromMap(
  new Map([
    ["PRODUCT_API", "http://localhost:3000/api/products"],
  ])
);
 
export const layerConfigProviderMock =
  Layer.setConfigProvider(configProviderMock);
 
export const productsResponseMock = [
  {
      "id": 7,
      "title": "PS5 controller Red Velvet",
      "price": "99.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/7776091/pexels-photo-7776091.jpeg"
  },
  {
      "id": 8,
      "title": "PS5 controller Black",
      "price": "89.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/16070479/pexels-photo-16070479/free-photo-of-close-up-of-a-playstation-joystick.jpeg"
  },
  {
      "id": 14,
      "title": "Xbox controller gray",
      "price": "99.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/14642111/pexels-photo-14642111.jpeg"
  },
  {
      "id": 15,
      "title": "PS4 controller Black",
      "price": "59.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/4225230/pexels-photo-4225230.jpeg"
  },
  {
      "id": 13,
      "title": "PS5 controller Black Midnight",
      "price": "99.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/11591941/pexels-photo-11591941.jpeg"
  },
  {
      "id": 12,
      "title": "Xbox controller white",
      "price": "99.00",
      "description": "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback",
      "image": "https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg"
  }
];
