import { ICOType } from 'app/shared/enums/ico-type.enum';

export class ICO {
  type: ICOType;

  name: string;
  image: string;
  description: string;
  start_time: string;
  end_time: string;
  timezone: string;

  // Ony for type : FINISHED
  coin_symbol: string;
  price_usd: number;
  all_time_roi: string;

  constructor(data, type: ICOType) {
    this.type = type;

    this.name = data['name'];
    this.image = data['image'];
    this.description = data['description'];
    this.start_time = data['start_time'];
    this.end_time = data['end_time'];
    this.timezone = data['timezone'];
    if (type === ICOType.FINISHED) {
      this.coin_symbol = data['coin_symbol'];
      this.price_usd = data['price_usd'];
      this.all_time_roi = data['all_time_roi'];
    }
  }

  isROIWorth() {
    if (this.type === ICOType.FINISHED) {
      if (this.all_time_roi === 'NA') {
        return true;
      }
      const roi = +this.all_time_roi.slice(0, this.all_time_roi.length - 1).replace(',', '');
      return roi >= 0;
    }
  }

}
