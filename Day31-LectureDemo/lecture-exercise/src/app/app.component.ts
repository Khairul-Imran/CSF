import { Component } from '@angular/core';
import { PictureData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lecture-excercise';
  images: PictureData[] = [
    {
      url: 'https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200',
      text: 'This is an orange cat'
    },
    {
      url: 'https://media.istockphoto.com/id/1453241155/photo/curious-cat-sitting-while-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=Qsa84QouXsVbZqXAvUloK82SmC1ysc1w-O8EPjgtZOc=',
      text: 'This is a cat'
    },
    {
      url: 'https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg',
      text: 'This is another cat'
    }
  ]

  // imagePressed(): void {
  //   console.info('From app.component: image has been pressed.');
  // }
  pastCaptions: string[] = [];
  
  // For caption. 
  // text can be named anything here, don't need to be $event. Only for html use $event.
  imagePressed(text: string): void {
    console.info('From app.component: image has been pressed.', text);
    this.pastCaptions.push(text);
  }
}
