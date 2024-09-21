
<template>
  <Icon :iconName="'bed-single-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BedSingle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bed-single-02'
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
