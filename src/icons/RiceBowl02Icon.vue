
<template>
  <Icon :iconName="'rice-bowl-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RiceBowl02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rice-bowl-02'
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
