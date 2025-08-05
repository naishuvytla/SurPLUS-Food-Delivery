import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'

import category_1 from './category_1.png'
import category_2 from './category_2.png'
import category_3 from './category_3.png'
import category_4 from './category_4.png'
import category_5 from './category_5.png'
import category_6 from './category_6.png'
import category_7 from './category_7.png'
import category_8 from './category_8.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

import food_21 from './food_21.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Most Popular",
        menu_image: category_1
    },
    {
        menu_name: "New + Featured",
        menu_image: category_2
    },
    {
        menu_name: "Handheld Classics",
        menu_image: category_3
    },
    {
        menu_name: "Main Courses",
        menu_image: category_4
    },
    {
        menu_name: "Sides + Extras",
        menu_image: category_5
    },
    {
        menu_name: "Vegetarian + Vegan",
        menu_image: category_6
    },
    {
        menu_name: "Desserts + Treats",
        menu_image: category_7
    },
    {
        menu_name: "Drinks + Beverages",
        menu_image: category_8
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Creamy Garlic Mushroom Medley",
        image: food_21,
        price: 14,
        description: "Sautéed mushrooms in a rich garlic sauce, perfect as a hearty vegetarian option.",
        category: "Vegetarian"
    }
]