// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

//Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
      altText: 'Newwww',
      contents: {
        type: 'carousel',
        contents: [
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
              size: 'full',
              aspectRatio: '20:13',
              aspectMode: 'cover',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Arm Chair, White',
                  weight: 'bold',
                  size: 'xl',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '$49',
                      weight: 'bold',
                      size: 'xl',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: 'text',
                      text: '.99',
                      weight: 'bold',
                      size: 'sm',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to Cart',
                    uri: 'https://linecorp.com',
                  },
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to wishlist',
                    uri: 'https://linecorp.com',
                  },
                },
              ],
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png',
              size: 'full',
              aspectRatio: '20:13',
              aspectMode: 'cover',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Metal Desk Lamp',
                  weight: 'bold',
                  size: 'xl',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  flex: 1,
                  contents: [
                    {
                      type: 'text',
                      text: '$11',
                      weight: 'bold',
                      size: 'xl',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: 'text',
                      text: '.99',
                      weight: 'bold',
                      size: 'sm',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#FF5551',
                  flex: 0,
                  margin: 'md',
                  wrap: true,
                  contents: [],
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to Cart',
                    uri: 'https://linecorp.com',
                  },
                  flex: 2,
                  color: '#AAAAAA',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Add to wish list',
                    uri: 'https://linecorp.com',
                  },
                },
              ],
            },
          },
          {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'See more',
                    uri: 'https://linecorp.com',
                  },
                  flex: 1,
                  gravity: 'center',
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
// 11. Add close window

// 9. Add event listener to share button
btnShare.onclick = () => {
  shareMsg();
};
