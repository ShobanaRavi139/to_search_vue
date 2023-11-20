

<template>
    <GuestLayout>

        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

<a-form  @submit.prevent="submit">
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-input v-model:value="form.email" id="email" type="email" required autofocus autocomplete="username">
        <template #prefix>
          <user-outlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-input-password v-model:value="form.password" id="password" type="password" required autocomplete="current-password">
        <template #prefix>
          <lock-outlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="form.remember" name="remember">Remember me</a-checkbox>
      </a-form-item>
      <a v-if="canResetPassword" :href="route('password.request')"  class="login-form-forgot" style="float: right;">Forgot password</a>
    </a-form-item>

    <a-form-item>
    <a-button type="primary" html-type="submit" :disabled="form.processing" class="login-form-button">Log in</a-button>
      Or
      <a :href="route('register')">register now!</a>
    </a-form-item>
  </a-form>

    </GuestLayout>
</template>
<script>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Form, Input, FormItem, InputPassword, Checkbox, Button } from 'ant-design-vue';
export default {
  components: {
    'user-outlined': UserOutlined,
    'a-form': Form,
    'a-input': Input,
    'a-button': Button,
    'a-checkbox': Checkbox,
    'a-form-item': FormItem,
    'a-input-password': InputPassword,
    'lock-outlined': LockOutlined,
    GuestLayout,
    Head,
    Link,
  },
  props: {
    canResetPassword: {
      type: Boolean,
      required: true, // If canResetPassword is required, set this to true
    },
    status: {
      type: String,
      default: '', // Provide a default value for status if needed
    },
  },
   setup(props) {
        const submit = () => {
          form.post(route('login'), {
            onFinish: () => form.reset('password'),
          });
        };
        const form = useForm({
            email: '',
            password: '',
            remember: false,
        });
        return {
            form,
            submit,
        };
    },
   data() {
    return {
    };
  },
  // ... other component options
};
</script>
<style>
@import './resources/css/style.css';
</style>
