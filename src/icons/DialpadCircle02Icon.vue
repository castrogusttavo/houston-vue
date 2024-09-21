
<template>
  <Icon :iconName="'dialpad-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DialpadCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dialpad-circle-02'
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
