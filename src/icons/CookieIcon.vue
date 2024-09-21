
<template>
  <Icon :iconName="'cookie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CookieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cookie'
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
