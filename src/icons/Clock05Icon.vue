
<template>
  <Icon :iconName="'clock-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clock05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clock-05'
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
