import {InjectionToken} from "@angular/core";
import {DOCUMENT} from "@angular/common";

export const LocalStorage = new InjectionToken<Storage>('[AlkoMentor] Local Storage');

export const DefaultLocalStorageProvider = {
  provide: LocalStorage,
  deps: [DOCUMENT],
  useFactory: (doc: Document) => {
    if (!doc?.defaultView?.localStorage) {
      throw new Error('Local storage not defined')
    }

    return doc.defaultView?.localStorage;
  }
}
