export interface ICRUD {
  list(): void;
  insert(): void;
  delete(): void;
  update(): void;
}

export class APIRest implements ICRUD {
  list(): void {
    console.log("Listando con API Rest");
  }
  insert(): void {
    console.log("Insertando con API Rest");
  }
  delete(): void {
    console.log("Eliminando con API Rest");
  }
  update(): void {
    console.log("Actualizando con API Rest");
  }
}

export class APIGraphQL implements ICRUD {
  list(): void {
    console.log("Listando con API GraphQL");
  }
  insert(): void {
    console.log("Insertando con API GraphQL");
  }
  delete(): void {
    console.log("Eliminando con API GraphQL");
  }
  update(): void {
    console.log("Actualizando con API GraphQL");
  }
}

export class WebService implements ICRUD {
  list(): void {
    console.log("Listando con WebService");
  }
  insert(): void {
    console.log("Insertando con WebService");
  }
  delete(): void {
    console.log("Eliminando con WebService");
  }
  update(): void {
    console.log("Actualizando con WebService");
  }
}

export class RPC implements ICRUD {
  list(): void {
    console.log("Listando con RPC");
  }
  insert(): void {
    console.log("Insertando con RPC");
  }
  delete(): void {
    console.log("Eliminando con RPC");
  }
  update(): void {
    console.log("Actualizando con RPC");
  }
}

export type TECHNOLOGY_MODERN = "APIRest" | "APIGraphQL";
export type TECHNOLOGY_LEGACY = "WebService" | "RPC";

export enum TECHNOLOGY_MODERN_ENUM {
  APIRest = "APIRest",
  APIGraphQL = "APIGraphQL",
}

export enum TECHNOLOGY_LEGACY_ENUM {
  WebService = "WebService",
  RPC = "RPC",
}

const TECHNOLOGY: Record<TECHNOLOGY_MODERN | TECHNOLOGY_LEGACY, ICRUD> = {
  APIRest: new APIRest(),
  APIGraphQL: new APIGraphQL(),
  WebService: new WebService(),
  RPC: new RPC(),
};

export abstract class AbstractFactoryTechnology {
  abstract getTechnology(name: TECHNOLOGY_MODERN | TECHNOLOGY_LEGACY): ICRUD;
}

export class Modern extends AbstractFactoryTechnology {
  getTechnology(name: TECHNOLOGY_MODERN): ICRUD {
    return TECHNOLOGY[name];
  }
}

export class Legacy extends AbstractFactoryTechnology {
  getTechnology(name: TECHNOLOGY_LEGACY): ICRUD {
    return TECHNOLOGY[name];
  }
}

export type TECHNOLOGY_TYPE = "modern" | "legacy";
export enum TECHNOLOGY_TYPE_ENUM {
  modern = "modern",
  legacy = "legacy",
}

const TECHNOLOGY_TYPE_OBJECT: Record<
  TECHNOLOGY_TYPE,
  AbstractFactoryTechnology
> = {
  modern: new Modern(),
  legacy: new Legacy(),
};

export class FactoryTechnology {
  static getFactory(type: TECHNOLOGY_TYPE): AbstractFactoryTechnology {
    return TECHNOLOGY_TYPE_OBJECT[type];
  }
}
