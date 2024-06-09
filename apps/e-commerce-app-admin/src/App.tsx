import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrdersList } from "./orders/OrdersList";
import { OrdersCreate } from "./orders/OrdersCreate";
import { OrdersEdit } from "./orders/OrdersEdit";
import { OrdersShow } from "./orders/OrdersShow";
import { CustomizablePcPiecesList } from "./customizablePcPieces/CustomizablePcPiecesList";
import { CustomizablePcPiecesCreate } from "./customizablePcPieces/CustomizablePcPiecesCreate";
import { CustomizablePcPiecesEdit } from "./customizablePcPieces/CustomizablePcPiecesEdit";
import { CustomizablePcPiecesShow } from "./customizablePcPieces/CustomizablePcPiecesShow";
import { CategoriesList } from "./categories/CategoriesList";
import { CategoriesCreate } from "./categories/CategoriesCreate";
import { CategoriesEdit } from "./categories/CategoriesEdit";
import { CategoriesShow } from "./categories/CategoriesShow";
import { OrderItemsList } from "./orderItems/OrderItemsList";
import { OrderItemsCreate } from "./orderItems/OrderItemsCreate";
import { OrderItemsEdit } from "./orderItems/OrderItemsEdit";
import { OrderItemsShow } from "./orderItems/OrderItemsShow";
import { ProductsList } from "./products/ProductsList";
import { ProductsCreate } from "./products/ProductsCreate";
import { ProductsEdit } from "./products/ProductsEdit";
import { ProductsShow } from "./products/ProductsShow";
import { CartItemsList } from "./cartItems/CartItemsList";
import { CartItemsCreate } from "./cartItems/CartItemsCreate";
import { CartItemsEdit } from "./cartItems/CartItemsEdit";
import { CartItemsShow } from "./cartItems/CartItemsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"jkw-e-comm"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Orders"
          list={OrdersList}
          edit={OrdersEdit}
          create={OrdersCreate}
          show={OrdersShow}
        />
        <Resource
          name="CustomizablePcPieces"
          list={CustomizablePcPiecesList}
          edit={CustomizablePcPiecesEdit}
          create={CustomizablePcPiecesCreate}
          show={CustomizablePcPiecesShow}
        />
        <Resource
          name="Categories"
          list={CategoriesList}
          edit={CategoriesEdit}
          create={CategoriesCreate}
          show={CategoriesShow}
        />
        <Resource
          name="OrderItems"
          list={OrderItemsList}
          edit={OrderItemsEdit}
          create={OrderItemsCreate}
          show={OrderItemsShow}
        />
        <Resource
          name="Products"
          list={ProductsList}
          edit={ProductsEdit}
          create={ProductsCreate}
          show={ProductsShow}
        />
        <Resource
          name="CartItems"
          list={CartItemsList}
          edit={CartItemsEdit}
          create={CartItemsCreate}
          show={CartItemsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
