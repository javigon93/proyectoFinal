import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  images: any[] = [{
    "previewImageSrc": "../assets/showCase/img/1.jpg",
    "thumbnailImageSrc": "..assets/showCase/img/1.jpg",
    "alt": "Description for Image 1",
    "title": "Title 1"
  },
  {
    "previewImageSrc": "../assets/showCase/img/2.jpg",
    "thumbnailImageSrc": "../assets/showCase/img/2.jpg",
    "alt": "Description for Image 2",
    "title": "Title 2"
  },
  {
    "previewImageSrc": "../assets/showCase/img/3.jpg",
    "thumbnailImageSrc": "src/assets/showCase/img/3.jpg",
    "alt": "Description for Image 3",
    "title": "Title 3"
  },
  {
    "previewImageSrc": "../assets/showCase/img/4.jpg",
    "thumbnailImageSrc": "src/assets/showCase/img/4.jpg",
    "alt": "Description for Image 4",
    "title": "Title 4"
  }]




  constructor() { }
  getImages() {
    return this.images

  }

}
