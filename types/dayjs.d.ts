import { Dayjs, PluginFunc } from "dayjs";

declare module "dayjs" {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string;
  }
}
