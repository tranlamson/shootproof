import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-data';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  topLevelItems = ITEMS.filter(item => item.parent === null);
  constructor() { }

  ngOnInit() {
    this.filterNode();
  }

  // Filter out only the top level elements
  filterNode(){
    for(var i=0; i < ITEMS.length; i++){
      if(ITEMS[i].parent !== null){
        if(ITEMS[ITEMS[i].parent].children === undefined) ITEMS[ITEMS[i].parent].children = [];
        ITEMS[ITEMS[i].parent].children.push(ITEMS[i]);
      }
    }
    this.topLevelItems = ITEMS.filter(item => item.parent === null);
  }

}
