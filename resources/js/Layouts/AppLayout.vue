
<script lang="ts">
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined    } from '@ant-design/icons-vue';
import { Menu, MenuItem, Layout, LayoutHeader, LayoutSider, LayoutContent  } from 'ant-design-vue';
import { ref } from 'vue';
export default {
  components: {
    Link,
    'menu-fold-outlined': MenuFoldOutlined,
    'menu-unfold-outlined': MenuUnfoldOutlined,
    'a-layout': Layout,
    'a-layout-content': LayoutContent,
    'a-layout-header': LayoutHeader,
    'a-layout-sider': LayoutSider,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'user-outlined': UserOutlined,
    'video-camera-outlined': VideoCameraOutlined,
    ResponsiveNavLink,
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
<template>
  <a-layout>
    <a-layout-sider>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
        <user-outlined />
         <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
        <span>Profile</span>
        </ResponsiveNavLink>
          
          
        </a-menu-item>
         <a-menu-item key="4">
        <user-outlined />
         <Link
                        :href="route('logout')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ms-2"
                    >
        <span>Log Out</span>
        </Link>
          
          
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />{{ $page.props.auth.user.name }}
      </a-layout-header>
       <slot />
    </a-layout>
  </a-layout>
</template>
<style>
@import './resources/css/style.css';
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
