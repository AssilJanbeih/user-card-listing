import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private cache = new Map<string, HttpResponse<any>>();
  private cacheTime = new Map<string, number>();
  private cacheDuration = 300000;

  set(url: string, response: HttpResponse<any>): void {
    this.cache.set(url, response);
    this.cacheTime.set(url, Date.now());
  }

  get(url: string): HttpResponse<any> | null {
    const cachedResponse = this.cache.get(url);
    const cacheTime = this.cacheTime.get(url);

    if (cachedResponse && cacheTime && (Date.now() - cacheTime < this.cacheDuration)) {
      return cachedResponse;
    }

    this.cache.delete(url);
    this.cacheTime.delete(url);
    return null;
  }

  clear(url: string): void {
    this.cache.delete(url);
    this.cacheTime.delete(url);
  }

  clearAll(): void {
    this.cache.clear();
    this.cacheTime.clear();
  }
}
