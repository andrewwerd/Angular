import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faCheckSquare, faTimes, faSignOutAlt,
  faClipboardCheck, faCog, faUserFriends,
  faSearch, faMapMarkerAlt, faHome,
  faCalendarDay, faPlus, faLayerGroup, faMousePointer, faArrowsAlt
} from "@fortawesome/free-solid-svg-icons";

export class FontAwesomeRegistrar {
  static register(library: FaIconLibrary) {
    library.addIcons(
      faCheckSquare,
      faCog,
      faSignOutAlt,
      faClipboardCheck,
      faTimes,
      faUserFriends,
      faSearch,
      faMapMarkerAlt,
      faCalendarDay,
      faPlus,
      faHome,
      faLayerGroup,
      faMousePointer,
      faArrowsAlt);
  }
}
