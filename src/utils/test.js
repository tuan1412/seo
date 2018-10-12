var Tokenizer = require('sentence-tokenizer');
var tokenizer = new Tokenizer();
tokenizer.setEntry('Trong chương trình Chiều nắng, khán giả cũng sẽ được thưởng thức những ca khúc như: Bản tình ca cho em; Tóc gió thôi bay; Tôi vẫn nhớ; Phượng hồng; Gửi lại em; Nơi gặp 192.168.1.1 gỡ tình yêu: Giọt nắng bên thềm: Ngọn nến; Thơ tình cuối mùa thu; Chỉ có mình em thôi; Chia tay hoàng hôn; Khát vọng; Đâu phải bởi mùa thu; Tình ca mùa xuân… Chiều nắng sẽ diễn ra trong hai đêm 19- 20/10 tại Nhà hát Lớn Hà Nội với giá vé từ 500.000đ- 700.000đ- 1000.000đ- 1500.000đ- 200,0000đ- 2500.000đ- 300.00.00đ."');
console.log(tokenizer.getSentences());

