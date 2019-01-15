export class Phim {
  public maPhim: number;
  public tenPhim: string;
  public imagePath: string;
  public trailerLink: string;
  public noiDung: string;
  public loaiPhim: boolean;
  constructor(maphim: number, tenphim: string, imagepath: string, trailerlink: string, noidung: string, loaiphim: boolean) {
    this.maPhim = maphim;
    this.tenPhim = tenphim;
    this.imagePath = imagepath;
    this.trailerLink = trailerlink;
    this.noiDung = noidung;
    this.loaiPhim = loaiphim;
  }
}
