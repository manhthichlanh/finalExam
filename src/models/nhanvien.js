import db from "../configs/connectDb";
const nhanVien = new db.Schema(
    {
        hoten: { type: String, require },
        ngaysinh: { type: String, require },
        phongban: { type: String, require },
        chucvu: { type: String, require },
        phone: { type: String, require },
        email: { type: String, require },
    },
    { timestamps: true }
);
const nhanVienModel = db.model("nhanvien", nhanVien);
export default nhanVienModel;