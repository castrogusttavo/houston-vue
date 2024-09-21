
<template>
  <Icon :iconName="'pointing-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-02'
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
