
<template>
  <Icon :iconName="'time-setting-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeSetting03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-setting-03'
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
