import {CumRap} from '../../../Shared/cumrap.model';
import {Rapchieu} from '../../../Shared/rapchieu.model';
import {LichChieu} from '../../../Shared/lichchieu.model';
import {EventEmitter} from '@angular/core';

export class RapchieuService {
  cumRapSelected = new EventEmitter<CumRap>();
  rapchieuSelected = new EventEmitter<Rapchieu>();

  // Danh sach cum rap
  cumraps: CumRap[] = [
    new CumRap(0, 'https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png'),
    new CumRap(1, 'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png'),
    new CumRap(2, 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'),
    new CumRap(3, 'https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png'),
    new CumRap(4, 'https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png'),
    new CumRap(5, 'https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png'),
    new CumRap(6, 'https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png'),
    new CumRap(7, 'https://s3img.vcdn.vn/123phim/2018/09/05db7612f4a6f0ee3db35b63528f3473.png'),


  ];

  // Danh sach rap chieu
  rapchieus: Rapchieu[] = [
    new Rapchieu(0, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(1, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(2, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(3, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(3, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 4),

    new Rapchieu(4, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 4),

    new Rapchieu(5, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 5),

    // ================
    new Rapchieu(6, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(7, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(8, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

    new Rapchieu(9, 'GLX - Nguyễn Du', 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', 'L5-Megamall, 159 XL Hà Nội', 'info@bhdstar.vn', '6 2D', '9:00 - 23:00', 'Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem phim một cách thoải mái và thuận tiện. Chất lượng hình ảnh rõ nét, màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.', 0),

  ];

  // Lich Chieu
  lichchieus: LichChieu[] = [
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 0),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 0),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 0),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(0, 0, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(1, 2, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 0),
    new LichChieu(1, 2, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(2, 3, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(3, 3, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 1),
    new LichChieu(4, 1, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 0),
    new LichChieu(5, 3, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(4, 6, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(3, 6, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(5, 7, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(1, 7, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(6, 1, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
    new LichChieu(1, 3, ['11:30', '12:45', '13:30', '14:00', '15:45', '17:00'], 2),
  ];
  constructor() {}

  getCumCap() {
    return this.cumraps.slice();
  }
  getRapChieu() {
    return this.rapchieus.slice();
  }
  getLichChieu() {
    return this.lichchieus.slice();
  }
}
