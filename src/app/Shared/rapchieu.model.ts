export class Rapchieu {
  public maRapChieu: number;
  public tenRapChieu: string;
  public imagePath: string;
  public diaChi: string;
  public Email: string;
  public phongChieu: string;
  public gioMoCua: string;
  public gioiThieu: string;
  public maCumRap: number;
    constructor(marapchieu: number, tenrapchieu: string, imgPath: string, diachi: string, email: string, phongchieu: string, giomocua: string, gioithieu: string, macumrap: number) {
    this.maRapChieu = marapchieu;
    this.tenRapChieu = tenrapchieu;
    this.imagePath = imgPath;
    this.diaChi = diachi;
    this.Email = email;
    this.phongChieu = phongchieu;
    this.gioMoCua = giomocua;
    this.gioiThieu = gioithieu;
    this.maCumRap = macumrap;
  }
}
