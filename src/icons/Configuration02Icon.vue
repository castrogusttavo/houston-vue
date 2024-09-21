
<template>
  <Icon :iconName="'configuration-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Configuration02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'configuration-02'
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
