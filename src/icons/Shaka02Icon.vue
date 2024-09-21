
<template>
  <Icon :iconName="'shaka-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shaka02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shaka-02'
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
