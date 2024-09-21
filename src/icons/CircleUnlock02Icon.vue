
<template>
  <Icon :iconName="'circle-unlock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleUnlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-unlock-02'
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
