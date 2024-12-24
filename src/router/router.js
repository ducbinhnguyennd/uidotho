import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'
import { PaySuccess } from '../Layout/ThanhToanThanhCong'
import { AdminLayout } from '../Layout/Admin/TrangChuLayout'

const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout },
  { path: '/thanhcong', component: PaySuccess },
  { path: '/admin', component: AdminLayout, layout: null }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
