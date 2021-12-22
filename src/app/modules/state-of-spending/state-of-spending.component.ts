import { Component, OnInit } from '@angular/core';
import { CommonFilterConfig } from '../shared/filters/filters.component';

@Component({
  selector: 'app-state-of-spending',
  templateUrl: './state-of-spending.component.html',
  styleUrls: ['./state-of-spending.component.scss'],
})
export class StateOfSpendingComponent implements OnInit {
  constructor() {}
  filterConfigs = SOS_FILTER_CONFIG;
  ngOnInit(): void {}
}
export const SOS_FILTER_CONFIG: CommonFilterConfig[] = [
  {
    name: 'Program',
    type: 'program',
    api: 'GetProgram',
  },
  {
    name: 'State',
    type: 'state',
    api: 'GetState',
  },
  {
    name: 'DMA',
    type: 'dma',
    api: 'GetDMA',
  },
  {
    name: 'Race',
    type: 'race',
    api: 'GetRace',
  },
  {
    name: 'Party',
    type: 'party',
    api: 'GetParty',
  },
  {
    name: 'Candidate',
    type: 'candidate',
    api: 'GetCandidate',
  },
  {
    name: 'Affiliate',
    type: 'affiliate',
    api: 'GetAffiliate',
  },
  {
    name: 'Station',
    type: 'station',
    api: 'GetStation',
  },
  {
    name: 'Daypart',
    type: 'daypart',
    api: 'GetDaypart',
  },
];
