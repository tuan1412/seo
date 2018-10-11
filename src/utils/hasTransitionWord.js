var transtionWord = [
    'cũng', 'bên cạnh', 'ngoài ra', 'thêm vào đó', 'hơn thế nữa', 'một lần nữa',
    'theo đó', 'kết quả là', 'vì vậy', 'vì thế', 'nói cách khác', 'vì thế nên', 'do vậy', 'nên', 'vì thế', 'suy ra',
    'sau cùng', 'nói chung', 'cân nhắc mọi yếu tố', 'nói tóm lại', 'nói chung', 'trong mọi trường hợp thì', 'tóm lại một điều', 'kết luận là', 'nói chung', 'nói vắn tắt', 'tóm tắt lại', 'phân tích cuối cùng thì', 'để kết luận', 'để tóm tắt', 'cuối cùng',
    'theo thói quen', 'như thường lệ', 'chủ yếu', 'bình thường thì', 'nói chung thì', 'thường thì', 'thường thường',
    'Thực chất sẽ là', 'Nói cách khác', 'Tương tự', 'Đó là', 'Nói điều đó để', 'Nói ngắn gọn thì', 'Diễn đạt theo cách khác thì',
    'Ngược lại', 'Mặt khác', 'Trái lại', 'Thay vì đó', 'Tương tự như vậy', 'Một mặt thì', 'mà mặt khác thì', 'Đúng hơn là', 'Giống như vậy', 'Nhưng', 'Tuy nhiên', 'Tuy vậy', 'Ngược lại thì',
    'Đầu tiên', 'Trước hết', 'Để bắt đầu', 'Đồng thời', 'Trong thời điểm này', 'Hiện nay', 'Bước tiếp theo', 'Đổi lại', 'Sau này', 'Trong lúc đó', 'Tiếp theo', 'Sau đó', 'Hiện tại', 'Sau thì', 'Trong khi', 'Trước đó', 'Đồng thời', 'Sau khi', 'Cuối cùng',
    'Mà này', 'Một cách tình cờ thì',
    'Ví dụ', 'Ví như', 'Như thế này',
    'Giống như vậy', 'Tương tự như vậy', 'Hơn thế nữa',
    'Ở đây', 'Ở đó', 'Phía đó', 'Xa hơn', 'Gần như', 'Trái lại', 'Dưới', 'Trên', 'Bên trái', 'Bên phải', 'Trong tầm mắt'
];

var hasTranstionWord = function(text) {
    var transtionWordRegex = new RegExp(transtionWord.join('|'), "i");
    return transtionWordRegex.test(text);
}

module.exports = hasTranstionWord;