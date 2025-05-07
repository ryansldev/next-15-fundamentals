import { Product } from "@/types/product";
import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      products: Model.extend<Product[]>([]),
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.all("products")
      });
    },

    seeds(server) {
      server.create("product", {
        modelName: "product",
        title: "Macbook Air 13ª Apple M1",
        value: 5000*100,
        currency: "BRL",
        imageUrl: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
      })
      server.create("product", {
        modelName: "product",
        title: "Macbook Air 13ª Apple M1",
        value: 5000*100,
        currency: "BRL",
        imageUrl: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
      })
      server.create("product", {
        modelName: "product",
        title: "Macbook Air 13ª Apple M1",
        value: 5000*100,
        currency: "BRL",
        imageUrl: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
      })
    }
  });
}