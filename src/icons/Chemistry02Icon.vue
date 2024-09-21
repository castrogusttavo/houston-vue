
<template>
  <Icon :iconName="'chemistry-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chemistry02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chemistry-02'
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
