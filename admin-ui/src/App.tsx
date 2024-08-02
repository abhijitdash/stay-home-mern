import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ListingList } from "./listing/ListingList";
import { ListingCreate } from "./listing/ListingCreate";
import { ListingEdit } from "./listing/ListingEdit";
import { ListingShow } from "./listing/ListingShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { VisitList } from "./visit/VisitList";
import { VisitCreate } from "./visit/VisitCreate";
import { VisitEdit } from "./visit/VisitEdit";
import { VisitShow } from "./visit/VisitShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"homestay-server "}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Listing"
          list={ListingList}
          edit={ListingEdit}
          create={ListingCreate}
          show={ListingShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
        <Resource
          name="Visit"
          list={VisitList}
          edit={VisitEdit}
          create={VisitCreate}
          show={VisitShow}
        />
      </Admin>
    </div>
  );
};

export default App;
