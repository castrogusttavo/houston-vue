
<template>
  <Icon :iconName="'radar-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Radar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radar-01'
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
