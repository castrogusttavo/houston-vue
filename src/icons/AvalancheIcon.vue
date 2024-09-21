
<template>
  <Icon :iconName="'avalanche'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AvalancheIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'avalanche'
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
