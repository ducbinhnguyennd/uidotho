import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'
import { PaySuccess } from '../Layout/ThanhToanThanhCong'
import { TheLoaiLayout } from '../Layout/TheLoaiLayout';
const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout },
  { path: '/thanhcong', component: PaySuccess },
  { path: '/san-pham/:slug', component: TheLoaiLayout }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
