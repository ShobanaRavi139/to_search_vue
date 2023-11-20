<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Welcome />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined   } from '@ant-design/icons-vue';
import { Menu, MenuItem, Layout, LayoutHeader, LayoutSider } from 'ant-design-vue';
import { ref } from 'vue';
export default {
  components: {
    Welcome,
    AppLayout,
    'menu-unfold-outlined': MenuUnfoldOutlined,
    'a-layout': Layout,
    'a-layout-header': LayoutHeader,
    'a-layout-sider': LayoutSider,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'user-outlined': UserOutlined,
    'video-camera-outlined': VideoCameraOutlined,
  },
  props: {
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },
};
</script>