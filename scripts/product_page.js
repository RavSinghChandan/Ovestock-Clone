
import {ratingstars,selecthtml,detailslist,specslist,customerBars} from '/rohit/components_prod_page/rating.js'

//console.log(ratingstars,selecthtml,detailslist,specslist,customerBars)


let data = JSON.parse(localStorage.getItem("product"))
//console.log(data)

let productdiv = document.getElementById("product_page")

let atags = document.getElementById("anchorlinks")

let infodetails = document.getElementById("infodetails")

let customerreviews = document.getElementById("customerreviews")

let custreviews = document.getElementById("custreviews")

const appendData = (data) => {
console.log(data);


     let divleft = document.createElement('div');
     divleft.setAttribute("id","divleft")

     let divright = document.createElement('div');
     divright.setAttribute("id","divright")
    
     //  leftside
     let img = document.createElement('img');
     img.setAttribute("id","prodimg")
     img.src = data.imgSrc;

     let divshare = document.createElement('div');
     divshare.setAttribute("id","divshare")

     let sharetagline = document.createElement('h2')
     sharetagline.setAttribute("id","shareh2")
     sharetagline.innerText = "Share This Product:"

     let divsocial = document.createElement('div')
     divsocial.setAttribute("id","divsocial")

     let imgmail = document.createElement('img')
     imgmail.setAttribute("id","imgmail")
     imgmail.src = "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png"

     let imgfb = document.createElement('img')
     imgfb.setAttribute("id","imgfb")
     imgfb.src = "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"

     let imgtwitter = document.createElement('img')
     imgtwitter.setAttribute("id","imgtwitter")
     imgtwitter.src = "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png"

     let imgpin = document.createElement('img')
     imgpin.setAttribute("id","imgpin")
     imgpin.src = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png"

     let divreview = document.createElement('div')
     divreview.setAttribute("id","divreview")
     
     let imgquotes = document.createElement('img')
     imgquotes.setAttribute("id","imgquotes")
     imgquotes.src="https://e7.pngegg.com/pngimages/575/312/png-clipart-quotation-mark-free-content-computer-icons-quote-symbol-s-angle-text-thumbnail.png"

     let divrightreview = document.createElement('div')

     let p_review = document.createElement('p')
     p_review.innerText = "Easy to assemble and clean lines. Just the right size for my small apartment. The color is neutral and fits nicely with other furniture. I will be adding colorful pillows"

     let rat_review = document.createElement('p')
     rat_review.setAttribute("id", "rat_review")
     rat_review.innerHTML = `${ratingstars()}  <span id="spanreview"> See All Reviews</span>`

     divrightreview.append(p_review,rat_review)

     divreview.append(imgquotes,divrightreview)

     divsocial.append(imgmail,imgfb,imgtwitter,imgpin)

     divshare.append(sharetagline,divsocial)

    //  rightside
     let title = document.createElement('h1')
     title.innerText = data.name;

     let rat = document.createElement('h2')
     rat.setAttribute("id", "rat")

     rat.innerHTML = ` <span id="rat-span"> ${data.rating} Reviews</span>`
    
     let pri = document.createElement('div')
     pri.setAttribute("id","pri")
     pri.innerHTML = `Sale Starts at <div id="pri_span">INR</div> ${data.price}`

     let selbtntag = document.createElement('div')
     selbtntag.setAttribute("id","selbtntag")
     
     let selectdiv = document.createElement('div')
     selectdiv.setAttribute("id","selectdiv")
     selectdiv.innerHTML =`${selecthtml()}`

     let btndiv = document.createElement('div')
     btndiv.setAttribute("id","btndiv")
     btndiv.addEventListener("click",function(){
            addToCartFun(data)
     })

     let btndivimg = document.createElement('img')
     btndivimg.setAttribute("id","btndivimg")
     btndivimg.src= "https://pngimage.net/wp-content/uploads/2018/05/cart-icon-white-png-2.png"
     
     let btn = document.createElement('button')
     btn.setAttribute("id", "btn")
     btn.innerText = "Add to Cart"

     btndiv.append(btndivimg,btn)

     selbtntag.append(selectdiv,btndiv)

     let itemno = document.createElement('p')
     itemno.setAttribute("id","itemno")
     itemno.innerText = "ITEM# 38108004"

     let favdiv = document.createElement('div')
     favdiv.setAttribute("id","favdiv")

     let btn2= document.createElement('button')
     btn2.setAttribute("id","btn2")
     btn2.title = "Click the heart to add a product to Favorites or Lists"
     btn2.innerHTML = `<img id="heartimg" src="https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-gris-1.png"> <hr>Favorites`
     btn2.addEventListener("click", function(){
         clickToFav(data)
     })

     favdiv.append(btn2)
     divleft.append(img,divshare,divreview)
     divright.append(title,rat,pri,selbtntag,itemno,favdiv)

     productdiv.append(divleft,divright)


    // anchortags

    let adiv = document.createElement('div')
    adiv.setAttribute("id","adiv")

    let ultag = document.createElement('ul')
    
    let litag1= document.createElement('li')
    litag1.innerHTML = `<a href="#infodetails" data-omni-on="click" data-omni-name="Nav to Details" data-omni-var="eVar4" data-omni-val="PRODPG:Details" id="active-anchor-a">Details &amp; Specs</a>`
    litag1.setAttribute("id","litag1")

    let litag2 = document.createElement('li')
    litag2.innerHTML = `<a href="#customerreviews" data-omni-on="click" data-omni-name="Nav to Details" data-omni-var="eVar4" data-omni-val="PRODPG:Details" id="active-anchor-b">Customer Reviews</a>`

    let litag3= document.createElement('li')
    litag3.innerHTML = `<a href="#aquestions" data-omni-on="click" data-omni-name="Nav to Details" data-omni-var="eVar4" data-omni-val="PRODPG:Details" id="active-anchor-b">Q & A</a>`

    let litag4 = document.createElement('li')
    litag4.innerHTML = `<a href="#ainspirations" data-omni-on="click" data-omni-name="Nav to Details" data-omni-var="eVar4" data-omni-val="PRODPG:Details" id="active-anchor-b">Tips & Inspiration</a>`
    
    let litag5= document.createElement('li')
    litag5.innerHTML = `<a href="#ashipping" data-omni-on="click" data-omni-name="Nav to Details" data-omni-var="eVar4" data-omni-val="PRODPG:Details" id="active-anchor-b">Shipping and Returns</a>`

    ultag.append(litag1,litag2,litag3,litag4,litag5)
    atags.append(ultag)
    
    
    let detleft = document.createElement('div')
    detleft.setAttribute("id","detleft")

    let detlefth2 = document.createElement('h2')
    detlefth2.innerText = "Details"

    let detleftdiv = document.createElement('div')
    detleftdiv.innerHTML = `${detailslist()}`

    detleft.append(detlefth2,detleftdiv)
    
    let detright = document.createElement('div')
    detright.setAttribute("id","detright")

    let detrighth2 = document.createElement('h2')
    detrighth2.innerText = "Specs"

    let detrightdiv = document.createElement('div')
    detrightdiv.innerHTML = `${specslist()}`

    detright.append(detrighth2,detrightdiv)

    infodetails.append(detleft,detright)


    // customerreviews
    //  main

    let custdivleft = document.createElement('div')
    custdivleft.setAttribute("id","custdivleft")

    //  h2
    let custh2 = document.createElement('h2')
    custh2.setAttribute("id","custh2")
    custh2.innerText = "Customer Reviews"

    // 2nd div

    let divcustratings = document.createElement('div')
    divcustratings.setAttribute("id","divcustratings")

    // 2nd div 1st div

    let divstarsratings = document.createElement('div')
    divstarsratings.setAttribute("id","divstarsratings")

    let custspan = document.createElement('span')
    custspan.innerText = "4.1"

    let divrate101 = document.createElement('div')
    divrate101.setAttribute("id","divrate101")

    let divrate102 = document.createElement('div')
    divrate102.innerHTML = `${ratingstars()}`

    let divrate103 = document.createElement('div')
    divrate103.innerHTML = `<span id="rat-span2"> ${data.rating} Reviews</span>`

    divrate101.append(divrate102,divrate103)

    let divcustbutton = document.createElement('div')
    divcustbutton.setAttribute("id","divcustbutton")

    let acustbutton = document.createElement('a')
    acustbutton.href = 'https://www.overstock.com/Home-Garden/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space/33709733/customer-reviews.html'
    acustbutton.innerText = "See All Reviews"

    let btn3 = document.createElement('button')
    btn3.setAttribute("id", "btn3")
    btn3.innerText = "Write a Review"

   

    divstarsratings.append(custspan,divrate101)
    divcustbutton.append(acustbutton,btn3)
    // 
    divcustratings.append(divstarsratings,divcustbutton)


    let ratingbars = document.createElement('div')
    ratingbars.setAttribute("class","row")
    ratingbars.innerHTML = `${customerBars()}`


    // 
    custdivleft.append(custh2,divcustratings,ratingbars)

    let custdivright = document.createElement('div')
    custdivright.setAttribute("id","custdivright")


    customerreviews.append(custdivleft,custdivright)

    // custreviews//


    let custdiv1 = document.createElement('div')
    custdiv1.setAttribute("id", "custdiv1")

    let div121 = document.createElement('div')
    div121.innerText = "Good buy!"

    let div122 = document.createElement('div')
    div122.innerHTML = `<div id="rrrstars">${ratingstars()}</div>  <h2>Verified Purchase</h2> <p>Option: Grey</p>`
    div122.setAttribute("id","div122")
    
    let p123 = document.createElement('p')
    p123.innerText = `I was a little disappointed when I noticed how small this couch is. Very easy to assemble and i am not a handy person. This a good couch for a starter apartment, dorm or a small loft. The cushions may fluff more overtime, they seem thin and the couch is very firm. I placed it in my den and since I have a small child and dog it seems it was a good purchase to have for the next few years. Keep in mind this is a SMALL couch.`
    p123.setAttribute("id","p123")

    let p124 = document.createElement('div')
    p124.innerHTML =`<p>This user earned $2.00 in rewards for writing this review.</p><a href="https://www.overstock.com/rewards-for-reviews">Learn More</a>`
    p124.setAttribute("id","p124")


    let div125 = document.createElement('div')
    div125.setAttribute("id","div125")

    let p126 = document.createElement('p')
    p126.innerText = `An Overstock Customer Nov 30, 2021`

    let btn4 = document.createElement('button')
    btn4.innerHTML = `<img id="likeimg" src="https://cdn.uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/like.svg">  Helpful`
    btn4.setAttribute('id','btn4')
    btn4.addEventListener('click',()=>{
        likeIcon()
    })

    div125.append(p126,btn4)

    custdiv1.append(div121,div122,p123,p124,div125)

    custreviews.append(custdiv1)


 
    // let custdiv2 = document.createElement('div')

    // let custdiv3 = document.createElement('div')


    var qty=1;





    let quantity = document.getElementById("selecttag")
    quantity.addEventListener("change", function(){
        
    qty = quantity.value;
    localStorage.setItem("quantity",JSON.stringify(qty))

        
    })

    
    
}

function clickToFav(data)
{
    let img = document.getElementById("heartimg")
    img.src = "https://www.freeiconspng.com/thumbs/heart-icon/valentine-heart-icon-6.png"
    console.log(data)

    localStorage.setItem("favorite",JSON.stringify(data))
}

function addToCartFun(data){



    // qty=JSON.parse(localStorage.getItem("quantity"))||1;

 
        
    // qty = quantity.value;
    // localStorage.setItem("quantity",JSON.stringify(qty))

        
    
    console.log(data)
    localStorage.setItem("cartitems",JSON.stringify(data))
    console.log(data)
    // window.location.href="/cart/cart.html"
}

function likeIcon(){
    let likeimg = document.getElementById("likeimg")
    likeimg.src = "https://cdn.uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/blue-like-button.svg"
}

appendData(data)




