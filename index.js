// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

//Get the button
// Profile elements
// Button elements
const btnShare = document.getElementById('btnShare');

async function main() {
  // 2. liff.ready
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    btnShare.style.display = 'block';
  });
  // 3. Try a LIFF function
  // 4. Check where LIFF was opened
  // 5. Call getUserProfile()
  // 10. Show share button

  // 1. Initialize LIFF app)
  await liff.init({ liffId: '1657099121-l4ajxPMV' });
}
main();

// 6. Create getUserProfile()
// *7. Get email
async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
  email.innerHTML = '<b>email: </b>' + liff.getDecodedIDToken().email;
}

// *8. Create shareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      "type": "flex",
      "altText": "แชร์กิจกรรม",
      "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://cdn.discordapp.com/attachments/937407559416029189/987951052009660436/promotion_9.png",
              "size": "full",
              "aspectRatio": "6:3.5",
              "aspectMode": "cover",
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "text",
                  "text": "ฝากแรกของวัน",
                  " weight ": "bold",
                  "size": "xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "รับเพิ่ม 20% !!!",
                  " weight ": "bold",
                  "size": "3xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "*โบนัสสูงสุด 2,000 บาท",
                  " weight ": "bold",
                  "size": "sm",
                  " color ": "#FF4242FF",
                  "contents": [],
                },
              ],
            },
            " footer ": {
              "type": "box",
              "layout": "horizontal",
              " spacing ": "xl",
              " margin ": "none",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ",
                    " label ": "สมัครสมาชิก",
                    " uri ": "https://m2.xd8bet.com/dashboard/login?id",
                  },
                  " color ": "#00A921FF",
                  " margin ": "none",
                  "height": "sm",
                  "style": "primary",
                },
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ": ",
                    " label ": "ติดต่อแอดมิน",
                    " uri ": ": "https://liff.line.me/1656413202-XmQOge58",
                  },
                  " color ": "#002BDAFF",
                  " margin ": "none",
                  "height": "sm",
                  "style": "primary",
                },
              ],
            },
            "styles": {
              " footer ": {
                separator": "false,
                "separator color ": "#050010FF",
              },
            },
          },
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://cdn.discordapp.com/attachments/937407559416029189/987951052315820052/promotion_12.png",
              "size": "full",
              "aspectRatio": "6:3.5",
              "aspectMode": "cover",
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "text",
                  " text ": "แนะนำเพื่อน",
                  " weight ": "bold",
                  "size": "xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "รับเพิ่ม 5% !!!",
                  " weight ": "bold",
                  "size": "3xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "ชวนเพื่อนได้ ไม่จำกัด🎉",
                  " weight ": "bold",
                  "size": "sm",
                  " color ": "#FF4242FF",
                  "contents": [],
                },
              ],
            },
            " footer ": {
              "type": "box",
              "layout": "horizontal",
              " spacing ": "xl",
              " margin ": "none",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ": ",
                    " label ": "สมัครสมาชิก",
                    " uri ": ": "https://m2.xd8bet.com/dashboard/login?id",
                  },
                  " color ": "#00A921FF",
                  " margin ": "none",
                  "height": "sm",
                  style": "primary",
                },
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ": ",
                    " label ": "ติดต่อแอดมิน",
                    " uri ": "https://liff.line.me/1656413202-XmQOge58",
                  },
                  " color ": "#002BDAFF",
                  " margin ": "none",
                  "height": "sm",
                  " style": "primary",
                },
              ],
            },
            "styles": {
              " footer ": {
                " separator": "false",
                "separator color ": "#050010FF",
              },
            },
          },
          {
            "type": "bubble",
            "direction": "ltr",
            "hero": {
              "type": "image",
              "url": "https://cdn.discordapp.com/attachments/937407559416029189/987951052705923162/promotion_13.png",
              "size": "full",
              "aspectRatio": "6:3.5",
              "aspectMode": "cover",
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "text",
                  " text ": "สมาชิกใหม่ ฝากครั้งแรก",
                  " weight ": "bold",
                  "size": "xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "รับเพิ่ม 50% !!!",
                  " weight ": "bold",
                  "size": "3xl",
                  " color ": "#FFFFFFFF",
                  "align ": "center",
                  "contents": [],
                },
                {
                  "type": "text",
                  " text ": "*โบนัสสูงสุด 9,999 บาท",
                  " weight ": "bold",
                  "size": "sm",
                  " color ": "#FF4242FF",
                  "contents": [],
                },
              ],
            },
            " footer ": {
              "type": "box",
              "layout": "horizontal",
              " spacing ": "xl",
              " margin ": "none",
              "backgroundColor": "#050010FF",
              "borderColor": "#050010FF",
              "contents": [
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ": ",
                    " label ": "สมัครสมาชิก",
                    " uri ": ": "https://m2.xd8bet.com/dashboard/login?id",
                  },
                  " color ": "#00A921FF",
                  " margin ": "none",
                  "height": "sm",
                  " style": "primary",
                },
                {
                  "type": "button",
                  " action ": {
                    "type": " uri ": ",
                    " label ": "ติดต่อแอดมิน",
                    " uri ": ": "https://liff.line.me/1656413202-XmQOge58",
                  },
                  " color ": "#002BDAFF",
                  " margin ": "none",
                  "height": "sm",
                  " style": "primary",
                },
              ],
            },
            "styles": {
              " footer ": {
                "separator": "false,
                "separator color ": "#050010FF",
              },
            },
          },
        ],
      },
    },
  ]);
  if (result) {
    alert("Msg was shared!");
  } else {
    alert("ShareTargetPicker was cancelled by user");
  }
  liff.closeWindow();
}

var mybutton = document.getElementById('myTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = 'block';
//   } else {
//     mybutton.style.display = 'none';
//   }
// }

// myTopBtn.onclick = function () {
//   topFunction();
// };
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// 9. Add event listener to share button
btnShare.onclick = () => {
  shareMsg();
};

/* Place your JavaScript in this file */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 5000); // [ กำหนดเวลาเปลี่ยนรูปสไลด์ *หน่วยเป็น ms. เช่น 1000ms. = 1 sec.* ]
}
