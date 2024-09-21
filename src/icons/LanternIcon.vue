
<template>
  <Icon :iconName="'lantern'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LanternIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lantern'
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
