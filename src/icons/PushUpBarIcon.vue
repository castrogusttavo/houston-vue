
<template>
  <Icon :iconName="'push-up-bar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PushUpBarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'push-up-bar'
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
