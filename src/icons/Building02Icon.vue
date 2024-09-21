
<template>
  <Icon :iconName="'building-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Building02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'building-02'
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
