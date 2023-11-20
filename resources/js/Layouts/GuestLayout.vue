<template>
    <a-layout class="login-layout">
        <a-row type="flex" justify="space-around" align="middle" style="height:100vh">
            <a-col :span="8">
                <div :style="{ background: '#fff', padding: '30px', minHeight: '280px', borderRadius: '10px' }">
                    <Link href="/">
                    <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                    <slot />
                </div>
            </a-col>
        </a-row>
    </a-layout>
</template>
<script>
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { Layout, Row, Col   } from 'ant-design-vue';
export default {
  components: {
    ApplicationLogo,
    Link,
    'a-layout': Layout,
    'a-row': Row,
    'a-col': Col,
  },
  // ... other component options
};
</script>