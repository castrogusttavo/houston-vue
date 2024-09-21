
<template>
  <Icon :iconName="'trolley-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Trolley02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trolley-02'
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
