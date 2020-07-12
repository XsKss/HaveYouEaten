import Mock from "mockjs";
import position from "@/api/mockServerData/position";
import index_entry from "@/api/mockServerData/index_entry";
import restaurants from "@/api/mockServerData/restaurants";

//mock会立即返回数据 可能会出问题 配置请求延迟
Mock.setup({
  timeout: 1000,
});

Mock.mock("/api/posi", position);
Mock.mock("/api/index_entry", index_entry);
Mock.mock("/api/restaurants", restaurants);
