
<template>
  <Icon :iconName="'register'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RegisterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'register'
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
