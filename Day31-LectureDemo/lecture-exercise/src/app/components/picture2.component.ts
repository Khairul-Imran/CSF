import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-picture2', // Component tag (for when you want to include this component inside html)
  templateUrl: './picture2.component.html',
  styleUrl: './picture2.component.css' // Styles just for this component
})

export class Picture2Component {
  // Declaring @Input allows you to use custom attributes.
  @Input()
  caption: string = "a picture";

  //@Input({ required: true }) // Will not work if we do not use the custom attribute for image.
  @Input()
  image: string = "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg";

  // Custom event?
  // think of subject like a queue in redis
  // Need to define a subject if you want to relay this information outside of this component.**
  @Output()
  // imageEvent = new Subject<void>()
  imageEvent = new Subject<string>()// If returning the caption (string) instead.

  imageStyle: string = "thumbnail";

  // Event handler.
  imageClicked() {
    console.info(">>> From picture2.component: Image has been clicked: ", this.caption);
    // To fire the event we created.
    // this.imageEvent.next();
    this.imageEvent.next(this.caption); // Caption event object
  }

}
