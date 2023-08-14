import nhanVienModel from "../models/nhanvien";
const objectId = require('mongoose').Types.ObjectId; // Để kiểm tra valid ObjectId

const initNhanVien = (app) => {
    app.get("/nhanvien", async (req, res) => {
        try {
            const nhanvien = await nhanVienModel.find({});
            res.json(nhanvien)
        } catch (error) {
            console.log(error);
            res.sendStatus(501)
        }
    })

    app.post("/nhanvien", async (req, res) => {
        try {
            const { hoten, ngaysinh, phongban, chucvu, phone, email } = req.body
            const nhanvien = new nhanVienModel({ hoten, ngaysinh, phongban, chucvu, phone, email })
            const saveData = await nhanvien.save();
            res.json(saveData)
        } catch (error) {
            console.log(error);
            res.sendStatus(501)
        }
    })
    app.put("/nhanvien/:id", async (req, res) => {
        const nvId = req.params.id;
        if (!objectId.isValid(nvId)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }
        try {
            const { hoten, ngaysinh, phongban, chucvu, phone, email } = req.body;
            const updatedNhanVien = await nhanVienModel.findByIdAndUpdate(
                nvId,
                { hoten, ngaysinh, phongban, chucvu, phone, email },
            );

            if (!updatedNhanVien) {
                return res.status(404).json({ message: "Không tìm thấy bản ghi để cập nhật" });
            }

            res.json({message: "Cập nhật thành công"});
        } catch (error) {
            console.log(error);
            res.sendStatus(501)
        }
    })
    app.delete("/nhanvien/:id", async (req, res) => {
        const nvId = req.params.id;

        if (!objectId.isValid(nvId)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }

        try {
            const deletedNhanVien = await nhanVienModel.findByIdAndDelete(nvId);
            if (!deletedNhanVien) {
                return res.status(404).json({ message: "Không tìm thấy bản ghi để xóa" });
            }
            res.status(200).json({ message: "Xóa thành công bản ghi có ID: " + nvId });

        } catch (error) {
            console.log(error);
            res.sendStatus(501)
        }
    })
}

export default initNhanVien;