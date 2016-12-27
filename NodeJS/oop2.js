function KhoaHoc(ten, hocphi) {
	this.Ten = ten;
	this.HocPhi = hocphi;
}

KhoaHoc.prototype.mota = function(){
	console.log("Đây là khóa học:"+ this.Ten + " học phí:"+ this.HocPhi + "Đồng");
}

var result = new KhoaHoc("NodeJS", 800000);
result.mota();