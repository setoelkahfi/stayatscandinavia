import { LazyStore } from "@tauri-apps/plugin-store";
import { DATA, SETTINGS } from "../crate/generated";

export function storeSettings() {
  const store = new LazyStore(SETTINGS);
  return store;
}

export function storeData() {
  const store = new LazyStore(DATA);
  return store;
}

export function storeAccount() {
  const store = new LazyStore(STORE_ACCOUNT);
  return store;
}

export const STORE_ACCOUNT = ".account.dat";

export const STORE_ACCESS_TOKEN_KEY = "access_token";
