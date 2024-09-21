
<template>
  <Icon :iconName="'uv-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Uv02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'uv-02'
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
