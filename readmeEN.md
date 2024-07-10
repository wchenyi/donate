# Introduction
| Completely constructed using html
Referenced the interface UI of [idealclover]((https://donate.idealclover.cn/#showqrcode)

---
# display effect
| Sample page: [Come and give me money💴, expressly ask for rewards](https://donate.wangcy.site/)

### Desktop device display effect
![](public/images/pc.png)
### Mobile device display
![](public/images/phone.png)

---
Instructions
1. Content modification
Modify the following fields in the index.html file:
```html
<a class="button paypal" href="https://www.paypal.com/paypalme/wangcy350?locale.x=zh_XC" target="_blank">PayPal</a>
<!--Modify the first PayPal link-->
            alipay: {
                title: "支付宝扫一扫",
                qrCode: "public/QRcode/Alipay.jpg",
                openUrl: "alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/FKX15240TMKBTPVUNBW32E0"
            },
            wechat: {
                title: "微信扫一扫",
                qrCode: "public/QRcode/WeChat.jpg",
                openUrl: "wxp://f2f0gO6SgxgNkrt3bJ9o7nAai4WEIEqbF2EpABKYuhv4e9brXNMF_izplpfeeHH-8CAK"
            },
            qq: {
                title: "QQ扫一扫",
                qrCode: "public/QRcode/QQ.jpg",
                openUrl: "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=810779522&ac=CAEQgofOggMYrv-5tAY4AEIgMWExOWRlYmIyYjMxMjY0MTA0MTQ3ODhkZDlhNDk2ZDA%3D_xxx_sign&n=%E5%B1%B9%C2%A0 %C2%A0 %C2%A0&f=wallet"
            }
        };
<!--Modify the remaining three icons and payment jump-->
```
The jump link of ```openurl``` is obtained by decoding the payment code. You can use, for example, the [fodder QR code decoder](https://cli.im/tools) to query

2. Icon modification
The personal logo is modified in the path ```public/images```. The payment QR code field qrCode is modified in the path ```public/QRcode```.
