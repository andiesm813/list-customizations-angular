import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxToggleDirective, IgxIconComponent, IgxAvatarComponent],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}
