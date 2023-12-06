import { Component, Input,Output } from '@angular/core';
import { Publisher } from 'src/Models/Publisher';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent {
  @Input() publisher! : Publisher

  constructor(){}
}
