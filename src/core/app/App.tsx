import {Suspense} from "react";
import {Routes, Route} from "react-router-dom";

import RouteLoading from "../route/loading/RouteLoading";
import RequireAccount from "../route/RequireAccount";
import ROUTES from "../route/routes";
import {AppContextProvider} from "./AppContext";
import HomePage from "../../home/HomePage";
import NotFoundPage from "../route/not-found-page/NotFoundPage";
import SidebarLayout from "../../layouts/sidebar/SidebarLayout";
import MyProjectPage from "../../my-project/MyProjectPage";
import ProjectsPage from "../../projects/ProjectsPage";
import SettingsPage from "../../settings/SettingsPage";
import LoginPage from "../../login/LoginPage";
import CardLayout from "../../layouts/card/CardLayout";
import AnnouncementPage from "../../announcement/AnnouncementPage";
import Page from "../../component/page/Page";
import ProjectDetailPage from "../../project-detail/ProjectDetailPage";
import MyProjectDocuments from "../../my-project/document/MyProjectDocuments";

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <AppContextProvider>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />

            <Route
              path={ROUTES.MY_PROJECT}
              element={
                <RequireAccount>
                  <MyProjectPage />
                </RequireAccount>
              }
            />

            <Route
              path={ROUTES.DOCUMENTS}
              element={
                <RequireAccount>
                  <MyProjectDocuments />
                </RequireAccount>
              }
            />

            <Route
              path={ROUTES.PROJECTS}
              element={
                <RequireAccount>
                  <ProjectsPage />
                </RequireAccount>
              }
            />

            <Route
              path={ROUTES.SETTINGS}
              element={
                <RequireAccount>
                  <SettingsPage />
                </RequireAccount>
              }
            />

            <Route
              path={ROUTES.ANNOUNCEMENT}
              element={
                <RequireAccount>
                  <AnnouncementPage />
                </RequireAccount>
              }
            />

            <Route
              path={ROUTES.PROJECT_DETAILS}
              element={
                <RequireAccount>
                  <ProjectDetailPage />
                </RequireAccount>
              }
            />

            <Route path={"*"} element={<NotFoundPage />} />
          </Route>

          <Route element={<Page title={"Giriş Yap"} />}>
            <Route element={<CardLayout />}>
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>
          </Route>
        </Routes>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
