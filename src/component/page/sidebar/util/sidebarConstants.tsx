import {ReactComponent as HomeIcon} from "../../../../core/ui/icon/home.svg";
import {ReactComponent as ProjectsIcon} from "../../../../core/ui/icon/projects.svg";
import {ReactComponent as ExploreIcon} from "../../../../core/ui/icon/explore.svg";
import {ReactComponent as SettingsIcon} from "../../../../core/ui/icon/settings.svg";

import ROUTES from "../../../../core/route/routes";

export const SIDEBAR_LINKS = [
  {
    id: "home",
    icon: <HomeIcon width={20} height={20} />,
    text: "Anasayfa",
    to: ROUTES.HOME,
    shouldNeedUser: false
  },

  {
    id: "my-project",
    icon: <ProjectsIcon width={20} height={20} />,
    text: "Benim Projem",
    to: ROUTES.MY_PROJECT,
    shouldNeedUser: true
  },

  {
    id: "projects",
    icon: <ExploreIcon width={20} height={20} />,
    text: "Projeler",
    to: ROUTES.PROJECTS,
    shouldNeedUser: true
  },

  {
    id: "settings",
    icon: <SettingsIcon width={20} height={20} />,
    text: "Ayarlar",
    to: ROUTES.SETTINGS,
    shouldNeedUser: true
  }
];

export const SIDEBAR_FOOTER_LINKS = [
  {
    text: "Gazi Üniversitesi",
    to: "https://gazi.edu.tr/"
  },
  {
    text: "Bilgisayar Mühendisliği",
    to: "https://mf-bm.gazi.edu.tr/"
  },
  {
    text: "Bitirme Koordinatörlüğü",
    to: "https://mf-bm.gazi.edu.tr/view/page/215005"
  },
  {
    text: "İletişim",
    to: "https://mf-bm.gazi.edu.tr/view/page/4185/iletisim"
  }
];
