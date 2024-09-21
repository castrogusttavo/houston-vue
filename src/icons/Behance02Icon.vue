
<template>
  <Icon :iconName="'behance-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Behance02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'behance-02'
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
