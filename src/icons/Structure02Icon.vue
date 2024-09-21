
<template>
  <Icon :iconName="'structure-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Structure02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-02'
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
