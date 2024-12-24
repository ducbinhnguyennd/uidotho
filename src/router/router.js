import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'
import { PaySuccess } from '../Layout/ThanhToanThanhCong'
import { TheLoaiLayout } from '../Layout/TheLoaiLayout'
import { ChiTietLayout } from '../Layout/ChiTietLayout'
import LienHe from '../Layout/DeafaultLayout/LienHe/LienHe'
import ChinhSachVanChuyen from '../Layout/DeafaultLayout/HuongDan/ChinhSachVanChuyen/ChinhSachVanChuyen'
import HuongDanThanhToan from '../Layout/DeafaultLayout/HuongDan/HuongDanThanhToan/HuongDanThanhToan'
import HuongDanMuaHang from '../Layout/DeafaultLayout/HuongDan/HuongDanMuaHang/HuongDanMuaHang'
import DoiTra from '../Layout/DeafaultLayout/HuongDan/DoiTra/DoiTra'
import CamKet from '../Layout/DeafaultLayout/HuongDan/CamKet/CamKet'
import BaoMat from '../Layout/DeafaultLayout/HuongDan/BaoMat/BaoMat'
import GioiThieu from '../Layout/DeafaultLayout/GioiThieu/GioiThieu'

const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout },
  { path: '/thanhcong', component: PaySuccess },
  { path: '/san-pham/:slug', component: TheLoaiLayout },
  { path: '/chitietsanpham/:tieude', component: ChiTietLayout },
  { path: '/lien-he', component: LienHe },
  { path: '/chinh-sach-van-chuyen', component: ChinhSachVanChuyen },
  { path: '/huong-dan-thanh-toan', component: HuongDanThanhToan },
  { path: '/huong-dan-mua-hang', component: HuongDanMuaHang },
  { path: '/doi-tra', component: DoiTra },
  { path: '/cam-ket', component: CamKet },
  { path: '/bao-mat', component: BaoMat },
  { path: '/gioi-thieu', component: GioiThieu },

]
const privateRoutes = []
export { publicRoutes, privateRoutes }
