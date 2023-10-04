import { Pipe } from '@angular/core';

import { ArrayFilterPurePipe } from './array-filter-pure.pipe';

@Pipe({
  name: 'arrayFilterImpure',
  pure: false
})
export class ArrayFilterImpurePipe extends ArrayFilterPurePipe { }
