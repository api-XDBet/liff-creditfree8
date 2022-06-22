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
  await liff.init({ liffId: '1657145167-5WvX41bP' });
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
      type: 'flex',
      altText: 'งง',
      contents: {
        type: 'carousel',
        contents: [
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/XD_pro1.png',
              margin: 'none',
              size: 'full',
              aspectRatio: '1:1.13',
              aspectMode: 'cover',
              backgroundColor: '#212121FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'เพียงแนะนำเพื่อน',
                  weight: 'bold',
                  size: 'xl',
                  color: '#E1E1E1FF',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  backgroundColor: '#212121FF',
                  borderColor: '#212121FF',
                  contents: [
                    {
                      type: 'text',
                      text: 'รับรายได้ 5%',
                      weight: 'bold',
                      size: 'xl',
                      color: '#E1E1E1FF',
                      flex: 0,
                      gravity: 'center',
                      wrap: true,
                      style: 'normal',
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: '*ชวนได้ไม่จำกัด',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
                  contents: [],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              position: 'default',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'สมัครสมาชิก',
                  weight: 'bold',
                  size: 'lg',
                  color: '#E1E1E1FF',
                  align: 'center',
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD8BET',
                        uri: 'https://m2.xd8bet.com/dashboard/login?id',
                      },
                      color: '#4C00E7FF',
                      height: 'sm',
                      style: 'primary',
                    },
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD7BET',
                        uri: 'https://m.xd7bet.com/dashboard/login?id',
                      },
                      color: '#B70000FF',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#636363FF',
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'md',
                  borderWidth: '1px',
                  borderColor: '#FFFFFFFF',
                  cornerRadius: '10px',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'ติดต่อแอดมิน',
                        uri: 'https://rchat.readyplanet.com/1000046519',
                      },
                      color: '#02A200FF',
                      margin: 'none',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/XD_pro2.png',
              margin: 'none',
              size: 'full',
              aspectRatio: '1:1.13',
              aspectMode: 'cover',
              backgroundColor: '#212121FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'สมาชิกใหม่ ฝากครั้งแรก',
                  weight: 'bold',
                  size: 'xl',
                  color: '#E1E1E1FF',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  backgroundColor: '#212121FF',
                  borderColor: '#212121FF',
                  contents: [
                    {
                      type: 'text',
                      text: 'โบนัสสูงสุด 9,999 บาท',
                      weight: 'bold',
                      size: 'xl',
                      color: '#E1E1E1FF',
                      flex: 0,
                      gravity: 'center',
                      wrap: true,
                      style: 'normal',
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: '*ด่วน!! จำนวนจำกัด',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
                  contents: [],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              position: 'default',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'สมัครสมาชิก',
                  weight: 'bold',
                  size: 'lg',
                  color: '#E1E1E1FF',
                  align: 'center',
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD8BET',
                        uri: 'https://m2.xd8bet.com/dashboard/login?id',
                      },
                      color: '#4C00E7FF',
                      height: 'sm',
                      style: 'primary',
                    },
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD7BET',
                        uri: 'https://m.xd7bet.com/dashboard/login?id',
                      },
                      color: '#B70000FF',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#636363FF',
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'md',
                  borderWidth: '1px',
                  borderColor: '#FFFFFFFF',
                  cornerRadius: '10px',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'ติดต่อแอดมิน',
                        uri: 'https://rchat.readyplanet.com/1000046519',
                      },
                      color: '#02A200FF',
                      margin: 'none',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/XD_pro3.png',
              margin: 'none',
              size: 'full',
              aspectRatio: '1:1.13',
              aspectMode: 'cover',
              backgroundColor: '#212121FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'ฝากแรกของวัน',
                  weight: 'bold',
                  size: 'xxl',
                  color: '#E1E1E1FF',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  backgroundColor: '#212121FF',
                  borderColor: '#212121FF',
                  contents: [
                    {
                      type: 'text',
                      text: 'รับเพิ่ม 20%',
                      weight: 'bold',
                      size: 'xl',
                      color: '#E1E1E1FF',
                      flex: 0,
                      gravity: 'center',
                      wrap: true,
                      style: 'normal',
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: '*โบนัสสูงสุด 2,000 บาท',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
                  align: 'start',
                  contents: [],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              position: 'default',
              backgroundColor: '#212121FF',
              borderColor: '#212121FF',
              contents: [
                {
                  type: 'text',
                  text: 'สมัครสมาชิก',
                  weight: 'bold',
                  size: 'lg',
                  color: '#E1E1E1FF',
                  align: 'center',
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD8BET',
                        uri: 'https://m2.xd8bet.com/dashboard/login?id',
                      },
                      color: '#4C00E7FF',
                      height: 'sm',
                      style: 'primary',
                    },
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'XD7BET',
                        uri: 'https://m.xd7bet.com/dashboard/login?id',
                      },
                      color: '#B70000FF',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#636363FF',
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'md',
                  borderWidth: '1px',
                  borderColor: '#FFFFFFFF',
                  cornerRadius: '10px',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'ติดต่อแอดมิน',
                        uri: 'https://rchat.readyplanet.com/1000046519',
                      },
                      color: '#02A200FF',
                      margin: 'none',
                      height: 'sm',
                      style: 'primary',
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ]);
  if (result) {
    alert('Msg was shared!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}

// var mybutton = document.getElementById('myTopBtn');

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
