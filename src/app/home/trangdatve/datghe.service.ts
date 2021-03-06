import {Ghe} from '../../Shared/ghe.model';
import {EventEmitter} from '@angular/core';

export class DatgheService {
  DSGheDangDat = new EventEmitter<Ghe[]>();
  constructor() {}
  ghes: Ghe[] = [
    new Ghe(1, 'Số 1', 100000, false),
    new Ghe(2, 'Số 2', 100000, false),
    new Ghe(3, 'Số 3', 100000, false),
    new Ghe(4, 'Số 4', 100000, false),
    new Ghe(5, 'Số 5', 100000, false),
    new Ghe(6, 'Số 6', 100000, false),
    new Ghe(7, 'Số 7', 100000, false),
    new Ghe(8, 'Số 8', 100000, false),
    new Ghe(9, 'Số 9', 100000, false),
    new Ghe(10, 'Số 10', 100000, false),
    new Ghe(11, 'Số 11', 100000, false),
    new Ghe(12, 'Số 12', 100000, false),
    new Ghe(13, 'Số 13', 100000, false),
    new Ghe(14, 'Số 14', 100000, false),
    new Ghe(15, 'Số 15', 100000, false),
    new Ghe(16, 'Số 16', 100000, false),
    new Ghe(17, 'Số 17', 100000, false),
    new Ghe(18, 'Số 18', 100000, false),
    new Ghe(19, 'Số 19', 100000, false),
    new Ghe(20, 'Số 20', 100000, false),
    new Ghe(21, 'Số 21', 100000, false),
    new Ghe(22, 'Số 22', 100000, false),
    new Ghe(23, 'Số 23', 100000, false),
    new Ghe(24, 'Số 24', 100000, false),
    new Ghe(25, 'Số 25', 100000, false),
    new Ghe(26, 'Số 26', 100000, false),
    new Ghe(27, 'Số 27', 100000, false),
    new Ghe(28, 'Số 28', 100000, false),
    new Ghe(29, 'Số 29', 100000, true),
    new Ghe(30, 'Số 30', 100000, false),
    new Ghe(31, 'Số 31', 100000, false),
    new Ghe(32, 'Số 32', 100000, false),
    new Ghe(33, 'Số 33', 100000, false),
    new Ghe(34, 'Số 34', 100000, false),
    new Ghe(35, 'Số 35', 100000, false),
    new Ghe(36, 'Số 36', 100000, false),
    new Ghe(37, 'Số 37', 100000, false),
    new Ghe(38, 'Số 38', 100000, false),
    new Ghe(39, 'Số 39', 100000, true),
    new Ghe(40, 'Số 40', 100000, true),
    new Ghe(41, 'Số 41', 100000, true),
    new Ghe(42, 'Số 44', 100000, true),
    new Ghe(43, 'Số 43', 100000, true),
    new Ghe(44, 'Số 44', 100000, true),
    new Ghe(45, 'Số 45', 100000, true),
    new Ghe(46, 'Số 46', 100000, true),
    new Ghe(47, 'Số 47', 100000, true),
    new Ghe(48, 'Số 48', 100000, true),
    new Ghe(49, 'Số 49', 100000, true),
    new Ghe(50, 'Số 50', 100000, true),
    new Ghe(51, 'Số 51', 100000, true),
    new Ghe(52, 'Số 52', 100000, true),
    new Ghe(53, 'Số 53', 100000, true),
    new Ghe(54, 'Số 54', 100000, true),
    new Ghe(55, 'Số 55', 100000, true),
    new Ghe(56, 'Số 56', 100000, true),
    new Ghe(57, 'Số 57', 100000, true),
    new Ghe(58, 'Số 58', 100000, true),
    new Ghe(59, 'Số 59', 100000, true),
    new Ghe(60, 'Số 60', 100000, true),
    new Ghe(61, 'Số 61', 100000, true),
    new Ghe(62, 'Số 62', 100000, true),
    new Ghe(63, 'Số 63', 100000, true),
    new Ghe(64, 'Số 64', 100000, true),
    new Ghe(65, 'Số 65', 100000, true),
    new Ghe(66, 'Số 66', 100000, true),
    new Ghe(67, 'Số 67', 100000, true),
    new Ghe(68, 'Số 68', 100000, true),
    new Ghe(69, 'Số 69', 100000, false),
    new Ghe(70, 'Số 70', 100000, false),
    new Ghe(71, 'Số 71', 100000, false),
    new Ghe(72, 'Số 72', 100000, false),
    new Ghe(73, 'Số 73', 100000, false),
    new Ghe(74, 'Số 74', 100000, false),
    new Ghe(75, 'Số 75', 100000, false),
    new Ghe(76, 'Số 76', 100000, false),
    new Ghe(77, 'Số 77', 100000, false),
    new Ghe(78, 'Số 78', 100000, false),
    new Ghe(79, 'Số 79', 100000, false),
    new Ghe(80, 'Số 80', 100000, false),
    new Ghe(81, 'Số 81', 100000, false),
    new Ghe(82, 'Số 82', 100000, false),
    new Ghe(83, 'Số 83', 100000, false),
    new Ghe(84, 'Số 84', 100000, false),
    new Ghe(85, 'Số 85', 100000, false),
    new Ghe(86, 'Số 86', 100000, false),
    new Ghe(87, 'Số 87', 100000, false),
    new Ghe(88, 'Số 88', 100000, false),
    new Ghe(89, 'Số 89', 100000, false),
    new Ghe(90, 'Số 90', 100000, false),
    new Ghe(91, 'Số 91', 100000, false),
    new Ghe(92, 'Số 92', 100000, false),
    new Ghe(93, 'Số 93', 100000, false),
    new Ghe(94, 'Số 94', 100000, false),
    new Ghe(95, 'Số 95', 100000, false),
    new Ghe(96, 'Số 96', 100000, false),
    new Ghe(97, 'Số 97', 100000, false),
    new Ghe(98, 'Số 98', 100000, false),
    new Ghe(99, 'Số 99', 100000, false),
    new Ghe(100, 'Số 100', 100000, false),
    new Ghe(101, 'Số 101', 100000, false),
    new Ghe(102, 'Số 102', 100000, false),
    new Ghe(103, 'Số 103', 100000, false),
    new Ghe(104, 'Số 104', 100000, false),
    new Ghe(105, 'Số 105', 100000, false),
    new Ghe(106, 'Số 106', 100000, false),
    new Ghe(107, 'Số 107', 100000, false),
    new Ghe(108, 'Số 108', 100000, false),
    new Ghe(109, 'Số 109', 100000, false),
    new Ghe(110, 'Số 110', 100000, false),
    new Ghe(111, 'Số 111', 100000, false),
    new Ghe(112, 'Số 112', 100000, false),
    new Ghe(113, 'Số 113', 100000, false),
    new Ghe(114, 'Số 114', 100000, false),
    new Ghe(115, 'Số 115', 100000, false)
  ];
  getGhes() {
    return this.ghes.slice();
  }
}
