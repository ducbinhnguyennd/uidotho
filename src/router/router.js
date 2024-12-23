import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'
import { PaySuccess } from '../Layout/ThanhToanThanhCong'
import { TheLoaiLayout } from '../Layout/TheLoaiLayout'
import { ChiTietLayout } from '../Layout/ChiTietLayout'
const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout },
  { path: '/thanhcong', component: PaySuccess },
  { path: '/san-pham/:slug', component: TheLoaiLayout },
  { path: '/chitietsanpham/:tieude', component: ChiTietLayout }


]
const privateRoutes = []
export { publicRoutes, privateRoutes }
