import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate
} from "react-router-dom";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

/**
 * https://stackoverflow.com/questions/72463614/ant-design-custom-tabs-with-react-router-v6
 */

const { TabPane } = Tabs;

const CustomTab = ({ elements }) => {
  const navigate = useNavigate();
  const { source } = useParams();

  return (
    <>
      <Tabs
        activeKey={source}
        onChange={(path) => {
          navigate(`../${path}`); // sibling path
        }}
        // tabBarGutter={70}
        tabBarStyle={{ backgroundColor: "white" }}
        // size="large"
        className="Tabs"
      >
        {elements.map((element) => (
          <TabPane
            tab={element.tabTitle}
            className="TabsBody"
            key={element.path}
          >
            {element.tabBody}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

const AllNotifications = () => {
  return (
    <div>
      <h1>AllNotifications</h1>
      <input />
    </div>
  );
};
const GeneralUpdates = () => <h1>GeneralUpdates</h1>;

const NotificationPage = () => {
  return (
    <>
      <div className="notification-title">Notifications</div>
      <div className="notification-container">
        <CustomTab
          elements={[
            {
              tabTitle: "All Notifications",
              tabBody: <AllNotifications />,
              path: "AllNotifications"
            },
            {
              tabTitle: "General Updates",
              tabBody: <GeneralUpdates />,
              path: "General_Updates"
            },
            {
              tabTitle: "Purchase Updates",
              tabBody: "aze",
              path: "Purchase_Updates"
            },
            {
              tabTitle: "Products Updates",
              tabBody: "aze",
              path: "Products_Updates"
            },
            {
              tabTitle: "Account & Billing",
              tabBody: "aze",
              path: "Account&Billing"
            }
          ]}
        />
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Routes>
        <Route path="/Notifications">
          <Route index element={<Navigate to="AllNotifications" replace />} />
          <Route path=":source" element={<NotificationPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/Notifications" replace />} />
      </Routes>
    </div>
  );
}
