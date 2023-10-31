import { onMounted, ref, reactive } from "vue";

import { getUserList } from "@/api/system";

import { message } from "@/utils/message";

export function useUser() {
  const dataList = ref([]);
  const loading = ref(true);
  const columns: TableColumnList = [
    {
      label: "用户编号",
      prop: "userCode",
      minWidth: 130
    },
    {
      label: "用户名称",
      prop: "userName",
      minWidth: 130
    },
    {
      label: "Azure账号",
      prop: "azureAccount",
      minWidth: 130
    },
    {
      label: "角色",
      cellRenderer: ({ row }) => (
        <>
          {row.roleList?.map(item => {
            if (!item.roleName) {
              return;
            }
            return <el-tag>{item.roleName}</el-tag>;
          })}
        </>
      )
    }
  ];

  // 查询表单
  async function onSearch() {
    loading.value = true;
    const data = await getUserList();
    dataList.value = data;
    // pagination.total = data.length;
    // console.log(data);
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  // 新增/修改弹窗
  function openDialog(title = "新增", row?: any) {}

  // 生命周期钩子
  onMounted(() => {
    onSearch();
  });

  return {
    loading,
    columns,
    dataList,
    onSearch,
    openDialog
  };
}
