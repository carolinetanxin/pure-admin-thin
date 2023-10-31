import { http } from "@/utils/http";
import { baseUrlApi } from "@/api/utils";

type Result = {
  code: number;
  data: {
    azureAccount: string;
    createTime: string;
    createUserId: number;
    dataSource: string;
    deleted: boolean;
    departmentId: number;
    id: number;
    organizationId: number;
    passwordChanged: boolean;
    roleList: Array;
    selfModifiedFlag: number;
    systemed: number;
    tenantId: number;
    updateTime: string;
    updateUser: string;
    updateUserCode: string;
    updateUserId: number;
    userCode: string;
    userName: string;
    userNoLogin: number;
    userStatus: number;
    verNum: number;
  };
  message: null | string;
  request: null | string;
};

type ResultDept = {
  success: boolean;
  data?: Array<any>;
};

/** 获取用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<Result>("get", baseUrlApi("/sys/auth/sysUser/employee"), {
    data
  });
};

/** 获取角色管理列表 */
export const getRoleList = (data?: object) => {
  return http.request<Result>("post", "/role", { data });
};

/** 获取部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<ResultDept>("post", "/dept", { data });
};
