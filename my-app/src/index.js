import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// let a=[
//   {
//     "id":1,
//     "tieuDe":"Dế mèn phiêu liêu ký 1",
//     "tacGia":"VMH",
//     "theLoai":"Văn học",
//     "noiDung":"Tôi sống độc lập từ thủa bé. Ấy là tục lệ lâu đời trong họ nhà dế chúng tôi. Vả lại, mẹ thường bảo chúng tôi rằng: Phải như thế để các con biết kiếm ăn một mình cho quen đi. Con cái mà cứ nhong nhong ăn bám vào bố mẹ thì chỉ sinh ra tính ỷ lại, xấu lắm, rồi ra đời không làm nên trò trống gì đâu. Bởi thế, lứa sinh nào cũng vậy, đẻ xong là bố mẹ thu xếp cho con cái ra ở riêng. Lứa sinh ấy, chúng tôi có cả thảy ba anh em. Ba anh em chúng tôi chỉ ở với mẹ ba hôm. Tới hôm thứ ba, mẹ đi trước, ba đứa tôi tấp tểnh, khấp khởi, nửa lo nửa vui theo sau. Mẹ dẫn chúng tôi đi và mẹ đem đặt mỗi đứa vào một cái hang đất ở bờ ruộng phía bên kia, chỗ trông ra đầm nước mà không biết mẹ đã chịu khó đào bới, be đắp tinh tươm thành hang, thành nhà cho chúng tôi từ bao giờ. Tôi là em út, bé nhất nên được mẹ tôi sau khi dắt vào hang, lại bỏ theo một ít ngọn cỏ non trước cửa, để tôi nếu có bỡ ngỡ, thì đã có ít thức ăn sẵn trong vài ngày.",
//     "anh":"https://static.8cache.com/cover/o/eJzLyTDW1_VIzDROLfM3Noh31A8LM8zQLQlx8Uj11HeEgrw8V_0o5-Ck1IDyQEf3bP1yI0NT3QxjIyMARh4SLA==/de-men-phieu-luu-ky.jpg"
//   },
//   {
//     "id":2,
//     "TieuDe":"Dế mèn phiêu liêu ký 2",
//     "tacGia":"VMH",
//     "theLoai":"Văn học",
//     "noiDung":"Tôi sống độc lập từ thủa bé. Ấy là tục lệ lâu đời trong họ nhà dế chúng tôi. Vả lại, mẹ thường bảo chúng tôi rằng: Phải như thế để các con biết kiếm ăn một mình cho quen đi. Con cái mà cứ nhong nhong ăn bám vào bố mẹ thì chỉ sinh ra tính ỷ lại, xấu lắm, rồi ra đời không làm nên trò trống gì đâu. Bởi thế, lứa sinh nào cũng vậy, đẻ xong là bố mẹ thu xếp cho con cái ra ở riêng. Lứa sinh ấy, chúng tôi có cả thảy ba anh em. Ba anh em chúng tôi chỉ ở với mẹ ba hôm. Tới hôm thứ ba, mẹ đi trước, ba đứa tôi tấp tểnh, khấp khởi, nửa lo nửa vui theo sau. Mẹ dẫn chúng tôi đi và mẹ đem đặt mỗi đứa vào một cái hang đất ở bờ ruộng phía bên kia, chỗ trông ra đầm nước mà không biết mẹ đã chịu khó đào bới, be đắp tinh tươm thành hang, thành nhà cho chúng tôi từ bao giờ. Tôi là em út, bé nhất nên được mẹ tôi sau khi dắt vào hang, lại bỏ theo một ít ngọn cỏ non trước cửa, để tôi nếu có bỡ ngỡ, thì đã có ít thức ăn sẵn trong vài ngày.",
//     "anh":"https://static.8cache.com/cover/o/eJzLyTDW1_VIzDROLfM3Noh31A8LM8zQLQlx8Uj11HeEgrw8V_0o5-Ck1IDyQEf3bP1yI0NT3QxjIyMARh4SLA==/de-men-phieu-luu-ky.jpg"
//   },
//   {
//     "id":3,
//     "tieuDe":"Dế mèn phiêu liêu ký 3 ",
//     "tacGia":"VMH",
//     "theLoai":"Văn học",
//     "noiDung":"Tôi sống độc lập từ thủa bé. Ấy là tục lệ lâu đời trong họ nhà dế chúng tôi. Vả lại, mẹ thường bảo chúng tôi rằng: Phải như thế để các con biết kiếm ăn một mình cho quen đi. Con cái mà cứ nhong nhong ăn bám vào bố mẹ thì chỉ sinh ra tính ỷ lại, xấu lắm, rồi ra đời không làm nên trò trống gì đâu. Bởi thế, lứa sinh nào cũng vậy, đẻ xong là bố mẹ thu xếp cho con cái ra ở riêng. Lứa sinh ấy, chúng tôi có cả thảy ba anh em. Ba anh em chúng tôi chỉ ở với mẹ ba hôm. Tới hôm thứ ba, mẹ đi trước, ba đứa tôi tấp tểnh, khấp khởi, nửa lo nửa vui theo sau. Mẹ dẫn chúng tôi đi và mẹ đem đặt mỗi đứa vào một cái hang đất ở bờ ruộng phía bên kia, chỗ trông ra đầm nước mà không biết mẹ đã chịu khó đào bới, be đắp tinh tươm thành hang, thành nhà cho chúng tôi từ bao giờ. Tôi là em út, bé nhất nên được mẹ tôi sau khi dắt vào hang, lại bỏ theo một ít ngọn cỏ non trước cửa, để tôi nếu có bỡ ngỡ, thì đã có ít thức ăn sẵn trong vài ngày.",
//     "anh":"https://static.8cache.com/cover/o/eJzLyTDW1_VIzDROLfM3Noh31A8LM8zQLQlx8Uj11HeEgrw8V_0o5-Ck1IDyQEf3bP1yI0NT3QxjIyMARh4SLA==/de-men-phieu-luu-ky.jpg"
//   }
// ]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
