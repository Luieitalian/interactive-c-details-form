# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## Screenshot
- There is layouts for Tablets, Desktops and Mobile devices.

![](./screenshot.png)

## Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://luieitalian.github.io/interactive-c-details-form/)

## Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

## What I learned

I am proud of the function below that I wrote ^.^
It takes the user input and returns the formatted value

### e.g. :
- -------------------------------
- input value = "123"  
- formatted value = "1230 0000 0000 0000"

- -------------------------------
- input value = "5984 832"
- formatted value = "5984 8320 0000 0000"
---------------------------------

```js
function getCardnoFormat(value){
    const baseformat = '0000 0000 0000 0000'
    const formattedCardno = value.concat(baseformat.slice(value.length,baseformat.length));
    return formattedCardno;
  }
```

## Useful resources

- [Border Gradient Resource](https://codyhouse.co/nuggets/css-gradient-borders) - This resource helped me make soft input borders with gradient. I'd recommend this site to anyone who is trying to learn about borders and stuff.

## Author

- Frontend Mentor - [@Luieitalian](https://www.frontendmentor.io/profile/Luieitalian)
- Twitter - [@luieitalian](http://www.twitter.com/luieitalian)