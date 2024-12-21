export interface TTopicTitles {
  id: number;
  name: string;
  content: TContent[];
}

export interface TContent {
  id: number;
  question: string;
  answer: string;
}

export const initialTab = {
  id: 1,
  name: "Campaigns",
  content: [
    {
      id: 1,
      question: "When can I avail the offers of a sale campaign?",
      answer: `On our CartUp Website and App, customers can see a Sale campaign banner before any campaign starts. You can start shopping and availing exciting discounts once the campaign is Live.
Some sale campaign starts on a specific date and run for one day or for a certain time period or for a week. And for some big sale campaigns, under the campaign banner, customers can find some offers for the teasing period and other upcoming offers for the main campaign period. From there the customer can choose to buy immediately with teasing offers or can wait until the main campaign starts to gain more discounts and offer.
`,
    },
  ],
};

export const topicsTitles: TTopicTitles[] = [
  {
    id: 1,
    name: "Campaigns",
    content: [
      {
        id: 1,
        question: "When can I avail the offers of a sale campaign?",
        answer: `On our CartUp Website and App, customers can see a Sale campaign banner before any campaign starts. You can start shopping and availing exciting discounts once the campaign is Live.
Some sale campaign starts on a specific date and run for one day or for a certain time period or for a week. And for some big sale campaigns, under the campaign banner, customers can find some offers for the teasing period and other upcoming offers for the main campaign period. From there the customer can choose to buy immediately with teasing offers or can wait until the main campaign starts to gain more discounts and offer.
`,
      },
    ],
  },
  {
    id: 2,
    name: "Vouchers",
    content: [
      {
        id: 1,
        question: "How can I use my Refund Voucher?",
        answer: `If you are eligible for refund, you can get the refund as a voucher in CartUp platform instead of Bank/MFS wallet refunds. Refund vouchers are created very fast in the system; hence you get the refund quicker compared to Banks or MFS wallets.
Important Note: You have to use the full refund amount in one order, since a voucher can be applied only once. If your order amount is less than the refund voucher, the leftover money will not be refunded and cannot be used for the next purchase.
`,
      },
      {
        id: 2,
        question: "Why am I unable to use vouchers?",
        answer: `There may be one or more reasons why you're unable to use the vouchers.
-        Your account may not fulfill the conditions of the voucher
-        The voucher may have already been used
`,
      },
      {
        id: 3,
        question: "Why am I unable to use my Vouchers?",
        answer: `Users can redeem copied vouchers on a first come first served basis until the redemption budget is met. Once you copy a voucher code, ensure to use it before it's fully redeemed.

Note: CartUp has set limits on the redemption of vouchers to ensure fair usage and flag potentially fraudulent activity. The specific redemption limits for each voucher are set taking into consideration factors such as voucher value, redemption frequency, and security measures and varies from time to time.

Note: If you encounter any problem in applying or redeeming discount vouchers, make sure you haven't availed the voucher in any of your accounts. Multiple account creation for the purpose of availing discount vouchers is prohibited by CartUp and CartUp considers all of your accounts as one buyer.
`,
      },
    ],
  },
  {
    id: 3,
    name: "My Account",
    content: [
      {
        id: 1,
        question: "How can I sign up as a customer on CartUp?",
        answer: `It's easy to sign up as a new customer! You can use your Gmail address, or Mobile number to sign up CartUp Account. To sign up with a mobile number, follow below step:

-        Open "CartUp App"
-        Go to the "Profile" and press on "Log In / Sign Up" button.
-        Enter your correct "Mobile Number" & Press on "Send via SMS" for "Verification Code".
-        Enter the code & click on the "Next" button.
-        Insert your "Full Name" & insert your desired "Password"
-        Press on “Next” to complete the Signup process.

After completing all the above processes, you will become a new customer of our CartUp family.
`,
      },
      {
        id: 2,
        question: "How can I deactivate or delete my account?",
        answer: `The customer can avail this service through our Customer Services. The customer can activate or deactivate their account by calling or messaging our customer service number.`,
      },
      {
        id: 3,
        question: "How do I add a new delivery address to my account?",
        answer: `Log in to your CartUp App and follow the steps below:

-  Go to ‘’Addresses’’ from "Profile" and tap on ‘’+Add Address’’
-  Type your Full Name, and Mobile Number
-  Select your "District"
-  Choose your "Thana"
-  Select “Area” based on your exact Shipping Address
- Type your full address in the "Address" box
-  Tap on “Save”
-  Write a specific Address along with any nearby landmarks

After finishing all the steps, you can find your newly added address as the default shipping address. While you will try to place a new order after adding and making the address default, from the checkout page you can find out your newly added address as your delivery address.

Notes:

•        Please mention your address and landmark properly to avoid failed delivery, and also to get the accurate shipping charge.
•        You can add up to 5 addresses to an account.
`,
      },
      {
        id: 4,
        question: "How to change email address and contact number?",
        answer: `To change the Email Address or Contact number, kindly follow the following procedures:

-        Click on Profile on the bottom right of the homepage
-        Login to your CartUp Account
-        Go to "Account Information"
-        Click on the edit button beside “Email Address” or “Mobile No”
-        Choose to “Verify through Email” or “Verify through SMS”

Verifying Through Email:
- Click on “Send” button
- Type in the code that is sent through the Email within 60 seconds of clicking the “Send” button

Verifying Through SMS:
- Click on “Send” button
- Type in the code that is sent through the SMS within 60 seconds of clicking the “Send” button
`,
      },
    ],
  },
  {
    id: 4,
    name: "Account Security",
    content: [
      {
        id: 1,
        question: "How can I keep my account secure?",
        answer: `Keep your account safe with these easy steps:

-        Create strong, unique passwords and use a reliable password manager.
-        Watch out for phishing scams and do not share your password with anyone.
-        Update your computer and phone software’s regularly for better security.
-        Use safe Wi-Fi connections that you can trust.
-        Always log out when you're done using your accounts.
`,
      },
      {
        id: 2,
        question:
          "What should I do if I think my account has been compromised?",
        answer: `-        If you think someone unauthorized accessed your account, change your password right away.
-        Check your account activity for any unfamiliar actions and reach out to our support team to report the incident.
`,
      },
      {
        id: 3,
        question: "How can I secure my account by creating a strong password?",
        answer: `Here are some tips to create a strong password:
-        Make a strong password using a mix of uppercase and lowercase (big and small) letters, numbers, and symbols.
-        Don't use things that are easy to guess, like names or birthdays.
-        Change your password often, and don't use the same one for different accounts.

How often should I update my account password?
-        It's advisable to update your password regularly, ideally every three to six months. Doing this helps lower the risk of unauthorized access and makes your account more secure overall.
`,
      },
      {
        id: 4,
        question: "What should I do if I can't log in to my account?",
        answer: `If you can't log in to your account, try resetting your password. If that doesn't help, reach out to our customer support team for assistance.`,
      },
    ],
  },
  {
    id: 5,
    name: "Privacy & Security",
    content: [
      {
        id: 1,
        question: "Why I'm not receiving account verification code?",
        answer: `We do send account verification OTP SMS for 3 identical attempts in an hour. If you have already sent account verification OTP three times in between, please try again later.

However, issues might arise from your Mobile Network Operator [Service Provider] in such scenarios you can directly reach out to the concerned operator for further resolution.

You can also Chat with Us for further information.

Note: Above communication refers to only account verification.
`,
      },
      {
        id: 2,
        question: "CartUp app not working. What should I do?",
        answer: `There may be one or more reasons why you're unable to use CartUp App.
Some reasons and solutions given below:

-        Update your CartUp APP
-        Check if your network is working
-        Clear cache of your CartUp App from the settings of your phone
-        Make sure there is enough memory and space in your phone
`,
      },
      {
        id: 3,
        question:
          "How does CartUp protect the customer's personal information?",
        answer: `We respect your privacy and want to protect your personal information. The Privacy Policy at CartUp can help you with the following concerns:

-        Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information.
-        Privacy Policy also explains the steps we have taken to secure your personal information.
-        Finally, Privacy Policy explains your options regarding the collection, use and disclosure of your personal information.
`,
      },
      {
        id: 4,
        question:
          "If someone logged into my account and placed the order, what should I do?",
        answer: `We request not to share your ''login credentials'' with anyone. If you have any doubt that someone has logged into your account and placed the order, please reach out to us via “E-Mail” or our number. We will highly prioritize this issue and facilitate you accordingly.`,
      },
    ],
  },
  {
    id: 6,
    name: "Order Placement",
    content: [
      {
        id: 1,
        question: "Are all products on CartUp new and unused?",
        answer: `Yes, CartUp offers 100% new and unused products. Other than that, it will be mentioned on the product page. If you have not received an intact product, please contact us immediately`,
      },
      {
        id: 2,
        question: "Why do I see different prices for the same product?",
        answer: `At CartUp, different sellers offer the same product at their convenient price. This shows different prices for the same products, but it also lets you compare prices to find the best deal.

Different price for same product

To find the best deal following things can be checked:
-        Product Ratings and Reviews
-        Seller Ratings
`,
      },
      {
        id: 3,
        question:
          "Do I have to pay any duties or taxes upon delivery of my order?",
        answer: `No, our customer doesn't have to pay any duties or taxes upon delivery of their order. All products on CartUp are delivered at no additional cost to you since the stated price at checkout includes delivery, custom fees and import duties. You are not expected to pay any additional charges.

If you are asked by Customs or our logistic partner to pay duties or any other fees or requested to present a personal ID, please contact us for clarification.
`,
      },
      {
        id: 4,
        question:
          "I am unable to add products to my cart. What could be the reason?",
        answer: `There could be several reasons behind why you're facing problems when adding something to your cart.

-        The selected item, color, size may not be available
-        There may be restrictions on buying over a quantity of a product
-        Technical reasons or system upgradation
-        You may have not signed into your account 
`,
      },
      {
        id: 5,
        question: `How to place an order on "CartUp"?`,
        answer: `Placing an order in CartUp is easy; just follow few simple steps mentioned below: 

-        Find your desired product from our CartUp website or App.
-        From the product page click on "Buy Now" if you just want a single product to order.
-        Click on "Add to Cart" if you want to add more products to the cart.
-        After adding all of your desired products in Cart > Go to the Cart > Select the products you want to order.
-        Click on the “Proceed to Checkout” button
-        Choose your preferred delivery address & use coupon voucher code if you have any.
-        To proceed for payment, click on the “Proceed to Pay” button > Select a payment option before clicking the "Confirm order".

After confirming the order and completing the payment, you will get a confirmation notification from the App and by Email to let you know that the order is successfully placed.
`,
      },
      {
        id: 6,
        question: "How do I remove an item from my shopping cart?",
        answer: `To remove an item from your shopping cart, please follow these steps: 

From Web: 
Go to your “Cart” > Click on the "Bin" icon beside the product you want to remove

From App: 
Go to your “Cart” > select the item you want to "Delete" > Press on the "Bin" button
`,
      },
      {
        id: 7,
        question: "How to contact seller?",
        answer: `CartUp has made the communication of customers with sellers easy. Customers can easily reach out to sellers and ask any questions related to any product of their choice through message. Customers can contact with the seller by following the steps:

-        Login to your CartUp account from App/Website.
-        Search the product in the search bar.
-        Click on the product.
-        On the product page, you will find "Chat" option in the "Sold By" section to communicate with the seller.
-        You can ask for any details about the product
-        You will get a response on the chat screen when the seller will be available to reply.
-        You can also check the response by clicking on the bell icon from the homepage > Chats
`,
      },
      {
        id: 8,
        question:
          "What kind of questions can I ask on the Chat on product page?",
        answer: `From the Chat button on the product page, customers can ask relevant queries regarding the product, like - specification, availability, warranty policy, installation, etc. Please note that this information will likely be available on the product display page too.

Customers are requested not to share contact details, using impolite/improper language, asking irrelevant queries and lodging complaints.
`,
      },
      {
        id: 9,
        question: "Why am I seeing an Error while placing the order?",
        answer: `The reasons could be:

-        The voucher applied by you may have already been used
-        Some products in your cart may have reached the maximum purchase limit
-        High demand products such as Oil, Rice, and other essential items may have quantity restrictions
-        The location that you have selected for delivery is not operational now
-        System maintenance or upgradation
`,
      },
      {
        id: 10,
        question: "I am unable to add an item to cart, why is this happening?",
        answer: `If you are unable to add an item to your cart, it may be because of one of the following reasons.

Color/ Size: Check if you have selected the color and/or size of the product.
Out of stock: The product may be out of stock. 
`,
      },
      {
        id: 9,
        question:
          "Does CartUp limit the quantities of certain products for purchases?",
        answer: `CartUp has implemented quantity limits per user in order to ensure availability and equitable distribution of high demand products. The specific quantity limits for each product will be determined by taking into account factors such as demand, product availability, and fairness among users.

If you encounter any problem in placing orders due to quantity limits implementation, make sure you haven't breached the quantity limits from any of your accounts. Multiple account creation for the purpose of bulk ordering is prohibited by CartUp and CartUp considers all of your accounts as one buyer.`,
      },
      {
        id: 9,
        question:
          "I am trying to place an order but receiving the following error message “You have already used the voucher or reached the maximum limit of item(s).”",
        answer: `It seems you have used the maximum number of vouchers available, try to take following steps to resolve the issue:

-  Try removing / changing your voucher (discounts that you might have availed / attempted to avail multiple times).
-  Try removing some products (products you might have already purchased / attempted to purchase in high quantity).
-  Try logging in from your main account.
-  Try placing an order / using a voucher again in 7 days.
-  Contact Customer Experience if problem persists.
`,
      },
      {
        id: 10,
        question: "How can I check delivery timelines before placing an order?",
        answer: `CartUp is always devoted to getting your orders delivered by committed delivery time on the product page. As per convenience, customers can find out delivery timelines in multiple ways.

If you're planning to purchase any product, you can simply find the delivery timeline on the product page. However, your address must be given in the account. You can also see the delivery timeline in the product checkout page.

To find the delivery timeline from the product page, please follow the steps given below -
-  Click on any product that you want to purchase. 
-  Scroll down and move to the delivery section.
-  In delivery section, you can see the estimated delivery timeline.
`,
      },
    ],
  },
  {
    id: 7,
    name: "Order Management",
    content: [
      {
        id: 1,
        question: "How can I cancel my order?",
        answer: `Firstly, Cancellation is only possible before being confirmed.

To cancel an item from your order, follow the steps below:
-        Log into your CartUp Account
-        Go to "My Orders"
-        Tap on “Pending”
-        Tap on the “Cancel” button beside an order to cancel
-        Add relevant details
-        Submit the form

For prepaid orders, the refund will be reflected in your bank account as per the Refund Timelines.
`,
      },
      {
        id: 2,
        question: "What are the features of checkout page?",
        answer: `Delivery Details: Customer can check and change their delivery location. Credentials are also visible in this section.

Product details: Customers can see the image of their ordered product as well as delivery timeline.

Vouchers: Customer can see and use Seller, Collectible or Coupon vouchers.

Order Summary: Customers can review their total order from this section. They can view Item Total, Delivery Fee, Discounts and Total Payment.
`,
      },
      {
        id: 3,
        question: "Why was my order canceled?",
        answer: `Your CartUp order might get canceled for many reasons. Some of the reasons are stated below:

- If the payment method was not chosen after placing the order, it will get canceled after certain time.
- For unexpected system glitch, the order might get canceled.
- If the product runs out of stock before payment of the order, it might get canceled.
- If the seller does not fulfill the order after confirming the order, it might get canceled.
- If the seller delays processing the order, then it might get canceled.
`,
      },
    ],
  },
  {
    id: 8,
    name: "Rating & Reviews",
    content: [
      {
        id: 1,
        question:
          "What is the Ratings & Reviews and how to write good reviews?",
        answer: `CartUp customers have the option of rating and reviewing their product and seller experiences.

The customers can leave star ratings, add text, and add pictures of the product to describe what they liked or disliked about their experience.

How do I leave a Rating and Review?

It's easy! just follow the below steps:
- Go to "Profile"
- Click on "Reviews"
- Go to "To review"
   In this section, you will see a list of all your delivered products that are awaiting review.
- Click on the "Write a Review" button beside the item you want to review
- You can rate products, the seller and the delivery service with stars like these!

Five Stars      –   I Love it             ★★★★★
Four Stars     –   I Like It                ★★★★
Three Stars   –   It’s OK                   ★★★
Two Stars      –   I Don't Like It         ★★
One star        –   I hate It                    ★

- The next step will be adding photos of the product that you have received. Upload at least 1-3 photos so that we could see what you have received and on which basis you are rating the product. This will help other customers to judge before buying.

- After uploading photos, kindly explain the reason for your rating or your experience with the received product in detail.
- You can rate sellers with emojis.
- After completing your review press on “Submit”button.

DO'S

- Focus on the product and its features (When uploading pictures).
- Base the review on your own personal experience.
- Tell us why you feel a certain way about the product and its quality.
- Rate your products with stars that define your experience (1 is lowest, 5 is highest).
- Make your review as helpful and relevant as possible for other customers.

DON'TS

- Share fraudulent information about the product.
- Share irrelevant information in the reviews.
- Use profane, vulgar, obscene, derogatory, discriminating, or threatening content.
- Upload vulgar, profane, irrelevant, or pornographic images in reviews.
- Share anyone’s personal information.
- Upload copyrighted content.
- Ask for returns and refunds from the vendors in the reviews.`,
      },
      {
        id: 2,
        question: `How do I "Review" my product?`,
        answer: `All CartUp customers can review and rate the products they have purchased from the platform.
If you have purchased something from CartUp, you can rank the product out of 5 stars, leave a descriptive review in text and even add pictures to express what you liked or disliked about the product.

If you want to share a review of a product that you've purchased on CartUp, follow the instructions below.

- From your CartUp App, go to "Profile".
- Tap on "Reviews" where you'll see all the products you've received.
- Click the "Write a Review" button beside the product you want to review.
- Rate the product out of five stars with five representing "Delighted" and one star representing "Poor" experience.
- Rate three different aspects of your shopping experience - Product Quality, Seller Service, and Delivery Service.
- Upload the pictures of the product.
- Write about your experience with the product in detail.
- Tap on "Submit" to submit your review.

Note: Please ensure that you rate Product Quality, Seller Service, and delivery service separately from your overall rating. This will help us serve you better by understanding where you are facing problems.
`,
      },
    ],
  },
  {
    id: 9,
    name: "Shipping Journey",
    content: [
      {
        id: 1,
        question:
          "What do I do if my order did not reach in the promised lead time?",
        answer: `In such scenarios, please reach out to us through E-Mail or Hotline and share your order number to check the issue. From our end, we will surely take the proper steps if necessary.

Please note that, if your order did not reach you in the promised lead time or order status has not been updated, mentioned reasons can be:

-  Natural calamities (Floods / Earthquakes / Weather conditions).
-  Social unrest (Protest / Strikes).
-  Long government holidays.

However, CartUp will not be liable for delays due to the following circumstances:

1. Incomplete / Wrong address
2. Customer failed to receive items
`,
      },
      {
        id: 2,
        question: "How can I track my order?",
        answer: `After placing an order, it has to complete several steps / stages before it's delivered.
To track any order status, please follow the below steps:

- Login to your CartUp Account. 
- Go to “Profile” > “My Orders”.
- From the order list, click on the Order Number that you want to track.
- This will lead you to the “Delivery Detail” page.
- Click on the "Package Number" to see a detailed flow of the delivery status.
`,
      },
      {
        id: 3,
        question:
          "Can I change my shipping address after I have placed my order?",
        answer: `Shipping address cannot be changed after placing an order. However, you may cancel the placed order and reorder with your correct / new address. Otherwise, you have to receive the product at that given address.

To select the correct address please follow these steps -

- Go to "Profile"
- Log in to your CartUp Account.
- Click on the 'Addresses' icon.
- Choose your correct address from the list and make it default.

Note: You can also set a new address and save it as your default address for your next orders. After saving your correct shipping address, it will appear in your address book as the default shipping address and also on the checkout page.
`,
      },
      {
        id: 4,
        question: "Does CartUp deliver all over country?",
        answer: `NA`,
      },
      {
        id: 5,
        question:
          "I found the package open and the product seal broken on delivery. What should I do?",
        answer: `Customers should check the whole package carefully, if the package is opened/damaged or the product seal is broken, the customer should not accept it.
If you accept any open or damaged package without noticing or by mistake, kindly contact our Customer Experience Team. They will provide you with a solution and will take the necessary step to solve the issue.
`,
      },
      {
        id: 6,
        question: "What are the most common reasons for delivery delays?",
        answer: `We are always committed to delivering products on an estimated timeline and we give our 100% effort to keep our commitment. However, delivery might be delayed in some unavoidable / bad / unexpected scenarios, like:

Mega Campaign Time: During mega campaign, our delivery team is required to process large number of orders. Hence, sometimes it causes delay in delivery.
Long Public Holiday: On long public holidays, like Eid Vacations, Puja Vacation, Government Holidays, there might be delays in delivery.
Bad Weather/ Natural Disaster: The weather conditions of the destined city may be rough; for example- Heavy rainfall, LandCartUpide, etc., This may result in a delivery hold-up.
Law & Order Situation / Roadblocks: Due to procession, lockdowns, strike issues resulting in route blocking, you may receive your package after the promised time.
Accident or Unwanted Package Damage: Sometimes an accidental package damaged situation can take place. In that case, the delivery may not be possible.
Seller Sourcing Issues: Sometimes sellers take longer than the expected time to fulfil your order.
Cross Border Shipment Delay: Due to Air Transportation or Custom Delays, your Cross Border order may take longer than usual to be delivered.
Wrong Address / Phone Number: While placing an order, the customer may enter an incorrect address or phone number, leading to late delivery.
`,
      },
      {
        id: 7,
        question:
          "Will someone contact me before delivering the package to my location?",
        answer: `Yes, our delivery personnel may contact you to confirm your location. Other than that, our delivery man always contacts right before the delivery time.

Furthermore, if you missed the first attempt of delivery, we will attempt to deliver your order again. Delivery Team may take 1-3 attempts to deliver the order to you.
`,
      },
      {
        id: 8,
        question: "What are the 'Delivery Timelines'?",
        answer: `Delivery timeline refers to the time an order takes to reach the customers hands. CartUp is always devoted to getting your orders delivered by committed delivery time on the product page. As per convenience, customers can find out delivery timelines in many ways.

Let’s have a closer look at our simple ways to find out when your products will be delivered-

Step 1 - Login to your CartUp account > go to “Profile” > “My Orders”> “All”.
Step 2 - Press on your desired “Order”.
Step 3 - Click on the “Track Package” to find out the estimated delivery timeline.
`,
      },
      {
        id: 9,
        question: "What is the delivery charge of CartUp?",
        answer: `CartUp doesn’t have any fixed delivery charge. Delivery charges basically depend on product weight, shipping location, quantity etc. Therefore, the shipping charge you can see on product page is generated by the system depending on mentioned parameters.

For more exact deliver charges, please use the correct deliver location while placing an order.`,
      },
      {
        id: 10,
        question: "What is free shipping?",
        answer: `Free shipping is a deal where you can get your product delivered without any shipping / delivery charge.

During campaign periods, CartUp offers free shipping Slots, where customers can order products without any shipping charge. Terms and conditions like category restrictions, minimum order amount, minimum item amount, etc. might apply on free shipping deals. Free shipping will be highlighted in banners.

Also, customers can enjoy free shipping offers from specific Brands / Sellers.

- If free shipping is available you can find “Free” sticker under the product.

- From product page Brand/Seller free shipping conditions can be visible. Once, mentioned terms & conditions are met free shipping will automatically apply on checkout page.
`,
      },
      {
        id: 11,
        question:
          "What are the most common reasons for failed deliveries and how to avoid them?",
        answer: `Some of the most common reasons for failed delivery are as follows:

Wrong Address: While placing an order, the customer has entered the incorrect address.
Wrong Phone Number: While placing an order, the customer has provided a wrong phone number.
Customer not available: Our delivery personnel was not able to get in touch with the customer.

There are various ways to avoid failed delivery, we have mentioned some of them here. Please follow these in order to avoid failed delivery.
`,
      },
    ],
  },
  {
    id: 10,
    name: "Payment Methods",
    content: [
      {
        id: 1,
        question: "How can I pay with bKash at CartUp?",
        answer: `Customers can easily make payments with bKash at CartUp. You can complete the payment through bKash on CartUp in the following ways:

-        To pay with bKash, please go to the payment page and you will find the "Pay Now" button.
-        Then you will be redirected to the SSLCOMMERZ payment page, where you will be asked to choose your payment option.
-        Choose your payment option and enter the required information and click on "CONFIRM". Then you will be asked for OTP which will be shared from bKash through text, enter the OTP and click on "Confirm" to complete the payment.`,
      },
      {
        id: 2,
        question: "How can I pay using Credit/Debit card at CartUp?",
        answer: `Customers can easily make payments with Debit/Credit card at CartUp. You can complete the payment through Debit/Credit card on CartUp in the following ways:

-        To pay with Debit/Credit card, please go to the payment page and you will find the "Pay Now" button.
-        Then you will be redirected to the SSLCOMMERZ payment page, where you will be asked to choose your payment option.
-        Choose your payment option and enter the required information and click on "Confirm". Then you will be asked for OTP which will be shared from Debit/Credit card through text, enter the OTP and click on "Confirm" to complete the payment.`,
      },
      {
        id: 3,
        question: "How can I pay with Nagad on CartUp?",
        answer: `Customers can easily make payments with Nagad at CartUp. You can complete the payment through Nagad on CartUp in the following ways:

-        To pay with Nagad, please go to the payment page and you will find the "Pay Now" button.
-        Then you will be redirected to the SSLCOMMERZ payment page, where you will be asked to choose your payment option.
-        Choose your payment option and enter the required information and click on "CONFIRM". Then you will be asked for OTP which will be shared from Nagad through text, enter the OTP and click on "Confirm" to complete the payment.`,
      },
    ],
  },
  {
    id: 11,
    name: "Refund Policy",
    content: [
      {
        id: 1,
        question: "What is CartUp refund process?",
        answer: `Issuance of Refunds:

You can choose your preferred refund method based on the Refund Timeline if your product is eligible for a refund. The shipping fee is refunded along with the amount paid for your returned product.

For return processing, it takes a total of 4 days to complete. After you have successfully returned your product to CartUp by pickup / drop off, it will take a maximum of 3 days to reach at our CartUp Warehouse where the “Quality Check” will be done within a maximum of 1 day. If your claim is found valid, CartUp will refund your amount of the purchase according to the refund policy that you have chosen.

For order cancellation, after cancelling an order refund processing starts immediately.
The time required to complete a refund depends on the refund method you have selected. 

Note: Any voucher discount code can only be applied once. The leftover amount will not be refunded or used for the next purchase even if the value of the order is smaller than the voucher value.
`,
      },
      {
        id: 2,
        question: "What are the Refund Timelines?",
        answer: `Refunds are issued in the following cases:

Returns: For return requests that are approved, you will be refunded as per the refund timelines.
Cancellation: After cancellation, refunds are automatically processed and you will receive it as per the refund timelines.
Delivery Failed: Once the package is returned to the seller, you will be refunded as per the refund timelines.

Once your refund is approved, CartUp immediately processes your refund but it may still take some time for your bank or payment partner to reflect it to your account.

Refund timelines for all refund methods are shared as follows.

*Payment Methods – Refund Options – Refund Timelines

Debit or Credit Card - Debit or Credit Card Payment Reversal – 10 Working Days
bKash – Mobile Wallet Reversal/ bKash - 5 Working Days
COD – Bank Deposit - 5 Working Days
COD – CartUp Refund Voucher - 1 Working Days
CartUp Voucher - CartUp Refund Voucher - 1 Working Days
      
Note: Working days include all days of the week except Fridays, Saturdays, and government holidays.
`,
      },
      {
        id: 3,
        question: "Does CartUp Refund shipping fee?",
        answer: `Yes, CartUp refunds the shipping fee. The shipping fee is refunded along with the amount you have paid for your returned or cancelled product.

For example, you have returned a product. The product price of the returned product is 100 taka and the delivery charge is 25 Taka. When you will receive your refund, the refunded amount will 125 Taka.
The same will goes for the cancelled order.
`,
      },
      {
        id: 4,
        question: "What is CartUp Refund Policy?",
        answer: `CartUp facilitates customers with a very simple refund policy.
- The processing time of your refund depends on the type of refund and the payment method you used
- The refund period / process starts when CartUp has processed your refund according to your refund type
- The refund amount covers the item price and shipping fee for your returned product
- In case of any refund, the received cash back amount, if any, will be adjusted with the refund amount

Refund Policy

*Payment Methods – Refund Options

Debit or Credit Card - Debit or Credit Card Payment Reversal – 10 Working Days 
bKash – Mobile Wallet Reversal/ bKash - 5 Working Days 
COD – Bank Deposit - 5 Working Days 
COD – CartUp Refund Voucher - 1 Working Days 
CartUp Voucher - CartUp Refund Voucher - 1 Working Days

Example: If a customer made payment by bKash, then customer can select Refund Voucher or source bKash account as refund method.

As per the refund policy, the below timelines will be applicable against each "Payment Method". The time required to complete a refund depends on the refund method you have selected.

Refund processing timeline:

*Payment Methods – Refund Timelines

Debit or Credit Card – 10 Working Days
bKash - 5 Working Days 
COD - 5 Working Days 
COD - 1 Working Days 
CartUp Voucher - 1 Working Days
`,
      },
    ],
  },
  {
    id: 12,
    name: "Refund Process",
    content: [
      {
        id: 1,
        question:
          "Why is the status ’Refunded’ when my money hasn't been credited?",
        answer: `If the status is "Refunded", it means that CartUp has completed the refund process from their end and your amount is being processed by your concerned bank / NBFI.

It takes your bank upto 10 working days to process the amount. In case you have not received the amount after 10 working days.
`,
      },
    ],
  },
  {
    id: 13,
    name: "Return Policy",
    content: [
      {
        id: 1,
        question:
          "What are the mandatory information and steps to return a product?",
        answer: `To ensure that your Return is accepted and processed smoothly, please follow the below steps:

Pack item (s) and include the following documents -

- Original Box / Packaging
- Manual / User guide
- Order Invoice
- Complete accessories with freebies

Print the Return label and paste it on the box, Return label can be printed after you have finished filling up your Online Returns Form. Please pay close attention to the list of actions you need to do after the completion of the Online Return Form.

Important Note:

- The product must be returned in the original and undamaged manufacturer packaging/box.
- Do not put tape or stickers on the manufacturer’s box. (Do not write anything on the product packaging).
- If the product was delivered in the second layer of CartUp packaging, it must be returned in the same condition.
- If you do not have the access to print out the return label then please ensure that you write the order number, RN, Return Tracking, Refund Method on the outer box.
- If a product is returned to us in an inappropriate condition, we reserve the right to send it back to you.
`,
      },
      {
        id: 2,
        question: "How long is the quality check process?",
        answer: `The refund process will only begin after we have completed evaluating your returned product and your return claim was deemed valid. You will be notified by email once your refund has been processed. If it is an invalid return, the product will be sent back to you and you will be informed of the reason for return rejection.`,
      },
      {
        id: 3,
        question: "Do I have to pay for my return?",
        answer: `Returning an item is free.`,
      },
      {
        id: 4,
        question:
          "What can be the possible “Return Reasons” while returning an item?",
        answer: `Fill out the Online Return Form by going to My Orders > Select your order > Return.

The list of possible return reasons:

1. Delivered item is wrong.
2. Item is damaged.
3. Item is different from the product description or photo.
4. Component or accessory is missing from the item.
5. Giveaway is missing from the package.
6. Delivered size is wrong.
7. The item is fake.

You can select "Return Reasons" as per your actual reason. If you are unsure about the selection of your return reason, kindly contact us.
`,
      },
    ],
  },
  {
    id: 14,
    name: "Return Process",
    content: [
      {
        id: 1,
        question: "How do I find the Return Tracking Number?",
        answer: `NA`,
      },
      {
        id: 2,
        question: "How do I return my item?",
        answer: `CartUp has a Free and Easy Returns Policy. To submit a return request, follow the steps below :
1. Go to "Profile".
2. Tap on “My Orders”.
3. Go to the "Delivered" tab.
4. Tap on the "Return" button beside the product you want to return.
5. Fill out the Online Return Form with all the relevant information
6. Submit the request`,
      },
      {
        id: 3,
        question: "How should I pack the items for return?",
        answer: `- Fashion products: Unworn and unwashed, can be tried on to check fit.
- Include all received items: Free gifts, warranties, tags, manuals, etc.
- Return in undamaged original packaging, no tape on manufacturer's box.
- Protect damaged CartUp packaging with extra plastic wrapping.
- Maintain product's received condition.

Important: Pack items separately by their unique Return Tracking Numbers. Don't combine items with different Return Tracking Numbers.

Note:
- While handing over your package to Pickup Rider, please collect the CartUp Return Acknowledgment Paper and reserve it for future reference.
`,
      },
      {
        id: 4,
        question: "How do I check my return tracking number?",
        answer: `To access the Return Tracking Number, please follow below steps:
1. Go to Profile > "Returns" > Go to the "Track Return" tab.
2. You can now view the Return Tracking Number`,
      },
    ],
  },
  {
    id: 15,
    name: "Warranty Policy",
    content: [
      {
        id: 1,
        question: "I lost my warranty card. How can I get warranty?",
        answer: `We share a CartUp Invoice Paper when delivering your product to you. Just show the Invoice Paper to the seller or to the relevant warranty center to claim the warranty.`,
      },
      {
        id: 2,
        question: "How do I know if my product has a warranty?",
        answer: `If warranty service is offered on a product, the warranty period will be displayed on the product display page.

Alternatively, for the app, you can view the warranty period in the service section, found in the overview of the product.
`,
      },
      {
        id: 3,
        question: "What is CartUp Warranty Policy?",
        answer: `Warranty Policy
>How do I know if my product has a warranty?
If a warranty is offered on a product, the warranty period and details are displayed on the product page.
Product warranty will apply to the products which have Brand or Seller Warranty policy. To claim the warranty please communicate with the Brand/Seller. Brand/Seller will provide necessary services within the warranty period as per their policy and guidelines. CartUp will not take any responsibility for any kind of after-sales services. For support call: +8809613444455 or email: customer.care@cartup.com
>How to Determine if Your Product Has a Warranty?
The warranty period and details are displayed on the product page if a warranty is offered.
Warranty Coverage
Products with a Brand or Seller Warranty are eligible for warranty coverage. To claim the warranty, please contact the Brand or Seller directly. They will provide the necessary services within the warranty period according to their policies and guidelines.
Brand/Manufacturer warranty: The warranty provided by the brand or manufacturer is directly governed by the terms and conditions set forth by the respective brand or manufacturer. CartUp disclaims any responsibility for after-sales services associated with these warranties. Customers are required to engage directly with the brand or manufacturer through their authorized service centers to initiate any claims for repairs or replacements under the applicable warranty conditions. The rights and obligations of the parties will be governed by the specific warranty terms provided by the brand or manufacturer.
Seller warranty: The warranty provided by the seller is subject to the specific terms and conditions established by the seller who sold the product to you. CartUp disclaims any liability for after-sales services rendered under a seller warranty. Customers are advised to directly communicate with the seller via the chat function on the product page to ascertain the precise terms and conditions applicable to the seller warranty. These terms may vary from seller to seller.
Clam warranty
To initiate a warranty claim, please contact the brand, manufacturer, or authorized service center as indicated on the warranty card accompanying your product. 
Claims must be made in accordance with the procedures outlined by the brand or manufacturer. For products covered under a seller warranty, you may directly communicate with the seller via the chat function available on the product page. 
Note: Warranties do not extend to damages resulting from accidents or unauthorized modifications, and claims outside the scope of the warranty terms may be denied.
CartUp is not responsible for any after-sales services.
`,
      },
      {
        id: 4,
        question: "Where should I go for my warranty claim?",
        answer: `Return Process: If it has been less than 7 days since the product was received; you can get a refund directly from CartUp without contacting the manufacturer. 
Repair/ Replacement: If it has been more than 7 days since the product was delivered; you can claim the warranty as per the manufacturer's policy.
Brand Warranty: Visit the Brand Website page for more information.
Seller Warranty: Contact the seller directly by the chat option on the product display page.
`,
      },
    ],
  },
];

export const genderOptions = [
  {
    id: 1,
    value: "male",
    label: "Male",
  },
  {
    id: 2,
    value: "female",
    label: "Female",
  },
  {
    id: 3,
    value: "other",
    label: "Other",
  },
];
