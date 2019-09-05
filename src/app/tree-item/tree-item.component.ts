import { Component, OnInit, Input } from '@angular/core';
import { TreeItem } from '../tree-item';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {
  @Input() item;
  @Input() childrenArray;
  toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // event listener to for the arrows
  toggleCascade(item){
    // only toggle if the item is a parent
    if(item.children) this.toggle = !this.toggle;
  }

}
