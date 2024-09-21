
<template>
  <Icon :iconName="'door-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Door02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'door-02'
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
