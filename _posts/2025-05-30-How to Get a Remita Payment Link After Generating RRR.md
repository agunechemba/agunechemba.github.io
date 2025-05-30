# 🧾 How to Get a Remita Payment Link After Generating RRR

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/remita.jpg" width="100%">

If you've ever had to pay for government services, school fees, or corporate bills in Nigeria, you've likely come across **Remita** and something called **RRR**—that’s the *Remita Retrieval Reference*. But once you've generated your RRR, what’s next?

Here’s how to create a payment link that you or your customers can use to complete the payment easily.

---

### ✅ Step-by-Step: From RRR to Payment Link

1. **Generate your RRR**
   This can be done on the [Remita website](https://remita.net), or via any integration using the Remita API.

2. **Create your payment link**
   Use this format:

<mark>https://login.remita.net/remita/onepage/payment/init.reg?rrr={rrr}&channel=CARD,USSD,ENAIRA,TRANSFER</mark>

   Replace `{rrr}` with the actual 12-digit RRR you generated (no dashes).

3. **Example**
   Let’s say your RRR is: `250008291303`

   Your payment link will look like this:


<mark>https://login.remita.net/remita/onepage/payment/init.reg?rrr=250008291303&channel=CARD,USSD,ENAIRA,TRANSFER</mark>

5. **Share the link**
   Send it to your customer, student, or client. They’ll be able to choose their preferred payment channel—**Card, USSD, eNaira, or Bank Transfer**.

---

### 🎯 Why This Matters

* It simplifies payment collection
* You offer multiple payment options in one click
* It works for **individual** and **bulk** payments

---

Need to automate this process for many users? You can integrate it into your app or website using Remita’s API.

---

**Ken’s Tip:** Save and share this page. It’ll save you lots of stress when helping others pay via Remita.


### Hashtags

#Remita #RRR #RemitaPayment #PayWithRemita #NigerianGovernment  
#CACNigeria #FIRS #CBNNigeria #NYSC #JAMB #WAEC #NOUN  
#TETFUND #NigeriaFintech #OnlinePaymentsNG #NECO #NIMC  
#UNILAG #ZenithBank #MakePaymentsEasy #FederalGovernmentNigeria  
#UBEC #NPower #FRSC #NERC #NCCNigeria #NPA #NIS  
#NCDCgov #NAMA #UIbadan #OAU #FUTA #LASU  
#GTBank #AccessBank #UBAgroup #FirstBank #UnionBankNG #StanbicIBTC

