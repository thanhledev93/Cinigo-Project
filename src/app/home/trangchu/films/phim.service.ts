import {Phim} from './phim.model';

export class PhimService {
  Phims: Phim[] = [
    new Phim(0, 'Aquaman: Đế Vương Atlantis', 'https://s3img.vcdn.vn/mobile/123phim/2018/12/aquaman-de-vuong-atlantis-c13-15444120205494_370x490.jpg', 'https://www.youtube.com/embed/6mQDS7Q7pys', 'Phim kể về Arthur Curry/Aquaman (Jason Momoa) trên hành trình trở thành Đế vương Atlantis sẽ phải chiến đấu để ngăn chặn người anh cùng mẹ khác cha King Orm/Ocean Master (Patrick Wilson) gây ra cuộc chiến đe dọa hòa bình ở cả đại dương lẫn đất liền. Cùng Công chúa Mera, Aquaman sẽ phải tìm ra Cây Đinh ba của Thần biển Neptune - vũ khí huyền thoại chỉ dành cho người xứng đáng trở thành Thất Hải Chi Vương.', true),

    new Phim(1, 'Thế Giới Khủng Long 2: Vương Quốc Sụp Đổ', 'http://image.phimmoi.net/film/6506/poster.medium.jpg', 'https://www.youtube.com/embed/vn9mMeWcgoM', '4 năm sau thảm họa Công Viên kỷ Jura bị phá hủy bởi những con khủng long. Một vài con khủng long vẫn còn sống sót trong rừng trong khi Isla Nublar bị con người bỏ hoang. Owen (Chris Pratt) và Claire (Bryce Dallas Howard) đã tiến hành chiến dịch giải cứu những con khủng long còn sống sót khỏi sự tuyệt chủng khi ngọn núi lửa tại khu vực này bắt đầu hoạt động trở lại. Họ vô tình khám phá ra một âm mưu có thể khiến toàn bộ hành tinh đối mặt với một hiểm họa to lớn chưa từng thấy kể từ thời tiền sử.', true),

    new Phim(2, 'BIỆT ĐỘI SIÊU ANH HÙNG 4: TÀN CUỘC', 'http://image.phimmoi.net/film/7166/poster.medium.jpg', 'https://www.youtube.com/embed/hA6hldpSTF8', 'Mở đầu của teaser trailer Endgame, Tony Stark dùng 1 cái mặt nạ của bộ giáp Iron Man để ghi hình lại tin nhắn video gởi cho người vợ Pepper Potts. Anh cho biết là mình đang trên đường trở về Trái đất nhưng không may bị trôi lạc trong vũ trụ, nước và lương thực thì cạn sạch từ 4 ngày trước, oxy thì qua ngày mai cũng hết, mạng sống bây giờ như chỉ mành treo chuông, thần chết chỉ còn cách vài tiếng.', false),


    new Phim(4, 'Aquaman: Đế Vương Atlantis', 'https://s3img.vcdn.vn/mobile/123phim/2018/12/aquaman-de-vuong-atlantis-c13-15444120205494_370x490.jpg', 'https://www.youtube.com/embed/6mQDS7Q7pys', 'Phim kể về Arthur Curry/Aquaman (Jason Momoa) trên hành trình trở thành Đế vương Atlantis sẽ phải chiến đấu để ngăn chặn người anh cùng mẹ khác cha King Orm/Ocean Master (Patrick Wilson) gây ra cuộc chiến đe dọa hòa bình ở cả đại dương lẫn đất liền. Cùng Công chúa Mera, Aquaman sẽ phải tìm ra Cây Đinh ba của Thần biển Neptune - vũ khí huyền thoại chỉ dành cho người xứng đáng trở thành Thất Hải Chi Vương.', true),

    new Phim(5, 'Thế Giới Khủng Long 2: Vương Quốc Sụp Đổ', 'http://image.phimmoi.net/film/6506/poster.medium.jpg', 'https://www.youtube.com/embed/vn9mMeWcgoM', '4 năm sau thảm họa Công Viên kỷ Jura bị phá hủy bởi những con khủng long. Một vài con khủng long vẫn còn sống sót trong rừng trong khi Isla Nublar bị con người bỏ hoang. Owen (Chris Pratt) và Claire (Bryce Dallas Howard) đã tiến hành chiến dịch giải cứu những con khủng long còn sống sót khỏi sự tuyệt chủng khi ngọn núi lửa tại khu vực này bắt đầu hoạt động trở lại. Họ vô tình khám phá ra một âm mưu có thể khiến toàn bộ hành tinh đối mặt với một hiểm họa to lớn chưa từng thấy kể từ thời tiền sử.', true),

    new Phim(6, 'BIỆT ĐỘI SIÊU ANH HÙNG 4: TÀN CUỘC', 'http://image.phimmoi.net/film/7166/poster.medium.jpg', 'https://www.youtube.com/embed/hA6hldpSTF8', 'Mở đầu của teaser trailer Endgame, Tony Stark dùng 1 cái mặt nạ của bộ giáp Iron Man để ghi hình lại tin nhắn video gởi cho người vợ Pepper Potts. Anh cho biết là mình đang trên đường trở về Trái đất nhưng không may bị trôi lạc trong vũ trụ, nước và lương thực thì cạn sạch từ 4 ngày trước, oxy thì qua ngày mai cũng hết, mạng sống bây giờ như chỉ mành treo chuông, thần chết chỉ còn cách vài tiếng.', true),

    new Phim(7, 'GODZILLA: KING OF THE MONSTERS', 'http://image.phimmoi.net/film/7138/poster.medium.jpg', 'https://www.youtube.com/embed/CT3eA2t2G28', 'Đây là tác phẩm thứ ba thuộc vũ trụ điện ảnh quái vật của hãng Legendary và Warner Bros..\n' +
      'Theo đó, bộ phim có bối cảnh diễn ra vài năm sau sự kiện của phần trước. Lúc này, Godzilla phải đối mặt với những quái vật hết sức mạnh mẽ như Rồng ba đầu King Ghidorah, Rodan và sâu bướm Mothra. ', false),

    ///////////////
    new Phim(8, 'Aquaman: Đế Vương Atlantis', 'https://s3img.vcdn.vn/mobile/123phim/2018/12/aquaman-de-vuong-atlantis-c13-15444120205494_370x490.jpg', 'https://www.youtube.com/embed/6mQDS7Q7pys', 'Phim kể về Arthur Curry/Aquaman (Jason Momoa) trên hành trình trở thành Đế vương Atlantis sẽ phải chiến đấu để ngăn chặn người anh cùng mẹ khác cha King Orm/Ocean Master (Patrick Wilson) gây ra cuộc chiến đe dọa hòa bình ở cả đại dương lẫn đất liền. Cùng Công chúa Mera, Aquaman sẽ phải tìm ra Cây Đinh ba của Thần biển Neptune - vũ khí huyền thoại chỉ dành cho người xứng đáng trở thành Thất Hải Chi Vương.', true),

    new Phim(9, 'Thế Giới Khủng Long 2: Vương Quốc Sụp Đổ', 'http://image.phimmoi.net/film/6506/poster.medium.jpg', 'https://www.youtube.com/embed/vn9mMeWcgoM', '4 năm sau thảm họa Công Viên kỷ Jura bị phá hủy bởi những con khủng long. Một vài con khủng long vẫn còn sống sót trong rừng trong khi Isla Nublar bị con người bỏ hoang. Owen (Chris Pratt) và Claire (Bryce Dallas Howard) đã tiến hành chiến dịch giải cứu những con khủng long còn sống sót khỏi sự tuyệt chủng khi ngọn núi lửa tại khu vực này bắt đầu hoạt động trở lại. Họ vô tình khám phá ra một âm mưu có thể khiến toàn bộ hành tinh đối mặt với một hiểm họa to lớn chưa từng thấy kể từ thời tiền sử.', true),

    new Phim(10, 'BIỆT ĐỘI SIÊU ANH HÙNG 4: TÀN CUỘC', 'http://image.phimmoi.net/film/7166/poster.medium.jpg', 'https://www.youtube.com/embed/hA6hldpSTF8', 'Mở đầu của teaser trailer Endgame, Tony Stark dùng 1 cái mặt nạ của bộ giáp Iron Man để ghi hình lại tin nhắn video gởi cho người vợ Pepper Potts. Anh cho biết là mình đang trên đường trở về Trái đất nhưng không may bị trôi lạc trong vũ trụ, nước và lương thực thì cạn sạch từ 4 ngày trước, oxy thì qua ngày mai cũng hết, mạng sống bây giờ như chỉ mành treo chuông, thần chết chỉ còn cách vài tiếng.', false),

    new Phim(11, 'GODZILLA: KING OF THE MONSTERS', 'http://image.phimmoi.net/film/7138/poster.medium.jpg', 'https://www.youtube.com/embed/CT3eA2t2G28', 'Đây là tác phẩm thứ ba thuộc vũ trụ điện ảnh quái vật của hãng Legendary và Warner Bros..\n' +
      'Theo đó, bộ phim có bối cảnh diễn ra vài năm sau sự kiện của phần trước. Lúc này, Godzilla phải đối mặt với những quái vật hết sức mạnh mẽ như Rồng ba đầu King Ghidorah, Rodan và sâu bướm Mothra. ', false),

    new Phim(12, 'Aquaman: Đế Vương Atlantis', 'https://s3img.vcdn.vn/mobile/123phim/2018/12/aquaman-de-vuong-atlantis-c13-15444120205494_370x490.jpg', 'https://www.youtube.com/embed/6mQDS7Q7pys', 'Phim kể về Arthur Curry/Aquaman (Jason Momoa) trên hành trình trở thành Đế vương Atlantis sẽ phải chiến đấu để ngăn chặn người anh cùng mẹ khác cha King Orm/Ocean Master (Patrick Wilson) gây ra cuộc chiến đe dọa hòa bình ở cả đại dương lẫn đất liền. Cùng Công chúa Mera, Aquaman sẽ phải tìm ra Cây Đinh ba của Thần biển Neptune - vũ khí huyền thoại chỉ dành cho người xứng đáng trở thành Thất Hải Chi Vương.', true)
  ];
  constructor() {}

  getPhim() {
    return this.Phims.slice();
  }
}
