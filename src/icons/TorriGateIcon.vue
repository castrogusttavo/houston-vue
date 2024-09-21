
<template>
  <Icon :iconName="'torri-gate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TorriGateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'torri-gate'
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
