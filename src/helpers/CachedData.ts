import AsyncStorage from "@react-native-community/async-storage";
import { ChurchInterface } from ".";


export class CachedData {
  static church: ChurchInterface;

  static async getAsyncStorage(key: string) {
    const json = await AsyncStorage.getItem(key);
    if (json) return JSON.parse(json);
    else return null;
  }

  static async setAsyncStorage(key: string, obj: any) {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  }

}