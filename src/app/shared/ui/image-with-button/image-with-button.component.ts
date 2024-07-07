import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-with-button',
  templateUrl: './image-with-button.component.html',
  styleUrls: ['./image-with-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWithButtonComponent{
  @Input() imagePath: string = "./assets/images/404-error.gif";
  @Input() link: string = '/';
  @Input() text? : string;
  @Input() buttonText : string = 'Back';


  constructor() { }

}
