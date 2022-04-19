import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Main from "../../pages/Main";
import Admin from "../../pages/Admin";
import Booking from "../../pages/Booking";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <div id="portal" />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </ChakraProvider>
  </QueryClientProvider>
);

export default withRouter(App);
