<script setup lang="ts">
// 不能直接给取名hook,否则路由会默认匹配到hook文件，导致组件丢失
// 详情见：https://yiming_chang.gitee.io/pure-admin-doc/pages/routerMenu/#%E4%BC%A0-path-%E5%92%8C-component-%E6%A8%A1%E5%BC%8F
import { useUser } from "./user-hook";

import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

const { loading, dataList, columns, onSearch, openDialog } = useUser();

import EditPen from "@iconify-icons/ep/edit-pen";
import AddFill from "@iconify-icons/ri/add-circle-line";
</script>

<template>
  <div class="main">
    <PureTableBar title="用户管理" @refresh="onSearch">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="openDialog()"
        >
          新增用户
        </el-button>
      </template>
      <template v-slot="{ size }">
        <pure-table
          :loading="loading"
          :data="dataList"
          :columns="columns"
          border
          row-key="id"
          :height="'calc(100vh - 200px)'"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              @click="openDialog('编辑', row)"
              :icon="useRenderIcon(EditPen)"
            >
              修改
            </el-button>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
  </div>
</template>

<style scoped></style>
