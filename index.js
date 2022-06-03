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
      type: 'template',
      altText: 'template',
      template: {
        type: 'carousel',
        contents: [
          {
            type: 'bubble',
            size: 'mega',
            direction: 'ltr',
            hero: {
              type: 'image',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497011863572/unknown.png',
              size: 'full',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              backgroundColor: '#252525FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              backgroundColor: '#252525FF',
              contents: [
                {
                  type: 'text',
                  text: 'Promotion 1',
                  weight: 'bold',
                  size: 'lg',
                  color: '#FFFFFFFF',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      weight: 'regular',
                      size: 'sm',
                      color: '#FFFFFFFF',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'เงื่อนไข ***',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
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
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'ข้อความ',
                    text: 'ข้อความ',
                  },
                  color: '#237307FF',
                  height: 'sm',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'URL',
                    uri: 'https://linecorp.com',
                  },
                  color: '#0425FCFF',
                  height: 'sm',
                  style: 'primary',
                },
              ],
            },
          },
          {
            type: 'bubble',
            size: 'mega',
            hero: {
              type: 'image',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497347383346/unknown.png',
              size: 'full',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              backgroundColor: '#252525FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'text',
                  text: 'Promotion 2',
                  weight: 'bold',
                  size: 'lg',
                  color: '#FFFFFFFF',
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
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      weight: 'regular',
                      size: 'sm',
                      color: '#FFFFFFFF',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'เงื่อนไข ***',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
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
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'ข้อความ',
                    text: 'ข้อความ',
                  },
                  color: '#237307FF',
                  height: 'sm',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'URL',
                    uri: 'https://linecorp.com',
                  },
                  color: '#0425FCFF',
                  height: 'sm',
                  style: 'primary',
                },
              ],
            },
          },
          {
            type: 'bubble',
            size: 'mega',
            hero: {
              type: 'image',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/957048427831763004/abe875bd8036c88b4a45c709d9a181f7.png',
              size: 'full',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              backgroundColor: '#252525FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'text',
                  text: 'Promotion 3',
                  weight: 'bold',
                  size: 'lg',
                  color: '#FFFFFFFF',
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
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      weight: 'regular',
                      size: 'sm',
                      color: '#FFFFFFFF',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'เงื่อนไข ***',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
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
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'ข้อความ',
                    text: 'ข้อความ',
                  },
                  color: '#237307FF',
                  height: 'sm',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'URL',
                    uri: 'https://linecorp.com',
                  },
                  color: '#0425FCFF',
                  height: 'sm',
                  style: 'primary',
                },
              ],
            },
          },
          {
            type: 'bubble',
            size: 'mega',
            direction: 'ltr',
            hero: {
              type: 'image',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497011863572/unknown.png',
              size: 'full',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              backgroundColor: '#252525FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              backgroundColor: '#252525FF',
              contents: [
                {
                  type: 'text',
                  text: 'Promotion 4',
                  weight: 'bold',
                  size: 'lg',
                  color: '#FFFFFFFF',
                  wrap: true,
                  contents: [],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      weight: 'regular',
                      size: 'sm',
                      color: '#FFFFFFFF',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'เงื่อนไข ***',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
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
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'ข้อความ',
                    text: 'ข้อความ',
                  },
                  color: '#237307FF',
                  height: 'sm',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'URL',
                    uri: 'https://linecorp.com',
                  },
                  color: '#0425FCFF',
                  height: 'sm',
                  style: 'primary',
                },
              ],
            },
          },
          {
            type: 'bubble',
            size: 'mega',
            hero: {
              type: 'image',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497347383346/unknown.png',
              size: 'full',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              backgroundColor: '#252525FF',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'text',
                  text: 'Promotion 5',
                  weight: 'bold',
                  size: 'lg',
                  color: '#FFFFFFFF',
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
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      weight: 'regular',
                      size: 'sm',
                      color: '#FFFFFFFF',
                      flex: 0,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'เงื่อนไข ***',
                  weight: 'bold',
                  size: 'sm',
                  color: '#FF0600FF',
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
              backgroundColor: '#252525',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'ข้อความ',
                    text: 'ข้อความ',
                  },
                  color: '#237307FF',
                  height: 'sm',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'URL',
                    uri: 'https://linecorp.com',
                  },
                  color: '#0425FCFF',
                  height: 'sm',
                  style: 'primary',
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

var mybutton = document.getElementById('myTopBtn');

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

myTopBtn.onclick = function () {
  topFunction();
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 9. Add event listener to share button
btnShare.onclick = () => {
  shareMsg();
};
