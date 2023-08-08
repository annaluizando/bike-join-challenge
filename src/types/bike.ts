export type TheftCase = {
  id: number;
  title: string;
  description?: string;
  stolen_location?: string;
  date_stolen?: string;
  large_img?: string;
  stolen?: boolean;
  registration_created_at?: string | undefined;
};

// export type UnixTimeStamp = {
//     unixTimestamp?: string | number;
//     date?: number;
//     year?: number;
//     month?: number;
//     day?: number;
//     hours?: number;
//     minutes?: number;
//     seconds?: number;
// }
