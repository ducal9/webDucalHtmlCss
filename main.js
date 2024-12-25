function Sang_trang_log_in() {
    location.assign("log_in.html");
}
function Sang_trang_thong_bao() {
    location.assign("thong_bao.html")
}
function Sang_trang_chu() {
    location.assign("Index.html")
}
function Sang_trang_dang_nhap() {
    location.assign("log_in.html")
}
function Sang_trang_thông_tin() {
    location.assign("ho_so.html")
}
function So_chay() {
    let truycap = 0
    const loop_truy_cap = setInterval(() => {
        truycap += 1
        document.getElementById('count_truy_cap').innerHTML = truycap + " +"
        if (truycap >= 600) clearInterval(loop_truy_cap)
    }, 1000 / 600)
    let hoanthanh = 0
    const loop_hoan_thanh = setInterval(() => {
        hoanthanh += 1
        document.getElementById('count_hoan_thanh').innerHTML = hoanthanh + " +"
        if (hoanthanh >= 400) clearInterval(loop_hoan_thanh)
    }, 1000 / 400)
    let donggop = 0
    const loop_dong_gop = setInterval(() => {
        donggop += 1
        document.getElementById('count_dong_gop').innerHTML = donggop
        if (donggop >= 100) clearInterval(loop_dong_gop)
    }, 1000 / 100)
}


function Sang_trang_sign_up() {
    location.assign("sign_up.html");
}
function Sang_trang_forgot_password() {
    location.assign("forgot_pw.html");
}
function Sang_trang_ngoai() {
    location.assign("Index.html");
}
function Sang_trang_đăng_nhập() {
    location.assign("log_in.html");
}
function Sang_trang_chu1() {
    location.assign("Index.html")
}
function Sang_trang_gioi_thieu() {
    location.assign("gioi_thieu.html")
}
function Sang_trang_thanh_tich() {
    location.assign("thanh_tich.html")
}

function bay() {
    // getBoundingClientRect().top: lấy vị trí của pt theo vị trí top( theo trục y) 
    let y = document.getElementById('ten_lua').getBoundingClientRect().top;// lấy vtri top của pt theo trục y
    const bay = setInterval(() => {
        y -= 1 // giảm gtri bien y đi 1 (mỗi lần lặp di chuyển 1 pixel xuống phía dưới.)
        if (y <= -100) {
            // Nếu vị trí top đã vượt qua -100px từ phía trên cùng của trình duyệt
        
            document.getElementById('Home').style.display = 'none';
            document.getElementById('PhanHoc').style.display = 'flex';
            clearInterval(bay); 
        }//Dòng này cập nhật giá trị của thuộc tính top của đối tượng có id là 'ten_lua' với giá trị mới của biến y
        document.getElementById('ten_lua').style.top = y + "px"
    }, 5) // Hàm được thực hiện sau mỗi 5ms
}

// hàm setInterval() trong JavaScript giúp lặp lại một khối code sau khoảng thời gian đã chỉ định







