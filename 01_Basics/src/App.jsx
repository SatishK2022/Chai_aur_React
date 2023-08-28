import './App.css'

const Header = () => {
  return (
    <nav>
      <img src="data:image/jpeg;base64,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" alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <div className="hamburger">&equiv;</div>
    </nav>
  )
}

const restaurantList = [
  {
    "info": {
      "id": "399525",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Kashmere Gate Metro Station",
      "areaName": "Kashmiri Gate",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "399525",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "547",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-kashmere-gate-metro-station-kashmiri-gate-delhi-399525",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "253727",
      "name": "McDonald's",
      "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
      "locality": "Kashmere Gate Metro Station",
      "areaName": "Kashmiri Gate",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "253727",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "630",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 22:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-kashmere-gate-metro-station-kashmiri-gate-delhi-253727",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "38925",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
      "locality": "Netaji Subhash Marg",
      "areaName": "Daryaganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "38925",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "2456",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "8614",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "E Block",
      "areaName": "Connaught Place",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "8614",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-e-block-connaught-place-delhi-8614",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "157583",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "viw6nojxpa0urypajyoy",
      "locality": "Vijay Main Road",
      "areaName": "Laxmi Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "157583",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6100
      },
      "parentId": "4961",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 6.8,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "6.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-vijay-main-road-laxmi-nagar-delhi-157583",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "21383",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Baba Kharak Singh Marg",
      "areaName": "Connaught Place",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "21383",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "2",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-baba-kharak-singh-marg-connaught-place-delhi-21383",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "107452",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
      "locality": "Kashmere Gate Metro Station",
      "areaName": "Kashmiri Gate",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "107452",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4900
      },
      "parentId": "281782",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-kashmere-gate-metro-station-kashmiri-gate-delhi-107452",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "58217",
      "name": "Theobroma",
      "cloudinaryImageId": "ts5xhafwgnwxtkrlyxdc",
      "locality": "D Block",
      "areaName": "Connaught Place",
      "costForTwo": "₹800 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "58217",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6000
      },
      "parentId": "1040",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-d-block-connaught-place-delhi-58217",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "435690",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "zhybzieea1pixxedq2jd",
      "locality": "V3S Mall",
      "areaName": "Laxmi Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "435690",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6100
      },
      "parentId": "2233",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 6.7,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "6.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-v3s-mall-laxmi-nagar-delhi-435690",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "169835",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
      "locality": "Beadon Pura",
      "areaName": "Karol Bagh",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "169835",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6100
      },
      "parentId": "6249",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 6.9,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "6.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹159",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-beadon-pura-karol-bagh-delhi-169835",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "25823",
      "name": "Faasos - Wraps & Rolls",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Minto Road",
      "areaName": "Connaught Place",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "25823",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "21809",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 02:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-minto-road-connaught-place-delhi-25823",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "467579",
      "name": "Louis Burger",
      "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
      "locality": "N Block",
      "areaName": "Connaught Place",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "467579",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6000
      },
      "parentId": "22485",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/louis-burger-n-block-connaught-place-delhi-467579",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "218676",
      "name": "Chai Point",
      "cloudinaryImageId": "dr5aflzisbsyi4ntu6th",
      "locality": "B Block",
      "areaName": "Connaught Place",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "North Indian",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "218676",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "1607",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-21 02:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-point-b-block-connaught-place-delhi-218676",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69464",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
      "locality": "A Block",
      "areaName": "Connaught Place",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "69464",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "195515",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹700",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/starbucks-coffee-a-block-connaught-place-delhi-69464",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "40414",
      "name": "Bikanervala",
      "cloudinaryImageId": "k1ppyflw5ypymt3rayid",
      "locality": "Baba Kharak Singh Marg",
      "areaName": "Connaught Place",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Chaat",
        "Sweets"
      ],
      "avgRating": 3.9,
      "veg": true,
      "feeDetails": {
        "restaurantId": "40414",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6000
      },
      "parentId": "45936",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-20 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bikanervala-baba-kharak-singh-marg-connaught-place-delhi-40414",
      "type": "WEBLINK"
    }
  },
]

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating, areaName}) => {

  return (
    <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <div className="card-content">
          <h2>{name}</h2>
          <div className='ratings'>
            <p className='cuisines'>{cuisines.join(", ")}</p>
            <p>⭐{avgRating}</p>
          </div>
          <p className='location'>{areaName}</p>
        </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="card-container">
      {
        restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })
      }

      {/* <RestaurantCard {...restaurantList[0].info}/>
      <RestaurantCard {...restaurantList[1].info}/>
      <RestaurantCard {...restaurantList[2].info}/>
      <RestaurantCard {...restaurantList[3].info}/>
      <RestaurantCard {...restaurantList[4].info}/>
      <RestaurantCard {...restaurantList[5].info}/> */}
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <h2>Footer</h2>
    </>
  )
}


function App() {

  return (
    <>
        <Header />
        <Body />
        <Footer />
    </>
  )
}

export default App