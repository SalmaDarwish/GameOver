import { Component, OnInit, Input} from '@angular/core';
declare var $:any;



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() game:any

  constructor() { }

  ngOnInit(): void {
    $("figure").mouseleave(
      () => {
        $(this).removeClass("hover");
      }
    );
  }

}
