
<template>
  <Icon :iconName="'wechat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WechatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wechat'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
