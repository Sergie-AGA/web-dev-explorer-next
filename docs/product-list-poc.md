# Product List POC

This project experiments a proof of concept of a store, making use of Supabase to handle the backend and modern React ecosystem to render a Product List where you can add items to a cart and trigger discounts based on specific conditions. This was used by me to sell some of my personal belongings in the past.

## Tech Stack

Frontend: Next JS, React JS, JavaScript, Typescript, Tailwind CSS, ShadcnUI, Zustand, yet-another-react-lightbox, react-photo-album, Jest
Backend: Supabase

## Business Rules / User Journey

Asides from identification elements and other basic functional attributes, a product should contain:

- A base price which is the price it was bought
- A price level, which reduces the price the product will be sold by 20%, 40% and 55%
- An optional discount, which is used instead of the price level for specific discounts
- An option to pick up the item at my home for a further 20% discount

As a User, I can:

- Add a product to the cart choosing if I want to pick up the product myself (if the option exists) for a further 20% discount or if I want it handed to me
- Remove the product from the cart
- Swap between both available purchase options

The cart should:

- Save cart data to local storage
- Show the total price of items in the cart
- When buying multiple items, apply an additional 10% discount on all but the most expensive item
- Show the amount of savings for that grand total as an absolute number and as a percentage

## Components

Components here list specific visual elements related to products, carts and related elements.

## Config

This folder has some mock data for products which were later moved to Supabase, as well as the type being used for it and a placeholder url where images might be missing.

## Services

The getProducts service connects with Supabase to fetch products listed there.

## Store

The useCartStore manages adding products to the cart and the final price based on cumulative discounts following the business rules. It also handles adding products to local storage.

## Styles

A custom grid style is handled here.

## Utils

- Calculate Price: Calculates the final price on the business rules
- Currency Formatter: facilitates displaying values formatted in the British currency

## Tests

Tests were implemented for the following elements:

- All components
- The `useCartStore` Zustand store
- The util files `calculatePrice` and `currencyFormatter`
