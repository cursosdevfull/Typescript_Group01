export class APIRest {
    list() {
        console.log("Listando con API Rest");
    }
    insert() {
        console.log("Insertando con API Rest");
    }
    delete() {
        console.log("Eliminando con API Rest");
    }
    update() {
        console.log("Actualizando con API Rest");
    }
}
export class APIGraphQL {
    list() {
        console.log("Listando con API GraphQL");
    }
    insert() {
        console.log("Insertando con API GraphQL");
    }
    delete() {
        console.log("Eliminando con API GraphQL");
    }
    update() {
        console.log("Actualizando con API GraphQL");
    }
}
export class WebService {
    list() {
        console.log("Listando con WebService");
    }
    insert() {
        console.log("Insertando con WebService");
    }
    delete() {
        console.log("Eliminando con WebService");
    }
    update() {
        console.log("Actualizando con WebService");
    }
}
export class RPC {
    list() {
        console.log("Listando con RPC");
    }
    insert() {
        console.log("Insertando con RPC");
    }
    delete() {
        console.log("Eliminando con RPC");
    }
    update() {
        console.log("Actualizando con RPC");
    }
}
export var TECHNOLOGY_MODERN_ENUM;
(function (TECHNOLOGY_MODERN_ENUM) {
    TECHNOLOGY_MODERN_ENUM["APIRest"] = "APIRest";
    TECHNOLOGY_MODERN_ENUM["APIGraphQL"] = "APIGraphQL";
})(TECHNOLOGY_MODERN_ENUM || (TECHNOLOGY_MODERN_ENUM = {}));
export var TECHNOLOGY_LEGACY_ENUM;
(function (TECHNOLOGY_LEGACY_ENUM) {
    TECHNOLOGY_LEGACY_ENUM["WebService"] = "WebService";
    TECHNOLOGY_LEGACY_ENUM["RPC"] = "RPC";
})(TECHNOLOGY_LEGACY_ENUM || (TECHNOLOGY_LEGACY_ENUM = {}));
const TECHNOLOGY = {
    APIRest: new APIRest(),
    APIGraphQL: new APIGraphQL(),
    WebService: new WebService(),
    RPC: new RPC(),
};
export class AbstractFactoryTechnology {
}
export class Modern extends AbstractFactoryTechnology {
    getTechnology(name) {
        return TECHNOLOGY[name];
    }
}
export class Legacy extends AbstractFactoryTechnology {
    getTechnology(name) {
        return TECHNOLOGY[name];
    }
}
export var TECHNOLOGY_TYPE_ENUM;
(function (TECHNOLOGY_TYPE_ENUM) {
    TECHNOLOGY_TYPE_ENUM["modern"] = "modern";
    TECHNOLOGY_TYPE_ENUM["legacy"] = "legacy";
})(TECHNOLOGY_TYPE_ENUM || (TECHNOLOGY_TYPE_ENUM = {}));
const TECHNOLOGY_TYPE_OBJECT = {
    modern: new Modern(),
    legacy: new Legacy(),
};
export class FactoryTechnology {
    static getFactory(type) {
        return TECHNOLOGY_TYPE_OBJECT[type];
    }
}
