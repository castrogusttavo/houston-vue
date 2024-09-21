
<template>
  <Icon :iconName="'more-vertical-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreVerticalCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-vertical-circle-02'
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
