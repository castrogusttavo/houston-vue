
<template>
  <Icon :iconName="'airpod-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Airpod01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airpod-01'
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
