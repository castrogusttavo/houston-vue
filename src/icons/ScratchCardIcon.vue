
<template>
  <Icon :iconName="'scratch-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScratchCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scratch-card'
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
