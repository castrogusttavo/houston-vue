
<template>
  <Icon :iconName="'pointing-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-left-02'
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
