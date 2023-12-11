import {
  AbstractFactoryTechnology,
  FactoryTechnology,
  TECHNOLOGY_MODERN_ENUM,
  TECHNOLOGY_TYPE_ENUM,
} from "./technology.js";

const typeFactory: AbstractFactoryTechnology = FactoryTechnology.getFactory(
  TECHNOLOGY_TYPE_ENUM.modern
);

const apiRest = typeFactory.getTechnology(TECHNOLOGY_MODERN_ENUM.APIRest);
const apiGraphQL = typeFactory.getTechnology(TECHNOLOGY_MODERN_ENUM.APIGraphQL);

apiRest.insert();
apiGraphQL.insert();
