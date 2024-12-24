import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'
import { PaySuccess } from '../Layout/ThanhToanThanhCong'
import { TheLoaiLayout } from '../Layout/TheLoaiLayout'
import { ChiTietLayout } from '../Layout/ChiTietLayout'
import TimKiemLayout from '../Layout/TimKiemLayout/TiemKiemLayout'
import { AdminLayout } from '../Layout/Admin/TrangChuLayout'
const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout },
  { path: '/thanhcong', component: PaySuccess },
  { path: '/san-pham/:slug', component: TheLoaiLayout },
  { path: '/chitietsanpham/:tieude', component: ChiTietLayout },
  { path: '/search/:keyword', component: TimKiemLayout },
  { path: '/admin', component: AdminLayout, layout: null }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
