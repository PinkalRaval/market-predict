import { Subject } from 'rxjs';

export class FilterService {
  expandedConfig = new Subject<string>();

  setExapaded(filter: string) {
    this.expandedConfig.next(filter);
  }
  getExpanded() {
    return this.expandedConfig;
  }
}
