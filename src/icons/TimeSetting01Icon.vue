
<template>
  <Icon :iconName="'time-setting-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeSetting01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-setting-01'
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
