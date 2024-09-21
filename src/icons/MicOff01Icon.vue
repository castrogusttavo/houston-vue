
<template>
  <Icon :iconName="'mic-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MicOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mic-off-01'
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
