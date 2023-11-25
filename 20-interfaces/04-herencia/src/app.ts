interface Repository {
  get(id: number): any;
  list(): any[];
  add(item: any): void;
}

interface UserRepository extends Repository {
  findByUsername(username: string): any;
}

class UserDatabase implements UserRepository {
  findByUsername(username: string) {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
  list(): any[] {
    throw new Error("Method not implemented.");
  }
  add(item: any): void {
    throw new Error("Method not implemented.");
  }
}

interface ProductRepository extends Repository {
  findByCode(code: string): any;
  reportByCategory(category: string): any;
}

class ProductDatabase implements ProductRepository {
  findByCode(code: string) {
    throw new Error("Method not implemented.");
  }
  reportByCategory(category: string) {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
  list(): any[] {
    throw new Error("Method not implemented.");
  }
  add(item: any): void {
    throw new Error("Method not implemented.");
  }
}

interface ProductBundleRepository extends Repository {
  reportProductsDeprecated(): any;
}

class ProductBundle implements ProductBundleRepository {
  reportProductsDeprecated() {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
  list(): any[] {
    throw new Error("Method not implemented.");
  }
  add(item: any): void {
    throw new Error("Method not implemented.");
  }
}
