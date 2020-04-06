import Dashboard from "../components/Modules/Dashboard";
import FormNewPerson from "../components/Modules/NewPerson/view";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  person: "/new-person",
  apiCountries: "/ApiCountriesSample",
  createUser: "/CreateUser",
};

const routes = [
  { path: paths.root, component: Dashboard },
  { path: paths.apiCountries, component: ApiCountries },
  { path: paths.createUser, component: CreateUser },
  {
    path: paths.person,
    component: FormNewPerson,
  },
];

export default routes;
