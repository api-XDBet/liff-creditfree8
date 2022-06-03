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
      altText: 'test',
      contents: {
        type: 'carousel',
        contents: [
          {
            type: 'bubble',
            hero: {
              type: 'image',
              size: '100%',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497011863572/unknown.png',
              backgroundColor: '#252525',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่อโปร blablabla __1',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  color: '#FFFFFF',
                  align: 'start',
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      wrap: true,
                      weight: 'regular',
                      size: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#ff5551',
                  align: 'start',
                  gravity: 'center',
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'button',
                  style: 'primary',
                  action: {
                    type: 'message',
                    label: 'ข้อความหรือลิงค์อะไรก็ได้',
                    text: 'ข้อความหรือลิงค์อะไรก็ได้',
                  },
                  color: '#000FFF',
                  height: 'sm',
                },
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'เหมือนกัน',
                    text: 'hello',
                  },
                  color: '#FF0000',
                  style: 'primary',
                  margin: 'sm',
                  height: 'sm',
                },
              ],
              cornerRadius: 'xs',
            },
            styles: {
              header: {
                backgroundColor: '#252525',
              },
              body: {
                backgroundColor: '#252525',
              },
              footer: {
                backgroundColor: '#252525',
              },
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              size: '100%',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497347383346/unknown.png',
              backgroundColor: '#252525',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่อโปร blablabla __2',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  color: '#FFFFFF',
                  align: 'start',
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      wrap: true,
                      weight: 'regular',
                      size: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#ff5551',
                  align: 'start',
                  gravity: 'center',
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'button',
                  style: 'primary',
                  action: {
                    type: 'message',
                    label: 'ข้อความหรือลิงค์อะไรก็ได้',
                    text: 'ข้อความหรือลิงค์อะไรก็ได้',
                  },
                  color: '#000FFF',
                  height: 'sm',
                },
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'เหมือนกัน',
                    text: 'hello',
                  },
                  color: '#FF0000',
                  style: 'primary',
                  margin: 'sm',
                  height: 'sm',
                },
              ],
              cornerRadius: 'xs',
            },
            styles: {
              header: {
                backgroundColor: '#252525',
              },
              body: {
                backgroundColor: '#252525',
              },
              footer: {
                backgroundColor: '#252525',
              },
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              size: '100%',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/957048427831763004/abe875bd8036c88b4a45c709d9a181f7.png',
              backgroundColor: '#252525',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่อโปร blablabla __3',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  color: '#FFFFFF',
                  align: 'start',
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      wrap: true,
                      weight: 'regular',
                      size: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#ff5551',
                  align: 'start',
                  gravity: 'center',
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'button',
                  style: 'primary',
                  action: {
                    type: 'message',
                    label: 'ข้อความหรือลิงค์อะไรก็ได้',
                    text: 'ข้อความหรือลิงค์อะไรก็ได้',
                  },
                  color: '#000FFF',
                  height: 'sm',
                },
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'เหมือนกัน',
                    text: 'hello',
                  },
                  color: '#FF0000',
                  style: 'primary',
                  margin: 'sm',
                  height: 'sm',
                },
              ],
              cornerRadius: 'xs',
            },
            styles: {
              header: {
                backgroundColor: '#252525',
              },
              body: {
                backgroundColor: '#252525',
              },
              footer: {
                backgroundColor: '#252525',
              },
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              size: '100%',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497011863572/unknown.png',
              backgroundColor: '#252525',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่อโปร blablabla __1',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  color: '#FFFFFF',
                  align: 'start',
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      wrap: true,
                      weight: 'regular',
                      size: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#ff5551',
                  align: 'start',
                  gravity: 'center',
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'button',
                  style: 'primary',
                  action: {
                    type: 'message',
                    label: 'ข้อความหรือลิงค์อะไรก็ได้',
                    text: 'ข้อความหรือลิงค์อะไรก็ได้',
                  },
                  color: '#000FFF',
                  height: 'sm',
                },
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'เหมือนกัน',
                    text: 'hello',
                  },
                  color: '#FF0000',
                  style: 'primary',
                  margin: 'sm',
                  height: 'sm',
                },
              ],
              cornerRadius: 'xs',
            },
            styles: {
              header: {
                backgroundColor: '#252525',
              },
              body: {
                backgroundColor: '#252525',
              },
              footer: {
                backgroundColor: '#252525',
              },
            },
          },
          {
            type: 'bubble',
            hero: {
              type: 'image',
              size: '100%',
              aspectRatio: '1:1',
              aspectMode: 'cover',
              url: 'https://cdn.discordapp.com/attachments/937407559416029189/960963497347383346/unknown.png',
              backgroundColor: '#252525',
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'ชื่อโปร blablabla __2',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  color: '#FFFFFF',
                  align: 'start',
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: 'รายละเอียดหรือข้อความที่ต้องการ',
                      wrap: true,
                      weight: 'regular',
                      size: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Temporarily out of stock',
                  size: 'xxs',
                  color: '#ff5551',
                  align: 'start',
                  gravity: 'center',
                },
              ],
            },
            footer: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'button',
                  style: 'primary',
                  action: {
                    type: 'message',
                    label: 'ข้อความหรือลิงค์อะไรก็ได้',
                    text: 'ข้อความหรือลิงค์อะไรก็ได้',
                  },
                  color: '#000FFF',
                  height: 'sm',
                },
                {
                  type: 'button',
                  action: {
                    type: 'message',
                    label: 'เหมือนกัน',
                    text: 'hello',
                  },
                  color: '#FF0000',
                  style: 'primary',
                  margin: 'sm',
                  height: 'sm',
                },
              ],
              cornerRadius: 'xs',
            },
            styles: {
              header: {
                backgroundColor: '#252525',
              },
              body: {
                backgroundColor: '#252525',
              },
              footer: {
                backgroundColor: '#252525',
              },
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
