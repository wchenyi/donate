const modalData = {
    alipay: {
        title: "😘支付宝扫一扫投喂😆", //支付方式名称
        qrCode: "public/QRcode/Alipay.jpg", //收款码二维码图片
        openUrl: "alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/FKX15240TMKBTPVUNBW32E0", //收款码解码跳转
        openText: "打开支付宝支付" //弹出页面显示
    },
    wechat: {
        title: "😘微信扫一扫投喂😆", //支付方式名称
        qrCode: "public/QRcode/WeChat.jpg", //收款码二维码图片
        openUrl: "wxp://f2f0gO6SgxgNkrt3bJ9o7nAai4WEIEqbF2EpABKYuhv4e9brXNMF_izplpfeeHH-8CAK", //收款码解码跳转，微信暂不可用
        openText: "打开微信支付" //弹出页面显示
    },
    qq: {
        title: "😘QQ扫一扫投喂😆", //支付方式名称
        qrCode: "public/QRcode/QQ.jpg", //收款码二维码图片
        openUrl: "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=810779522&ac=CAEQgofOggMYrv-5tAY4AEIgMWExOWRlYmIyYjMxMjY0MTA0MTQ3ODhkZDlhNDk2ZDA%3D_xxx_sign&n=%E5%B1%B9%C2%A0 %C2%A0 %C2%A0&f=wallet", //收款码解码跳转
        openText: "打开QQ支付" //弹出页面显示
    }
};

function openModal(type) {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("modalTitle");
    const qrCode = document.getElementById("qrCode");
    const openApp = document.getElementById("openApp");

    title.textContent = modalData[type].title;
    qrCode.src = modalData[type].qrCode;
    openApp.href = modalData[type].openUrl;
    openApp.textContent = modalData[type].openText;
    openApp.className = `open-app ${type}`;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}