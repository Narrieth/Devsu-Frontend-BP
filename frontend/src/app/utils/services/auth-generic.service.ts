import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGenericService {
  constructor() {}

  get headers() {
    let httpHeaders = new HttpHeaders({
      //Authorization: `Bearer ${this.token}`,
      authorId: this.authorId,
    });

    return { headers: httpHeaders };
  }

  get token(): string {
    return 'token';
  }

  get authorId(): string {
    return '1';
  }
}
